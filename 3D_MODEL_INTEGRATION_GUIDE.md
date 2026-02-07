# 3D Model Integration Guide - Sulfuric Acid Production Website

## Complete Step-by-Step Instructions

This guide will help you export your Maya 3D model and integrate it into the website.

---

## PHASE 1: Export Your Maya Model

### Step 1: Prepare Your Model in Maya 2024

1. **Open your sulfuric acid production model** in Maya 2024
2. **Clean up your scene:**
   - Delete any unused layers or objects
   - Remove cameras and lights (we'll add these in the web viewer)
   - Ensure all geometry is properly named (e.g., "Furnace", "Reactor", "Pipes")
   - Check that all materials are applied correctly

3. **Optimize the model:**
   - Delete history: `Edit > Delete All by Type > History`
   - Freeze transformations: Select all objects → `Modify > Freeze Transformations`
   - Delete unknown nodes: `File > Optimize Scene Size`
   - Reduce polygon count if needed (target: under 500k polygons for web)

### Step 2: Export to glTF/GLB Format (Recommended)

**Why glTF?** It's the web standard for 3D models—optimized for web browsers, supports animations, and works with all major viewers.

#### Option A: Using Maya's Built-in glTF Exporter (Easiest)

1. **Select all geometry** you want to export:
   - `Ctrl+A` to select all, or manually select your model parts

2. **Export as glTF:**
   - Go to `File > Export Selection` (or `File > Export All`)
   - Choose location and filename (e.g., `sulfuric_acid_process.glb`)
   - In the file type dropdown, select **`glTF Binary (.glb)`** or **`glTF (.gltf)`**
   - Click `Export`

3. **Export options dialog:**
   - ✓ Check: "Smooth Mesh Preview"
   - ✓ Check: "Bake Animation" (if you have animations)
   - ✓ Check: "Tangents"
   - Leave other settings as default
   - Click `Export`

#### Option B: Using Babylon.js Exporter (Alternative)

If Maya's glTF exporter isn't available:

1. Download the Babylon.js Maya plugin from: https://github.com/BabylonJS/Exporters/releases
2. Install in Maya's plug-ins folder
3. Go to `Babylon > Export`
4. Choose `.glb` format and export

#### Option C: Export as FBX, then Convert

If glTF export isn't working:

1. **Export as FBX:**
   - `File > Export Selection`
   - Choose **`Autodesk FBX (.fbx)`**
   - Click `Export`

2. **Convert FBX to glTF online:**
   - Visit: https://products.aspose.app/3d/conversion/fbx-to-glb
   - Upload your `.fbx` file
   - Download the converted `.glb` file

---

## PHASE 2: Prepare Your Model File

### Step 3: Optimize the GLB File

After exporting, optimize your model:

1. **Check file size:**
   - Ideal size: Under 10 MB (preferably 2-5 MB)
   - If larger, you may need to reduce polygon count or compress textures

2. **Use online optimization tools (Optional):**
   - Visit: https://products.aspose.app/3d/optimization
   - Upload your `.glb` file
   - Download the optimized version

3. **Keep your files:**
   - Original: `sulfuric_acid_process.glb`
   - Save this file somewhere safe on your computer

---

## PHASE 3: Upload Your Model to the Website

### Step 4: Upload Model File to Manus

You have two options:

#### Option A: Upload via Manus Upload Tool (Recommended)

1. **Download your `.glb` file** to your computer (if not already there)

2. **I will upload it for you** using the Manus upload system, which will:
   - Store your file securely
   - Generate a CDN URL for fast loading
   - Make it accessible from anywhere

**To proceed:** Send me your `.glb` file, and I'll upload it and get you the CDN link.

#### Option B: Host on Sketchfab (Free Alternative)

1. **Create a free account** at https://sketchfab.com
2. **Upload your model:**
   - Click "Upload a model"
   - Select your `.glb` file
   - Add title: "Sulfuric Acid Production - Contact Process"
   - Add description with your team info
   - Set to "Public" or "Unlisted"
   - Click "Upload"

3. **Get the embed code:**
   - Once uploaded, click "Share"
   - Copy the embed code (iframe)
   - Send me the code or the Sketchfab URL

---

## PHASE 4: Integrate Model into Website

### Step 5: Choose Integration Method

I'll help you integrate your model using one of these methods:

#### Method 1: Three.js Integration (Full Control)
- **Best for:** Custom interactions, animations, measurements
- **What you get:** Fully interactive 3D viewer with orbit controls
- **Setup time:** ~15 minutes

#### Method 2: Sketchfab Embed (Easiest)
- **Best for:** Quick integration without coding
- **What you get:** Professional viewer with built-in features
- **Setup time:** ~5 minutes

#### Method 3: Google Model-Viewer (Lightweight)
- **Best for:** Mobile-friendly, fast loading
- **What you get:** Simple, responsive viewer
- **Setup time:** ~10 minutes

---

## PHASE 5: Implementation

### Step 6: Integration Code

Once you provide your model file, I will:

1. **Upload your `.glb` file** to get a CDN URL
2. **Replace the placeholder** in the website with your model
3. **Add interactive controls:**
   - Rotate/zoom/pan with mouse
   - Auto-rotate option
   - Full-screen view
   - Download button (optional)

4. **Test the model** in the browser
5. **Deploy** the updated website

---

## Quick Checklist

### Before You Export:
- [ ] Model is cleaned up (no extra objects)
- [ ] All geometry is properly named
- [ ] Materials/textures are applied
- [ ] Model is optimized (under 500k polygons)
- [ ] Scene is saved

### After You Export:
- [ ] `.glb` file is created successfully
- [ ] File size is reasonable (under 10 MB)
- [ ] File is saved on your computer
- [ ] You have a backup copy

### Ready to Upload:
- [ ] You have the `.glb` file
- [ ] File is named clearly (e.g., `sulfuric_acid_process.glb`)
- [ ] You're ready to send it to me

---

## Troubleshooting

### Problem: "glTF exporter not found in Maya"
**Solution:** 
- Update Maya to the latest version
- Or use Option B (Babylon.js exporter)
- Or use Option C (export as FBX and convert online)

### Problem: "File is too large (over 10 MB)"
**Solution:**
- Reduce polygon count: `Mesh > Reduce`
- Delete unused materials
- Compress textures
- Use the online optimization tool

### Problem: "Model looks wrong after export"
**Solution:**
- Check that all objects are properly grouped
- Verify materials exported correctly
- Try re-exporting with different settings
- Test with a simple object first

### Problem: "Textures are missing"
**Solution:**
- glTF format embeds textures in the `.glb` file
- Make sure textures are properly assigned in Maya
- Re-export with "Bake Textures" option enabled

---

## Next Steps

1. **Export your Maya model** following Steps 1-2 above
2. **Save the `.glb` file** on your computer
3. **Send me the file** (or the Sketchfab link if you choose that method)
4. **I will upload and integrate it** into your website
5. **We'll test and deploy** the final version

---

## Questions?

If you get stuck on any step, let me know:
- Which step you're on
- What error message you see (if any)
- What you've tried so far

I'll help you troubleshoot!

---

## File Format Reference

| Format | Extension | Best For | Web Ready |
|--------|-----------|----------|-----------|
| glTF Binary | `.glb` | Web, all features | ✓ Yes |
| glTF Text | `.gltf` | Web, debugging | ✓ Yes |
| FBX | `.fbx` | Maya, conversion | ✗ No (needs conversion) |
| OBJ | `.obj` | Basic geometry | ✗ Partial |
| Babylon | `.babylon` | Babylon.js | ✓ Yes |

**Recommendation:** Use `.glb` (glTF Binary) - it's the best format for web 3D models.

---

## Resources

- **glTF Specification:** https://www.khronos.org/gltf/
- **Three.js Documentation:** https://threejs.org/docs/
- **Babylon.js Documentation:** https://doc.babylonjs.com/
- **Model-Viewer Documentation:** https://modelviewer.dev/
- **Sketchfab:** https://sketchfab.com/

