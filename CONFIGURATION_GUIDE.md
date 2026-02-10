# Portfolio Configuration Guide

## 🚀 Quick Setup Overview

Your portfolio is now fully configured with placeholders. Follow these steps to make it fully functional:

1. **Get API Keys** from each service
2. **Replace Placeholders** in the code
3. **Test Locally**
4. **Deploy**

---

## 📧 Step 1: Set Up EmailJS (Contact Form)

### 1.1 Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 1.2 Set Up Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. **Copy the Service ID** (you'll need this later)

### 1.3 Create Email Template
1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hi {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template
5. **Copy the Template ID** (you'll need this later)

### 1.4 Get Your Public Key
1. Go to **"Account"** → **"General"**
2. **Copy the Public Key** (starts with "user_")

### 1.5 Update Your Code
Replace these placeholders in your files:

**In `index.html`:**
```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");
```

**In `script.js`:**
```javascript
// Replace with your actual IDs
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

---

## 📊 Step 2: Set Up Google Analytics

### 2.1 Create Google Analytics Account
1. Go to [https://analytics.google.com/](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"**
4. Set up your account and property

### 2.2 Get Your Measurement ID
1. In your Google Analytics dashboard, go to **"Admin"**
2. Under **"Property"**, click **"Data streams"**
3. Click on your web data stream
4. **Copy the Measurement ID** (format: G-XXXXXXXXXX)

### 2.3 Update Your Code
**In `index.html`:**
```javascript
// Replace YOUR_GA_MEASUREMENT_ID with your actual measurement ID
gtag('config', 'YOUR_GA_MEASUREMENT_ID');
```

---

## 🛡️ Step 3: Set Up reCAPTCHA

### 3.1 Create reCAPTCHA Account
1. Go to [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click **"Create"**

### 3.2 Configure reCAPTCHA
1. **Label:** Portfolio Contact Form
2. **reCAPTCHA type:** v2 "I'm not a robot" Checkbox
3. **Domains:** Add your domain (localhost for testing, your actual domain for production)
4. Click **"Submit"**

### 3.3 Get Your Site Key
1. After creation, **copy the Site Key**
2. You don't need the Secret Key for frontend-only implementation

### 3.4 Update Your Code
**In `index.html` (contact form section):**
```html
<!-- Replace YOUR_SITE_KEY with your actual site key -->
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
```

---

## 🧪 Step 4: Test Locally

### 4.1 Open Your Portfolio
1. Open `index.html` in your web browser
2. Test all features:
   - Dark mode toggle
   - Mobile menu
   - Typing effect controls
   - Scroll animations
   - Contact form (with reCAPTCHA)

### 4.2 Test Contact Form
1. Fill out the contact form
2. Complete the reCAPTCHA
3. Submit the form
4. Check your email for the test message

### 4.3 Check Analytics
1. Visit your site
2. Go to Google Analytics → Real-time reports
3. You should see your visit recorded

---

## 🚀 Step 5: Deploy Your Portfolio

### Option 1: GitHub Pages (Free & Easy)
1. Create a GitHub repository
2. Upload all your files
3. Go to repository **Settings** → **Pages**
4. Select **"Deploy from a branch"**
5. Choose **main/master** branch
6. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free & Recommended)
1. Go to [https://netlify.com](https://netlify.com)
2. Sign up and connect your GitHub
3. Drag & drop your files or connect repository
4. Site deploys automatically
5. Get a custom domain if desired

### Option 3: Vercel (Free)
1. Go to [https://vercel.com](https://vercel.com)
2. Connect your GitHub
3. Deploy from repository
4. Automatic deployments on git push

---

## 🔧 Troubleshooting

### Contact Form Not Working
- Check browser console for errors
- Verify all EmailJS IDs are correct
- Ensure reCAPTCHA is completed before submitting

### Analytics Not Tracking
- Wait 24-48 hours for data to appear
- Check that Measurement ID is correct
- Verify the gtag script is loading

### reCAPTCHA Not Showing
- Check that site key is correct
- Ensure domain is added to reCAPTCHA settings
- Test on the actual domain (not just localhost)

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all API keys are correctly replaced
3. Test each service individually
4. Contact the respective service support if needed

Your portfolio is now ready for professional use! 🎉
