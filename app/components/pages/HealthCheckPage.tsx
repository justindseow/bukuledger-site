"use client";

import { useState } from "react";
import { WHATSAPP } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Theme =
  | "cash"
  | "records"
  | "receivables"
  | "payables"
  | "payroll"
  | "compliance"
  | "decisions";

interface Question {
  theme: Theme;
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

// ─────────────────────────────────────────────────────────────────────────────
// Question pool — 3 variants per theme × 7 themes = 21 questions
// Different RM amounts, time horizons, and scenarios baked into each variant.
// Each session picks 1 randomly per theme → 3⁷ = 2,187 possible combinations.
// ─────────────────────────────────────────────────────────────────────────────

const pool: Question[] = [

  // ── 1. Cash clarity ────────────────────────────────────────────────────────
  {
    theme: "cash", pill: "Cash clarity",
    pillBg: "#E6F1FB", pillColor: "#0C447C",
    q: "It's a random Tuesday, no apps open. Ballpark — what's your business cash balance right now?",
    opts: [
      { text: "Within RM 2,000 — I track this daily", score: 0 },
      { text: "Roughly yes, within RM 10–20k", score: 1 },
      { text: "I'd need to open my banking app first", score: 2 },
      { text: "Genuinely no idea without checking", score: 3 },
    ],
  },
  {
    theme: "cash", pill: "Cash clarity",
    pillBg: "#E6F1FB", pillColor: "#0C447C",
    q: "A surprise RM 8,000 expense lands on your desk next week. Within 10 minutes, do you know if your business can absorb it?",
    opts: [
      { text: "Yes — I'd know immediately from my records", score: 0 },
      { text: "Probably yes, with some quick rough math", score: 1 },
      { text: "I'd need a day or two to work it out", score: 2 },
      { text: "I'd just hope for the best, honestly", score: 3 },
    ],
  },
  {
    theme: "cash", pill: "Cash clarity",
    pillBg: "#E6F1FB", pillColor: "#0C447C",
    q: "Your business partner calls and asks: \"How much cash do we actually have?\" How fast can you answer — accurately?",
    opts: [
      { text: "Immediately, without checking anything", score: 0 },
      { text: "Give me 5 minutes to pull it up", score: 1 },
      { text: "I'd need to check the accounts properly", score: 2 },
      { text: "I'd be guessing if I answered right now", score: 3 },
    ],
  },

  // ── 2. Record keeping ──────────────────────────────────────────────────────
  {
    theme: "records", pill: "Your books",
    pillBg: "#EAF3DE", pillColor: "#27500A",
    q: "Your accountant needs last month's records by tomorrow. Your honest reaction?",
    opts: [
      { text: "Already done — it's filed and current", score: 0 },
      { text: "No problem, give me an hour", score: 1 },
      { text: "Okay. Mild panic. But I'll get there.", score: 2 },
      { text: "...I need to find my accountant first.", score: 3 },
    ],
  },
  {
    theme: "records", pill: "Your books",
    pillBg: "#EAF3DE", pillColor: "#27500A",
    q: "How long would it take to produce a clean record of this year's transactions — starting right now?",
    opts: [
      { text: "A few hours — I maintain this monthly", score: 0 },
      { text: "A few days of pulling things together", score: 1 },
      { text: "Weeks, and it would be stressful", score: 2 },
      { text: "I'd need outside help just to start", score: 3 },
    ],
  },
  {
    theme: "records", pill: "Your books",
    pillBg: "#EAF3DE", pillColor: "#27500A",
    q: "Someone asks to see your Profit & Loss for last quarter. How quickly can you produce it?",
    opts: [
      { text: "Minutes — it's already prepared monthly", score: 0 },
      { text: "Same day, I can put it together", score: 1 },
      { text: "A few days of work at least", score: 2 },
      { text: "I'd have to ask my accountant to build one from scratch", score: 3 },
    ],
  },

  // ── 3. Accounts receivable ─────────────────────────────────────────────────
  {
    theme: "receivables", pill: "Money owed to you",
    pillBg: "#EDE9FE", pillColor: "#3730A3",
    q: "Right now, how much do customers owe your business across all outstanding invoices?",
    opts: [
      { text: "I know the exact figure", score: 0 },
      { text: "Within RM 5,000 or so", score: 1 },
      { text: "Rough ballpark only", score: 2 },
      { text: "I'd have to dig to find out", score: 3 },
    ],
  },
  {
    theme: "receivables", pill: "Money owed to you",
    pillBg: "#EDE9FE", pillColor: "#3730A3",
    q: "Do you know which customer has your oldest unpaid invoice right now — and how overdue it is?",
    opts: [
      { text: "Yes — I monitor this at least monthly", score: 0 },
      { text: "Roughly yes, I have a general idea", score: 1 },
      { text: "I'd need to run a report to check", score: 2 },
      { text: "No — I don't track this actively", score: 3 },
    ],
  },
  {
    theme: "receivables", pill: "Money owed to you",
    pillBg: "#EDE9FE", pillColor: "#3730A3",
    q: "A customer says they paid you 3 weeks ago. Can you verify it immediately — without calling anyone?",
    opts: [
      { text: "Yes — I'd check my records instantly", score: 0 },
      { text: "Probably, give me a few minutes", score: 1 },
      { text: "I'd need some time to trace it through my records", score: 2 },
      { text: "That would require quite a bit of digging", score: 3 },
    ],
  },

  // ── 4. Accounts payable ────────────────────────────────────────────────────
  {
    theme: "payables", pill: "What you owe",
    pillBg: "#FEF3C7", pillColor: "#78350F",
    q: "Without checking, how much does your business currently owe suppliers in outstanding invoices?",
    opts: [
      { text: "I know the exact figure", score: 0 },
      { text: "Within RM 5,000 or so", score: 1 },
      { text: "Rough ballpark only", score: 2 },
      { text: "Honestly, I'm not sure right now", score: 3 },
    ],
  },
  {
    theme: "payables", pill: "What you owe",
    pillBg: "#FEF3C7", pillColor: "#78350F",
    q: "What's your largest supplier payment due in the next two weeks? Do you know the amount and due date?",
    opts: [
      { text: "Yes — I track all upcoming payments", score: 0 },
      { text: "I have a rough idea", score: 1 },
      { text: "I'd need to check emails or receipts", score: 2 },
      { text: "I wouldn't know until it's due", score: 3 },
    ],
  },
  {
    theme: "payables", pill: "What you owe",
    pillBg: "#FEF3C7", pillColor: "#78350F",
    q: "A supplier calls claiming you're 30 days overdue. How quickly can you verify — or dispute — that?",
    opts: [
      { text: "Immediately — I track all payables", score: 0 },
      { text: "Within the hour, after checking my records", score: 1 },
      { text: "It would take a day to piece together", score: 2 },
      { text: "That would require some serious investigation", score: 3 },
    ],
  },

  // ── 5. Payroll ─────────────────────────────────────────────────────────────
  {
    theme: "payroll", pill: "Payroll",
    pillBg: "#FCE7F3", pillColor: "#831843",
    q: "Do you know your exact total monthly payroll cost — salary, EPF, SOCSO, EIS, and PCB combined?",
    opts: [
      { text: "Yes, to the ringgit", score: 0 },
      { text: "Within RM 500 or so", score: 1 },
      { text: "Roughly — I know the salary part at least", score: 2 },
      { text: "I rely on my accountant to sort this out", score: 3 },
    ],
  },
  {
    theme: "payroll", pill: "Payroll",
    pillBg: "#FCE7F3", pillColor: "#831843",
    q: "If you hired one more person at RM 4,000/month, would you know today — without help — whether the business can support it?",
    opts: [
      { text: "Yes — I'd know from my current margins", score: 0 },
      { text: "Probably, with some quick calculations", score: 1 },
      { text: "I'd need help working that out properly", score: 2 },
      { text: "I'd be guessing, honestly", score: 3 },
    ],
  },
  {
    theme: "payroll", pill: "Payroll",
    pillBg: "#FCE7F3", pillColor: "#831843",
    q: "Last payroll run — were all statutory contributions (EPF, SOCSO, PCB) calculated correctly and submitted on time?",
    opts: [
      { text: "Yes — I'm confident of this", score: 0 },
      { text: "I believe so — my accountant handles it", score: 1 },
      { text: "I'm not 100% sure, now that you ask", score: 2 },
      { text: "Honestly, I don't know the current status", score: 3 },
    ],
  },

  // ── 6. Tax & compliance ────────────────────────────────────────────────────
  {
    theme: "compliance", pill: "Tax & compliance",
    pillBg: "#FAEEDA", pillColor: "#633806",
    q: "What's your next tax or statutory filing deadline — SST, income tax, or otherwise? Off the top of your head?",
    opts: [
      { text: "I know the exact date", score: 0 },
      { text: "I know roughly when it falls", score: 1 },
      { text: "I'd have to check my calendar or ask someone", score: 2 },
      { text: "I'm genuinely not sure what's coming up", score: 3 },
    ],
  },
  {
    theme: "compliance", pill: "Tax & compliance",
    pillBg: "#FAEEDA", pillColor: "#633806",
    q: "In the last 12 months, have you been late or received a penalty on any tax or statutory filing?",
    opts: [
      { text: "No — we've always filed on time", score: 0 },
      { text: "Once, but it was minor and quickly resolved", score: 1 },
      { text: "Yes, at least once", score: 2 },
      { text: "Probably more than I realise", score: 3 },
    ],
  },
  {
    theme: "compliance", pill: "Tax & compliance",
    pillBg: "#FAEEDA", pillColor: "#633806",
    q: "If LHDN requested your business records from 2 years ago tomorrow, how confident are you in what you'd hand over?",
    opts: [
      { text: "Very confident — it's all properly filed", score: 0 },
      { text: "Fairly confident, with a few gaps", score: 1 },
      { text: "It would take significant effort to compile", score: 2 },
      { text: "That scenario genuinely worries me", score: 3 },
    ],
  },

  // ── 7. Decision quality ────────────────────────────────────────────────────
  {
    theme: "decisions", pill: "Data vs gut",
    pillBg: "#FAECE7", pillColor: "#712B13",
    q: "Think of a pricing decision from the last 6 months. What actually drove the number?",
    opts: [
      { text: "Clear margin data — I knew my costs exactly", score: 0 },
      { text: "Competitive research plus rough margin math", score: 1 },
      { text: "Gut feel and what the market might accept", score: 2 },
      { text: "What felt right. Is there another way?", score: 3 },
    ],
  },
  {
    theme: "decisions", pill: "Data vs gut",
    pillBg: "#FAECE7", pillColor: "#712B13",
    q: "In the last quarter, have you made a hiring or spending call — and only afterwards wondered if the numbers actually supported it?",
    opts: [
      { text: "No — I always review the numbers first", score: 0 },
      { text: "Once, but I validated it soon after", score: 1 },
      { text: "A couple of times, if I'm honest", score: 2 },
      { text: "...is there another way to run a business?", score: 3 },
    ],
  },
  {
    theme: "decisions", pill: "Data vs gut",
    pillBg: "#FAECE7", pillColor: "#712B13",
    q: "Business had a strong month. How do you decide whether to reinvest, save, or pay yourself more?",
    opts: [
      { text: "Based on cash flow data and forward projections", score: 0 },
      { text: "Based on how the business feels plus rough math", score: 1 },
      { text: "Whatever seems sensible after the bills are paid", score: 2 },
      { text: "I usually just let it sit and figure it out later", score: 3 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Result profiles — 4 tiers, raw score 0–21 (lower = better)
// Displayed clarity score = 21 - raw (higher = better, for gamification)
// ─────────────────────────────────────────────────────────────────────────────

const profiles: Profile[] = [
  {
    // raw 0–5 → clarity 16–21
    label: "Top tier · Financial clarity",
    labelBg: "#EAF3DE",
    labelColor: "#27500A",
    title: "The CFO Founder",
    body: "Rare. Genuinely rare. You're running on data, not gut — and your answers came fast. Most SME owners at your stage can't do that. The gap isn't your financial awareness; it's time. You're likely spending more hours maintaining those numbers than necessary. That overhead has a real opportunity cost.",
    cta: "See how MacroByte frees up your time",
  },
  {
    // raw 6–10 → clarity 11–15
    label: "Mostly in control",
    labelBg: "#E6F1FB",
    labelColor: "#0C447C",
    title: "The Capable Operator",
    body: "Your business is working and your finances are mostly keeping pace. You're making calls on experience and instinct more than data — which works fine, until one rough month shifts the equation. The gap between where you are and fully in control is smaller than you think. One clean system closes it.",
    cta: "Find out what closing that gap looks like",
  },
  {
    // raw 11–15 → clarity 6–10
    label: "Flying partially blind",
    labelBg: "#FAEEDA",
    labelColor: "#633806",
    title: "The Gut Pilot",
    body: "Pattern recognition is your accounting software — and honestly, it's gotten you this far. But you're making real decisions on incomplete information, which creates invisible risk. It tends to stay invisible right up until it isn't. The good news: your instincts are sound. The numbers just need to catch up.",
    cta: "Find out what a cleaner setup looks like",
  },
  {
    // raw 16–21 → clarity 0–5
    label: "Needs attention · Real exposure",
    labelBg: "#FAECE7",
    labelColor: "#712B13",
    title: "The Brave Improviser",
    body: "You're keeping a business alive through sheer drive and pattern recognition. That's genuinely impressive. But you're navigating without instruments — and the gaps in your financial picture tend to compound quietly. Missed obligations, mispriced work, and cash surprises get harder to absorb the longer the books stay unstructured.",
    cta: "Talk to MacroByte about getting structured",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const THEMES: Theme[] = [
  "cash", "records", "receivables", "payables", "payroll", "compliance", "decisions",
];
const MAX_SCORE = THEMES.length * 3; // 21

function pickQuestions(): Question[] {
  return THEMES.map((theme) => {
    const group = pool.filter((q) => q.theme === theme);
    return group[Math.floor(Math.random() * group.length)];
  });
}

function getProfile(total: number): Profile {
  if (total <= 5)  return profiles[0];
  if (total <= 10) return profiles[1];
  if (total <= 15) return profiles[2];
  return profiles[3];
}

type Phase = "intro" | "quiz" | "result";

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function HealthCheckPage() {
  const [questions, setQuestions] = useState<Question[]>(pickQuestions);
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function startQuiz() {
    setPhase("quiz");
  }

  function answer(score: number) {
    const next = [...answers, score];
    setAnswers(next);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setPhase("result");
    }
  }

  function restart() {
    setQuestions(pickQuestions()); // fresh random set every retry
    setAnswers([]);
    setCurrent(0);
    setPhase("intro");
  }

  const total = answers.reduce((a, b) => a + b, 0);
  const profile = getProfile(total);
  const progress =
    phase === "result" ? 100 : (current / questions.length) * 100;

  const waMsg = encodeURIComponent(
    `Hi MacroByte — I just did the SME Health Check and got "${profile.title}". I'd like to find out more.`
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
              <h1 className="page-title" style={{ marginBottom: 10 }}>
                SME Health Check
              </h1>
              <p className="page-lead" style={{ marginBottom: 6 }}>
                Most founders score lower than they expect.
              </p>
              <p className="page-lead" style={{ marginBottom: 28, fontSize: 15 }}>
                7 questions across the areas that quietly make or break a
                business. Find out your financial type — and your score out of {MAX_SCORE}.
              </p>
              <button className="hc-start-btn" onClick={startQuiz}>
                Find out your type →
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
              <p className="hc-result-pre">Your financial type</p>
              <p className="hc-result-title">{profile.title}</p>
              <span
                className="hc-pill"
                style={{
                  background: profile.labelBg,
                  color: profile.labelColor,
                  display: "inline-block",
                  marginBottom: 18,
                }}
              >
                {profile.label}
              </span>

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
                Retake with a different set of questions
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
