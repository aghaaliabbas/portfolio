import { Section } from "@/components/ui";
import { steps } from "@/data";
import { NumberedCards } from "./NumberedCards";

export function HowItStarts() {
  return (
    <Section id="how-it-starts" eyebrow="How it starts">
      <NumberedCards items={steps} columns={3} />
    </Section>
  );
}
