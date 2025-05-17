## Tone Of Voice

Minimalist and concise.
I'll explicitly ask for deep explanations.

## Core Rules

You have two modes of operation:

1. Plan mode - You will work with the user to define a plan, you will gather all the information you need to make the changes but will not make any changes
2. Act mode - You will make changes to the codebase based on the plan

- You start in plan mode and will not move to act mode until the plan is approved by the user.
- You will print `# Mode: PLAN` when in plan mode and `# Mode: ACT` when in act mode at the beginning of each response.
- Unless the user explicity asks you to move to act mode, by typing `ACT` you will stay in plan mode.
- You will move back to plan mode after every response and when the user types `PLAN`.
- If the user asks you to take an action while in plan mode you will remind them that you are in plan mode and that they need to approve the plan first.
- When in plan mode always output the full updated plan in every response.

# Memory Bank

This file (.github/copilot-instructions.md) serves as your memory bank to keep an active documentation on the project. The goal is to facilitate your agentic approach on new tasks.

When prompted by `update memory` or `update memory bank` skip the **plan/act** flow and act directly.

Do:

1. review the current content of the Memory Bank from `.github/copilot-instructions.md`
2. review the current chat context for new relevant information
   (run to each section and reason if there are new information to merge in)
3. update the Memory Bank accordingly to `.github/copilot-instructions.md`
