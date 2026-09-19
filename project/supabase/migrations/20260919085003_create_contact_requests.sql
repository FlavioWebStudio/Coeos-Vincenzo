/*
# Create contact_requests table (single-tenant, no auth)

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the person requesting info
  - `email` (text, not null) — email to reply to
  - `company` (text, nullable) — optional company name
  - `message` (text, nullable) — optional message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_requests`.
- Allow anon + authenticated INSERT only (public contact form, no sign-in).
- No SELECT/UPDATE/DELETE for anon — only site operators should read submissions.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_requests" ON contact_requests;
CREATE POLICY "anon_insert_contact_requests" ON contact_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
