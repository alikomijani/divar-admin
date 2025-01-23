import "server-only";
import { z } from "zod";

export const BadgeFormSchema = z.object({
  icon: z.string().url().trim(),
  title: z.string().min(1, "Title is required").trim(),
});

export type BadgeFormState =
  | {
      errors?: {
        icon?: string[];
        title?: string[];
      };
      message?: string;
    }
  | undefined;
