import { ContactBand, ContactLinks } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { portrait, servicesHero } from "@/data";
import { HowItStarts, RatesTable, ServiceList } from "@/sections/services";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ServicesPage() {
  usePageTitle("Services and rates");
  return (
    <>
      <PageHero {...servicesHero} photo={portrait} />
      <ServiceList />
      <RatesTable />
      <HowItStarts />
      <ContactBand heading="Start with the call.">
        <ContactLinks phone={false} />
      </ContactBand>
    </>
  );
}
