---
id: ftbhdusoc47s84cn4pbw3x9
title: Tailwind Helpful
desc: ""
updated: 1735505808113
created: 1735503286287
---

## Tailwind

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
<div class="focus-within:shadow-lg">
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
      <div class="focus-within:shadow-lg">
        <input class="placeholder:text-center focus:outline-none" placeholder="Click on me" type="text" />
      </div>
    </body>
  </html>'
  allowfullscreen='allowfullscreen'
  frameborder='0'>
</iframe>
