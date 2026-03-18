import type { ReactNode } from "react";

// ─── Shared constants ────────────────────────────────────────────────────────
// Change these ONE place and every page updates automatically.
export const WHATSAPP = "60134700013";

// Bookkeeping
export const PRICE_BASE = 699;
export const TX_INCLUDED = 80;
export const TX_EXTRA_RATE = 3;

// Accounts Receivable & Accounts Payable (add-on)
export const AR_AP_BASE = 199;
export const AR_AP_INV_INCLUDED = 20;
export const AR_AP_EXTRA_RATE = 5;

// Payroll (add-on)
export const PAYROLL_BASE = 199;
export const PAYROLL_EMP_INCLUDED = 10;
export const PAYROLL_EXTRA_RATE = 15;

function wa(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────
export type Locale = "en" | "bm" | "zh";

export interface ServiceModule {
  title: string;
  tagline: string;
  items: string[];
}

export interface LocaleContent {
  nav: {
    packages: string;
    faq: string;
    contact: string;
  };
  home: {
    badge: string;
    h1: string;
    lead: string;
    card1: { title: string; body: string };
    card2: { title: string; body: string };
    card3: { title: string; body: string };
    ctaWhatsApp: string;
    ctaContact: string;
    waText: string;
  };
  services: {
    title: string;
    lead: string;
    addonSectionTitle: string;
    addonSectionSubtitle: string;
    bookkeeping: ServiceModule;
    ar: ServiceModule;
    ap: ServiceModule;
    payroll: ServiceModule;
    bundle: { title: string; body: string; cta: string; waText: string };
    ctaWhatsApp: string;
    ctaContact: string;
    waText: string;
  };
  pricing: {
    title: string;
    lead: string;
    from: string;
    per: string;
    // Bookkeeping
    bkTitle: string;
    txLine: (tx: number) => ReactNode;
    extraLine: (rm: number, tx: number) => ReactNode;
    bkCta: string;
    waOnboard: string;
    // Bookkeeping volume tier
    volumeTitle: string;
    volumeBody: string;
    volumeCta: string;
    waVolume: string;
    // Bookkeeping light/starter tier
    lightTitle: string;
    lightBody: string;
    lightCta: string;
    waLight: string;
    // Add-ons section label + subtitle
    addonSectionTitle: string;
    addonSectionSubtitle: string;
    // Accounts Receivable
    arTitle: string;
    arInvLine: (inv: number) => ReactNode;
    arExtraLine: (rm: number, inv: number) => ReactNode;
    arCta: string;
    waAr: string;
    // Accounts Payable
    apTitle: string;
    apInvLine: (inv: number) => ReactNode;
    apExtraLine: (rm: number, inv: number) => ReactNode;
    apCta: string;
    waAp: string;
    // Payroll
    payrollTitle: string;
    payrollEmpLine: (emp: number) => ReactNode;
    payrollExtraLine: (rm: number) => ReactNode;
    payrollCta: string;
    waPayroll: string;
    // Complete Package
    bundleTitle: string;
    bundleBody: string;
    bundleCta: string;
    waBundle: string;
    // Footer note
    footnote: string;
  };
  faq: {
    title: string;
    lead: string;
    items: { q: string; a: string }[];
    stillQuestion: string;
    contactLinkText: string;
  };
  contact: {
    title: string;
    lead: string;
    fields: {
      name: string;
      company: string;
      email: string;
      tx: string;
      message: string;
    };
    txPlaceholder: string;
    submit: string;
    waLinkText: string;
    waText: string;
    subject: string;
  };
  thankYou: {
    title: string;
    lead: string;
    backHome: string;
  };
  footer: {
    tagline: string;
  };
}

// ─── Content ──────────────────────────────────────────────────────────────────
export const content: Record<Locale, LocaleContent> = {
  // ── English ────────────────────────────────────────────────────────────────
  en: {
    nav: {
      packages: "Packages",
      faq: "FAQ",
      contact: "Contact",
    },
    home: {
      badge: "Built for Malaysian SMEs",
      h1: "Bookkeeping handled properly. Without the hassle.",
      lead: "Reliable monthly bookkeeping for Malaysian SMEs. We manage your records, reconciliations and reports so you do not need extra software, systems or staff.",
      card1: {
        title: "Clean Books",
        body: "Monthly reconciliation, proper categorisation, and well-maintained ledgers that stay up to date.",
      },
      card2: {
        title: "Clear Numbers",
        body: "Simple monthly reports that show where your money is going. No accounting jargon. No confusion.",
      },
      card3: {
        title: "Fully Managed",
        body: "Send your documents. We handle the rest. No extra software needed.",
      },
      ctaWhatsApp: "Talk on WhatsApp",
      ctaContact: "Reach Out to Us",
      waText: "Hi MacroByte, I'm interested in monthly bookkeeping. My estimated monthly transactions are ____.",
    },
    services: {
      title: "Bookkeeping & Finance Services",
      lead: "Choose one module, combine a few, or take the complete package.",
      addonSectionTitle: "Enhance with add-ons",
      addonSectionSubtitle: "Layer on any of these to extend your finance coverage.",
      bookkeeping: {
        title: "Bookkeeping",
        tagline: "Your numbers, kept in order every month.",
        items: [
          "Bank Reconciliation",
          "Transaction Categorisation",
          "Trial Balance",
          "Profit & Loss",
          "Balance Sheet",
          "Management Analysis",
        ],
      },
      ar: {
        title: "Accounts Receivable",
        tagline: "Know exactly what customers owe to follow-up faster.",
        items: [
          "Invoice tracking and recording",
          "Aging report — overdue at a glance",
          "Customer payment follow-up notes",
          "Reconciliation against bank receipts",
        ],
      },
      ap: {
        title: "Accounts Payable",
        tagline: "Keep supplier payments organised and on time.",
        items: [
          "Supplier invoice processing and recording",
          "Payment schedule management",
          "Aging report — outstanding payables",
          "Reconciliation against bank payments",
        ],
      },
      payroll: {
        title: "Payroll",
        tagline: "On-time payroll with statutory deductions.",
        items: [
          "Monthly salary computation",
          "EPF, SOCSO, EIS and PCB deductions",
          "Payslip preparation for each employee",
          "Monthly payroll summary report",
        ],
      },
      bundle: {
        title: "Complete Package — All Four",
        body: "Bookkeeping, AR, AP and Payroll under one roof. One point of contact, complete financial visibility.",
        cta: "Ask about the complete package",
        waText:
          "Hi MacroByte. I'm interested in the Complete Package (Bookkeeping + AR + AP + Payroll). Can you share more details?",
      },
      ctaWhatsApp: "Talk on WhatsApp",
      ctaContact: "Reach Out to Us",
      waText: "Hi MacroByte. I'd like to ask about your services.",
    },
    pricing: {
      title: "Bookkeeping & Finance Packages for Malaysian SMEs",
      lead: "Everything included, clearly priced. Choose one module or combine.",
      from: "From",
      per: "/ month",
      bkTitle: "Bookkeeping",
      txLine: (tx) => <>Includes up to <b>{tx} transactions</b> per month</>,
      extraLine: (rm, tx) => <><b>RM{rm}</b> per additional transaction above {tx}</>,
      bkCta: "Get started",
      waOnboard: wa("Hi. I would like to get started with Bookkeeping."),
      volumeTitle: "High volume?",
      volumeBody: `For substantially higher transaction volumes, let's discuss a custom rate.`,
      volumeCta: "Discuss volume pricing",
      waVolume: wa("Hi MacroByte. I process more than 80 transactions a month and would like to discuss volume pricing."),
      lightTitle: "Just starting out?",
      lightBody: "Early-stage or low-volume businesses can reach out for a lighter setup.",
      lightCta: "Explore lighter setup",
      waLight: wa("Hi MacroByte. I'm an early-stage business and would like to explore a lighter bookkeeping setup."),
      addonSectionTitle: "Add-on services",
      addonSectionSubtitle: "Pair any of these with bookkeeping for a more complete finance function.",
      arTitle: "Accounts Receivable",
      arInvLine: (inv) => <>Includes up to <b>{inv} invoices</b> per month</>,
      arExtraLine: (rm, inv) => <><b>RM{rm}</b> per additional invoice above {inv}</>,
      arCta: "Start AR service",
      waAr: wa("Hi. I would like to get started with Accounts Receivable."),
      apTitle: "Accounts Payable",
      apInvLine: (inv) => <>Includes up to <b>{inv} invoices</b> per month</>,
      apExtraLine: (rm, inv) => <><b>RM{rm}</b> per additional invoice above {inv}</>,
      apCta: "Start AP service",
      waAp: wa("Hi. I would like to get started with Accounts Payable."),
      payrollTitle: "Payroll",
      payrollEmpLine: (emp) => <>Includes up to <b>{emp} employees</b></>,
      payrollExtraLine: (rm) => <><b>RM{rm}</b> per additional employee</>,
      payrollCta: "Start payroll",
      waPayroll: wa("Hi. I would like to get started with Payroll."),
      bundleTitle: "Complete Package",
      bundleBody:
        "All four services — Bookkeeping, AR, AP and Payroll. One team, one monthly report, complete financial visibility.",
      bundleCta: "Ask about the complete package",
      waBundle: wa(
        "Hi. I'm interested in the Complete Package (Bookkeeping + AR + AP + Payroll)."
      ),
      footnote:
        "We'll review your volume and confirm your monthly rate before we begin.",
    },
    faq: {
      title: "Frequently Asked Questions",
      lead: "Common questions about MacroByte's services in Malaysia.",
      items: [
        {
          q: "What services do you offer?",
          a: "We offer four specialist modules: Bookkeeping, Accounts Receivable (AR), Accounts Payable (AP), and Payroll. You can choose just one, combine a few, or take all four as a complete package.",
        },
        {
          q: "Do I need to use Xero or any accounting software?",
          a: "No. You do not need to buy or learn any accounting software. Just send us your documents and we will handle everything.",
        },
        {
          q: "How much does your service cost?",
          a: `Bookkeeping starts from RM${PRICE_BASE} per month (up to ${TX_INCLUDED} transactions). You can add on Accounts Receivable or Accounts Payable from RM${AR_AP_BASE}/mo each (up to ${AR_AP_INV_INCLUDED} invoices, RM${AR_AP_EXTRA_RATE} per additional). Payroll is from RM${PAYROLL_BASE}/mo for up to ${PAYROLL_EMP_INCLUDED} employees (RM${PAYROLL_EXTRA_RATE} per additional). Contact us for volume or bundle pricing.`,
        },
        {
          q: "How do I send you my documents?",
          a: "You will be provided with a secure folder dedicated to your account. Simply upload your documents there and we'll take care of the rest.",
        },
        {
          q: "How long does it take to complete monthly bookkeeping?",
          a: "Most clients receive their monthly reports within 20 business days after submitting complete documents.",
        },
        {
          q: "Can you help with overdue or messy accounts?",
          a: "Yes. We provide clean-up and catch-up services to bring your accounts back in order.",
        },
      ],
      stillQuestion: "Still have questions?",
      contactLinkText: "Contact us here",
    },
    contact: {
      title: "Get a Quote",
      lead: "Tell us about your business. We'll reply with a simple monthly plan.",
      fields: {
        name: "name",
        company: "company",
        email: "email",
        tx: "monthly_transactions",
        message: "message",
      },
      txPlaceholder: "Monthly transactions (estimate)",
      submit: "Submit",
      waLinkText: "Prefer WhatsApp? Click here",
      waText:
        "Hi MacroByte, I'm interested in monthly bookkeeping. My estimated monthly transactions are ____.",
      subject: "New MacroByte Quote Request (EN)",
    },
    thankYou: {
      title: "Thank you. We have received your request.",
      lead: "We will reply with a simple monthly plan.",
      backHome: "Back to home",
    },
    footer: { tagline: "Bookkeeping for SMEs across Malaysia" },
  },

  // ── Bahasa Melayu ──────────────────────────────────────────────────────────
  bm: {
    nav: {
      packages: "Pakej",
      faq: "Soalan Lazim",
      contact: "Hubungi",
    },
    home: {
      badge: "Dibina untuk SME",
      h1: "Perakaunan diurus dengan betul. Tanpa kerumitan.",
      lead: "Perkhidmatan perakaunan bulanan yang boleh dipercayai untuk PKS Malaysia. Kami mengurus rekod, rekonsiliasi dan laporan supaya anda tidak memerlukan perisian tambahan atau kakitangan tambahan.",
      card1: {
        title: "Buku Kemas",
        body: "Rekonsiliasi bulanan, pengkategorian tepat, dan lejar yang sentiasa dikemas kini.",
      },
      card2: {
        title: "Nombor Jelas",
        body: "Laporan bulanan ringkas yang menunjukkan aliran wang anda. Tanpa istilah perakaunan yang mengelirukan.",
      },
      card3: {
        title: "Diurus Sepenuhnya",
        body: "Hantar dokumen anda. Kami uruskan selebihnya. Tiada perisian tambahan diperlukan.",
      },
      ctaWhatsApp: "Hubungi melalui WhatsApp",
      ctaContact: "Hubungi Kami",
      waText:
        "Hi MacroByte, Saya berminat dengan perkhidmatan akaun bulanan. Anggaran transaksi bulanan saya adalah ____.",
    },
    services: {
      title: "Perkhidmatan Perakaunan & Kewangan untuk PKS",
      lead: "Pilih satu modul, gabungkan beberapa, atau ambil pakej lengkap.",
      addonSectionTitle: "Tingkatkan dengan perkhidmatan tambahan",
      addonSectionSubtitle: "Tambah mana-mana perkhidmatan ini untuk liputan kewangan yang lebih lengkap.",
      bookkeeping: {
        title: "Perakaunan",
        tagline: "Nombor anda dikemas kini dan teratur setiap bulan.",
        items: [
          "Rekonsiliasi bank & pengkategorian transaksi",
          "Penutupan lejar akhir bulan",
          "Penyata Untung Rugi dan Lembaran Imbangan",
          "Paparan aliran tunai & ringkasan transaksi",
          "Soalan dan sokongan berterusan",
        ],
      },
      ar: {
        title: "Akaun Belum Terima",
        tagline: "Ketahui dengan tepat berapa yang perlu diterima daripada pelanggan.",
        items: [
          "Penjejakan dan pencatatan invois",
          "Laporan penuaan — tunggakan sekilas pandang",
          "Catatan susulan pembayaran pelanggan",
          "Rekonsiliasi dengan resit bank",
        ],
      },
      ap: {
        title: "Akaun Belum Bayar",
        tagline: "Urus pembayaran pembekal dengan teratur dan tepat masa.",
        items: [
          "Pemprosesan dan pencatatan invois pembekal",
          "Pengurusan jadual pembayaran",
          "Laporan penuaan — baki belum bayar",
          "Rekonsiliasi dengan pembayaran bank",
        ],
      },
      payroll: {
        title: "Penggajian",
        tagline: "Penggajian tepat dan tepat masa dengan semua potongan berkanun diuruskan.",
        items: [
          "Pengiraan gaji bulanan",
          "Potongan KWSP, PERKESO, EIS dan PCB",
          "Penyediaan slip gaji untuk setiap pekerja",
          "Laporan ringkasan gaji bulanan",
        ],
      },
      bundle: {
        title: "Pakej Lengkap — Keempat-empat Modul",
        body: "Perakaunan, Akaun Belum Terima, Akaun Belum Bayar dan Penggajian di bawah satu bumbung. Satu titik hubungan, gambaran kewangan yang lengkap.",
        cta: "Tanya tentang pakej lengkap",
        waText:
          "Hi MacroByte. Saya berminat dengan Pakej Lengkap (Perakaunan + ABT + ABB + Penggajian). Boleh kongsikan lebih lanjut?",
      },
      ctaWhatsApp: "Hubungi melalui WhatsApp",
      ctaContact: "Hubungi Kami",
      waText: "Hi MacroByte. Saya ingin bertanya tentang perkhidmatan anda.",
    },
    pricing: {
      title: "Pakej Perakaunan & Kewangan untuk PKS Malaysia",
      lead: "Semua termasuk, harga yang jelas. Pilih satu modul atau gabungkan.",
      from: "Dari",
      per: "/ bulan",
      bkTitle: "Perakaunan",
      txLine: (tx) => <>Termasuk sehingga <b>{tx} transaksi</b> sebulan</>,
      extraLine: (rm, tx) => (
        <>
          <b>RM{rm}</b> bagi setiap transaksi tambahan melebihi {tx}
        </>
      ),
      bkCta: "Mulakan sekarang",
      waOnboard: wa("Hi. Saya ingin memulakan perkhidmatan Perakaunan."),
      volumeTitle: "Jumlah transaksi tinggi?",
      volumeBody: `Memproses lebih daripada ${TX_INCLUDED} transaksi sebulan? Mari bincangkan kadar khas untuk anda.`,
      volumeCta: "Bincang harga jumlah tinggi",
      waVolume: wa("Hi MacroByte. Saya memproses lebih daripada 80 transaksi sebulan dan ingin berbincang tentang harga khas."),
      lightTitle: "Baru bermula?",
      lightBody: "Perniagaan peringkat awal atau jumlah transaksi rendah boleh hubungi kami untuk pelan yang lebih ringan.",
      lightCta: "Terokai pelan ringan",
      waLight: wa("Hi MacroByte. Saya baru memulakan perniagaan dan ingin mengetahui tentang pelan perakaunan yang lebih ringan."),
      addonSectionTitle: "Perkhidmatan tambahan",
      addonSectionSubtitle: "Tambah mana-mana perkhidmatan ini bersama perakaunan untuk fungsi kewangan yang lebih lengkap.",
      arTitle: "Akaun Belum Terima",
      arInvLine: (inv) => <>Termasuk sehingga <b>{inv} invois</b> sebulan</>,
      arExtraLine: (rm, inv) => (
        <>
          <b>RM{rm}</b> bagi setiap invois tambahan melebihi {inv}
        </>
      ),
      arCta: "Mulakan Perkhidmatan ABT",
      waAr: wa("Hi. Saya ingin memulakan perkhidmatan Akaun Belum Terima."),
      apTitle: "Akaun Belum Bayar",
      apInvLine: (inv) => <>Termasuk sehingga <b>{inv} invois</b> sebulan</>,
      apExtraLine: (rm, inv) => (
        <>
          <b>RM{rm}</b> bagi setiap invois tambahan melebihi {inv}
        </>
      ),
      apCta: "Mulakan Perkhidmatan ABB",
      waAp: wa("Hi. Saya ingin memulakan perkhidmatan Akaun Belum Bayar."),
      payrollTitle: "Penggajian",
      payrollEmpLine: (emp) => <>Termasuk sehingga <b>{emp} pekerja</b></>,
      payrollExtraLine: (rm) => <><b>RM{rm}</b> bagi setiap pekerja tambahan</>,
      payrollCta: "Mulakan Perkhidmatan Gaji",
      waPayroll: wa("Hi. Saya ingin memulakan perkhidmatan Penggajian."),
      bundleTitle: "Pakej Lengkap",
      bundleBody:
        "Keempat-empat perkhidmatan — Perakaunan, ABT, ABB dan Penggajian. Satu pasukan, satu laporan bulanan, gambaran kewangan yang penuh.",
      bundleCta: "Tanya tentang pakej lengkap",
      waBundle: wa(
        "Hi. Saya berminat dengan Pakej Lengkap (Perakaunan + ABT + ABB + Penggajian)."
      ),
      footnote:
        "Kami akan semak jumlah transaksi anda dan sahkan kadar bulanan sebelum bermula.",
    },
    faq: {
      title: "Soalan Lazim",
      lead: "Soalan lazim mengenai perkhidmatan MacroByte di Malaysia.",
      items: [
        {
          q: "Apakah perkhidmatan yang anda tawarkan?",
          a: "Kami menawarkan empat modul pakar: Perakaunan, Akaun Belum Terima (ABT), Akaun Belum Bayar (ABB), dan Penggajian. Anda boleh memilih satu sahaja, menggabungkan beberapa, atau mengambil keempat-empatnya sebagai pakej lengkap.",
        },
        {
          q: "Adakah saya perlu menggunakan Xero atau perisian perakaunan?",
          a: "Tidak. Anda tidak perlu membeli atau belajar mana-mana perisian perakaunan. Hanya hantarkan dokumen anda kepada kami dan kami akan uruskan semuanya.",
        },
        {
          q: "Berapakah kos perkhidmatan anda?",
          a: `Perakaunan bermula dari RM${PRICE_BASE} sebulan (sehingga ${TX_INCLUDED} transaksi). Anda boleh tambah ABT atau ABB dari RM${AR_AP_BASE}/bulan (sehingga ${AR_AP_INV_INCLUDED} invois, RM${AR_AP_EXTRA_RATE} setiap invois tambahan). Penggajian dari RM${PAYROLL_BASE}/bulan untuk sehingga ${PAYROLL_EMP_INCLUDED} pekerja (RM${PAYROLL_EXTRA_RATE} setiap pekerja tambahan). Hubungi kami untuk harga jumlah tinggi atau pakej gabungan.`,
        },
        {
          q: "Bagaimana saya menghantar dokumen kepada anda?",
          a: "Anda akan diberikan folder selamat khusus untuk akaun anda. Hanya muat naik dokumen anda di situ dan kami akan uruskan selebihnya.",
        },
        {
          q: "Berapa lama masa diperlukan untuk menyiapkan perakaunan bulanan?",
          a: "Kebanyakan klien menerima laporan bulanan dalam tempoh 7 hari bekerja selepas dokumen lengkap dihantar.",
        },
        {
          q: "Bolehkah anda bantu akaun yang tertunggak atau berselerak?",
          a: "Ya. Kami menyediakan perkhidmatan 'clean-up' dan 'catch-up' untuk menyusun semula akaun anda supaya kembali teratur.",
        },
      ],
      stillQuestion: "Masih ada soalan?",
      contactLinkText: "Hubungi kami di sini",
    },
    contact: {
      title: "Dapatkan Sebut Harga",
      lead: "Beritahu kami tentang perniagaan anda. Kami akan balas dengan pelan bulanan yang ringkas.",
      fields: {
        name: "nama",
        company: "syarikat",
        email: "emel",
        tx: "anggaran_transaksi_bulanan",
        message: "mesej",
      },
      txPlaceholder: "Anggaran transaksi bulanan",
      submit: "Hantar",
      waLinkText: "Lebih suka WhatsApp? Klik di sini",
      waText:
        "Hi MacroByte, Saya berminat dengan perkhidmatan akaun bulanan. Anggaran transaksi bulanan saya adalah ____.",
      subject: "New MacroByte Quote Request (BM)",
    },
    thankYou: {
      title: "Terima kasih. Kami telah menerima permintaan anda",
      lead: "Kami akan membalas dengan pelan bulanan yang ringkas.",
      backHome: "Kembali ke laman utama",
    },
    footer: { tagline: "Perakaunan untuk PKS di seluruh Malaysia" },
  },

  // ── 中文 ───────────────────────────────────────────────────────────────────
  zh: {
    nav: {
      packages: "套餐",
      faq: "常见问题",
      contact: "联系",
    },
    home: {
      badge: "为马来西亚中小微企业打造",
      h1: "账目妥善处理。无需烦恼。",
      lead: "为马来西亚中小微企业提供可靠的每月记账服务。我们负责您的记录、对账与报告，您无需额外软件或额外员工。",
      card1: {
        title: "账目清晰",
        body: "每月对账、正确分类，账本保持整洁并及时更新。",
      },
      card2: {
        title: "数字透明",
        body: "简洁易懂的每月报告，让您清楚资金流向。没有复杂的会计术语。",
      },
      card3: {
        title: "全程代办",
        body: "您只需提供资料，我们负责其余事项。无需额外软件。",
      },
      ctaWhatsApp: "WhatsApp 联系",
      ctaContact: "联系我们",
      waText:
        "Hi MacroByte，我有兴趣了解每月记账服务。我来自首页。我的每月交易数量大约是____。",
    },
    services: {
      title: "记账与财务服务",
      lead: "按需选择一项、自由搭配，或直接选完整套餐。",
      addonSectionTitle: "附加服务",
      addonSectionSubtitle: "搭配任意附加服务，打造更完整的财务管理体系。",
      bookkeeping: {
        title: "记账服务",
        tagline: "每月账目清晰、有序管理。",
        items: [
          "银行对账与交易分类",
          "月末账目结算",
          "损益表与资产负债表",
          "现金流视图与交易汇总",
          "持续问题解答与支持",
        ],
      },
      ar: {
        title: "应收账款",
        tagline: "清楚掌握客户欠款，加快回款速度。",
        items: [
          "发票追踪与记录",
          "账龄报告 — 一目了然逾期情况",
          "客户付款跟进备注",
          "与银行收款核对",
        ],
      },
      ap: {
        title: "应付账款",
        tagline: "妥善管理供应商付款，按时结算。",
        items: [
          "供应商发票处理与记录",
          "付款计划管理",
          "账龄报告 — 未付款项一览",
          "与银行付款核对",
        ],
      },
      payroll: {
        title: "薪资服务",
        tagline: "准确、准时的薪资计算，所有法定扣款一并处理。",
        items: [
          "月度薪资计算",
          "EPF、SOCSO、EIS 及 PCB 扣款",
          "为每位员工准备薪资单",
          "每月薪资汇总报告",
        ],
      },
      bundle: {
        title: "完整套餐 — 全部四项",
        body: "记账、应收账款、应付账款与薪资服务，一站式打理。一个联系人，全方位财务透明度。",
        cta: "询问完整套餐",
        waText:
          "Hi MacroByte，我想了解完整套餐（记账 + 应收账款 + 应付账款 + 薪资）。能分享更多详情吗？",
      },
      ctaWhatsApp: "WhatsApp 联系",
      ctaContact: "联系我们",
      waText: "Hi MacroByte. 我想询问您的服务。",
    },
    pricing: {
      title: "记账与财务服务套餐",
      lead: "服务内容清晰，定价透明。单选或自由组合。",
      from: "起",
      per: "/ 每月",
      bkTitle: "记账服务",
      txLine: (tx) => <>每月包含最多 <b>{tx} 笔交易</b></>,
      extraLine: (rm, tx) => (
        <>
          超过 <b>{tx}</b> 笔后，每笔额外收费 <b>RM{rm}</b>
        </>
      ),
      bkCta: "立即开始",
      waOnboard: wa("Hi. 我想开始办理记账服务。"),
      volumeTitle: "交易量较大？",
      volumeBody: `每月交易笔数超过 ${TX_INCLUDED} 笔？欢迎联系我们商讨专属优惠价格。`,
      volumeCta: "咨询大量交易定价",
      waVolume: wa("Hi MacroByte. 我每月处理超过 80 笔交易，希望了解大量交易的定价方案。"),
      lightTitle: "刚刚起步？",
      lightBody: "早期或低交易量的企业可联系我们，了解更轻量的入门方案。",
      lightCta: "了解轻量方案",
      waLight: wa("Hi MacroByte. 我是初创企业，想了解较轻量的记账入门方案。"),
      addonSectionTitle: "附加服务",
      addonSectionSubtitle: "将任意附加服务与记账搭配，构建更完整的财务功能。",
      arTitle: "应收账款",
      arInvLine: (inv) => <>每月包含最多 <b>{inv} 张发票</b></>,
      arExtraLine: (rm, inv) => (
        <>
          超过 <b>{inv}</b> 张后，每张额外收费 <b>RM{rm}</b>
        </>
      ),
      arCta: "开始应收账款服务",
      waAr: wa("Hi. 我想开始办理应收账款服务。"),
      apTitle: "应付账款",
      apInvLine: (inv) => <>每月包含最多 <b>{inv} 张发票</b></>,
      apExtraLine: (rm, inv) => (
        <>
          超过 <b>{inv}</b> 张后，每张额外收费 <b>RM{rm}</b>
        </>
      ),
      apCta: "开始应付账款服务",
      waAp: wa("Hi. 我想开始办理应付账款服务。"),
      payrollTitle: "薪资服务",
      payrollEmpLine: (emp) => <>包含最多 <b>{emp} 名员工</b></>,
      payrollExtraLine: (rm) => <>每额外一名员工收费 <b>RM{rm}</b></>,
      payrollCta: "开始薪资服务",
      waPayroll: wa("Hi. 我想开始办理薪资服务。"),
      bundleTitle: "完整套餐",
      bundleBody:
        "四项服务全包 — 记账、应收账款、应付账款与薪资。一个团队，一份月报，完整财务视野。",
      bundleCta: "询问完整套餐",
      waBundle: wa(
        "Hi. 我想了解完整套餐（记账 + 应收账款 + 应付账款 + 薪资）。"
      ),
      footnote: "我们会先审核您的交易量，并在开始前确认月费。",
    },
    faq: {
      title: "常见问题",
      lead: "MacroByte 在马来西亚提供服务的常见问题解答。",
      items: [
        {
          q: "你们提供哪些服务？",
          a: "我们提供四大专业模块：记账服务、应收账款、应付账款和薪资服务。您可以只选一项、搭配多项，或选择完整套餐，四项一并托管。",
        },
        {
          q: "我需要使用 Xero 或任何会计软件吗？",
          a: "不需要。你无需购买或学习任何会计软件。只要把资料发给我们，我们会负责全部流程。",
        },
        {
          q: "你们的服务费用是多少？",
          a: `记账服务每月起价 RM${PRICE_BASE}（包含最多 ${TX_INCLUDED} 笔交易）。应收账款或应付账款可作为附加服务，各自起价 RM${AR_AP_BASE}/月（含最多 ${AR_AP_INV_INCLUDED} 张发票，超出每张 RM${AR_AP_EXTRA_RATE}）。薪资服务起价 RM${PAYROLL_BASE}/月（含最多 ${PAYROLL_EMP_INCLUDED} 名员工，超出每人 RM${PAYROLL_EXTRA_RATE}）。如需套餐或大量定价，请联系我们。`,
        },
        {
          q: "我如何把资料交给你们？",
          a: "我们会提供一个专属且安全的文件夹给你。你只需要把资料上传到里面，我们会处理其余部分。",
        },
        {
          q: "每月记账需要多久完成？",
          a: "大多数客户在提交完整资料后的 7 个工作日内会收到月度报表。",
        },
        {
          q: "可以处理积压或混乱的账目吗？",
          a: "可以。我们提供清账与补账服务，帮助你把账目整理回到正轨。",
        },
      ],
      stillQuestion: "还有问题？",
      contactLinkText: "点击这里联系我们",
    },
    contact: {
      title: "获取报价",
      lead: "告诉我们您的业务情况，我们会回复一个简单的月度方案。",
      fields: {
        name: "姓名",
        company: "公司",
        email: "电子邮箱",
        tx: "每月交易数量（预估）",
        message: "留言",
      },
      txPlaceholder: "每月交易数量（预估）",
      submit: "提交",
      waLinkText: "更喜欢 WhatsApp？点击这里",
      waText:
        "Hi MacroByte，我有兴趣了解每月记账服务。我的每月交易数量大约是____。",
      subject: "New MacroByte Quote Request (ZH)",
    },
    thankYou: {
      title: "谢谢。我们已经收到您的请求。",
      lead: "我们会回复一个简单的月度方案。",
      backHome: "返回首页",
    },
    footer: { tagline: "为马来西亚各地中小微企业提供记账服务" },
  },
};
