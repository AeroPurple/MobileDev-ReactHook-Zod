import { z } from 'zod';

// Calculate a password's entropy
function calculateEntropy(password: string): number {
    let range = 0; // The amount of possible characters in our password
    if (/[a-z]/.test(password)) range += 26; // a-z, 26 characters
    if (/[A-Z]/.test(password)) range += 26; // A-Z, 26 characters
    if (/[0-9]/.test(password)) range += 10; // 0-9, 10 characters
    if (/[^A-Za-z0-9]/.test(password)) range += 32; // Although more than 32 characters are checked here, we will assume only characters on a standard keyboard
    return password.length * Math.log2(range); // Formula from https://proton.me/blog/what-is-password-entropy
}

export const signUpSchema = z.object({
    fullname: z.string().trim().nonempty(), // Although rare, there are people with 1-letter names
    email: z.email().trim(),
    password: z.string().min(8).refine((val) => calculateEntropy(val) >= 60, {
        error: (iss) => `Your password contains ${calculateEntropy(iss.input as string)} bits of entropy, but must contain 60 or more`
    }),
    confirmPassword: z.string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
});
