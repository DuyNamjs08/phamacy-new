import { z } from "zod";

export const loginSchema = z.object({
  mail: z.string().trim(),
  password: z.string().trim(),
});
