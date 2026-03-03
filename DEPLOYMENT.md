# Deployment Guide

To publish your website with your custom URL `ellehairsalon.art`, follow these steps. We recommend using **Vercel** or **Netlify**, as they are free for starter projects and optimized for this type of website (React + Vite).

## Prerequisites

1.  **GitHub Account**: [Sign up here](https://github.com/) if you don't have one.
2.  **Vercel Account**: [Sign up here](https://vercel.com/signup) (continue with GitHub).
3.  **Domain Name**: You need to buy your custom domain (e.g., from GoDaddy, Namecheap, or directly through Vercel).

---

## Step 1: Get Your Code

1.  **Download** the project files from this AI Studio session to your local computer.
2.  Unzip the folder.

## Step 2: Push to GitHub

1.  Open a terminal in your project folder.
2.  Initialize a git repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
3.  Create a new repository on GitHub (call it `elle-hair-salon`).
4.  Follow the instructions on GitHub to push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/elle-hair-salon.git
    git branch -M main
    git push -u origin main
    ```

## Step 3: Deploy to Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your `elle-hair-salon` repository from the list.
4.  **Configure Project**:
    *   **Framework Preset**: Vite (should be detected automatically).
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
5.  Click **Deploy**.

Vercel will build your site and give you a live URL (e.g., `elle-hair-salon.vercel.app`).

## Step 4: Connect Your Custom Domain (ellehairsalon.art)

1.  In your Vercel project dashboard, go to **Settings** -> **Domains**.
2.  Enter `ellehairsalon.art` and click **Add**.
3.  Vercel will provide DNS records (usually an A record and a CNAME) that you need to add to your domain registrar's settings (where you bought `ellehairsalon.art`, e.g., GoDaddy, Namecheap, Porkbun).
    *   **Type**: A | **Name**: @ | **Value**: 76.76.21.21 (Example - use the one Vercel gives you)
    *   **Type**: CNAME | **Name**: www | **Value**: cname.vercel-dns.com
4.  Wait for the DNS changes to propagate (usually minutes, sometimes up to 24 hours).

## Alternative: Netlify

1.  Go to [Netlify](https://www.netlify.com/) and sign up.
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Connect to GitHub and select your repository.
4.  Netlify will detect the settings (Build command: `npm run build`, Publish directory: `dist`).
5.  Click **Deploy**.
6.  Go to **Domain Management** to add your custom domain.
