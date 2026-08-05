# Negaresh Yar V1 - Database Specification

## Database Philosophy

The database must remain small and focused.

Only features required for V1 should have database tables.

Do not create unnecessary tables for future ideas.

---

# Database Tables

The V1 database contains the following tables:

1. users
2. articles
3. article_reviews
4. ai_interpretations
5. invoices
6. invoice_items
7. social_links
8. settings


---

# 1. users Table

Purpose:

Stores administrator accounts only.

There is no public user account system.


Fields:

- id
- name
- email
- password
- remember_token
- created_at
- updated_at


---

# 2. articles Table

Purpose:

Stores website articles.


Fields:

- id
- title
- slug
- excerpt
- content
- featured_image
- meta_title
- meta_description
- status
- published_at
- created_at
- updated_at


Status values:

- draft
- review
- approved
- published


---

# 3. article_reviews Table

Purpose:

Stores AI article evaluation results.


Fields:

- id
- article_id
- seo_score
- content_score
- quality_score
- final_score
- review_data
- created_at
- updated_at


Relationship:

One article has many reviews.


---

# 4. ai_interpretations Table

Purpose:

Stores AI interpretation requests.


Fields:

- id
- file_path
- file_type
- ai_result
- status
- created_at
- updated_at


Status values:

- pending
- processing
- completed
- failed


Important:

No personal customer information is stored.


---

# 5. invoices Table

Purpose:

Stores invoice information.


Fields:

- id
- invoice_number
- customer_name
- customer_phone
- total_amount
- created_at
- updated_at


Note:

This is not a customer management system.


---

# 6. invoice_items Table

Purpose:

Stores invoice service rows.


Fields:

- id
- invoice_id
- description
- quantity
- amount
- created_at
- updated_at


Relationship:

One invoice has many items.


---

# 7. social_links Table

Purpose:

Stores messenger links.


Fields:

- id
- platform
- url
- is_active
- created_at
- updated_at


Supported platforms:

- WhatsApp
- Telegram
- Eitaa
- Rubika
- Bale


---

# 8. settings Table

Purpose:

Stores general website settings.


Fields:

- id
- key
- value
- created_at
- updated_at


Examples:

- site_name
- logo
- phone
- footer_text
- seo_title
- seo_description


---

# Database Rules

The following must NOT be added in V1:

- customers table
- user_profiles table
- conversations table
- tickets table
- cases table
- payments table


The database must stay minimal and maintainable.