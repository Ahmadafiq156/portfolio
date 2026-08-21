# Custom Domain Setup for Ahmad Afiq's GitHub Pages Portfolio

Use `your-domain.tech` below as a placeholder. Replace it with the domain you
actually claim, such as `ahmadafiq.tech` or `afiqgamedev.tech` if available.

## Part 1 — Claim a student domain

GitHub's Student Developer Pack currently lists these relevant offers:

- **.TECH:** one standard `.TECH` domain sponsored for one year.
- **Name.com:** one selected free domain from more than 25 extensions, including
  examples such as `.app`, `.dev`, `.live`, `.software`, and `.studio`.
- **Namecheap:** one year of registration for a `.me` domain.

The free period is normally the first year only. Check the renewal price before
claiming so the second-year charge does not surprise you.

### Recommended route: .TECH

1. Visit `https://education.github.com/pack?tag=Domains` while signed in to the
   GitHub account with your approved education benefit.
2. Find **.TECH**, then open its student offer.
3. Search for a short professional name.
4. Add an available standard domain to the cart.
5. At checkout, verify your GitHub account to apply the sponsored first year.
6. Complete registration and verify the email sent by the registrar.

Do not add paid email hosting or other optional products unless you want them.
GitHub Pages already provides the website hosting and HTTPS certificate.

## Part 2 — Upload the portfolio to GitHub

1. Unzip `Ahmad-Afiq-Portfolio-GitHub-Pages.zip`.
2. Open `https://github.com/Ahmadafiq156/portfolio`.
3. Choose **Add file → Upload files**.
4. Upload every item from the unzipped folder, including:
   - `.nojekyll`
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/`
   - `Ahmad_Afiq_CV.pdf`
5. Commit the upload to `main`.
6. Open the repository's **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select **main** and **/(root)**, then click **Save**.

GitHub may need several minutes to publish the first version.

## Part 3 — Verify domain ownership first

GitHub recommends verifying your domain before connecting it to a repository.

1. On GitHub, click your profile picture → **Settings**.
2. Under **Code, planning, and automation**, click **Pages**.
3. Click **Add a domain**.
4. Enter `your-domain.tech`.
5. GitHub will show a TXT record similar to:

   - Type: `TXT`
   - Host/Name: `_github-pages-challenge-Ahmadafiq156`
   - Value: the unique verification value displayed by GitHub

6. Open your domain registrar's DNS management screen and add that exact TXT
   record.
7. Return to GitHub and click **Verify** after the record is detected.
8. Keep this TXT record permanently; do not delete it after verification.

## Part 4 — Add the domain in the portfolio repository

Do this before adding the GitHub Pages A and CNAME records to DNS.

1. Open `https://github.com/Ahmadafiq156/portfolio`.
2. Go to **Settings → Pages**.
3. In **Custom domain**, enter `your-domain.tech`.
4. Click **Save**.

When Pages publishes from a branch, GitHub normally creates the real `CNAME`
file automatically. `CNAME.example` in this package is only a reference.

## Part 5 — Add the DNS records

In the registrar's DNS panel, remove any default parked-domain A records, then
add these records exactly.

| Type | Host/Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `Ahmadafiq156.github.io` |

Important:

- The `www` record points to `Ahmadafiq156.github.io`, not
  `Ahmadafiq156.github.io/portfolio`.
- Do not create wildcard records such as `*.your-domain.tech`.
- Keep the GitHub verification TXT record from Part 3.
- Use the registrar's default or automatic TTL if you are unsure.

The four optional IPv6 records are:

| Type | Host/Name | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

## Part 6 — Enable HTTPS

1. Wait for the DNS check in **Repository → Settings → Pages** to succeed.
2. DNS changes can be quick but may take up to 24 hours.
3. When available, tick **Enforce HTTPS**.
4. Test both addresses:
   - `https://your-domain.tech`
   - `https://www.your-domain.tech`

GitHub Pages should redirect one version to the other automatically.

## Part 7 — Update the social preview URL

After the custom domain works, open `index.html` and replace both occurrences of:

`https://ahmadafiq156.github.io/portfolio/assets/og.png`

with:

`https://your-domain.tech/assets/og.png`

Commit the change. This ensures LinkedIn, WhatsApp, and other services use the
correct image when someone shares your custom-domain link.

## Official references

- GitHub Student domain offers: `https://education.github.com/pack?tag=Domains`
- .TECH student claim page: `https://get.tech/github-student-developer-pack`
- GitHub custom-domain instructions:
  `https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site`
- GitHub domain verification:
  `https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages`

