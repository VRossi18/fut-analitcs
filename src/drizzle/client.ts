import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { topScorer } from './schema/top-scorer.schema';

export const pg = postgres('postgresql://docker:docker@localhost:5432/connect');
export const db = drizzle(pg, {
   schema: {
      topScorer,
   },
});
