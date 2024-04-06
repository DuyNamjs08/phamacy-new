import { z } from "zod";

export const paymentSchema = z.object({
  address_line1: z.string().trim(),
  address_line2: z.string().trim(),
  city: z.string().trim(),
  state: z.string().trim(),
  country: z.string().trim(),
  phone: z.string().trim(),
  payment_method: z.string().trim(),
});
