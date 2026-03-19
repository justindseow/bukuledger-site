"use client";

import { useState } from "react";
import { WHATSAPP } from "@/app/lib/content";

const BG =
  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Locale = "en" | "bm" | "zh";

type Theme =
  | "cash"
  | "records"
  | "receivables"
  | "payables"
  | "payroll"
  | "compliance"
  | "decisions";

interface QLocale {
  pill: string;
  q: string;
  opts: { text: string; score: number }[];
}

interface Question {
  theme: Theme;
  pillBg: string;
  pillColor: string;
  en: QLocale;
  bm: QLocale;
  zh: QLocale;
}

interface PLocale {
  label: string;
  body: string;
  cta: string;
}

interface Profile {
  title: string; // English - it's the shareable brand name
  labelBg: string;
  labelColor: string;
  en: PLocale;
  bm: PLocale;
  zh: PLocale;
}

// ─────────────────────────────────────────────────────────────────────────────
// Question pool - 3 variants × 7 themes = 21 questions
// Each session picks 1 per theme → 3⁷ = 2,187 combinations
// ─────────────────────────────────────────────────────────────────────────────

const pool: Question[] = [

  // ── 1. Cash clarity ────────────────────────────────────────────────────────
  {
    theme: "cash", pillBg: "#E6F1FB", pillColor: "#0C447C",
    en: {
      pill: "Cash clarity",
      q: "It's a random Tuesday, no apps open. Ballpark - what's your business cash balance right now?",
      opts: [
        { text: "Within RM 2,000 - I track this daily", score: 0 },
        { text: "Roughly yes, within RM 10–20k", score: 1 },
        { text: "I'd need to open my banking app first", score: 2 },
        { text: "Genuinely no idea without checking", score: 3 },
      ],
    },
    bm: {
      pill: "Kejelasan Tunai",
      q: "Hari Selasa biasa, tiada aplikasi dibuka. Anggaran - berapakah baki tunai perniagaan anda sekarang?",
      opts: [
        { text: "Dalam RM 2,000 - saya pantau ini setiap hari", score: 0 },
        { text: "Lebih kurang ya, dalam RM 10–20k", score: 1 },
        { text: "Saya perlu buka aplikasi perbankan dahulu", score: 2 },
        { text: "Tiada idea langsung tanpa semak", score: 3 },
      ],
    },
    zh: {
      pill: "现金清晰度",
      q: "随便一个周二，没有打开任何应用程序。大概, 您的企业现金余额现在是多少？",
      opts: [
        { text: "在RM 2,000以内, 我每天追踪这个", score: 0 },
        { text: "大概是的，在RM 10–20k左右", score: 1 },
        { text: "我需要先打开银行应用程序", score: 2 },
        { text: "不查的话真的不知道", score: 3 },
      ],
    },
  },
  {
    theme: "cash", pillBg: "#E6F1FB", pillColor: "#0C447C",
    en: {
      pill: "Cash clarity",
      q: "A surprise RM 8,000 expense lands on your desk next week. Within 10 minutes, do you know if your business can absorb it?",
      opts: [
        { text: "Yes - I'd know immediately from my records", score: 0 },
        { text: "Probably yes, with some quick rough math", score: 1 },
        { text: "I'd need a day or two to work it out", score: 2 },
        { text: "I'd just hope for the best, honestly", score: 3 },
      ],
    },
    bm: {
      pill: "Kejelasan Tunai",
      q: "Perbelanjaan mengejut RM 8,000 tiba minggu depan. Dalam masa 10 minit, adakah anda tahu sama ada perniagaan anda mampu menanggungnya?",
      opts: [
        { text: "Ya - saya akan tahu serta-merta dari rekod saya", score: 0 },
        { text: "Mungkin ya, dengan kiraan kasar", score: 1 },
        { text: "Saya perlukan satu atau dua hari untuk fikirkan", score: 2 },
        { text: "Saya hanya harap yang terbaik, jujurnya", score: 3 },
      ],
    },
    zh: {
      pill: "现金清晰度",
      q: "下周有一笔意外的RM 8,000支出。在10分钟内，您知道您的企业能否承担吗？",
      opts: [
        { text: "是的, 我能立刻从记录中知道", score: 0 },
        { text: "大概能，做些简单的粗略计算", score: 1 },
        { text: "我需要一两天来算清楚", score: 2 },
        { text: "我只能希望一切顺利，说实话", score: 3 },
      ],
    },
  },
  {
    theme: "cash", pillBg: "#E6F1FB", pillColor: "#0C447C",
    en: {
      pill: "Cash clarity",
      q: "Your business partner calls and asks: \"How much cash do we actually have?\" How fast can you answer - accurately?",
      opts: [
        { text: "Immediately, without checking anything", score: 0 },
        { text: "Give me 5 minutes to pull it up", score: 1 },
        { text: "I'd need to check the accounts properly", score: 2 },
        { text: "I'd be guessing if I answered right now", score: 3 },
      ],
    },
    bm: {
      pill: "Kejelasan Tunai",
      q: "Rakan perniagaan anda telefon dan tanya: \"Berapa banyak tunai yang kita ada sebenarnya?\" Seberapa cepat anda boleh menjawab - dengan tepat?",
      opts: [
        { text: "Serta-merta, tanpa perlu semak apa-apa", score: 0 },
        { text: "Bagi saya 5 minit untuk semak", score: 1 },
        { text: "Saya perlu semak akaun dengan betul dahulu", score: 2 },
        { text: "Saya akan meneka jika jawab sekarang", score: 3 },
      ],
    },
    zh: {
      pill: "现金清晰度",
      q: "您的商业伙伴打电话问：\"我们实际上有多少现金？\"您能多快准确地回答？",
      opts: [
        { text: "立刻，不需要查任何东西", score: 0 },
        { text: "给我5分钟查一下", score: 1 },
        { text: "我需要好好查一下账户", score: 2 },
        { text: "现在回答的话我只是在猜", score: 3 },
      ],
    },
  },

  // ── 2. Record keeping ──────────────────────────────────────────────────────
  {
    theme: "records", pillBg: "#EAF3DE", pillColor: "#27500A",
    en: {
      pill: "Your books",
      q: "Your accountant needs last month's records by tomorrow. Your honest reaction?",
      opts: [
        { text: "Already done - it's filed and current", score: 0 },
        { text: "No problem, give me an hour", score: 1 },
        { text: "Okay. Mild panic. But I'll get there.", score: 2 },
        { text: "...I need to find my accountant first.", score: 3 },
      ],
    },
    bm: {
      pill: "Rekod Anda",
      q: "Akauntan anda perlu rekod bulan lalu menjelang esok. Reaksi jujur anda?",
      opts: [
        { text: "Sudah siap - ia difailkan dan terkini", score: 0 },
        { text: "Tiada masalah, bagi saya sejam", score: 1 },
        { text: "Okay. Sedikit panik. Tapi saya akan uruskan.", score: 2 },
        { text: "...Saya perlu cari akauntan saya dahulu.", score: 3 },
      ],
    },
    zh: {
      pill: "您的账目",
      q: "您的会计师明天需要上个月的记录。您的真实反应？",
      opts: [
        { text: "已经准备好了, 已存档且是最新的", score: 0 },
        { text: "没问题，给我一个小时", score: 1 },
        { text: "好的。有点慌。但我会搞定的。", score: 2 },
        { text: "...我得先找到我的会计师。", score: 3 },
      ],
    },
  },
  {
    theme: "records", pillBg: "#EAF3DE", pillColor: "#27500A",
    en: {
      pill: "Your books",
      q: "How long would it take to produce a clean record of this year's transactions - starting right now?",
      opts: [
        { text: "A few hours - I maintain this monthly", score: 0 },
        { text: "A few days of pulling things together", score: 1 },
        { text: "Weeks, and it would be stressful", score: 2 },
        { text: "I'd need outside help just to start", score: 3 },
      ],
    },
    bm: {
      pill: "Rekod Anda",
      q: "Berapa lama masa yang diperlukan untuk menghasilkan rekod bersih transaksi tahun ini - bermula sekarang?",
      opts: [
        { text: "Beberapa jam - saya selenggara ini setiap bulan", score: 0 },
        { text: "Beberapa hari untuk kumpulkan semuanya", score: 1 },
        { text: "Berminggu-minggu, dan ia akan memenatkan", score: 2 },
        { text: "Saya perlukan bantuan luar hanya untuk bermula", score: 3 },
      ],
    },
    zh: {
      pill: "您的账目",
      q: "从现在开始，制作今年交易的完整清晰记录需要多长时间？",
      opts: [
        { text: "几个小时, 我每月维护这些", score: 0 },
        { text: "几天时间整理", score: 1 },
        { text: "几个星期，而且会很累", score: 2 },
        { text: "我需要外部帮助才能开始", score: 3 },
      ],
    },
  },
  {
    theme: "records", pillBg: "#EAF3DE", pillColor: "#27500A",
    en: {
      pill: "Your books",
      q: "Someone asks to see your Profit & Loss for last quarter. How quickly can you produce it?",
      opts: [
        { text: "Minutes - it's already prepared monthly", score: 0 },
        { text: "Same day, I can put it together", score: 1 },
        { text: "A few days of work at least", score: 2 },
        { text: "I'd have to ask my accountant to build one from scratch", score: 3 },
      ],
    },
    bm: {
      pill: "Rekod Anda",
      q: "Seseorang meminta melihat Untung Rugi anda untuk suku tahun lalu. Seberapa cepat anda boleh menghasilkannya?",
      opts: [
        { text: "Dalam minit - ia sudah disediakan setiap bulan", score: 0 },
        { text: "Hari yang sama, saya boleh susunkan", score: 1 },
        { text: "Paling tidak beberapa hari kerja", score: 2 },
        { text: "Saya perlu minta akauntan bina dari awal", score: 3 },
      ],
    },
    zh: {
      pill: "您的账目",
      q: "有人要查看您上季度的损益表。您能多快提供？",
      opts: [
        { text: "几分钟, 我每月都准备好", score: 0 },
        { text: "当天，我可以整理出来", score: 1 },
        { text: "至少需要几天工作", score: 2 },
        { text: "我得请会计师从头建立一份", score: 3 },
      ],
    },
  },

  // ── 3. Accounts receivable ─────────────────────────────────────────────────
  {
    theme: "receivables", pillBg: "#EDE9FE", pillColor: "#3730A3",
    en: {
      pill: "Money owed to you",
      q: "Right now, how much do customers owe your business across all outstanding invoices?",
      opts: [
        { text: "I know the exact figure", score: 0 },
        { text: "Within RM 5,000 or so", score: 1 },
        { text: "Rough ballpark only", score: 2 },
        { text: "I'd have to dig to find out", score: 3 },
      ],
    },
    bm: {
      pill: "Wang yang Dihutang",
      q: "Sekarang, berapa banyak yang pelanggan berhutang kepada perniagaan anda merentasi semua invois tertunggak?",
      opts: [
        { text: "Saya tahu angka tepat", score: 0 },
        { text: "Dalam RM 5,000 lebih kurang", score: 1 },
        { text: "Anggaran kasar sahaja", score: 2 },
        { text: "Saya perlu kaji untuk tahu", score: 3 },
      ],
    },
    zh: {
      pill: "应收账款",
      q: "现在，客户在所有未付发票中欠您企业多少钱？",
      opts: [
        { text: "我知道确切金额", score: 0 },
        { text: "大约RM 5,000左右", score: 1 },
        { text: "只是大概的估计", score: 2 },
        { text: "我得查一查才知道", score: 3 },
      ],
    },
  },
  {
    theme: "receivables", pillBg: "#EDE9FE", pillColor: "#3730A3",
    en: {
      pill: "Money owed to you",
      q: "Do you know which customer has your oldest unpaid invoice right now - and how overdue it is?",
      opts: [
        { text: "Yes - I monitor this at least monthly", score: 0 },
        { text: "Roughly yes, I have a general idea", score: 1 },
        { text: "I'd need to run a report to check", score: 2 },
        { text: "No - I don't track this actively", score: 3 },
      ],
    },
    bm: {
      pill: "Wang yang Dihutang",
      q: "Adakah anda tahu pelanggan mana yang mempunyai invois tertunggak tertua anda sekarang - dan berapa lamanya sudah tertunggak?",
      opts: [
        { text: "Ya - saya pantau ini sekurang-kurangnya setiap bulan", score: 0 },
        { text: "Lebih kurang ya, saya ada gambaran umum", score: 1 },
        { text: "Saya perlu jalankan laporan untuk semak", score: 2 },
        { text: "Tidak - saya tidak memantau ini secara aktif", score: 3 },
      ],
    },
    zh: {
      pill: "应收账款",
      q: "您知道哪个客户目前持有您最旧的未付发票, 以及逾期多久了吗？",
      opts: [
        { text: "是的, 我至少每月监控一次", score: 0 },
        { text: "大概知道，有个大致印象", score: 1 },
        { text: "我需要运行报告来查看", score: 2 },
        { text: "不, 我没有主动追踪这个", score: 3 },
      ],
    },
  },
  {
    theme: "receivables", pillBg: "#EDE9FE", pillColor: "#3730A3",
    en: {
      pill: "Money owed to you",
      q: "A customer says they paid you 3 weeks ago. Can you verify it immediately - without calling anyone?",
      opts: [
        { text: "Yes - I'd check my records instantly", score: 0 },
        { text: "Probably, give me a few minutes", score: 1 },
        { text: "I'd need some time to trace it through my records", score: 2 },
        { text: "That would require quite a bit of digging", score: 3 },
      ],
    },
    bm: {
      pill: "Wang yang Dihutang",
      q: "Seorang pelanggan kata mereka telah membayar anda 3 minggu lalu. Bolehkah anda sahkan serta-merta - tanpa menghubungi sesiapa?",
      opts: [
        { text: "Ya - saya akan semak rekod saya serta-merta", score: 0 },
        { text: "Mungkin, bagi saya beberapa minit", score: 1 },
        { text: "Saya perlukan masa untuk kesan melalui rekod", score: 2 },
        { text: "Itu memerlukan banyak penggalian", score: 3 },
      ],
    },
    zh: {
      pill: "应收账款",
      q: "一位客户说他们3周前付款了。您能立即核实, 不需要打电话给任何人吗？",
      opts: [
        { text: "能, 我会立刻查看我的记录", score: 0 },
        { text: "可能可以，给我几分钟", score: 1 },
        { text: "我需要一些时间通过记录追踪", score: 2 },
        { text: "那需要相当多的挖掘工作", score: 3 },
      ],
    },
  },

  // ── 4. Accounts payable ────────────────────────────────────────────────────
  {
    theme: "payables", pillBg: "#FEF3C7", pillColor: "#78350F",
    en: {
      pill: "What you owe",
      q: "Without checking, how much does your business currently owe suppliers in outstanding invoices?",
      opts: [
        { text: "I know the exact figure", score: 0 },
        { text: "Within RM 5,000 or so", score: 1 },
        { text: "Rough ballpark only", score: 2 },
        { text: "Honestly, I'm not sure right now", score: 3 },
      ],
    },
    bm: {
      pill: "Hutang Anda",
      q: "Tanpa menyemak, berapa banyak yang perniagaan anda kini berhutang kepada pembekal dalam invois tertunggak?",
      opts: [
        { text: "Saya tahu angka tepat", score: 0 },
        { text: "Dalam RM 5,000 lebih kurang", score: 1 },
        { text: "Anggaran kasar sahaja", score: 2 },
        { text: "Jujurnya, saya tidak pasti sekarang", score: 3 },
      ],
    },
    zh: {
      pill: "应付账款",
      q: "不查账的情况下，您的企业目前在未付发票中欠供应商多少钱？",
      opts: [
        { text: "我知道确切金额", score: 0 },
        { text: "大约RM 5,000左右", score: 1 },
        { text: "只是大概的估计", score: 2 },
        { text: "说实话，我现在不确定", score: 3 },
      ],
    },
  },
  {
    theme: "payables", pillBg: "#FEF3C7", pillColor: "#78350F",
    en: {
      pill: "What you owe",
      q: "What's your largest supplier payment due in the next two weeks? Do you know the amount and due date?",
      opts: [
        { text: "Yes - I track all upcoming payments", score: 0 },
        { text: "I have a rough idea", score: 1 },
        { text: "I'd need to check emails or receipts", score: 2 },
        { text: "I wouldn't know until it's due", score: 3 },
      ],
    },
    bm: {
      pill: "Hutang Anda",
      q: "Apakah pembayaran pembekal terbesar yang perlu dibuat dalam dua minggu akan datang? Adakah anda tahu jumlah dan tarikh akhirnya?",
      opts: [
        { text: "Ya - saya jejaki semua pembayaran akan datang", score: 0 },
        { text: "Saya ada gambaran kasar", score: 1 },
        { text: "Saya perlu semak e-mel atau resit", score: 2 },
        { text: "Saya tidak akan tahu sehingga ia tiba masanya", score: 3 },
      ],
    },
    zh: {
      pill: "应付账款",
      q: "未来两周内您最大的供应商付款是什么？您知道金额和到期日吗？",
      opts: [
        { text: "是的, 我追踪所有即将到来的付款", score: 0 },
        { text: "我有个大致的了解", score: 1 },
        { text: "我需要查看电子邮件或收据", score: 2 },
        { text: "我要等到快到期才会知道", score: 3 },
      ],
    },
  },
  {
    theme: "payables", pillBg: "#FEF3C7", pillColor: "#78350F",
    en: {
      pill: "What you owe",
      q: "A supplier calls claiming you're 30 days overdue. How quickly can you verify - or dispute - that?",
      opts: [
        { text: "Immediately - I track all payables", score: 0 },
        { text: "Within the hour, after checking my records", score: 1 },
        { text: "It would take a day to piece together", score: 2 },
        { text: "That would require some serious investigation", score: 3 },
      ],
    },
    bm: {
      pill: "Hutang Anda",
      q: "Pembekal menghubungi mendakwa anda 30 hari tertunggak. Seberapa cepat anda boleh sahkan - atau bantah - itu?",
      opts: [
        { text: "Serta-merta - saya jejaki semua bayaran perlu dibuat", score: 0 },
        { text: "Dalam sejam, selepas semak rekod saya", score: 1 },
        { text: "Ia akan mengambil masa sehari untuk disusun", score: 2 },
        { text: "Itu memerlukan siasatan yang serius", score: 3 },
      ],
    },
    zh: {
      pill: "应付账款",
      q: "供应商打电话声称您已逾期30天。您能多快核实, 或者反驳, 这一点？",
      opts: [
        { text: "立刻, 我追踪所有应付账款", score: 0 },
        { text: "查看记录后一小时内", score: 1 },
        { text: "需要一天时间整理", score: 2 },
        { text: "那需要认真调查一番", score: 3 },
      ],
    },
  },

  // ── 5. Payroll ─────────────────────────────────────────────────────────────
  {
    theme: "payroll", pillBg: "#FCE7F3", pillColor: "#831843",
    en: {
      pill: "Payroll",
      q: "Do you know your exact total monthly payroll cost - salary, EPF, SOCSO, EIS, and PCB combined?",
      opts: [
        { text: "Yes, to the ringgit", score: 0 },
        { text: "Within RM 500 or so", score: 1 },
        { text: "Roughly - I know the salary part at least", score: 2 },
        { text: "I rely on my accountant to sort this out", score: 3 },
      ],
    },
    bm: {
      pill: "Penggajian",
      q: "Adakah anda tahu jumlah kos gaji bulanan yang tepat - gaji, EPF, SOCSO, EIS, dan PCB digabungkan?",
      opts: [
        { text: "Ya, sehingga sen", score: 0 },
        { text: "Dalam RM 500 lebih kurang", score: 1 },
        { text: "Lebih kurang - saya tahu bahagian gaji sekurang-kurangnya", score: 2 },
        { text: "Saya bergantung pada akauntan untuk uruskan ini", score: 3 },
      ],
    },
    zh: {
      pill: "薪资",
      q: "您知道每月薪资的确切总成本吗, 薪水、EPF、SOCSO、EIS和PCB合计？",
      opts: [
        { text: "是的，精确到分", score: 0 },
        { text: "大约RM 500左右的误差", score: 1 },
        { text: "大概, 至少知道薪水部分", score: 2 },
        { text: "我依赖会计师来处理这个", score: 3 },
      ],
    },
  },
  {
    theme: "payroll", pillBg: "#FCE7F3", pillColor: "#831843",
    en: {
      pill: "Payroll",
      q: "If you hired one more person at RM 4,000/month, would you know today - without help - whether the business can support it?",
      opts: [
        { text: "Yes - I'd know from my current margins", score: 0 },
        { text: "Probably, with some quick calculations", score: 1 },
        { text: "I'd need help working that out properly", score: 2 },
        { text: "I'd be guessing, honestly", score: 3 },
      ],
    },
    bm: {
      pill: "Penggajian",
      q: "Jika anda mengambil seorang pekerja lagi pada RM 4,000/bulan, adakah anda tahu hari ini - tanpa bantuan - sama ada perniagaan mampu menyokongnya?",
      opts: [
        { text: "Ya - saya akan tahu dari margin semasa saya", score: 0 },
        { text: "Mungkin, dengan kiraan pantas", score: 1 },
        { text: "Saya perlukan bantuan untuk kira dengan betul", score: 2 },
        { text: "Saya akan meneka, jujurnya", score: 3 },
      ],
    },
    zh: {
      pill: "薪资",
      q: "如果您再聘一个人，月薪RM 4,000，您今天, 不需要帮助, 知道企业能否承担吗？",
      opts: [
        { text: "是的, 从我目前的利润率就能知道", score: 0 },
        { text: "可能知道，做些简单计算", score: 1 },
        { text: "我需要帮助才能正确算出来", score: 2 },
        { text: "我只是在猜，说实话", score: 3 },
      ],
    },
  },
  {
    theme: "payroll", pillBg: "#FCE7F3", pillColor: "#831843",
    en: {
      pill: "Payroll",
      q: "Last payroll run - were all statutory contributions (EPF, SOCSO, PCB) calculated correctly and submitted on time?",
      opts: [
        { text: "Yes - I'm confident of this", score: 0 },
        { text: "I believe so - my accountant handles it", score: 1 },
        { text: "I'm not 100% sure, now that you ask", score: 2 },
        { text: "Honestly, I don't know the current status", score: 3 },
      ],
    },
    bm: {
      pill: "Penggajian",
      q: "Penggajian terakhir - adakah semua caruman berkanun (EPF, SOCSO, PCB) dikira dengan betul dan diserahkan tepat pada masanya?",
      opts: [
        { text: "Ya - saya yakin dengan ini", score: 0 },
        { text: "Saya percaya begitu - akauntan saya uruskan", score: 1 },
        { text: "Saya tidak 100% pasti, sekarang yang anda tanya", score: 2 },
        { text: "Jujurnya, saya tidak tahu status semasa", score: 3 },
      ],
    },
    zh: {
      pill: "薪资",
      q: "上次发工资时, 所有法定供款（EPF、SOCSO、PCB）都计算正确并按时提交了吗？",
      opts: [
        { text: "是的, 我对此有信心", score: 0 },
        { text: "我相信是的, 我的会计师处理的", score: 1 },
        { text: "现在你这么问，我不是100%确定", score: 2 },
        { text: "说实话，我不知道当前状态", score: 3 },
      ],
    },
  },

  // ── 6. Tax & compliance ────────────────────────────────────────────────────
  {
    theme: "compliance", pillBg: "#FAEEDA", pillColor: "#633806",
    en: {
      pill: "Tax & compliance",
      q: "What's your next tax or statutory filing deadline - SST, income tax, or otherwise? Off the top of your head?",
      opts: [
        { text: "I know the exact date", score: 0 },
        { text: "I know roughly when it falls", score: 1 },
        { text: "I'd have to check my calendar or ask someone", score: 2 },
        { text: "I'm genuinely not sure what's coming up", score: 3 },
      ],
    },
    bm: {
      pill: "Cukai & Pematuhan",
      q: "Apakah tarikh akhir pemfailan cukai atau berkanun anda yang seterusnya - SST, cukai pendapatan, atau lain-lain? Terus dari ingatan anda?",
      opts: [
        { text: "Saya tahu tarikh tepat", score: 0 },
        { text: "Saya tahu lebih kurang bila ia jatuh", score: 1 },
        { text: "Saya perlu semak kalendar atau tanya seseorang", score: 2 },
        { text: "Saya benar-benar tidak pasti apa yang akan datang", score: 3 },
      ],
    },
    zh: {
      pill: "税务与合规",
      q: "您下一个税务或法定申报截止日期是什么, SST、所得税或其他？凭记忆说说看？",
      opts: [
        { text: "我知道确切日期", score: 0 },
        { text: "我大概知道什么时候", score: 1 },
        { text: "我需要查日历或问人", score: 2 },
        { text: "我真的不确定有什么即将到来", score: 3 },
      ],
    },
  },
  {
    theme: "compliance", pillBg: "#FAEEDA", pillColor: "#633806",
    en: {
      pill: "Tax & compliance",
      q: "In the last 12 months, have you been late or received a penalty on any tax or statutory filing?",
      opts: [
        { text: "No - we've always filed on time", score: 0 },
        { text: "Once, but it was minor and quickly resolved", score: 1 },
        { text: "Yes, at least once", score: 2 },
        { text: "Probably more than I realise", score: 3 },
      ],
    },
    bm: {
      pill: "Cukai & Pematuhan",
      q: "Dalam 12 bulan terakhir, pernahkah anda lewat atau menerima penalti untuk mana-mana pemfailan cukai atau berkanun?",
      opts: [
        { text: "Tidak - kami sentiasa memfail tepat pada masanya", score: 0 },
        { text: "Sekali, tetapi ia kecil dan diselesaikan dengan cepat", score: 1 },
        { text: "Ya, sekurang-kurangnya sekali", score: 2 },
        { text: "Mungkin lebih daripada yang saya sedar", score: 3 },
      ],
    },
    zh: {
      pill: "税务与合规",
      q: "在过去12个月内，您是否有任何税务或法定申报逾期或收到罚款？",
      opts: [
        { text: "没有, 我们一直准时申报", score: 0 },
        { text: "一次，但很小，很快就解决了", score: 1 },
        { text: "是的，至少一次", score: 2 },
        { text: "可能比我意识到的更多", score: 3 },
      ],
    },
  },
  {
    theme: "compliance", pillBg: "#FAEEDA", pillColor: "#633806",
    en: {
      pill: "Tax & compliance",
      q: "If LHDN requested your business records from 2 years ago tomorrow, how confident are you in what you'd hand over?",
      opts: [
        { text: "Very confident - it's all properly filed", score: 0 },
        { text: "Fairly confident, with a few gaps", score: 1 },
        { text: "It would take significant effort to compile", score: 2 },
        { text: "That scenario genuinely worries me", score: 3 },
      ],
    },
    bm: {
      pill: "Cukai & Pematuhan",
      q: "Jika LHDN meminta rekod perniagaan anda dari 2 tahun lalu esok, seberapa yakin anda dengan apa yang akan anda serahkan?",
      opts: [
        { text: "Sangat yakin - semuanya difailkan dengan betul", score: 0 },
        { text: "Cukup yakin, dengan beberapa jurang", score: 1 },
        { text: "Ia memerlukan usaha yang besar untuk dikumpul", score: 2 },
        { text: "Senario itu benar-benar membimbangkan saya", score: 3 },
      ],
    },
    zh: {
      pill: "税务与合规",
      q: "如果税务局明天要求您两年前的企业记录，您对要提交的内容有多少信心？",
      opts: [
        { text: "非常有信心, 一切都妥善存档了", score: 0 },
        { text: "相当有信心，有一些空缺", score: 1 },
        { text: "需要相当大的努力来整理", score: 2 },
        { text: "这种情况真的让我担心", score: 3 },
      ],
    },
  },

  // ── 7. Decision quality ────────────────────────────────────────────────────
  {
    theme: "decisions", pillBg: "#FAECE7", pillColor: "#712B13",
    en: {
      pill: "Data vs gut",
      q: "Think of a pricing decision from the last 6 months. What actually drove the number?",
      opts: [
        { text: "Clear margin data - I knew my costs exactly", score: 0 },
        { text: "Competitive research plus rough margin math", score: 1 },
        { text: "Gut feel and what the market might accept", score: 2 },
        { text: "What felt right. Is there another way?", score: 3 },
      ],
    },
    bm: {
      pill: "Data vs Naluri",
      q: "Fikirkan keputusan penetapan harga dalam 6 bulan terakhir. Apa yang sebenarnya mendorong angka itu?",
      opts: [
        { text: "Data margin yang jelas - saya tahu kos dengan tepat", score: 0 },
        { text: "Penyelidikan pesaing ditambah kiraan margin kasar", score: 1 },
        { text: "Gerak hati dan apa yang pasaran mungkin terima", score: 2 },
        { text: "Apa yang rasa betul. Adakah cara lain?", score: 3 },
      ],
    },
    zh: {
      pill: "数据 vs 直觉",
      q: "想想过去6个月的一个定价决策。真正驱动这个数字的是什么？",
      opts: [
        { text: "清晰的利润数据, 我精确知道成本", score: 0 },
        { text: "竞争对手研究加上粗略的利润计算", score: 1 },
        { text: "直觉以及市场可能接受的价格", score: 2 },
        { text: "感觉对的。还有其他方式吗？", score: 3 },
      ],
    },
  },
  {
    theme: "decisions", pillBg: "#FAECE7", pillColor: "#712B13",
    en: {
      pill: "Data vs gut",
      q: "In the last quarter, have you made a hiring or spending call - and only afterwards wondered if the numbers actually supported it?",
      opts: [
        { text: "No - I always review the numbers first", score: 0 },
        { text: "Once, but I validated it soon after", score: 1 },
        { text: "A couple of times, if I'm honest", score: 2 },
        { text: "...is there another way to run a business?", score: 3 },
      ],
    },
    bm: {
      pill: "Data vs Naluri",
      q: "Dalam suku tahun terakhir, pernahkah anda membuat keputusan pengambilan atau perbelanjaan - dan hanya selepas itu tertanya-tanya sama ada angka menyokongnya?",
      opts: [
        { text: "Tidak - saya sentiasa semak angka dahulu", score: 0 },
        { text: "Sekali, tetapi saya sahkan tidak lama selepas itu", score: 1 },
        { text: "Beberapa kali, jika saya jujur", score: 2 },
        { text: "...adakah cara lain untuk menjalankan perniagaan?", score: 3 },
      ],
    },
    zh: {
      pill: "数据 vs 直觉",
      q: "上个季度，您是否做过一个招聘或支出决定, 之后才想知道数字是否真的支持它？",
      opts: [
        { text: "没有, 我总是先查看数字", score: 0 },
        { text: "一次，但我很快验证了", score: 1 },
        { text: "几次，说实话", score: 2 },
        { text: "...还有其他方式经营企业吗？", score: 3 },
      ],
    },
  },
  {
    theme: "decisions", pillBg: "#FAECE7", pillColor: "#712B13",
    en: {
      pill: "Data vs gut",
      q: "Business had a strong month. How do you decide whether to reinvest, save, or pay yourself more?",
      opts: [
        { text: "Based on cash flow data and forward projections", score: 0 },
        { text: "Based on how the business feels plus rough math", score: 1 },
        { text: "Whatever seems sensible after the bills are paid", score: 2 },
        { text: "I usually just let it sit and figure it out later", score: 3 },
      ],
    },
    bm: {
      pill: "Data vs Naluri",
      q: "Perniagaan ada bulan yang kukuh. Bagaimana anda memutuskan sama ada untuk melabur semula, menabung, atau membayar diri sendiri lebih?",
      opts: [
        { text: "Berdasarkan data aliran tunai dan unjuran ke hadapan", score: 0 },
        { text: "Berdasarkan bagaimana perniagaan terasa ditambah kiraan kasar", score: 1 },
        { text: "Apa yang munasabah selepas bil dibayar", score: 2 },
        { text: "Saya biasanya biarkan ia duduk dan fikirkan kemudian", score: 3 },
      ],
    },
    zh: {
      pill: "数据 vs 直觉",
      q: "业务有个强劲的月份。您如何决定是否再投资、储蓄还是给自己更多薪酬？",
      opts: [
        { text: "基于现金流数据和前瞻性预测", score: 0 },
        { text: "基于企业感觉加上粗略计算", score: 1 },
        { text: "付完账单后感觉合理的做法", score: 2 },
        { text: "我通常就让它放在那里，之后再想", score: 3 },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Result profiles - 4 tiers, raw 0–21 (lower = better)
// title stays in English (shareable brand name); label/body/cta translated
// ─────────────────────────────────────────────────────────────────────────────

const profiles: Profile[] = [
  {
    title: "The CFO Founder",
    labelBg: "#EAF3DE", labelColor: "#27500A",
    en: {
      label: "Top tier · Financial clarity",
      body: "Rare. Genuinely rare. You're running on data, not gut - and your answers came fast. Most SME owners at your stage can't do that. The gap isn't your financial awareness; it's time. You're likely spending more hours maintaining those numbers than necessary. That overhead has a real opportunity cost.",
      cta: "See how MacroByte frees up your time",
    },
    bm: {
      label: "Peringkat Terbaik · Kejelasan Kewangan",
      body: "Jarang. Benar-benar jarang. Anda beroperasi berdasarkan data, bukan naluri - dan jawapan anda datang dengan pantas. Kebanyakan pemilik PKS di peringkat anda tidak boleh berbuat demikian. Jurangnya bukan kesedaran kewangan anda; ia adalah masa. Anda mungkin menghabiskan lebih banyak jam menyelenggara angka-angka itu daripada yang sepatutnya. Overhead itu mempunyai kos peluang yang nyata.",
      cta: "Lihat bagaimana MacroByte membebaskan masa anda",
    },
    zh: {
      label: "顶级 · 财务清晰度",
      body: "罕见。真的很罕见。您依靠数据运营，而非直觉, 而且您的答案来得很快。大多数同阶段的中小企业主做不到这一点。差距不在于您的财务意识，而在于时间。您可能花了比必要更多的时间维护这些数字。这种开销有真实的机会成本。",
      cta: "了解MacroByte如何解放您的时间",
    },
  },
  {
    title: "The Capable Operator",
    labelBg: "#E6F1FB", labelColor: "#0C447C",
    en: {
      label: "Mostly in control",
      body: "Your business is working and your finances are mostly keeping pace. You're making calls on experience and instinct more than data - which works fine, until one rough month shifts the equation. The gap between where you are and fully in control is smaller than you think. One clean system closes it.",
      cta: "Find out what closing that gap looks like",
    },
    bm: {
      label: "Kebanyakannya Terkawal",
      body: "Perniagaan anda berjalan dan kewangan anda kebanyakannya seiring. Anda membuat keputusan berdasarkan pengalaman dan naluri lebih daripada data - yang baik-baik sahaja, sehingga satu bulan yang sukar mengubah persamaan. Jurang antara di mana anda berada dan sepenuhnya terkawal lebih kecil daripada yang anda fikir. Satu sistem yang bersih menutupnya.",
      cta: "Ketahui cara menutup jurang tersebut",
    },
    zh: {
      label: "基本在控制中",
      body: "您的业务在运转，财务也基本跟上步伐。您更多地依靠经验和直觉做决策，而非数据, 这在一般情况下没问题，直到一个艰难的月份改变局面。您现在的状态与完全掌控之间的差距比您想象的小。一套清晰的系统就能弥合这个差距。",
      cta: "了解如何弥合这个差距",
    },
  },
  {
    title: "The Gut Pilot",
    labelBg: "#FAEEDA", labelColor: "#633806",
    en: {
      label: "Flying partially blind",
      body: "Pattern recognition is your accounting software - and honestly, it's gotten you this far. But you're making real decisions on incomplete information, which creates invisible risk. It tends to stay invisible right up until it isn't. The good news: your instincts are sound. The numbers just need to catch up.",
      cta: "Find out what a cleaner setup looks like",
    },
    bm: {
      label: "Terbang Separuh Buta",
      body: "Pengecaman corak adalah perisian perakaunan anda - dan jujurnya, ia telah membawa anda setakat ini. Tetapi anda membuat keputusan sebenar berdasarkan maklumat yang tidak lengkap, yang mewujudkan risiko yang tidak kelihatan. Ia cenderung kekal tidak kelihatan sehingga tidak lagi begitu. Berita baiknya: naluri anda kukuh. Angka-angka itu hanya perlu mengejar.",
      cta: "Ketahui seperti apa persediaan yang lebih bersih",
    },
    zh: {
      label: "半盲目飞行",
      body: "模式识别是您的会计软件, 说实话，它让您走到了今天这一步。但您正在基于不完整的信息做真实的决策，这会产生无形的风险。这种风险往往保持无形，直到它不再是这样。好消息是：您的直觉是可靠的。数字只需要跟上来。",
      cta: "了解更清晰的设置是什么样子",
    },
  },
  {
    title: "The Brave Improviser",
    labelBg: "#FAECE7", labelColor: "#712B13",
    en: {
      label: "Needs attention · Real exposure",
      body: "You're keeping a business alive through sheer drive and pattern recognition. That's genuinely impressive. But you're navigating without instruments - and the gaps in your financial picture tend to compound quietly. Missed obligations, mispriced work, and cash surprises get harder to absorb the longer the books stay unstructured.",
      cta: "Talk to MacroByte about getting structured",
    },
    bm: {
      label: "Perlu Perhatian · Pendedahan Sebenar",
      body: "Anda mengekalkan perniagaan melalui semangat yang kuat dan pengecaman corak. Itu benar-benar mengagumkan. Tetapi anda menavigasi tanpa instrumen - dan jurang dalam gambaran kewangan anda cenderung bertambah secara senyap. Obligasi yang terlepas, kerja yang diharga salah, dan kejutan aliran tunai semakin sukar ditanggung semakin lama buku itu kekal tidak berstruktur.",
      cta: "Bercakap dengan MacroByte tentang menstruktur perniagaan anda",
    },
    zh: {
      label: "需要关注 · 真实风险",
      body: "您靠着强大的驱动力和模式识别维持着一门生意。这真的很令人钦佩。但您是在没有仪表盘的情况下导航, 而您财务状况中的空缺往往在悄悄积累。错过的义务、定价错误的工作以及现金流意外，账目结构越长时间不完善，就越难承担。",
      cta: "与MacroByte谈谈如何建立结构",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// UI string translations
// ─────────────────────────────────────────────────────────────────────────────

const ui = {
  en: {
    title:      "SME Health Check",
    hook:       "Most founders score lower than they expect.",
    lead:       "7 questions across the areas that quietly make or break a business. Find out your financial type.",
    startBtn:   "Find out your type →",
    counter:    (c: number, t: number) => `Question ${c} of ${t}`,
    resultPre:  "Your financial type",
    resultNote: "MacroByte works with Malaysian SMEs at exactly this stage.",
    restartBtn: "Retake with a different set of questions",
  },
  bm: {
    title:      "SME Health Check",
    hook:       "Kebanyakan pengusaha memberi markah lebih rendah daripada yang dijangkakan.",
    lead:       "7 soalan merangkumi aspek yang mempengaruhi perniagaan anda. Ketahui jenis kewangan anda.",
    startBtn:   "Ketahui jenis anda →",
    counter:    (c: number, t: number) => `Soalan ${c} daripada ${t}`,
    resultPre:  "Jenis kewangan anda",
    resultNote: "MacroByte bekerja bersama PKS Malaysia di peringkat ini.",
    restartBtn: "Cuba semula dengan soalan berbeza",
  },
  zh: {
    title:      "SME 财务健康检查",
    hook:       "大多数创始人的得分比预期的低。",
    lead:       "7道题，涵盖影响企业的关键领域。了解您的财务类型。",
    startBtn:   "了解您的类型 →",
    counter:    (c: number, t: number) => `第 ${c} 题，共 ${t} 题`,
    resultPre:  "您的财务类型",
    resultNote: "MacroByte 与马来西亚中小企业在此阶段携手合作。",
    restartBtn: "用不同的问题重新测试",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const THEMES: Theme[] = [
  "cash", "records", "receivables", "payables", "payroll", "compliance", "decisions",
];

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

export default function HealthCheckPage({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  const [questions, setQuestions] = useState<Question[]>(pickQuestions);
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function startQuiz() { setPhase("quiz"); }

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
    setQuestions(pickQuestions());
    setAnswers([]);
    setCurrent(0);
    setPhase("intro");
  }

  const total = answers.reduce((a, b) => a + b, 0);
  const profile = getProfile(total);
  const p = profile[locale];
  const progress = phase === "result" ? 100 : (current / questions.length) * 100;

  const waMsg = encodeURIComponent(
    `Hi MacroByte - I just did the SME Health Check and got "${profile.title}". I'd like to find out more.`
  );
  const waHref = `https://wa.me/${WHATSAPP}?text=${waMsg}`;

  const q = questions[current];

  return (
    <main id="main-content" className="page" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: BG,
          backgroundSize: "cover", backgroundPosition: "center",
          backgroundRepeat: "no-repeat", opacity: 0.3,
          zIndex: 0, pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hc-wrap">

          {/* ── Intro ── */}
          {phase === "intro" && (
            <div>
              <h1 className="page-title" style={{ marginBottom: 10 }}>{t.title}</h1>
              <p className="page-lead" style={{ marginBottom: 6 }}>{t.hook}</p>
              <p className="page-lead" style={{ marginBottom: 28, fontSize: 15 }}>{t.lead}</p>
              <button className="hc-start-btn" onClick={startQuiz}>{t.startBtn}</button>
            </div>
          )}

          {/* ── Quiz ── */}
          {phase === "quiz" && (
            <div>
              <div className="hc-progress-bar">
                <div className="hc-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="hc-q-card">
                <span className="hc-pill" style={{ background: q.pillBg, color: q.pillColor }}>
                  {q[locale].pill}
                </span>
                <p className="hc-q-text">{q[locale].q}</p>
                <div>
                  {q[locale].opts.map((opt) => (
                    <button key={opt.text} className="hc-opt" onClick={() => answer(opt.score)}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
              <p className="hc-q-counter">{t.counter(current + 1, questions.length)}</p>
            </div>
          )}

          {/* ── Result ── */}
          {phase === "result" && (
            <div className="hc-result-card">
              <p className="hc-result-pre">{t.resultPre}</p>
              <p className="hc-result-title">{profile.title}</p>
              <span
                className="hc-pill"
                style={{ background: profile.labelBg, color: profile.labelColor, display: "inline-block", marginBottom: 18 }}
              >
                {p.label}
              </span>
              <p className="hc-result-body">{p.body}</p>
              <hr className="hc-result-divider" />
              <p className="hc-result-note">{t.resultNote}</p>
              <a href={waHref} className="hc-cta-btn" target="_blank" rel="noopener noreferrer">
                {p.cta} → WhatsApp
              </a>
              <button className="hc-restart-btn" onClick={restart}>{t.restartBtn}</button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
