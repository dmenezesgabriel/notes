---
id: orh8nz24eejhxw0ybmwlp01
title: Aider
desc: ""
updated: 1751732078250
created: 1749661265002
---

```sh
python -m pip install uv  # If you need to install uv
uv tool install --force --python python3.12 --with pip aider-chat@latest
```

## Google AI

```sh
uv tool run --from aider-chat pip install google-generativeai
```

```sh
.env
export GEMINI_API_KEY=<key>
```

```sh
aider --list-models gemini/
```

```sh
aider --model gemini-exp
```

## Referencias

- [Aider](https://aider.chat/docs/)

## Relacionado

- [[daily.journal.2025.06.11]]
