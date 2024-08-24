import { EmailTemplate } from "@/components/email/EmailTemplate";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption, phoneNumber } =
      await req.json();

    // Send email to support
    const data = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: ["info@forcefinancecoin.com"],
      subject: "Customer Inquiry",
      react: EmailTemplate({
        name,
        email,
        message,
        selectedOption,
        phoneNumber,
      }),
    });

    const data2 = await resend.emails.send({
      from: "forcefinancecoin@forcefinancecoin.com",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate({ name, selectedOption }),
    });

    return NextResponse.json({ message: "method allowed" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
