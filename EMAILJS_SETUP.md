# 📧 EmailJS Setup Guide for KeloTech Contact Form

Your contact form is now ready to send emails! Follow these steps to configure EmailJS:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - Or use any other provider
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the KeloTech website contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcdefgh123456`)

### Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_q55th5e',        // Your Service ID
  TEMPLATE_ID: 'template_dwgfa5p',      // Your Template ID  
  PUBLIC_KEY: 'iqyCw46-WYUnlv1zf',   // Your Public Key
  TO_EMAIL: 'kelotechfi@gmail.com',    // Your email (already set)
};
```

## ✅ Testing

1. Save the configuration file
2. Restart your development server: `npm run dev`
3. Go to your contact form
4. Fill out and submit the form
5. Check your email inbox!

## 🎯 Features Included

- ✅ **Form Validation** - Required fields marked with *
- ✅ **Loading States** - Button shows "Sending..." during submission
- ✅ **Success Message** - Green confirmation when email sent
- ✅ **Error Handling** - Red error message if sending fails
- ✅ **Form Reset** - Clears form after successful submission
- ✅ **Professional Styling** - Matches your black/gray theme

## 📱 What You'll Receive

When someone submits the form, you'll get an email with:
- **Sender's name**
- **Sender's email** (so you can reply)
- **Phone number** (if provided)
- **Their message**
- **Source confirmation** (from KeloTech website)

## 🔧 Troubleshooting

**Form not sending?**
- Check that all 3 IDs are correctly set in `src/config/emailjs.ts`
- Verify your EmailJS service is connected and active
- Check browser console for error messages

**Not receiving emails?**
- Check your spam/junk folder
- Verify the template is set up correctly
- Make sure your email service is properly connected

## 💰 Pricing

EmailJS free tier includes:
- **200 emails/month** - Perfect for contact forms
- No credit card required
- Upgrade available if you need more

---

🎉 **That's it!** Your contact form will now send emails directly to `kelotechfi@gmail.com` whenever someone fills it out on your website.
