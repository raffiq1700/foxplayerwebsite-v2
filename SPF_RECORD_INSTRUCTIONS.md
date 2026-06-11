# DNS SPF Record Configuration Guide

Setting up an SPF (Sender Policy Framework) record is crucial to prevent spammers from spoofing emails from the domain `foxplayer.co.in`, which protects your brand reputation and improves email deliverability.

## What is an SPF Record?
An SPF record is a TXT record added to your domain's DNS settings that lists all the authorized mail servers allowed to send emails on behalf of your domain. Receiving mail servers check this record to decide whether to mark emails as Spam or accept them.

## Recommended SPF Records for `foxplayer.co.in`

Depending on which mail provider you are currently using, you should configure one of the following TXT records:

### Option A: If you send emails via Yahoo Mail (Current Website Setup)
If your primary outgoing mail is handled by Yahoo Mail, use this SPF record:
- **Type**: `TXT`
- **Host / Name**: `@` (or leave blank depending on DNS manager)
- **Value**: `v=spf1 include:_spf.mail.yahoo.com ~all`

### Option B: If you send emails via Google Workspace
- **Type**: `TXT`
- **Host / Name**: `@`
- **Value**: `v=spf1 include:_spf.google.com ~all`

### Option C: If you send emails via Zoho Mail
- **Type**: `TXT`
- **Host / Name**: `@`
- **Value**: `v=spf1 include:zoho.in ~all`

### Option D: Combined SPF (If sending from multiple sources)
If you send from Yahoo Mail and also use another provider, you must combine them into a single SPF record (a domain should never have more than one SPF TXT record):
- **Type**: `TXT`
- **Host / Name**: `@`
- **Value**: `v=spf1 include:_spf.mail.yahoo.com include:_spf.google.com ~all`

---

## How to Add the Record in Your DNS Manager

1. Log into your domain registrar/DNS provider account (e.g., GoDaddy, Namecheap, Cloudflare, Hostinger).
2. Navigate to the **DNS Management** or **DNS Zone Editor** page.
3. Look for any existing TXT records that start with `v=spf1`. 
   - *Note: If one already exists, edit it instead of creating a new one.*
4. Click **Add New Record** (or select Edit on the existing one).
5. Choose **TXT** as the record type.
6. Enter `@` in the **Host** or **Name** field.
7. Enter the appropriate **Value** from the options above (e.g., `v=spf1 include:_spf.mail.yahoo.com ~all`).
8. Save the record.

*Note: DNS changes can take up to 24–48 hours to propagate worldwide, but usually take effect within a few hours.*
