import { z } from "zod";

export const submissionSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(1200),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;

