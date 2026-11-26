import { ContactBand, ContactLinks } from "@/components/ContactBand";
import { Engagement, HomeHero, RoleHistory, SelectedWork, StatStrip } from "@/sections/home";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  return (
    <>
      <HomeHero />
      <StatStrip />
      <SelectedWork />
      <RoleHistory />
      <Engagement />
      <ContactBand id="contact" heading="Tell me the problem. First fifteen minutes are free.">
        <ContactLinks />
      </ContactBand>
    </>
  );
}
