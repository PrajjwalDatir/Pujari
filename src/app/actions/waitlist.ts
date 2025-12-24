"use server";

import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.string().email(),
  lookingFor: z.string(),
  ritualType: z.string(),
  location: z.string(),
});

export async function joinWaitlistAction(formData: z.infer<typeof waitlistSchema>) {
  try {
    // 1. Save to Supabase
    const { error: supabaseError } = await supabase.from("waitlist").insert([
      {
        email: formData.email,
        looking_for: formData.lookingFor,
        ritual_type: formData.ritualType,
        location: formData.location,
      },
    ]);

    if (supabaseError) throw supabaseError;

    // 2. Send Confirmation Email via Resend
    // Note: Using 'onboarding@resend.dev' as the sender for free tier testing
    const { error: resendError } = await resend.emails.send({
      from: 'Pujari <onboarding@resend.dev>',
      to: [formData.email],
      subject: 'You are on the Sacred Waitlist! 🙏',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #F97316;">Namaste,</h2>
          <p>Thank you for choosing <strong>Pujari</strong> for your spiritual needs.</p>
          <p>We have received your request for a <strong>${formData.ritualType}</strong> in <strong>${formData.location}</strong>.</p>
          <div style="background: #FFF7ED; padding: 15px; border-radius: 8px; border-left: 4px solid #F97316; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">Status: Searching for Verified Experts</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Our team is currently verifying the best ${formData.lookingFor} candidates in your area.</p>
          </div>
          <p>We will notify you via this email as soon as we have a match.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">Pujari - Bridging the ancient and the digital.</p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      // We don't throw here so the user still gets a success state for the DB part
    }

    return { success: true };
  } catch (error: any) {
    console.error("Waitlist Action Error:", error);
    return { success: false, error: error.message };
  }
}
