# GitHub Push Guide

## What Was Added

The following mutual funds themed background images and CSS styles have been added to your project:

### New Background Images
1. **portfolio-bg.svg** - Portfolio themed background with gradient and decorative elements
2. **chart-bg.svg** - Analytics/chart themed background with financial visualization
3. **investment-bg.svg** - Investment themed background with network and currency symbols
4. **funds-hero-bg.svg** - Hero section background for mutual funds pages

### CSS Updates
- Updated `body` to use `portfolio-bg.svg` as a fixed background
- Updated `.hero` section to use `funds-hero-bg.svg` with blend mode
- Added new CSS classes:
  - `.bg-portfolio` - Portfolio background style
  - `.bg-chart` - Chart background style
  - `.bg-investment` - Investment background style
  - `.bg-hero` - Hero background style
  - `.funds-section` - Funds section with overlay
  - `.dashboard-hero` - Dashboard hero section
  - `.advisor-section` - Advisor section with overlay

## Steps to Push to GitHub

### 1. Install Git (if not already installed)
- Download from: https://git-scm.com/download/win
- Or use Windows Package Manager: `winget install Git.Git`
- Or use Chocolatey: `choco install git`

### 2. Initialize Git Repository
```powershell
cd c:\workspace\mutual-funds
git init
```

### 3. Configure Git (if not already configured)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 4. Add All Files
```powershell
git add .
```

### 5. Create Initial Commit
```powershell
git commit -m "Add mutual funds background images and CSS styling"
```

### 6. Create GitHub Repository
- Go to https://github.com/new
- Create a new repository (e.g., "mutual-funds")
- Do NOT initialize with README, .gitignore, or license
- Click "Create repository"

### 7. Add Remote and Push
Replace `USERNAME` and `REPOSITORY` with your GitHub account and repo name:

```powershell
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

Or if you prefer SSH (requires SSH key setup):
```powershell
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

### 8. Future Commits
For future changes:
```powershell
git add .
git commit -m "Your commit message"
git push
```

## Files Modified
- `css/style.css` - Updated with background image styles
- `public/images/portfolio-bg.svg` - NEW
- `public/images/chart-bg.svg` - NEW
- `public/images/investment-bg.svg` - NEW
- `public/images/funds-hero-bg.svg` - NEW

## Testing the Changes Locally

Before pushing, you can test the changes:
```powershell
npm install  # if not already done
npm run dev  # start development server
```

Then visit http://localhost:3000 to see the new background images in action.

---
Created: February 26, 2026
