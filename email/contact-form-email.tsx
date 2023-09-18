import React from "react";
import {
  Html,
  Heading,
  Body,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>New Message from Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 rounded-md">
              <Heading className="leading-tight">
                You have recived the following email from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
