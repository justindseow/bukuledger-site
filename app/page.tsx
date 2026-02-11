export default function Home() {
  return (
    <main className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl w-full text-center bg-white border rounded-2xl p-10 shadow-sm">
        <h1 className="text-4xl font-bold mb-3">BukuLedger</h1>
        <p className="text-gray-600 mb-8">
          Bookkeeping for Malaysian MSMEs & SMEs <span className="text-gray-300">•</span>{" "}
          Simpan Kira untuk SME di Malaysia
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="/en"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-95"
          >
            English
          </a>
          <a
            href="/bm"
            className="border px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            Bahasa Malaysia
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-left">
          <div className="border rounded-xl p-5">
            <p className="font-semibold mb-1">Clean books</p>
            <p className="text-sm text-gray-600">Monthly reconciliation & organisation.</p>
          </div>
          <div className="border rounded-xl p-5">
            <p className="font-semibold mb-1">Clear numbers</p>
            <p className="text-sm text-gray-600">Reports you can actually use.</p>
          </div>
          <div className="border rounded-xl p-5">
            <p className="font-semibold mb-1">Lead-gen ready</p>
            <p className="text-sm text-gray-600">Form + WhatsApp in one place.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
