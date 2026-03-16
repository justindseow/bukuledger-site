// app/lib/insights.ts

export interface InsightSection {
  heading?: string;
  body: string[];
  list?: string[];
}

export interface InsightLink {
  label: string;
  href: string;
}

export interface Insight {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  intro: string;
  sections: InsightSection[];
  relatedLinks: InsightLink[];
}

export const insights: Insight[] = [
  {
    slug: "bookkeeping-vs-accounting-malaysia",
    title: "Bookkeeping vs Accounting: What Malaysian SME Owners Need to Know",
    description:
      "Many Malaysian SME owners use these terms interchangeably, but they mean different things. Here is what each covers and which one your business actually needs right now.",
    date: "2026-03-10",
    readTime: "5 min read",
    intro:
      "If you have ever told someone you need an accountant when you really meant you need someone to record your transactions, you are not alone. Most small business owners in Malaysia use 'bookkeeping' and 'accounting' as if they mean the same thing. They do not. Understanding the difference can save you money and help you make better decisions about who to hire and when.",
    sections: [
      {
        heading: "What Bookkeeping Covers",
        body: [
          "Bookkeeping is the systematic recording of every financial transaction your business makes. Every sale, every expense, every payment in or out gets captured, categorised, and organised.",
          "A bookkeeper's job is to keep your records accurate and up to date. The main outputs are a trial balance, a profit and loss statement, and a balance sheet, produced consistently every month.",
        ],
        list: [
          "Recording sales invoices and receipts",
          "Categorising expenses (rent, salaries, supplies, etc.)",
          "Bank reconciliation: matching your records to your bank statement",
          "Maintaining accounts receivable and payable",
          "Producing monthly reports: P&L, balance sheet, trial balance",
        ],
      },
      {
        heading: "What Accounting Covers",
        body: [
          "Accounting takes the records that bookkeeping produces and does something with them. Accountants analyse your financials, interpret trends, prepare tax filings, advise on structure, and help with compliance.",
          "In Malaysia, a licensed accountant or tax agent is required for statutory audit (if your company qualifies) and for submitting your corporate tax return to LHDN.",
        ],
        list: [
          "Financial analysis and interpretation",
          "Tax planning and LHDN submission",
          "Statutory audit preparation",
          "Business structure advice",
          "Cash flow forecasting",
        ],
      },
      {
        heading: "The Simple Way to Think About It",
        body: [
          "Bookkeeping is building the foundation. Accounting is reading it and deciding what to do next.",
          "Your accountant or tax agent cannot do their job without clean books. If your records are messy or months behind, you will spend more on your accountant's time just getting the data into shape, before any actual analysis begins.",
        ],
      },
      {
        heading: "Which Does Your SME Need Right Now?",
        body: [
          "For most early-stage Malaysian SMEs, the immediate need is bookkeeping. You need your records to be accurate, your bank accounts reconciled, and your monthly reports ready. This is the groundwork.",
          "As your business grows, or when tax season approaches, you bring in an accountant or tax agent to work from those clean records. The two roles work together, not in competition.",
          "If you are currently paying an accountant to do both, it is worth asking whether some of that work (especially the routine monthly recording) could be handled more cost-effectively by a dedicated bookkeeping service.",
        ],
      },
      {
        heading: "A Common Misconception",
        body: [
          "Some SME owners assume that having an accountant means they do not need to worry about bookkeeping. This is backwards. Your accountant works best when the books are already in order. Handing over a year's worth of unreconciled transactions is not a good use of anyone's time or money.",
          "Good bookkeeping is what makes your accountant more effective, and your annual tax filing less stressful.",
        ],
      },
    ],
    relatedLinks: [
      { label: "See our bookkeeping services", href: "/en/services" },
      { label: "View monthly pricing", href: "/en/pricing" },
      { label: "Read: What financial reports does your SME need?", href: "/en/insights/financial-reports-your-sme-needs" },
    ],
  },
  {
    slug: "epf-socso-eis-pcb-malaysia-guide",
    title: "EPF, SOCSO, EIS and PCB: A Simple Guide for Malaysian Employers",
    description:
      "If you are hiring staff in Malaysia, these four statutory deductions are mandatory. Here is what each one is, the current contribution rates, and when you need to pay.",
    date: "2026-03-12",
    readTime: "6 min read",
    intro:
      "The moment you take on your first employee in Malaysia, four statutory obligations kick in. EPF, SOCSO, EIS and PCB are not optional. They are legal requirements, and getting them wrong (or paying them late) comes with penalties. Here is a plain-English breakdown of each one.",
    sections: [
      {
        heading: "EPF (KWSP): Employees Provident Fund",
        body: [
          "EPF is Malaysia's mandatory retirement savings scheme, administered by Kumpulan Wang Simpanan Pekerja. Both you and your employee contribute each month.",
          "For employees earning RM5,000 or below, the employer contributes 13%. For employees earning above RM5,000, the employer contributes 12%. Employees contribute 11% regardless of salary.",
          "Payment is due by the 15th of the following month. Late payments attract a dividend charge on the unpaid amount.",
        ],
        list: [
          "Employee contribution: 11% of gross salary",
          "Employer contribution: 13% (salary ≤ RM5,000) or 12% (salary > RM5,000)",
          "Due date: 15th of the following month",
          "Applies to: Malaysian citizens and permanent residents",
        ],
      },
      {
        heading: "SOCSO (PERKESO): Social Security Organisation",
        body: [
          "SOCSO provides protection against work-related accidents and invalidity. It covers two schemes: the Employment Injury Scheme and the Invalidity Scheme.",
          "Contributions are capped at a monthly wage ceiling of RM5,000 for calculation purposes. The employer bears the larger share at 1.75% while the employee contributes 0.5%.",
          "SOCSO applies to Malaysian citizens and permanent residents. Foreign workers are covered under a separate scheme called PERKESO Protect.",
        ],
        list: [
          "Employee contribution: 0.5% (capped at RM5,000 wage ceiling)",
          "Employer contribution: 1.75% (capped at RM5,000 wage ceiling)",
          "Due date: 15th of the following month",
          "Applies to: Malaysian citizens and permanent residents",
        ],
      },
      {
        heading: "EIS (SIP): Employment Insurance System",
        body: [
          "EIS was introduced in 2018 under the Employment Insurance System Act. It provides temporary financial assistance to employees who lose their jobs through retrenchment or company closure.",
          "Both employer and employee contribute equally at 0.2% each, calculated on the same RM5,000 wage ceiling used for SOCSO.",
          "EIS is administered by PERKESO alongside SOCSO, and contributions are typically submitted together.",
        ],
        list: [
          "Employee contribution: 0.2% (capped at RM5,000 wage ceiling)",
          "Employer contribution: 0.2% (capped at RM5,000 wage ceiling)",
          "Due date: 15th of the following month",
          "Applies to: Malaysian citizens and permanent residents aged 18–60",
        ],
      },
      {
        heading: "PCB / MTD: Monthly Tax Deduction",
        body: [
          "PCB stands for Potongan Cukai Bulanan, also known as Monthly Tax Deduction (MTD). It is an estimated income tax deducted from your employee's salary each month and remitted to LHDN on their behalf.",
          "The amount deducted depends on the employee's monthly salary, tax residency status, and any declared tax reliefs (such as spouse or children). LHDN provides an official PCB calculator that employers must use.",
          "PCB is due by the 15th of the following month, submitted via e-PCB or payroll software integrated with LHDN.",
        ],
        list: [
          "Amount: varies based on salary, residency status, and declared reliefs",
          "Due date: 15th of the following month",
          "Submission: via LHDN e-PCB portal or integrated payroll software",
          "Employer's obligation: deduct correctly and remit in full",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        body: [
          "Late submission is the most common issue. All four contributions share the same 15th-of-the-month deadline, and penalties apply quickly.",
          "Using the wrong contribution rate (especially for EPF when salary crosses the RM5,000 threshold) is another frequent error. Underpayment creates a shortfall that the employer is liable to top up.",
          "Not registering with EPF and SOCSO before your first employee starts is also a problem. Both registrations should be done before or on the day of the employee's first day.",
        ],
      },
      {
        heading: "How Payroll Management Helps",
        body: [
          "Managing all four deductions manually across multiple employees is repetitive and error-prone. A payroll service calculates the correct amounts for EPF, SOCSO, EIS, and PCB each month, prepares payslips for each employee, and produces a monthly payroll summary so you always know your exact liability before the deadline.",
        ],
      },
    ],
    relatedLinks: [
      { label: "See our payroll service", href: "/en/services" },
      { label: "View payroll pricing", href: "/en/pricing" },
      { label: "Read: What financial reports does your SME need?", href: "/en/insights/financial-reports-your-sme-needs" },
    ],
  },
  {
    slug: "financial-reports-your-sme-needs",
    title: "What Financial Reports Does Your SME Need Each Month?",
    description:
      "Most small business owners know they should be looking at their numbers, but which reports actually matter? Here are the ones your SME needs monthly and what to look for in each.",
    date: "2026-03-14",
    readTime: "5 min read",
    intro:
      "Running a business without financial reports is like driving without a dashboard. You might feel like things are going fine until you suddenly run out of cash or miss a tax deadline. The good news is that you do not need dozens of reports. For most Malaysian SMEs, a handful of monthly reports give you everything you need to stay in control.",
    sections: [
      {
        heading: "Profit and Loss Statement (P&L)",
        body: [
          "The P&L is the most commonly referenced report and for good reason. It shows your revenue, your expenses, and what is left over as profit for a specific period, usually the calendar month.",
          "What to look at: your gross margin (revenue minus direct costs), your net margin (after all expenses), and how both compare to the previous month. A falling margin with rising revenue is a warning sign worth investigating.",
          "Monthly P&L reports let you catch problems early, before they become year-end surprises.",
        ],
      },
      {
        heading: "Balance Sheet",
        body: [
          "The balance sheet is a snapshot of your business's financial position at a single point in time. On one side: what your business owns (assets). On the other: what it owes (liabilities) and what is left for the owner (equity).",
          "For SMEs, the most important things to monitor are your current ratio (current assets divided by current liabilities; a number above 1 means you can cover short-term obligations) and your total debt relative to your equity.",
          "A balance sheet once a month keeps you honest about whether your business is actually in good shape, not just whether it looks busy.",
        ],
      },
      {
        heading: "Bank Reconciliation",
        body: [
          "Bank reconciliation is the process of matching your internal transaction records against your actual bank statement. It sounds routine, but it is one of the most important controls in your business.",
          "Discrepancies between your records and your bank statement can indicate data entry errors, missing transactions, duplicate payments, or in some cases, fraud. Reconciling monthly rather than annually means small problems get caught before they become large ones.",
        ],
      },
      {
        heading: "Trial Balance",
        body: [
          "A trial balance lists all the accounts in your general ledger and confirms that total debits equal total credits. It is an internal accounting document, but it is a reliable indicator that your books are in good order.",
          "You will not read a trial balance the way you read a P&L, but your bookkeeper or accountant uses it as a foundation check before producing your other reports. If the trial balance does not balance, something is wrong upstream.",
        ],
      },
      {
        heading: "Management Analysis",
        body: [
          "Numbers alone do not tell the full story. A management analysis adds a narrative layer, explaining what drove the month's results, flagging unusual movements, and highlighting anything that warrants attention.",
          "For growing SMEs, this is often the most actionable report. Why did your expenses spike in March? What is contributing to improving margins? Is your revenue seasonal or structural? Good management analysis turns raw numbers into decisions.",
        ],
      },
      {
        heading: "The Mistake Most SMEs Make",
        body: [
          "The most common mistake is relying solely on your bank balance to gauge business health. Your bank balance tells you how much cash you have right now. It does not tell you how profitable you are, how much you owe suppliers, how much customers owe you, or whether you can afford next month's payroll.",
          "Monthly reports give you the full picture. They take a few days to produce after the month closes, but the clarity they provide is worth every ringgit.",
        ],
      },
    ],
    relatedLinks: [
      { label: "See what our bookkeeping service delivers", href: "/en/services" },
      { label: "Read: Bookkeeping vs accounting, what is the difference?", href: "/en/insights/bookkeeping-vs-accounting-malaysia" },
      { label: "Read: How to manage accounts receivable", href: "/en/insights/managing-accounts-receivable-sme" },
    ],
  },
  {
    slug: "managing-accounts-receivable-sme",
    title: "How to Manage Accounts Receivable Before It Becomes a Cash Flow Problem",
    description:
      "Invoicing customers is only half the job. If you are not tracking who owes you and following up on overdue invoices, you may be profitable on paper but struggling for cash.",
    date: "2026-03-16",
    readTime: "5 min read",
    intro:
      "You can be profitable on paper and still run out of cash. It happens to Malaysian SMEs more often than most business owners expect, and it almost always traces back to the same root cause: invoices that were sent but never properly tracked or followed up on. This is an accounts receivable problem, and it is fixable.",
    sections: [
      {
        heading: "What Is Accounts Receivable?",
        body: [
          "Accounts receivable (AR) is the money your customers owe you for goods or services you have already delivered. The moment you issue an invoice, that amount becomes an asset on your balance sheet. It is money that is yours, just not yet in your bank account.",
          "The problem is that an asset on a balance sheet does not pay your suppliers or your staff. Cash in your account does. Managing AR well means closing that gap as quickly and reliably as possible.",
        ],
      },
      {
        heading: "The AR Aging Report",
        body: [
          "The most important tool in AR management is the aging report. It groups your outstanding invoices by how long they have been unpaid: 0–30 days, 31–60 days, 61–90 days, and 90+ days.",
          "The longer a debt sits unpaid, the harder it becomes to collect. Research consistently shows that invoices beyond 90 days become significantly more difficult to recover. An aging report makes this visible. You can see at a glance which customers need a call today, not next month.",
        ],
      },
      {
        heading: "Common AR Problems in Malaysian SMEs",
        body: [
          "Most AR problems are not caused by customers who refuse to pay. They are caused by systems that make it too easy for payments to slip through the cracks.",
        ],
        list: [
          "Invoicing late, sometimes days or weeks after the job is done",
          "No payment terms stated on the invoice (or terms that are vague)",
          "No follow-up process when an invoice goes overdue",
          "No visibility into which invoices are outstanding at any given time",
          "Relying on memory or spreadsheets instead of a tracking system",
        ],
      },
      {
        heading: "A Simple AR Process to Follow",
        body: [
          "You do not need complex software to run a decent AR process. The basics are straightforward.",
          "Invoice immediately after delivery, not at the end of the week. State clear payment terms on every invoice: 30 days net is standard for Malaysian B2B. Send a payment reminder seven days before the due date. Follow up the day after the invoice is overdue, then again at 14 days. If a customer reaches 30 days overdue without contact, escalate.",
          "Consistency matters more than aggression. Most late payments in SME businesses are not intentional. They are simply forgotten. A polite, timely reminder is usually enough.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        body: [
          "If the same customer appears in the 60+ day column month after month, that is a concentration risk. You are effectively extending them credit whether you intended to or not. Consider whether to tighten their terms or require partial upfront payment.",
          "If your total AR balance is growing faster than your revenue, your collections are not keeping pace with your sales. That gap will eventually become a cash flow crisis.",
        ],
      },
      {
        heading: "When to Get Help",
        body: [
          "For many SMEs, the challenge is not knowing what to do. It is having someone consistently do it every month. Tracking invoices, maintaining the aging report, and sending follow-up notes takes time that most business owners would rather spend elsewhere.",
          "An accounts receivable service takes this off your plate entirely: every invoice tracked, aging report updated monthly, and follow-up notes prepared so nothing falls through the cracks.",
        ],
      },
    ],
    relatedLinks: [
      { label: "See our accounts receivable service", href: "/en/services" },
      { label: "View pricing for AR service", href: "/en/pricing" },
      { label: "Read: What financial reports does your SME need?", href: "/en/insights/financial-reports-your-sme-needs" },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function formatInsightDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
