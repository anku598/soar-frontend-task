import { z } from 'zod'

export const profileFormSchema = z.object({
  yourName: z.string().min(2, 'Name must be at least 2 characters'),
  userName: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>
