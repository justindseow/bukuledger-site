"use client";

import { useState } from "react";
import { WHATSAPP } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

interface Question {
  pill: string;
  pillBg: string;
  pillColor: string;
  q: string;
  opts: { text: string; score: number }[];
}

interface Profile {
  label: string;
  labelBg: string;
  labelColor: string;
  title: string;
  body: string;
  cta: string;
}

const questions: Question[] = [
  {
    pill: "Cash visibility",
    pillBg: "#E6F1FB",
    pillColor: "#0C447C",
    q: "Right now, how accurately can you estimate your cash position for the next 30 days?",
    opts: [
      { text: "Within RM 1,000 — I track this closely", score: 0 },
      { text: "Within RM 10,000 — roughly, yes", score: 1 },
      { text: "I'd have to check my accounts first", score: 2 },
      { text: "Honestly, I don't track this regularly", score: 3 },
    ],
  },
  {
    pill: "Record keeping",
    pillBg: "#EAF3DE",
    pillColor: "#27500A",
    q: "How are your business transactions currently being recorded?",
    opts: [
      { text: "Accounting software, updated regularly", score: 0 },
      { text: "Spreadsheets — mostly up to date", score: 1 },
      { text: "Mix of receipts, notes, and memory", score: 2 },
      { text: "My accountant sorts it out at tax time", score: 3 },
    ],
  },
  {
    pill: "Real cost of blind spots",
    pillBg: "#FAEEDA",
    pillColor: "#633806",
    q: "In the last 6 months, has a financial blind spot cost you — a late penalty, missed deadline, cash shortfall, or a pricing decision made without clear margin data?",
    opts: [
      { text: "No — my finances are well managed", score: 0 },
      { text: "Once, but I caught it in time", score: 1 },
      { text: "Yes, at least once", score: 2 },
      { text: "Probably more than I realise", score: 3 },
    ],
  },
];

const profiles: Profile[] = [
  {
    label: "In good shape",
    labelBg: "#EAF3DE",
    labelColor: "#27500A",
    title: "The organised founder",
    body: "You have solid visibility into your numbers — better than most SME owners at this stage. The risk is time: you're likely spending more hours on financial admin than necessary. That time has a real cost. The question isn't whether you need support, it's whether the current setup is the best use of your hours.",
    cta: "See how MacroByte can free up your time",
  },
  {
    label: "Some exposure",
    labelBg: "#FAEEDA",
    labelColor: "#633806",
    title: "The reactive manager",
    body: "Your business is likely running well — but your finances are slightly ahead of your visibility. Decisions are being made on feel rather than data, which works until it doesn't. One unexpected expense or late payment chain can create a cash crunch that's hard to recover from quickly. The good news: this is entirely fixable.",
    cta: "Find out what a cleaner setup looks like",
  },
  {
    label: "Needs attention",
    labelBg: "#FAECE7",
    labelColor: "#712B13",
    title: "The exposed operator",
    body: "There are real blind spots in your financial picture right now. This isn't unusual — most growing SMEs hit this stage. But left unaddressed, these gaps tend to compound: missed obligations, poor pricing, and cash flow surprises become harder to manage the longer the books stay unstructured.",
    cta: "Talk to MacroByte about getting structured",
  },
];

type Phase = "intro" | "quiz" | "result";

export default function HealthCheckPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function startQuiz() {
    setPhase("quiz");
  }

  function answer(score: number) {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setPhase("result");
    }
  }

  function restart() {
    setAnswers([]);
    setCurrent(0);
    setPhase("intro");
  }

  const progress =
    phase === "result" ? 100 : (current / questions.length) * 100;

  const total = answers.reduce((a, b) => a + b, 0);
  const profile =
    total <= 2 ? profiles[0] : total <= 5 ? profiles[1] : profiles[2];

  const waMsg = encodeURIComponent(
    `Hi, I just did the SME Health Check and got: ${profile.title}. I'd like to find out more.`
  );
  const waHref = `https://wa.me/${WHATSAPP}?text=${waMsg}`;

  const q = questions[current];

  return (
    <main id="main-content" className="page" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hc-wrap">

          {/* ── Intro ── */}
          {phase === "intro" && (
            <div>
              <p className="hc-eyebrow">MacroByte</p>
              <h1 className="page-title" style={{ marginBottom: 8 }}>
                SME Health Check
              </h1>
              <p className="page-lead" style={{ marginBottom: 28 }}>
                3 questions. Under 60 seconds. Find out where your business
                finances might be exposed.
              </p>
              <button className="hc-start-btn" onClick={startQuiz}>
                Start the check
              </button>
            </div>
          )}

          {/* ── Quiz ── */}
          {phase === "quiz" && (
            <div>
              <div className="hc-progress-bar">
                <div
                  className="hc-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="hc-q-card">
                <span
                  className="hc-pill"
                  style={{ background: q.pillBg, color: q.pillColor }}
                >
                  {q.pill}
                </span>
                <p className="hc-q-text">{q.q}</p>
                <div>
                  {q.opts.map((opt) => (
                    <button
                      key={opt.text}
                      className="hc-opt"
                      onClick={() => answer(opt.score)}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>

              <p className="hc-q-counter">
                Question {current + 1} of {questions.length}
              </p>
            </div>
          )}

          {/* ── Result ── */}
          {phase === "result" && (
            <div className="hc-result-card">
              <span
                className="hc-pill"
                style={{ background: profile.labelBg, color: profile.labelColor }}
              >
                {profile.label}
              </span>
              <p className="hc-result-title">{profile.title}</p>
              <p className="hc-result-body">{profile.body}</p>
              <hr className="hc-result-divider" />
              <p className="hc-result-note">
                MacroByte works with Malaysian SMEs at exactly this stage.
              </p>
              <a
                href={waHref}
                className="hc-cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.cta} → WhatsApp us
              </a>
              <button className="hc-restart-btn" onClick={restart}>
                Retake the check
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
