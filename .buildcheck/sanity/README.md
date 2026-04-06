# Sanity Configuration

## Environment Setup

The `env.ts` file contains sensitive Sanity configuration and is **not committed to the repository** for security reasons.

### Required Environment Variables

Set these environment variables in your deployment platform (Vercel, Netlify, etc.):

```bash
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-02
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
```

### Local Development

1. Copy `env.example.ts` to `env.ts`
2. Add your Sanity credentials to `env.ts`
3. The file will work locally but won't be committed to git

### Why This Approach?

- **Security**: Keeps sensitive Sanity credentials private
- **Deployment**: Environment variables are set in your hosting platform
- **Team Development**: Other developers can see what variables are needed via `env.example.ts`
- **No Code Changes**: Your application code doesn't need to change

### File Structure

- `env.ts` - Contains actual credentials (gitignored)
- `env.example.ts` - Template showing required structure
- `README.md` - This documentation
