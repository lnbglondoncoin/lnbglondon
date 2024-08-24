import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption, phoneNumber } =
      await req.json();

    // Send email to support
    // const data = await resend.emails.send({
    //   from: "lnbglondon@lnbglondon.com",
    //   to: ["info@lnbglondon.com"],
    //   subject: "Customer Inquiry",
    //   react: EmailTemplate({
    //     name,
    //     email,
    //     message,
    //     selectedOption,
    //     phoneNumber,
    //   }),
    // });
    const data = await resend.emails.send({
      from: "LNBG <onboarding@resend.dev>",
      to: ["lnbg@lnbglondon.com"],
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
      from: "LNBG <onboarding@resend.dev>",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate({ name, selectedOption }),
    });

    console.log("DATA", data, data2);

    return NextResponse.json({ message: "method allowed" });
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
      Address: Laurier Ave w, 629, Ottawa, ON K1P 5J2, Canada
      <br />
      Mail: info@lnbglondon.com
    </p>
    <br />
    <br />
    <p>
      This email was sent from a contact form on lnbglondon.com
      (https://www.lnbglondon.com)
    </p>
  </div>
);
