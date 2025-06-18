import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username?: string;
  url?: string;
}

export const VerificationEmail = ({
  username,
  url,
}: VerificationEmailProps) => {
  const previewText = `Verify your email to activate your BeatShare account`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans px-4 my-auto mx-auto">
          <Container className="border border-solid border-[#eaeaea] rounded-md my-10 mx-auto p-6 max-w-xl">
            <Heading className="text-black text-2xl font-bold text-center mb-4">
              Verify your email address
            </Heading>

            <Text className="text-black text-base leading-relaxed">
              Hi {username ?? "there"},
            </Text>

            <Text className="text-black text-base leading-relaxed">
              Thank you for signing up for <strong>BeatShare</strong>. To get
              started, please verify your email address by clicking the button
              below.
            </Text>

            <Section className="text-center my-8">
              <Button
                className="bg-[#000000] rounded-md text-white text-sm font-medium px-5 py-3 no-underline"
                href={url}
              >
                Verify Email
              </Button>
            </Section>

            <Text className="text-black text-base leading-relaxed">
              If the button above doesn&apos;t work, copy and paste the
              following link into your browser:
            </Text>
            <Text className="text-blue-600 text-sm break-words">
              <Link href={url}>{url}</Link>
            </Text>

            <Hr className="border-t border-gray-300 my-6" />

            <Text className="text-gray-600 text-xs leading-relaxed">
              This email was sent to{" "}
              <span className="text-black">{username ?? "your address"}</span>.
              If you didn&apos;t sign up for BeatShare, you can safely ignore
              this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export function reactVerificationEmail(props: VerificationEmailProps) {
  return <VerificationEmail {...props} />;
}
