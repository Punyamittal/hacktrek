import Image from "next/image";
import Link from "next/link";
import {
  Ban,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  Cog,
  Database,
  Earth,
  LineChart,
  RadioTower,
  ServerCog,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  Workflow,
  XCircle,
  Zap,
  type IconComponent,
} from "@/components/site/icons";
import { JudgingBars } from "@/components/site/judging-bars";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import { SectionTitle } from "@/components/site/section-title";
import { DEVPOST_REGISTER_URL } from "@/lib/site";

/** Stable Unsplash CDN URLs (ixlib required for reliable routing on images.unsplash.com). */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`;

const HERO_IMAGE = unsplash("photo-1677442136019-21780ecad995", 1200);
const ABOUT_IMAGE = unsplash("photo-1522071820081-009f0129c71c", 900);
const JUDGE_BG = unsplash("photo-1515187029135-18ee286d815b", 1000);

const themes: {
  Icon: IconComponent;
  title: string;
  text: string;
  bg: string;
  iconWrap: string;
  image: string;
}[] = [
  {
    Icon: Bot,
    title: "AI Agents",
    text: "Autonomous agents automating business workflows and repetitive tasks.",
    bg: "bg-violet-100",
    iconWrap: "bg-violet-200 text-violet-800",
    image: unsplash("photo-1485827404703-89b55fcc595e", 600),
  },
  {
    Icon: LineChart,
    title: "Predictive ML",
    text: "Forecasting, anomaly detection, and decision support with machine learning.",
    bg: "bg-teal-100",
    iconWrap: "bg-teal-200 text-teal-900",
    image: unsplash("photo-1551288049-bebda4e38f71", 600),
  },
  {
    Icon: BrainCircuit,
    title: "LLM Assistants",
    text: "Context-aware assistants powered by LLMs and retrieval pipelines.",
    bg: "bg-sky-100",
    iconWrap: "bg-sky-200 text-sky-900",
    image: unsplash("photo-1620712943543-bcc4688e7485", 600),
  },
  {
    Icon: Cog,
    title: "RPA + AI",
    text: "OCR, rules, and ML decisions in intelligent process automation.",
    bg: "bg-amber-100",
    iconWrap: "bg-amber-200 text-amber-900",
    image: unsplash("photo-1517694712202-684ddab9fb8d", 600),
  },
  {
    Icon: RadioTower,
    title: "Smart IoT",
    text: "Edge intelligence and adaptive automation on sensor-driven systems.",
    bg: "bg-rose-100",
    iconWrap: "bg-rose-200 text-rose-900",
    image: unsplash("photo-1461749280684-dccba630e2f6", 600),
  },
  {
    Icon: Earth,
    title: "Impact Domains",
    text: "Fintech, healthcare, cybersecurity, sustainability, and social innovation.",
    bg: "bg-lime-100",
    iconWrap: "bg-lime-200 text-lime-900",
    image: unsplash("photo-1451187580459-43490279c0fa", 600),
  },
];

const mandatoryList = [
  "Working prototype or deployed solution",
  "GitHub repository with quality documentation",
  "3-5 minute demo video",
  "Clear problem statement",
  "Architecture diagram",
  "ML model, automation workflow, tech stack, and impact explanation",
];

const bonusList = [
  "Live deployment",
  "Scalable architecture",
  "Real datasets",
  "Performance metrics",
  "Polished UI/UX",
];

const disallowedList = [
  "Purely theoretical ideas",
  "Recycled projects without meaningful improvements",
  "No-code solutions without technical depth",
];

const timeline = [
  { stage: "Registration Opens", date: "10 Jan 2026", color: "bg-violet-200" },
  { stage: "Hackathon Kickoff", date: "18 Jan 2026", color: "bg-teal-200" },
  { stage: "Submission Deadline", date: "21 Jan 2026", color: "bg-sky-200" },
  { stage: "Results Announcement", date: "24 Jan 2026", color: "bg-amber-200" },
];

const stats = [
  { icon: Clock, label: "Build sprint", value: "48 hours" },
  { icon: Sparkles, label: "Focus", value: "AI & automation" },
  { icon: Trophy, label: "Grand prize", value: "₹10,000" },
  { icon: UserRound, label: "Format", value: "Teams & solo" },
];

const buildTiles: { label: string; Icon: IconComponent }[] = [
  { label: "Data Pipelines", Icon: Database },
  { label: "Model Serving", Icon: ServerCog },
  { label: "Agentic Flows", Icon: Workflow },
  { label: "Automation", Icon: Zap },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#faf8ff] text-slate-800">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-8 sm:px-6">
        <Reveal className="pt-4" id="register">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col text-center lg:text-left">
              <p className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:justify-start">
                <Sparkles className="h-4 w-4 text-violet-500" aria-hidden />
                AI · ML · Automation hackathon
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                AI Automate 2026
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600 lg:mx-0 mx-auto">
                Build the Future with Machine Learning & Automation
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href={DEVPOST_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] min-w-[160px] items-center justify-center gap-2 rounded-2xl bg-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-violet-600"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                  Register Now
                </Link>
                <Link
                  href="#about"
                  className="flex min-h-[52px] min-w-[160px] items-center justify-center rounded-2xl border-2 border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-300 hover:bg-violet-50"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md">
              <Image
                src={HERO_IMAGE}
                alt="Abstract AI and neural network visualization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white p-4 text-center shadow-sm sm:flex-row sm:text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="text-sm font-bold text-slate-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="about">
          <SectionTitle eyebrow="About" title="What is AI Automate 2026?" />
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm">
              <Image
                src={ABOUT_IMAGE}
                alt="Developers collaborating on AI software"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <p className="text-slate-600 leading-relaxed">
                AI Automate 2026 is a high-intensity innovation sprint focused on solving real-world problems using Machine Learning, AI Agents, and Intelligent Automation.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Participants will build systems that can think, learn, decide, and act autonomously.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                <li className="flex gap-3">
                  <BrainCircuit className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" aria-hidden />
                  Ship a working prototype with a clear problem narrative.
                </li>
                <li className="flex gap-3">
                  <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden />
                  Show how automation and models fit together end to end.
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal id="themes">
          <SectionTitle
            eyebrow="Tracks"
            title="Themes"
            description="Each track pairs a clear focus with real imagery—pick where your team wants to make impact."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map(({ Icon, title, text, bg, iconWrap, image }) => (
              <article
                key={title}
                className={`flex flex-col overflow-hidden rounded-2xl border-2 border-slate-200/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${bg}`}
              >
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={image}
                    alt={`${title} track — supporting photography`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 text-center sm:text-left">
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl sm:mx-0 ${iconWrap}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="build">
          <SectionTitle eyebrow="Build Vision" title="What to Build" />
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-200 text-violet-800 lg:mx-0">
                <Sparkles className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="text-center text-xl font-bold text-slate-800 lg:text-left">
                Real-world impact
              </h3>
              <p className="mt-3 text-center text-slate-600 lg:text-left">
                Develop impactful AI/ML systems that automate workflows, enhance decision-making, and solve practical problems across industries.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Autonomous customer support and triage agents",
                  "Predictive maintenance and anomaly detection tools",
                  "Smart fraud detection and cybersecurity defense systems",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-200 text-teal-900 lg:mx-0">
                <Cog className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="text-center text-xl font-bold text-slate-800 lg:text-left">
                Automation + intelligence
              </h3>
              <p className="mt-3 text-center text-slate-600 lg:text-left">
                Blend model performance, system design, and automation orchestration to create scalable products, not just prototypes.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {buildTiles.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-teal-50 p-4 text-center"
                  >
                    <Icon className="h-6 w-6 text-teal-700" aria-hidden />
                    <span className="text-xs font-semibold text-teal-900">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="requirements">
          <SectionTitle eyebrow="Submission Rules" title="Submission Requirements" />
          <div className="grid gap-4 lg:grid-cols-3">
            <ChecklistCard
              title="Mandatory"
              items={mandatoryList}
              variant="violet"
              headerIcon={ClipboardList}
            />
            <ChecklistCard title="Bonus" items={bonusList} variant="teal" headerIcon={Star} />
            <ChecklistCard title="Not Allowed" items={disallowedList} variant="rose" headerIcon={Ban} />
          </div>
        </Reveal>

        <Reveal id="prizes">
          <SectionTitle eyebrow="Rewards" title="Prizes" />
          <div className="mx-auto max-w-lg">
            <div className="flex flex-col items-center rounded-2xl border-2 border-amber-300 bg-amber-100 p-10 text-center shadow-sm">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-200 text-amber-900">
                <Trophy className="h-12 w-12" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-900">
                1 Winner
              </p>
              <h3 className="mt-2 text-3xl font-extrabold text-amber-950 sm:text-4xl">
                ₹10,000 Grand Prize
              </h3>
            </div>
          </div>
        </Reveal>

        <Reveal id="judges">
          <SectionTitle eyebrow="Mentors & Judges" title="Judges Panel" />
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm">
            <div className="relative h-36 w-full">
              <Image
                src={JUDGE_BG}
                alt="Conference and collaboration atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 28rem"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
            </div>
            <div className="relative -mt-16 flex flex-col items-center px-8 pb-10 pt-0 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-violet-100 text-violet-700 shadow-md">
                <UserRound className="h-12 w-12" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="mt-4 text-xl font-bold text-slate-900">Ayush Vaish</p>
              <p className="mt-1 flex items-center gap-1.5 text-slate-600">
                <Sparkles className="h-4 w-4 text-violet-500" aria-hidden />
                Vellore Institute of Technology
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal id="criteria">
          <SectionTitle eyebrow="Evaluation" title="Judging Criteria" />
          <JudgingBars />
        </Reveal>

        <Reveal id="timeline">
          <SectionTitle eyebrow="Schedule" title="Timeline" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div
                key={item.stage}
                className={`flex flex-col items-center rounded-2xl border-2 border-slate-200 p-6 text-center shadow-sm ${item.color}`}
              >
                <CalendarDays className="mb-3 h-8 w-8 text-slate-700" aria-hidden />
                <p className="text-sm font-bold text-slate-800">{item.date}</p>
                <p className="mt-2 font-semibold text-slate-900">{item.stage}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </main>

      <footer className="border-t-2 border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-sm text-slate-600 sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">© 2026 AI Automate. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="font-medium hover:text-violet-600">
              X
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-medium hover:text-violet-600">
              LinkedIn
            </a>
            <a href={DEVPOST_REGISTER_URL} target="_blank" rel="noreferrer" className="font-medium hover:text-violet-600">
              Devpost
            </a>
            <a href="mailto:contact@aiautomate2026.dev" className="font-medium hover:text-violet-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChecklistCard({
  title,
  items,
  variant,
  headerIcon: HeaderIcon,
}: {
  title: string;
  items: string[];
  variant: "violet" | "teal" | "rose";
  headerIcon: IconComponent;
}) {
  const styles = {
    violet: "border-violet-200 bg-violet-50",
    teal: "border-teal-200 bg-teal-50",
    rose: "border-rose-200 bg-rose-50",
  }[variant];

  const accent = {
    violet: "text-violet-600",
    teal: "text-teal-600",
    rose: "text-rose-600",
  }[variant];

  return (
    <div className={`flex h-full flex-col rounded-2xl border-2 p-6 shadow-sm ${styles}`}>
      <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <HeaderIcon className={`h-6 w-6 ${accent}`} aria-hidden />
        <h3 className="text-center text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            {variant === "rose" ? (
              <XCircle className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} aria-hidden />
            ) : (
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} aria-hidden />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
