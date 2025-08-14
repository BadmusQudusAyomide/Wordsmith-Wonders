'use server';

import { z } from 'zod';

const emailSchema = z.string().email({ message: 'Invalid email address.' });

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const validatedEmail = emailSchema.safeParse(email);

  if (!validatedEmail.success) {
    return {
      message: validatedEmail.error.errors[0].message,
    };
  }
  
  // In a real application, you would add the email to your mailing list here.
  console.log(`New newsletter subscription: ${validatedEmail.data}`);

  return {
    message: "Thank you for subscribing!",
    success: true,
  };
}

const contactSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters."}),
    email: z.string().email({ message: 'Invalid email address.' }),
    message: z.string().min(10, {message: "Message must be at least 10 characters."})
})

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors and try again.',
        }
    }

    // In a real application, you would send an email or save to a database here.
    console.log("New contact form submission:", validatedFields.data);

    return {
        message: "Thank you for your message! We'll get back to you soon.",
        success: true,
    }
}
