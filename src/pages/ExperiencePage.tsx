import { Download } from "lucide-react";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";
import { experienceHero, profile } from "@/data";
import { Facts, JobList, Projects, Skills } from "@/sections";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ExperiencePage() {
  usePageTitle("Experience");
  return (
    <>
      <PageHero {...experienceHero}>
        <Button href={profile.resumeUrl} target="_blank" variant="ghost" icon={<Download size={16} />}>
          Resume
        </Button>
      </PageHero>
      <JobList />
      <Skills />
      <Projects />
      <Facts />
      <ContactBand heading="Available immediately." circle="right">
        <Button href={profile.bookingUrl} target="_blank" variant="light">
          Book a 15-min call
        </Button>
        <Button href={`mailto:${profile.email}`} variant="light">
          {profile.email}
        </Button>
        <Button to="/services" variant="light">
          Rates and services
        </Button>
      </ContactBand>
    </>
  );
}
