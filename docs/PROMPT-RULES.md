# Negaresh Yar V1 - Prompt Rules

## Purpose

This document defines how instructions must be written for AI coding agents working on Negaresh Yar V1.

The goal is to keep development controlled, consistent, and aligned with project decisions.

---

# Core Principle

The AI coding agent is an implementation tool.

It executes instructions.

It does not make product decisions.

---

# Prompt Structure

Every development instruction should contain:

1. Task ID
2. Task Goal
3. Allowed Files
4. Required Changes
5. Restrictions
6. Testing Requirements
7. Expected Report


---

# Example Task Format
TASK-001

Goal:
Prepare Laravel project configuration.

Allowed Files:

config/*
package.json
composer.json

Required Changes:

Configure application settings.
Verify dependencies.

Restrictions:

Do not change architecture.
Do not add features.

Testing:

Run application.
Verify no errors.

Report:

Changed files.
Commands.
Test results.

---

# AI Agent Behavior Rules

The agent must:

- Read docs before coding.
- Follow the requested task only.
- Modify only required files.
- Report completed work.
- Stop after finishing the task.


---

# The Agent Must Not

The agent must not:

- Create new features.
- Change UX decisions.
- Redesign pages.
- Change database structure.
- Add packages without permission.
- Refactor unrelated code.
- Continue automatically.


---

# Code Change Rules

Before changing code:

The agent must identify:

- Current file structure.
- Existing implementation.
- Related documentation.


---

# Error Handling

If a problem appears:

The agent must:

1. Explain the problem.
2. Show affected files.
3. Suggest possible solutions.

The agent must not silently change architecture.


---

# Testing Rules

Each completed task must include:

- What was tested.
- How it was tested.
- Result.


---

# Communication Style

Reports must be:

- Short.
- Technical.
- Clear.

Avoid unnecessary explanations.

---

# Project Priority

The priority order is:

1. Follow documentation.
2. Keep V1 simple.
3. Maintain quality.
4. Avoid unnecessary complexity.