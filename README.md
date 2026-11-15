# Dhanush M. Portfolio

A static, responsive portfolio using HTML, CSS, JavaScript and a separate `portfolio.json` content file. The visual direction is Concept 2: Premium Developer Portfolio, with dark navy styling, electric-blue accents and a light/dark toggle.

## Files
- `index.html` - public portfolio
- `styles.css` - responsive visual design and themes
- `app.js` - loads JSON content, renders sections and handles theme/navigation
- `portfolio.json` - editable profile, experience, skills, projects, certifications and education
- `admin.html` - browser-based content editor with live preview, local draft saving and JSON export
- `assets/` - add your profile photo and resume here

## Preview locally
Because the portfolio loads `portfolio.json` using `fetch`, open it through a local web server rather than double-clicking the HTML file.

Using Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Add your profile photo and resume
1. Add your photo to `assets/profile.jpg` (or another image path).
2. Open `admin.html`, enter `assets/profile.jpg` in the Profile photo field.
3. Add your resume PDF as `assets/resume.pdf` and enter that path in the Resume PDF field.
4. Export `portfolio.json`.

The hero currently shows a replaceable initials placeholder until a photo path is configured. The resume button stays hidden until a resume path is configured.

## Edit and publish content
1. Open the deployed site's `/admin.html` page.
2. Edit the basic fields in the form. Use the advanced JSON editor for projects, skills, experience, certifications and education.
3. Save a local draft if you want to continue editing in the same browser.
4. Export the updated `portfolio.json`.
5. Replace the repository's `portfolio.json` with the exported file and commit/push the change to GitHub.
6. For photo or resume changes, add the files under `assets/` and commit them too.

The editor does not publish automatically. Local drafts are stored only in the current browser profile and are not shared across devices.

## Deploy to GitHub Pages
1. Create a GitHub repository, for example `dhanush-portfolio`.
2. Upload all files and the `assets/` folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and open the provided site URL.

## Important limitations
- This is a static site. No backend, database, authentication or paid service is included.
- `admin.html` is an editor, not a secure/private admin system. Anyone who can access the page can use the editor in their own browser. Do not put secrets or access tokens in the site.
- The admin editor uses browser local storage for drafts. Drafts are per browser/device.
- The site uses Google Fonts when internet access is available; system sans-serif fonts are used as fallback.
- LinkedIn, GitHub and email links are configured. Resume download and profile photo need your files to be added.

## Content accuracy
The included content follows the information approved for this portfolio. Review dates and project descriptions once more before public deployment, especially the one-month overlap between the two GWC role date ranges shown in the source details.
