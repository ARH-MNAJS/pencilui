# Security Policy

## Reporting a Vulnerability

Please **do not** open a public issue for security vulnerabilities.

Instead, open a private security advisory via GitHub:
<https://github.com/ARH-MNAJS/pencilui/security/advisories/new>

You should receive an acknowledgement within 72 hours. We will work with you to understand and resolve the issue, and credit you in the release notes (unless you prefer to remain anonymous).

## Supported Versions

Each major version of `@pencilui/react`, `@pencilui/styles`, and `pencilui` is supported with security fixes for **12 months** after the next major version is released.

## Supply Chain

- All releases are published with [npm provenance](https://docs.npmjs.com/generating-provenance-statements) (Sigstore-signed). Verify with `npm audit signatures`.
- Dependencies are monitored via GitHub Dependabot.
- CI uses GitHub Actions OIDC for npm publishing — no long-lived tokens.
