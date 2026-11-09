import { z } from 'zod';

export const signInSchema=z.object({
    email: z.email("Invalid E-Mail").trim(),
    password: z.string().min(8, "Password must be longer than 8 characters").nonempty("This field is required"),
});

export type SignInForm=z.infer<typeof signInSchema>