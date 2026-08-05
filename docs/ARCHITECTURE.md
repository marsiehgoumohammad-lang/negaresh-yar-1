# Negaresh Yar V1 - Technical Architecture

## Technology Stack

Backend:

Laravel


Frontend:

Blade Templates
Tailwind CSS
JavaScript


Database:

SQLite for development

MySQL for production


AI Provider:

Google Gemini API


---

# Architecture Principles

The project must follow:

- Clean structure
- Simple implementation
- Maintainable code
- No unnecessary complexity


---

# Application Structure
app/

├── Http/
│ ├── Controllers/
│ └── Middleware/
│
├── Models/
│
├── Services/
│
└── Helpers/


---

# Controllers

## HomeController

Responsibilities:

- Homepage rendering.
- Public website data.


---

## AiInterpreterController

Responsibilities:

- Receive uploaded files.
- Validate files.
- Send requests to Gemini service.
- Display AI results.


---

## ArticleController

Responsibilities:

- Display article list.
- Display article details.


---

## AdminController

Responsibilities:

- Admin dashboard.


---

## AdminArticleController

Responsibilities:

- Create articles.
- Edit articles.
- Review articles.
- Publish articles.


---

## InvoiceController

Responsibilities:

- Create invoices.
- Generate invoice PDF.


---

## SettingController

Responsibilities:

- Manage website settings.
- Manage social links.


---

# Services

## GeminiService

Responsible for:

- Gemini API communication.
- Prompt handling.
- Error management.


---

## ArticleService

Responsible for:

- Article generation workflow.
- Review process.
- Score calculation.


---

## SeoService

Responsible for:

- Meta data.
- Sitemap.
- Schema.


---

## InvoiceService

Responsible for:

- Invoice generation.
- PDF creation.


---

# Development Rules

- Business logic should not be placed inside controllers.
- Services should handle complex operations.
- Keep components reusable.
- Avoid unnecessary packages.


---

# Mobile First Rule

All interfaces must be designed for mobile first.

Desktop layouts are extensions of mobile layouts.


---

# Build Restriction

The implementation agent must not:

- Change architecture.
- Add features.
- Install packages without permission.
- Modify database structure without approval.