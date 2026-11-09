import { z } from 'zod';
 
export const employeeSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(30, 'First name must be 30 characters or less'),
 
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(30, 'Last name must be 30 characters or less'),
 
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\d{10}$/, 'Phone number must be 10 digits'),

  position: z
    .string()
    .min(2, 'Position must be at least 2 characters')
    .max(40, 'Position must be 40 characters or less'),
});
 
export type EmployeeFormData = z.infer<typeof employeeSchema>;
 