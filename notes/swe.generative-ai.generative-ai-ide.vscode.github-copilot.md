---
id: p82v2384q841djc1jugdbm1
title: GitHub Copilot
desc: ""
updated: 1748722581278
created: 1747399670863
---

- `.github/copilot-instructions.md`: Customizar comportamento do github copilot
  Ex: copilot-instructions.md

  ```md
  ## Language

  - Answer all the questions in plain simple US english

  ## Humor

  - Always answer with humor and jokes
  - Treat the developer as a close friend
  ```

- `.github/instructions/*.instructions.md`: Padrões de codificação, conhecimento de domínio e preferências que a IA deve seguir.

  - `CTRL + SHIFT + P -> Chat: New Instruction File`

  Ex: general-coding.instructions.md

  ```md
  ---
  applyTo: "**"
  ---

  # Code Guidelines

  ## Name conventions

  - Use PascalCase for class and component names
  - Use camelCase to variables, functions and methods

  ## Error handling

  ...
  ```

  Ex: typescript-react.instructions.md

  ```md
  ---
  applyTo: "**/*.ts,**./*.ts"
  ---

  Apply [general guidelines](./general-coding.instructions.md) to all files.

  # Typescript React Instructions

  ## Typescript

  - ...

  ## React

  - ...

  ...
  ```

- `.github/prompts/*.prompt.md`: Saída esperada e quaisquer restrições relevantes para esta tarefa.

  - `CTRL + SHIFT + P -> Chat: New Prompt File`

  Ex: components.prompt.md

  ```md
  ---
  mode: "agent"
  tools: ["githubRepo", "codebase"]
  description: "Creation of a new React Component"
  ---

  # Your goal is to generate a new react component using Next.js

  ## Ask for those implementation details if not informed

  - What is the component name?
  - It will be based on another one that already exists?

  ## Component requirements

  - It will be created in `/components` directory inside #codebase
    ...
  ```

- mcp (Model Context Protocol) [[swe.generative-ai.protocols.mcp.mcp-servers]]
- _chat extensions_ Ex:vscode-mermAId, escrever no chat `@mermAId` quando um arquivo está selecionado.

## Reference

- [copilot-customization](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [Customizing Copilot in VS Code](https://www.youtube.com/watch?v=WdZCv4OZcxM&list=WL&index=3)
