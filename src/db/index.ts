import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Replace the environment variable with the hardcoded connection string
const sql = neon("postgresql://neondb_owner:CueYH6sORPn8@ep-orange-mode-a5figmkr.us-east-2.aws.neon.tech/neondb?sslmode=require");

export const db = drizzle(sql, { schema });
