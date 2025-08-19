export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-02";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

// Copy this file to env.ts and add your actual Sanity credentials
// Make sure to set these environment variables in your deployment platform:
// - NEXT_PUBLIC_SANITY_API_VERSION
// - NEXT_PUBLIC_SANITY_DATASET
// - NEXT_PUBLIC_SANITY_PROJECT_ID
