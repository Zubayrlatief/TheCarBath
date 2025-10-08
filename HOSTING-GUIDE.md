# 🚀 Simple Hosting Guide for cPanel

## 📁 What You Need to Upload:

### **Location on Your Computer:**
`C:\Users\zubay\OneDrive\Desktop\Codes\TheCarBath\`

---

## 📋 Step-by-Step Instructions:

### **Step 1: Login to cPanel**
1. Go to your hosting provider's cPanel
2. Login with your credentials
3. Open **File Manager**

---

### **Step 2: Clear Out public_html**
In cPanel File Manager:
1. Navigate to `public_html/` folder
2. Select **ALL** files and folders inside
3. Click **Delete**
4. Confirm deletion

---

### **Step 3: Upload from DIST folder**

**From:** `C:\Users\zubay\OneDrive\Desktop\Codes\TheCarBath\dist\`
**To:** `public_html/`

**Upload these:**
- ✅ `index.html`
- ✅ `assets` folder (containing CSS and JS files)

**How to Upload:**
- **Option A:** Drag and drop files into File Manager
- **Option B:** 
  1. Zip the contents of `dist` folder
  2. Upload the ZIP to `public_html/`
  3. Right-click ZIP → Extract
  4. Delete the ZIP file after extraction

---

### **Step 4: Upload from PUBLIC folder**

**From:** `C:\Users\zubay\OneDrive\Desktop\Codes\TheCarBath\public\`
**To:** `public_html/`

**Upload ALL files:**
- ✅ `terms-of-service.html`
- ✅ `privacy-policy.html`
- ✅ `terms-of-service.pdf`
- ✅ `privacy-policy.pdf`
- ✅ ALL `.jpg`, `.png`, `.avif`, `.webp` image files

**How to Upload:**
- **Option A:** Select all files and drag/drop
- **Option B:**
  1. Zip the `public` folder contents
  2. Upload ZIP to `public_html/`
  3. Extract
  4. Delete ZIP

---

### **Step 5: Verify File Structure**

Your `public_html/` should look like this:

```
public_html/
├── index.html (from dist)
├── assets/ (from dist)
│   ├── index-C8wPSQOG.css
│   └── index-DmLAgE_f.js
├── terms-of-service.html (from public)
├── privacy-policy.html (from public)
├── terms-of-service.pdf (from public)
├── privacy-policy.pdf (from public)
├── 20220430_115624.jpg (from public)
├── 20220430_134409.jpg (from public)
├── 20220430_134422.jpg (from public)
├── 20220430_134432.jpg (from public)
├── 20220430_142652.jpg (from public)
├── 20220502_175038.jpg (from public)
├── 37a6bd2321404def31b29951d5f26b2e.jpg (from public)
├── Arden-Grove-Milnerton-aerial-view-1.jpg (from public)
├── carwash-1024x768.jpg (from public)
├── Lovemore_02-1-scaled (1).jpg (from public)
├── MicrosoftTeams-image-10-1bd9880a-768x511.webp (from public)
├── The_Car-removebg-preview.png (from public)
└── 69e770_351601d876764a06b5ac57606c971ac7~mv2 (2).avif (from public)
```

---

### **Step 6: Test Your Website**

1. Visit your website URL
2. Clear browser cache: `Ctrl + Shift + Delete`
3. Hard refresh: `Ctrl + F5`
4. Test all pages:
   - ✅ Home page loads
   - ✅ Images appear
   - ✅ Navigation works
   - ✅ Booking form works
   - ✅ Prices show correctly (R2000, R200, R150)

---

## ⚡ Quick Upload Method (Recommended):

### **Create 2 ZIP Files:**

1. **dist.zip:**
   - Go to `dist` folder
   - Select `index.html` and `assets` folder
   - Right-click → Send to → Compressed (zipped) folder
   - Name it `dist.zip`

2. **public.zip:**
   - Go to `public` folder
   - Select ALL files inside
   - Right-click → Send to → Compressed (zipped) folder
   - Name it `public.zip`

### **Upload to cPanel:**
1. Upload both ZIP files to `public_html/`
2. Extract `dist.zip` first
3. Extract `public.zip` second
4. Delete both ZIP files
5. Done! ✅

---

## 🚨 Common Issues:

### **Images not loading?**
- Make sure you uploaded ALL image files from `public` folder
- Check browser console for errors (F12)

### **CSS not working (plain text site)?**
- Make sure `assets` folder uploaded correctly
- Check that `index.html` is in `public_html/` root

### **Old prices showing?**
- Clear browser cache: `Ctrl + Shift + Delete`
- Hard refresh: `Ctrl + F5`

### **Booking form not working?**
- Check that you uploaded the latest `index.html` from `dist`
- Test in incognito window

---

## 📊 What's New in This Version:

✅ Updated prices (R2000, R200, R150)
✅ Fixed booking form
✅ Removed 129 MB of unused images
✅ Added lazy loading for faster page loads
✅ Better performance

---

## 🎯 Files You DON'T Need to Upload:

❌ `node_modules` folder
❌ `src` folder
❌ `package.json`
❌ `package-lock.json`
❌ `vite.config.js`
❌ `README.md`
❌ `*.md` files
❌ `.git` folder

**Only upload from `dist` and `public` folders!**

---

## 💡 Pro Tip:

If you have an `.htaccess` file already on your server, **don't delete it!** Just upload the new files and they'll work alongside it.

---

## ✅ Checklist:

- [ ] Cleared `public_html/`
- [ ] Uploaded `dist/index.html`
- [ ] Uploaded `dist/assets/` folder
- [ ] Uploaded ALL files from `public/`
- [ ] Cleared browser cache
- [ ] Tested website
- [ ] Checked prices are correct
- [ ] Tested booking form

---

Good luck! Your optimized website should load much faster now! 🚀
