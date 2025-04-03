import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(3, "Job Title must be at least 3 characters"),
  description: z
    .string()
    .min(10, "Job Description must be at least 10 characters"),
  salary: z.coerce.number({
    message: "Invalid Salary format",
  }),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
  company: z.string().min(2, "Company Name is required"),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Invalid phone number")
    .optional(),
  email: z.string().email("Invalid email address"),
  tags: z.string().min(3, {
    message: "Tags must be at least 3 characters",
  }),
  company_website: z.string().url("Invalid URL format for company website"),
});
