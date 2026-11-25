import { Card, Reveal, Section } from "@/components/ui";
import { rates, ratesNote } from "@/data";
import styles from "./Services.module.css";

export function RatesTable() {
  return (
    <Section id="rates" eyebrow="Rates" eyebrowTone="sage">
      <Reveal>
        <Card tone="outline" className={styles.tableCard}>
          <table className={styles.table}>
            <caption className={styles.srOnly}>Engagement types and rates</caption>
            <thead>
              <tr>
                <th scope="col">Engagement</th>
                <th scope="col">Rate</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row) => (
                <tr key={row.engagement}>
                  <th scope="row" data-label="Engagement" className={styles.engagement}>
                    {row.engagement}
                  </th>
                  <td data-label="Rate" className={styles.rate}>
                    {row.rate}
                  </td>
                  <td data-label="Notes">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <p className={styles.note}>{ratesNote}</p>
      </Reveal>
    </Section>
  );
}
