import { z } from "zod";

export const registerSchema = z.object({
  mail: z.string().trim(),
  password: z.string().trim(),
  phone: z.string().trim(),
});
