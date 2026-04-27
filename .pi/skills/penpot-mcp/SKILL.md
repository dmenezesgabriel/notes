---
name: penpot-uiux-design
description: 'Comprehensive guide for creating professional UI/UX designs in Penpot using MCP tools. Use this skill when: (1) Creating new UI/UX designs for web, mobile, or desktop applications, (2) Building design systems with components and tokens, (3) Designing dashboards, forms, navigation, or landing pages, (4) Applying accessibility standards and best practices, (5) Following platform guidelines (iOS, Android, Material Design), (6) Reviewing or improving existing Penpot designs for usability. Triggers: "design a UI", "create interface", "build layout", "design dashboard", "create form", "design landing page", "make it accessible", "design system", "component library".'
---

# Penpot UI/UX Design Guide

Create professional, user-centered designs in Penpot using the `penpot/penpot-mcp` MCP server and proven UI/UX principles.

## Available MCP Tools

| Tool | Purpose |
| ---- | ------- |
| `mcp__penpot__execute_code` | Run JavaScript in Penpot plugin context to create/modify designs |
| `mcp__penpot__export_shape` | Export shapes as PNG/SVG for visual inspection |
| `mcp__penpot__import_image` | Import images (icons, photos, logos) into designs |
| `mcp__penpot__penpot_api_info` | Retrieve Penpot API documentation |


## Quick Reference

| Task | Reference File |
| ---- | -------------- |
| MCP server installation & troubleshooting | [setup-troubleshooting.md](references/setup-troubleshooting.md) |
| Component specs (buttons, forms, nav) | [component-patterns.md](references/component-patterns.md) |
| Accessibility (contrast, touch targets) | [accessibility.md](references/accessibility.md) |
| Screen sizes & platform specs | [platform-guidelines.md](references/platform-guidelines.md) |

## Core Design Principles

### The Golden Rules

1. **Clarity over cleverness**: Every element must have a purpose
2. **Consistency builds trust**: Reuse patterns, colors, and components
3. **User goals first**: Design for tasks, not features
4. **Accessibility is not optional**: Design for everyone
5. **Test with real users**: Validate assumptions early

### Visual Hierarchy (Priority Order)

1. **Size**: Larger = more important
2. **Color/Contrast**: High contrast draws attention
3. **Position**: Top-left (LTR) gets seen first
4. **Whitespace**: Isolation emphasizes importance
5. **Typography weight**: Bold stands out

## Design Workflow

1. **Check for design system first**: Ask user if they have existing tokens/specs, or discover from current Penpot file
2. **Understand the page**: Call `mcp__penpot__execute_code` with `penpotUtils.shapeStructure()` to see hierarchy
3. **Find elements**: Use `penpotUtils.findShapes()` to locate elements by type or name
4. **Create/modify**: Use `penpot.createBoard()`, `penpot.createRectangle()`, `penpot.createText()` etc.
5. **Apply layout**: Use `addFlexLayout()` for responsive containers
6. **Validate**: Call `mcp__penpot__export_shape` to visually check your work

## Design System Handling

**Before creating designs, determine if the user has an existing design system:**

1. **Ask the user**: "Do you have a design system or brand guidelines to follow?"
2. **Discover from Penpot**: Check for existing components, colors, and patterns

```javascript
// Discover existing design patterns in current file
const allShapes = penpotUtils.findShapes(() => true, penpot.root);

// Find existing colors in use
const colors = new Set();
allShapes.forEach(s => {
  if (s.fills) s.fills.forEach(f => colors.add(f.fillColor));
});

// Find existing text styles (font sizes, weights)
const textStyles = allShapes
  .filter(s => s.type === 'text')
  .map(s => ({ fontSize: s.fontSize, fontWeight: s.fontWeight }));

// Find existing components
const components = penpot.library.local.components;

return { colors: [...colors], textStyles, componentCount: components.length };
```

**If user HAS a design system:**

- Use their specified colors, spacing, typography
- Match their existing component patterns
- Follow their naming conventions

**If user has NO design system:**

- Use the default tokens below as a starting point
- Offer to help establish consistent patterns
- Reference specs in [component-patterns.md](references/component-patterns.md)

## Key Penpot API Gotchas

- `width`/`height` are READ-ONLY → use `shape.resize(w, h)`
- `parentX`/`parentY` are READ-ONLY → use `penpotUtils.setParentXY(shape, x, y)`
- Use `insertChild(index, shape)` for z-ordering (not `appendChild`)
- Flex children array order is REVERSED for `dir="column"` or `dir="row"`
- After `text.resize()`, reset `growType` to `"auto-width"` or `"auto-height"`

### Flex Layout Side Effects

Adding flex layout to a board has significant side effects:

1. **Automatic repositioning**: All children are repositioned based on flex rules
2. **Lost manual positions**: Direct `x`/`y` assignments are ignored
3. **Relative coordinates**: `x`/`y` become relative to flex flow, not absolute positions
4. **Cannot remove**: Setting `board.flex = null` fails (getter-only property)

**Recommendations:**

- For simple layouts (login pages, forms), **avoid flex** and use manual positioning
- If flex is needed, add it AFTER positioning all children
- To remove flex, delete and recreate the board

```javascript
// ❌ Adding flex AFTER children repositions everything
const board = penpot.createBoard();
board.appendChild(element1); // at x: 40, y: 100
board.appendChild(element2); // at x: 40, y: 200
board.addFlexLayout(); // Elements now repositioned!

// ✅ Better for simple layouts - no flex
const board = penpot.createBoard();
board.x = 50;
board.y = 50;
board.resize(375, 520);
// Position each child manually
element1.x = 40;
element1.y = 100;
```

### Container Nesting Limitations

Text elements nested inside containers (rectangles, buttons) may not render correctly in exports:

- `children` property may return `undefined` for some containers
- Text inside containers may not appear in `mcp__penpot__export_shape` output

**Workaround**: Keep text as direct children of the board, positioned manually inside input areas:

```javascript
// ❌ Text as child of rectangle - may not render
const input = penpot.createRectangle();
board.appendChild(input);
const label = penpot.createText('Email');
input.appendChild(label); // May be hidden!

// ✅ Text as direct child of board - renders correctly
const input = penpot.createRectangle();
input.x = 40;
input.y = 100;
board.appendChild(input);

const label = penpot.createText('Email');
label.x = 56; // Inside the input rectangle
label.y = 108;
board.appendChild(label);
```

### Text Creation Best Practices

Always create text with initial content:

```javascript
// ✅ Good: Create with content
const title = penpot.createText('Welcome Back');
title.fontSize = 28;

// ❌ Bad: Empty text + set characters
const title = penpot.createText();
title.characters = 'Welcome Back'; // May fail!
```

### Debugging Element Positions

When elements appear "off" or "cut", check both coordinates:

```javascript
// Actual screen position (use this for positioning)
console.log(shape.x, shape.y);

// Relative to parent container
console.log(shape.parentX, shape.parentY);

// With flex layout, these can differ significantly!
```

## Positioning New Boards

**Set initial position when creating the board:**

```javascript
// ✅ Set position and size on creation
const board = penpot.createBoard();
board.x = 50;
board.y = 50;
board.resize(375, 812);
board.fills = [{ fillColor: '#0F0F0F', fillOpacity: 1 }];

// ❌ Repositioning after may cause issues with flex
const board = penpot.createBoard();
board.resize(375, 812);
board.x = 50; // May not work as expected if flex is added
```

**Always check existing boards before creating new ones** to avoid overlap:

```javascript
// Find all existing boards and calculate next position
const boards = penpotUtils.findShapes(s => s.type === 'board', penpot.root);
let nextX = 0;
const gap = 100; // Space between boards

if (boards.length > 0) {
  // Find rightmost board edge
  boards.forEach(b => {
    const rightEdge = b.x + b.width;
    if (rightEdge + gap > nextX) {
      nextX = rightEdge + gap;
    }
  });
}

// Create new board at calculated position
const newBoard = penpot.createBoard();
newBoard.x = nextX;
newBoard.y = 0;
newBoard.resize(375, 812);
```

**Board spacing guidelines:**

- Use 100px gap between related screens (same flow)
- Use 200px+ gap between different sections/flows
- Align boards vertically (same y) for visual organization
- Group related screens horizontally in user flow order

## Default Design Tokens

**Use these defaults only when user has no design system. Always prefer user's tokens if available.**

### Spacing Scale (8px base)

| Token | Value | Usage |
| ----- | ----- | ----- |
| `spacing-xs` | 4px | Tight inline elements |
| `spacing-sm` | 8px | Related elements |
| `spacing-md` | 16px | Default padding |
| `spacing-lg` | 24px | Section spacing |
| `spacing-xl` | 32px | Major sections |
| `spacing-2xl` | 48px | Page-level spacing |

### Typography Scale

| Level | Size | Weight | Usage |
| ----- | ---- | ------ | ----- |
| Display | 48-64px | Bold | Hero headlines |
| H1 | 32-40px | Bold | Page titles |
| H2 | 24-28px | Semibold | Section headers |
| H3 | 20-22px | Semibold | Subsections |
| Body | 16px | Regular | Main content |
| Small | 14px | Regular | Secondary text |
| Caption | 12px | Regular | Labels, hints |

### Color Usage

| Purpose | Recommendation |
| ------- | -------------- |
| Primary | Main brand color, CTAs |
| Secondary | Supporting actions |
| Success | #22C55E range (confirmations) |
| Warning | #F59E0B range (caution) |
| Error | #EF4444 range (errors) |
| Neutral | Gray scale for text/borders |

## Common Layouts

### Mobile Screen (375×812)

```text
┌─────────────────────────────┐
│ Status Bar (44px)           │
├─────────────────────────────┤
│ Header/Nav (56px)           │
├─────────────────────────────┤
│                             │
│ Content Area                │
│ (Scrollable)                │
│ Padding: 16px horizontal    │
│                             │
├─────────────────────────────┤
│ Bottom Nav/CTA (84px)       │
└─────────────────────────────┘

```

### Desktop Dashboard (1440×900)

```text
┌──────┬──────────────────────────────────┐
│      │ Header (64px)                    │
│ Side │──────────────────────────────────│
│ bar  │ Page Title + Actions             │
│      │──────────────────────────────────│
│ 240  │ Content Grid                     │
│ px   │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │
│      │ │Card │ │Card │ │Card │ │Card │ │
│      │ └─────┘ └─────┘ └─────┘ └─────┘ │
│      │                                  │
└──────┴──────────────────────────────────┘

```

## Component Checklist

### Buttons

- [ ] Clear, action-oriented label (2-3 words)
- [ ] Minimum touch target: 44×44px
- [ ] Visual states: default, hover, active, disabled, loading
- [ ] Sufficient contrast (3:1 against background)
- [ ] Consistent border radius across app

### Forms

- [ ] Labels above inputs (not just placeholders)
- [ ] Required field indicators
- [ ] Error messages adjacent to fields
- [ ] Logical tab order
- [ ] Input types match content (email, tel, etc.)

### Navigation

- [ ] Current location clearly indicated
- [ ] Consistent position across screens
- [ ] Maximum 7±2 top-level items
- [ ] Touch-friendly on mobile (48px targets)

## Accessibility Quick Checks

1. **Color contrast**: Text 4.5:1, Large text 3:1
2. **Touch targets**: Minimum 44×44px
3. **Focus states**: Visible keyboard focus indicators
4. **Alt text**: Meaningful descriptions for images
5. **Hierarchy**: Proper heading levels (H1→H2→H3)
6. **Color independence**: Never rely solely on color

## Design Review Checklist

Before finalizing any design:

- [ ] Visual hierarchy is clear
- [ ] Consistent spacing and alignment
- [ ] Typography is readable (16px+ body text)
- [ ] Color contrast meets WCAG AA
- [ ] Interactive elements are obvious
- [ ] Mobile-friendly touch targets
- [ ] Loading/empty/error states considered
- [ ] Consistent with design system

## Validating Designs

Use these validation approaches with `mcp__penpot__execute_code`:

| Check | Method |
| ----- | ------ |
| Elements outside bounds | `penpotUtils.analyzeDescendants()` with `isContainedIn()` |
| Text too small (<12px) | `penpotUtils.findShapes()` filtering by `fontSize` |
| Missing contrast | Call `mcp__penpot__export_shape` and visually inspect |
| Hierarchy structure | `penpotUtils.shapeStructure()` to review nesting |

### Export CSS

Use `penpot.generateStyle(selection, { type: 'css', includeChildren: true })` via `mcp__penpot__execute_code` to extract CSS from designs.

## Practical Workflow for Simple Pages

For pages like login forms, dashboards, or simple screens, follow this workflow:

1. **Create board first** with position and size:
```javascript
const board = penpot.createBoard();
board.name = 'Login Page';
board.x = 0;
board.y = 0;
board.resize(375, 520);
board.fills = [{ fillColor: '#0F0F0F', fillOpacity: 1 }];
```

2. **Add elements in visual order** (top to bottom):
```javascript
// Logo → Title → Subtitle → Input 1 → Input 2 → Button → etc.
const logo = penpot.createEllipse();
logo.x = 156;
logo.y = 40;
board.appendChild(logo);

const title = penpot.createText('Welcome Back');
title.x = 95;
title.y = 130;
board.appendChild(title);
```

3. **Verify after each batch** using `mcp__penpot__export_shape`

4. **Avoid flex** for simple layouts - manual positioning is more predictable

### Debugging Common Issues

| Issue | Likely Cause | Solution |
|-------|-------------|----------|
| Elements cut off at bottom | Board too small | Check last element y + height vs board height |
| Text appears wrong position | Flex layout active | Remove flex or use direct children |
| Labels not visible | Nested inside container | Move text as direct children of board |
| Positions reset | Flex layout applied after | Add flex before positioning, or avoid flex |

## Tips for Great Designs

1. **Start with content**: Real content reveals layout needs
2. **Design mobile-first**: Constraints breed creativity
3. **Use a grid**: 8px base grid keeps things aligned
4. **Limit colors**: 1 primary + 1 secondary + neutrals
5. **Limit fonts**: 1-2 typefaces maximum
6. **Embrace whitespace**: Breathing room improves comprehension
7. **Be consistent**: Same action = same appearance everywhere
8. **Provide feedback**: Every action needs a response

## Learnings from Real Projects

This section documents issues discovered and solutions found during actual design implementations.

### Login Page Implementation

**Issue**: Elements appeared cut off and labels were positioned outside the board area.

**Root Causes**:
1. Flex layout was automatically repositioning all children based on column rules
2. Text elements nested inside input rectangles were not rendering in exports
3. Board height was too small (600px) for the content

**Solution Applied**:
- Removed flex layout entirely for the login page
- Created board at position (0, 0) with explicit dimensions
- Kept all text as direct children of the board
- Manually positioned text inside input rectangles using explicit x/y coordinates

**Final Working Pattern**:
```javascript
// Create board at origin
const board = penpot.createBoard();
board.x = 0;
board.y = 0;
board.resize(375, 520);
board.fills = [{ fillColor: '#0F0F0F', fillOpacity: 1 }];

// Add rectangle
const emailInput = penpot.createRectangle();
emailInput.x = 40;
emailInput.y = 220;
board.appendChild(emailInput);

// Add text as direct child of board (not inside rectangle)
const emailLabel = penpot.createText('Email');
emailLabel.x = 56;
emailLabel.y = 228;
board.appendChild(emailLabel);
```

**Key Takeaway**: For form-based UIs, manual positioning without flex is more reliable and easier to debug.