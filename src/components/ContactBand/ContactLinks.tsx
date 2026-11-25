import { CalendarDays, Mail, Phone } from "lucide-react";
import { Button, SocialIcon } from "@/components/ui";
import { profile } from "@/data";

/** Contact pills for the terracotta band. All use the light variant so small text stays AA-contrast. */
export function ContactLinks({ phone = true }: { phone?: boolean }) {
  const linkedin = profile.socials.find((s) => s.id === "linkedin");
  const upwork = profile.socials.find((s) => s.id === "upwork");
  return (
    <>
      <Button href={profile.bookingUrl} target="_blank" variant="light" icon={<CalendarDays size={16} />}>
        Book a 15-min call
      </Button>
      <Button href={`mailto:${profile.email}`} variant="light" icon={<Mail size={16} />}>
        {profile.email}
      </Button>
      {linkedin && (
        <Button href={linkedin.href} target="_blank" variant="light" icon={<SocialIcon id="linkedin" size={16} />}>
          LinkedIn
        </Button>
      )}
      {upwork && (
        <Button href={upwork.href} target="_blank" variant="light" icon={<SocialIcon id="upwork" size={16} />}>
          Upwork
        </Button>
      )}
      {phone && (
        <Button href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} variant="light" icon={<Phone size={16} />}>
          {profile.phone}
        </Button>
      )}
    </>
  );
}
