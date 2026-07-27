import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable("subscribers", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  status: text("status").notNull().default("active"),
  consentTimestamp: text("consent_timestamp").notNull(),
  acquisitionSource: text("acquisition_source").notNull(),
  careerStage: text("career_stage"),
  primaryGoal: text("primary_goal"),
  onboardingAnswer: text("onboarding_answer"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});
