import { ContactBand, ContactLinks } from "@/components/ContactBand";
import { Engagement, HomeHero, OwnProjects, RoleHistory, SelectedWork, StatStrip } from "@/sections/home";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  return (
    <>
      <HomeHero />
      <StatStrip />
      <SelectedWork />
      <OwnProjects />
      <RoleHistory />
      <Engagement />
      <ContactBand id="contact" heading="Tell me the problem. Consultation is absolutely free.">
        <ContactLinks />
      </ContactBand>
    </>
  );
}
