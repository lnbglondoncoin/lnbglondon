import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption, phoneNumber } =
      await req.json();
    const data = await resend.emails.send({
      from: "LNBG <noreply@lnbglondon.com>",
      to: ["info@lnbglondon.com"],
      subject: selectedOption,
      react: EmailTemplate({
        name,
        email,
        message,
        selectedOption,
        phoneNumber,
      }),
    });

    const data2 = await resend.emails.send({
      from: "LNBG <noreply@lnbglondon.com>",
      to: [email],
      subject: selectedOption,
      react: UserEmailTemplate({ name, selectedOption }),
    });

    if (data.error === null && data2.error === null) {
      return NextResponse.json({ message: "success" });
    }
    return NextResponse.json({ message: "something went wrong" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}

const EmailTemplate = ({
  name,
  email,
  message,
  selectedOption,
  phoneNumber,
}) => (
  <div>
    <p>From: {name}</p>
    <p>Email: {email}</p>
    <p>PhoneNumber: {phoneNumber}</p>
    <p>Inquiry About: {selectedOption}</p>
    <br />
    <p className="mt-28">Message Body:</p>
    <p>{message}</p>
    <p className="mt-12">--</p>
    <p>
      This email was sent from a contact form on lnbglondon.com
      (https://www.lnbglondon.com)
    </p>
  </div>
);

const UserEmailTemplate = ({ name, selectedOption }) => (
  <div>
    <p>Subject: {selectedOption}</p>
    <p>Customer Name: Dear {name}</p>
    <br />
    <br />
    <p className="mt-28">Message Body:</p>
    <p>
      Thanks you for your interest in LNBG London. One our support
      representative will contact you shortly.
    </p>
    <br />
    <p className="mt-12">--</p>
    <p>
      Regards
      <br />
      <br />
      LNBG London <br />
      Defi Financial Solutions <br />
      Mail: noreply@lnbglondon.com
    </p>
    <br />
    <br />
    <p>
      This email was sent from a contact form on lnbglondon.com
      (https://www.lnbglondon.com)
    </p>
  </div>
);
