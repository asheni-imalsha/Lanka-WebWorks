import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lanka WebWorks" },
      { name: "description", content: "How Lanka WebWorks collects, uses and protects your information." },
      { property: "og:title", content: "Privacy Policy — Lanka WebWorks" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const SECTIONS = [
  ["Information We Collect", "We collect information you provide directly — name, email, phone, project details — when you contact us or request a quote. We also collect basic analytics data (page views, device type) to improve our website."],
  ["How We Use Information", "Your information is used to respond to enquiries, deliver projects, send updates about your work, and occasionally share relevant studio news. We never sell your data."],
  ["Cookies", "Our website uses essential cookies for functionality and optional analytics cookies. You can opt out via your browser settings."],
  ["Third-Party Services", "We use trusted third-party tools (hosting providers, analytics, email services) that may process minimal data necessary to deliver our service. All partners are vetted for privacy compliance."],
  ["Data Security", "We use industry-standard security measures — SSL encryption, secure storage, and limited access — to protect your information."],
  ["Your Rights", "You may request access to, correction of, or deletion of your personal data at any time by emailing lankawebworks@gmail.com."],
  ["Children's Privacy", "Our services are not directed to anyone under 16. We don't knowingly collect data from minors."],
  ["Changes to This Policy", "We may update this policy from time to time. The latest version will always be available on this page."],
  ["Contact", "Questions about privacy? Email lankawebworks@gmail.com or call 072 991 1398."],
];

function Privacy() {
  return (
    <>
      <section className="container-edge pt-10 md:pt-16">
        <SectionLabel>LEGAL / PRIVACY</SectionLabel>
        <h1 className="mt-6 font-display text-[14vw] leading-[0.85] md:text-[8rem]">
          PRIVACY<br /><span className="text-foreground/30">POLICY.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">Last updated: {new Date().getFullYear()}. Plain English. No fine-print trickery.</p>
      </section>

      <section className="container-edge mt-16 grid gap-10 md:mt-20 md:grid-cols-[200px_1fr]">
        <nav className="sticky top-24 hidden h-fit md:block">
          <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">CONTENTS</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SECTIONS.map(([t], i) => (
              <li key={t}><a href={`#s${i}`} className="text-muted-foreground hover:text-foreground">{String(i + 1).padStart(2, "0")} · {t}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-12">
          {SECTIONS.map(([t, d], i) => (
            <section key={t} id={`s${i}`} className="border-l-2 border-foreground pl-6">
              <p className="font-heading text-[11px] tracking-[0.25em] text-muted-foreground">/ {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">{t}</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{d}</p>
            </section>
          ))}
        </div>
      </section>

      <div className="py-24" />
    </>
  );
}
