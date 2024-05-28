import { z } from "zod";

export const createBookingSchema = z.object({
    firstName: z
        .string()
        .nonempty({ message: "El nombre es obligatorio" }),
    lastName: z
        .string()
        .nonempty({ message: "El apellido es obligatorio" }),
    bookingTime: z
        .date()
        .default(() => new Date()),
    streetAddress: z
        .string()
        .nonempty({ message: "La dirección es obligatoria" }),
    bookingPrice: z
        .number()
        .nonnegative({ message: "El precio debe ser un número no negativo" }),
});

export const updateBookingSchema = createBookingSchema.deepPartial();