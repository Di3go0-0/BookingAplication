import {z} from 'zod';

export const registerSchema = z.object({
    email: z.string({
        required_error: "The email is required",
    }).email({ message: "The email is invalid" }),
    pass: z
        .string({
            required_error: "The password is required",
        })
        .min(4, {
            message: "The password must be at least 4 characters long",
        }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "The email is required",
    }).email({ message: "The email is invalid" }),
    pass: z.string({
        required_error: "The password is required",
    }),
});