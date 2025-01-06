---
id: ftbhdusoc47s84cn4pbw3x9
title: Tailwind Helpful
desc: ""
updated: 1735507478025
created: 1735503286287
---

## Tailwind

### antialiased

### grid

- `grid`
- `grid-cols-...`

### flex

- `items-center`
- `items-start`
- `items-end`
- `flex-col`
- `justify-between`

### p

- `px-...`
- `py-...`
- `pt-...`

### m

- `mx-...`
- `my-...`
- `mx-auto`
- `ml-auto`
- `mt-auto`

### sr-only

- `sr-only`

### shadow

- `shadow-sm`

### h

### w

### text

- `text-sm`

### font

- `font-medium`
- `font-semibold`
- `font-normal`

### rounded

- `rounded-full`
- `rounded-lg`

### space

- `space-y-...`
- `space-x-...`

### gap

- `gap-...`

### min-h-screen

Ocupa a tela inteira

Com `min-h-screen`:

```html
<body
  class="flex flex-col items-center justify-center min-h-screen bg-zinc-800"
>
  <h1 class="text-emerald-400 text-4xl font-bold">min-h-screen</h1>
  <p class="text-sm text-zinc-300">It occupies entire screen</p>
</body>
```

<iframe
  width='100%'
  height='300'
  srcdoc='
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
      <h1 class="text-emerald-400 text-4xl font-bold">min-h-screen</h1>
      <p class="text-sm text-zinc-300">It occupies entire screen</p>
    </body>
  </html>'
  allowfullscreen='allowfullscreen'
  frameborder='0'>
</iframe>

Sem `min-h-screen`:

```html
<body class="flex flex-col items-center justify-center bg-zinc-800">
  <h1 class="text-emerald-400 text-4xl font-bold">min-h-screen</h1>
  <p class="text-sm text-zinc-300">It occupies entire screen</p>
</body>
```

<iframe
  width='100%'
  height='300'
  srcdoc='
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex flex-col items-center justify-center bg-zinc-800">
      <h1 class="text-emerald-400 text-4xl font-bold">min-h-screen</h1>
      <p class="text-sm text-zinc-300">It occupies entire screen</p>
    </body>
  </html>'
  allowfullscreen='allowfullscreen'
  frameborder='0'>
</iframe>

### focus-within

Estilize um elemento ou seus descendentes.

```html
<div
  class="px-3 py-2 rounded-lg focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
>
  <input
    class="placeholder:text-center focus:outline-none"
    placeholder="Click on me"
    type="text"
  />
</div>
```

<iframe
  width='100%'
  height='300'
  srcdoc='
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex flex-col items-center justify-center min-h-screen">
      <div class="px-3 py-2 rounded-lg focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100">
        <input class="placeholder:text-center focus:outline-none" placeholder="Click on me" type="text" />
      </div>
    </body>
  </html>'
  allowfullscreen='allowfullscreen'
  frameborder='0'>
</iframe>

### group

Estilize um elemento com base no estado de um elemento pai.

```html
<a
  href="#"
  class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
>
  <div class="flex items-center space-x-3">
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
      New project
    </h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">
    Create a new project from a variety of starting templates.
  </p>
</a>
```

<iframe
  width='100%'
  height='300'
  srcdoc='
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
      <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <div class="flex items-center space-x-3">
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
      </a>
    </body>
  </html>'
  allowfullscreen='allowfullscreen'
  frameborder='0'>
</iframe>

#### group-focus-visible

Mesmo efeito do group, porém os efeitos de estilização aparecem apenas quando a navegação está sendo feita no teclado.
