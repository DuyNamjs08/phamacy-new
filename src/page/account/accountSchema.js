import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim(),
  mail: z.string().trim(),
  address: z.string().trim(),
  phone: z.string().trim(),
  profession: z.string().trim(),
});
