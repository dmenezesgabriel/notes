---
id: x8r3ogq4ng4rolz1apwi1kw
title: Types of Form
desc: ''
updated: 1734185817815
created: 1734185016512
---

## Controlado

Para: formulários mais complexos
Contras: menos performance, toda vez que o valor muda o componente e renderizado novamente.

```jsx
import { useState } from "react";

export function someForm() {
  const [title, setTitle] = useState("");

  return (
    <form>
      <input
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

## Nao controlado

```jsx
import { useState } from "react";

export function someForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    setTitle(event.target.title.value);
  }

  return (
    <form action={handleSubmit}>
      <input name="title" />
      <button type="submit">Send</button>
    </form>
  );
}
```

Para: formulários mais simples
Contra: menos controle. Ex: Nao e possível pegar letra a letra sendo digitada em tempo real.

#SWE #FrontendWebFrameworks #ReactTypesOfForms
