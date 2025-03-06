import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Full Name must be at least 3 characters" })
      .trim(),
    email: z.string().email({ message: "Kindly provide a valid email" }).trim(),
    city: z
      .string()
      .min(3, { message: "City must be at least 3 characters" })
      .trim(),
    state: z
      .string()
      .min(3, { message: "State must be at least 3 characters" })
      .trim(),
    password: z
      .string()
      .min(3, { message: "Password must be at least 3 characters" }),
    passwordConfirmation: z
      .string()
      .min(3, {
        message: "Password Confirmation must be at least 3 characters",
      })
      .trim(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"], // Error will be associated with passwordConfirmation
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "Kindly provide a valid email" }).trim(),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" }),
});
