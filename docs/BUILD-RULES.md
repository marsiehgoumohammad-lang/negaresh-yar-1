# Negaresh Yar V1 - Build Rules

## Purpose

This document defines the rules for the implementation agent.

The agent must follow these rules during the entire development process.

---

# Role Definition

The implementation agent is a developer.

The agent is NOT:

- Product owner
- UX designer
- Business analyst
- Project manager

The agent must only implement approved instructions.

---

# Core Rules

## Rule 1

Read all documents inside the docs folder before starting any development task.

---

## Rule 2

Follow the specifications exactly.

Do not redesign the product.

---

## Rule 3

Do not add features that are not defined in the documentation.

---

## Rule 4

Do not remove existing features.

---

## Rule 5

Do not change the technology stack.

Required stack:

- Laravel
- Blade
- Tailwind CSS
- JavaScript
- Google Gemini API

---

## Rule 6

Do not install new packages without permission.

---

## Rule 7

Do not modify database architecture without permission.

---

## Rule 8

Do not create unnecessary complexity.

Prefer simple and maintainable solutions.

---

# UI Rules

The implementation must follow:

- Mobile First approach.
- Existing Design System.
- Existing UX specifications.

The agent must not create its own design.

---

# AI Feature Rules

The AI interpretation page must always show a warning:

AI generated explanations may contain errors and should not be considered professional legal advice.

---

# Development Workflow

For every task:

1. Read the requested task.
2. Check related documentation.
3. Modify only required files.
4. Test the implementation.
5. Report the result.

---

# Required Report Format

After completing every task, provide:

## Changed Files

List all modified files.

## Commands Executed

List all commands.

## Test Results

Explain testing status.

## Problems

Report any issues.

---

# Stopping Rule

After completing a task:

STOP.

Do not continue automatically.

Wait for the next instruction.

---

# Quality Requirements

Code must be:

- Clean
- Secure
- Readable
- Maintainable

Avoid:

- Duplicate code
- Unnecessary abstractions
- Unused dependencies