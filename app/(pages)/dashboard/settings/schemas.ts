// schemas.ts
import { z } from 'zod';

export const updateProfileSchema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address'),
});
