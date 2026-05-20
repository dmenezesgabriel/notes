import { expect } from 'storybook/test';

interface ParsedColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const WCAG_AA_TEXT_CONTRAST = 4.5;
const FALLBACK_BACKGROUND: ParsedColor = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 1,
};

function parseCssColor(color: string): ParsedColor {
  const normalizedColor = color.trim().toLowerCase();

  if (normalizedColor === 'transparent') {
    return { red: 0, green: 0, blue: 0, alpha: 0 };
  }

  if (normalizedColor.startsWith('#')) {
    const hex = normalizedColor.slice(1);
    const expandedHex =
      hex.length === 3
        ? hex
            .split('')
            .map((part) => `${part}${part}`)
            .join('')
        : hex;

    return {
      red: Number.parseInt(expandedHex.slice(0, 2), 16),
      green: Number.parseInt(expandedHex.slice(2, 4), 16),
      blue: Number.parseInt(expandedHex.slice(4, 6), 16),
      alpha: 1,
    };
  }

  const colorParts = normalizedColor.match(/[\d.]+/g)?.map(Number);
  if (!colorParts || colorParts.length < 3) {
    throw new Error(`Unsupported CSS color: ${color}`);
  }

  const [red = 0, green = 0, blue = 0, alpha = 1] = colorParts;

  return { red, green, blue, alpha };
}

function compositeColors(foreground: ParsedColor, background: ParsedColor): ParsedColor {
  const alpha = foreground.alpha + background.alpha * (1 - foreground.alpha);

  if (alpha === 0) {
    return { red: 0, green: 0, blue: 0, alpha: 0 };
  }

  return {
    red:
      (foreground.red * foreground.alpha +
        background.red * background.alpha * (1 - foreground.alpha)) /
      alpha,
    green:
      (foreground.green * foreground.alpha +
        background.green * background.alpha * (1 - foreground.alpha)) /
      alpha,
    blue:
      (foreground.blue * foreground.alpha +
        background.blue * background.alpha * (1 - foreground.alpha)) /
      alpha,
    alpha,
  };
}

function toRelativeLuminance(channel: number): number {
  const normalizedChannel = channel / 255;

  return normalizedChannel <= 0.03928
    ? normalizedChannel / 12.92
    : ((normalizedChannel + 0.055) / 1.055) ** 2.4;
}

function getContrastRatio(foreground: ParsedColor, background: ParsedColor): number {
  const resolvedForeground = compositeColors(foreground, background);
  const resolvedBackground = compositeColors(background, FALLBACK_BACKGROUND);

  const foregroundLuminance =
    0.2126 * toRelativeLuminance(resolvedForeground.red) +
    0.7152 * toRelativeLuminance(resolvedForeground.green) +
    0.0722 * toRelativeLuminance(resolvedForeground.blue);
  const backgroundLuminance =
    0.2126 * toRelativeLuminance(resolvedBackground.red) +
    0.7152 * toRelativeLuminance(resolvedBackground.green) +
    0.0722 * toRelativeLuminance(resolvedBackground.blue);

  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

function hasVisibleBackground(color: string): boolean {
  return parseCssColor(color).alpha > 0;
}

function findEffectiveBackgroundColor(element: HTMLElement): ParsedColor {
  let currentNode: Node | null = element;

  while (currentNode) {
    if (currentNode instanceof HTMLElement) {
      const backgroundColor = getComputedStyle(currentNode).backgroundColor;
      if (hasVisibleBackground(backgroundColor)) {
        return parseCssColor(backgroundColor);
      }
    }

    if (currentNode.parentNode) {
      currentNode = currentNode.parentNode;
      continue;
    }

    const rootNode = currentNode.getRootNode();
    if (rootNode instanceof ShadowRoot) {
      currentNode = rootNode.host;
      continue;
    }

    currentNode = null;
  }

  return FALLBACK_BACKGROUND;
}

export function expectShadowTextContrast(
  host: Element,
  selector: string,
  label: string,
  minimumContrast = WCAG_AA_TEXT_CONTRAST,
): void {
  const target = host.shadowRoot?.querySelector<HTMLElement>(selector);

  expect(target, `Expected ${label} to exist inside ${host.tagName.toLowerCase()}.`).not.toBeNull();

  const targetElement = target as HTMLElement;
  const computedStyle = getComputedStyle(targetElement);
  const contrastRatio = getContrastRatio(
    parseCssColor(computedStyle.color),
    findEffectiveBackgroundColor(targetElement),
  );

  expect(
    contrastRatio,
    `${label} contrast ${contrastRatio.toFixed(2)} should meet WCAG AA in dark mode.`,
  ).toBeGreaterThanOrEqual(minimumContrast);
}
