"use client";

import { useState } from "react";
import { WHATSAPP } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

interface Question {
  group: "cash" | "books" | "decisions";
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

// ── Question pool: 2 per theme, one picked randomly per session ───────────────
const questionPool: Question[] = [
  // Cash clarity
  {
    group: "cash",
    pill: "Cash clarity",
    pillBg: "#E6F1FB",
    pillColor: "#0C447C",
    q: "It's a random Tuesday, no apps open. Ballpark — what's your business cash balance right now?",
    opts: [
      { text: "Within RM 2,000 — I track this daily", score: 0 },
      { text: "Ballpark yes, within RM 10–20k", score: 1 },
      { text: "I'd need to open my banking app first", score: 2 },
      { text: "Genuinely no idea without checking", score: 3 },
    ],
  },
  {
    group: "cash",
    pill: "Cash clarity",
    pillBg: "#E6F1FB",
    pillColor: "#0C447C",
    q: "A surprise RM 8,000 expense lands on your desk next week. Within 10 minutes, do you know if your business can absorb it?",
    opts: [
      { text: "Yes — I'd know immediately from my records", score: 0 },
      { text: "Probably yes, with some quick rough math", score: 1 },
      { text: "I'd need a day or two to work it out", score: 2 },
      { text: "I'd just hope for the best, honestly", score: 3 },
    ],
  },

  // Your books
  {
    group: "books",
    pill: "Your books",
    pillBg: "#EAF3DE",
    pillColor: "#27500A",
    q: "Your accountant messages: \"I need last month's records by tomorrow.\" Your honest reaction?",
    opts: [
      { text: "Already done — it's filed and current", score: 0 },
      { text: "No problem, give me an hour", score: 1 },
      { text: "Okay. Mild panic. But I'll get there.", score: 2 },
      { text: "...I need to find my accountant first.", score: 3 },
    ],
  },
  {
    group: "books",
    pill: "Your books",
    pillBg: "#EAF3DE",
    pillColor: "#27500A",
    q: "How long would it take to produce a clean record of this year's business transactions — right now, today?",
    opts: [
      { text: "A few hours — I maintain this monthly", score: 0 },
      { text: "A few days of pulling things together", score: 1 },
      { text: "Weeks, and it would be stressful", score: 2 },
      { text: "I'd need outside help just to start", score: 3 },
    ],
  },

  // The gut test
  {
    group: "decisions",
    pill: "The gut test",
    pillBg: "#FAEEDA",
    pillColor: "#633806",
    q: "Think of a pricing or spending decision you made in the last 6 months. What actually drove it?",
    opts: [
      { text: "Clear margin data — I knew my costs exactly", score: 0 },
      { text: "Competitive research plus rough math", score: 1 },
      { text: "Gut feel and what the market might accept", score: 2 },
      { text: "What felt right. Is there another way?", score: 3 },
    ],
  },
  {
    group: "decisions",
    pill: "The gut test",
    pillBg: "#FAEEDA",
    pillColor: "#633806",
    q: "In the last quarter, have you made a hiring or spending call — and only afterwards wondered if the numbers supported it?",
    opts: [
      { text: "No — I always check the numbers first", score: 0 },
      { text: "Once, but I validated it soon after", score: 1 },
      { text: "A couple of times, if I'm honest", score: 2 },
      { text: "...is there another way to run a business?", score: 3 },
    ],
  },
];

// ── Result profiles ───────────────────────────────────────────────────────────
const profiles: Profile[] = [
  {
    label: "Top 10% of SME owners",
    labelBg: "#EAF3DE",
    labelColor: "#27500A",
    title: "The Numbers Founder",
    body: "Rare. Genuinely rare. You're running on data, not gut — and you answered fast. Most founders at your stage can't do that. The gap isn't your financial awareness; it's time. You're probably spending more hours on the admin behind those numbers than you should. That overhead has a real cost.",
    cta: "See how MacroByte frees up your time",
  },
  {
    label: "Where most founders land",
    labelBg: "#FAEEDA",
    labelColor: "#633806",
    title: "The Capable Operator",
    body: "Your business is working. Your finances are... mostly keeping pace. You're making calls on experience and instinct more than data — which works fine, right up until one rough month changes the equation. The gap between where you are and 'fully in control' is smaller than you think.",
    cta: "Find out what closing that gap looks like",
  },
  {
    label: "You're not alone here",
    labelBg: "#FAECE7",
    labelColor: "#712B13",
    title: "The Brave Improviser",
    body: "You're keeping a business alive through pattern recognition and sheer drive. That's genuinely impressive. But you're navigating without a dashboard — and the longer that goes on, the harder it becomes to catch problems before they compound into something expensive.",
    cta: "Talk to MacroByte about getting structured",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function pickQuestions(): Question[] {
  const groups: Question["group"][] = ["cash", "books", "decisions"];
  return groups.map((g) => {
    const pool = questionPool.filter((q) => q.group === g);
    return pool[Math.floor(Math.random() * pool.length)];
  });
}

type Phase = "intro" | "quiz" | "result";

// ── Component ─────────────────────────────────────────────────────────────────
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
    setQuestions(pickQuestions()); // fresh random questions each retry
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
              <p
                className="page-lead"
                style={{ marginBottom: 28, fontSize: 15 }}
              >
                3 questions. No accounting knowledge needed. Find out which
                financial type you are — and what it might be quietly costing
                you.
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
                  marginBottom: 16,
                  display: "inline-block",
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
                Retake with different questions
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
