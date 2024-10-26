import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-orange-mode-a5figmkr.us-east-2.aws.neon.tech",  // Database host
    database: "neondb",             // Replace with your actual database name
    user: "neondb_owner",           // Database username
    password: "CueYH6sORPn8",       // Database password
    ssl: true,                      // Use SSL if required
  },
  out: "./src/drizzle",
  verbose: true,
  strict: true,
});
