# How to Add Your Profile Picture

## Steps to Add Your Profile Picture:

1. **Prepare Your Image:**
   - Use a professional headshot or portrait photo
   - Recommended size: 500x500 pixels or larger (square format works best)
   - Supported formats: JPG, PNG, or WebP
   - File size: Keep it under 500KB for optimal loading

2. **Rename Your Image:**
   - Rename your image file to: `profile.jpg` (or `profile.png`)

3. **Add to Public Folder:**
   - Place your image in the `public` folder of your project
   - Path should be: `/Users/reneshnaidupara/Personal/AntiGravity/renesh-portfolio/public/profile.jpg`

4. **Verify:**
   - The image will automatically appear in the Hero section with an animated gradient border
   - If the image doesn't load, a fallback with your initials "RN" will be displayed

## What's Been Added:

✅ **Animated Profile Picture Frame:**
- Circular profile picture with animated gradient border
- Pulsing glow effect around the image
- Smooth fade-in animation on page load
- Responsive design for all screen sizes

✅ **Fallback Design:**
- If image is not found, displays your initials "RN" with gradient background
- Ensures the design looks good even without an image

## Alternative Image Names:

If you prefer a different filename, update line 179 in `src/components/Hero.tsx`:
```typescript
src="/profile.jpg"  // Change this to your preferred filename
```

## Tips for Best Results:

- Use a high-quality, well-lit photo
- Ensure your face is centered in the image
- A solid or blurred background works best
- Professional attire recommended for a portfolio site