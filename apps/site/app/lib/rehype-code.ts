/**
 * rehype-code.ts
 *
 * Custom rehype plugins for the notes rendering pipeline.
 *
 * `rehypeMermaid`
 *   Finds every `<pre><code class="language-mermaid">` block in the hast and
 *   replaces it with a `<garden-mermaid diagram="...">` custom element.
 *
 *   This transform runs *before* `@shikijs/rehype` so Shiki never receives
 *   mermaid source — it only highlights proper programming-language fences.
 */

import type { Element, Root, Text } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

export const rehypeMermaid: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'element', (node: Element, index, parent) => {
    // We're only interested in <pre> elements.
    if (node.tagName !== 'pre' || !parent || index == null) return;

    // Find the inner <code> child.
    const codeNode = node.children.find(
      (child): child is Element => child.type === 'element' && child.tagName === 'code',
    );
    if (!codeNode) return;

    // Check for `language-mermaid` class.
    const classes = (codeNode.properties?.className as string[] | undefined) ?? [];
    if (!classes.includes('language-mermaid')) return;

    // Extract raw text content from the code node.
    const diagram = codeNode.children
      .filter((c): c is Text => c.type === 'text')
      .map((c) => c.value)
      .join('')
      .trim();

    if (!diagram) return;

    // Replace the <pre> node with <garden-mermaid diagram="...">
    // rehype-stringify will HTML-encode special chars in the attribute value;
    // the browser decodes them before Lit sees the property.
    (parent.children as Element[])[index] = {
      type: 'element',
      tagName: 'garden-mermaid',
      properties: { diagram },
      children: [],
    };
  });
};
