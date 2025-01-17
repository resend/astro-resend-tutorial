import type { APIRoute } from "astro";
import { Resend } from "resend";
import SampleEmail from "../../emails/sampleEmail";
import { render } from "@react-email/render";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  // create the email
  const emailContent = SampleEmail({ username: "Chris" });
  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true,
  });

  // send an email
  const { data, error } = await resend.emails.send({
    from: "YOUR_NAME <YOUR_EMAIL@YOUR_DOMAIN>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html,
    text,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};
