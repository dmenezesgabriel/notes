---
id: soda9bfmi3nn6qguf1kd46v
title: React Use Effect Hook
desc: ""
updated: 1734210245153
created: 1734207281754
---

## Renderiza componente novamente

- Primeiro carregamento de tela
- Mudança de variável

```jsx
import { useEffect } from "react";

export function App() {
  const [list, setList] = useEffect([]);

  useEffect(() => {
    NotifyChangeToAPI();
  }, [list]);
}
```

- Apenas mudança de variável

```jsx
import { useEffect } from "react";

export function App() {
  const [list, setList] = useEffect([]);

  useEffect(() => {
    if (list.length !== 0) {
      NotifyChangeToAPI();
    }
  }, [list]);
}
```

- Apenas primeiro carregamento de tela

```jsx
import { useEffect } from "react";

export function App() {
  const [list, setList] = useEffect([]);

  useEffect(() => {
    fetch("http://api.github.com/users/dmenezesgabriel/repos")
      .then((response) => response.json)
      .then((data) => {
        setList(data.map((item) => item.full_name));
      });
  }, []);
}
```

## Reset estados

```jsx
import { useEffect } from "react";

export function App() {
  const [thingsHappening, setThingsHappening] = useEffect([]);
  const [activeThingId, setActiveThingId] = useEffect("");

  const currentlyThingHappening = thingsHappening.filter(
    (thing) => thing.id === activeThingId
  );

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      // do something
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentlyThingHappening]);
}
```

## Outros exemplos

```jsx
import { useEffect } from "react";

export function App() {
  const [list, setList] = useEffect([]);
  const [filter, setFilter] = useEffect([]);

  useEffect(() => {
    fetch("http://api.github.com/users/dmenezesgabriel/repos")
      .then((response) => response.json)
      .then((data) => {
        setList(data.map((item) => item.full_name));
      });
  }, []);

  // filteredList not needs to be a state
  const filteredList = list.filter((item) => item.includes(filter));

  return (
    <div>
      <input
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
      />
      <ul>
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

#SWE #Web #FrontendFrameworks #ReactHooks #ReactHooksUseEffect
