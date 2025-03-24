import { integer } from 'drizzle-orm/pg-core';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const topScorer = pgTable('TOP_SCORER', {
   id: uuid('id').primaryKey().defaultRandom(),
   name: text('name').notNull(),
   tournament: text('tournament').notNull(),
   goalsScored: integer('goals_scored'),
   createdAt: timestamp('created_at').notNull().defaultNow(),
});
