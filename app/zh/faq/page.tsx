export default function ZhFaq() {
  const faqs = [
    {
      q: "你们的服务包含哪些内容？",
      a: "我们的服务包括每月对账、交易分类、管理报表，以及持续支持，满足你的记账需求。",
    },
    {
      q: "我需要使用 Xero 或任何会计软件吗？",
      a: "不需要。你无需购买或学习任何会计软件。只要把资料发给我们，我们会负责全部流程。",
    },
    {
      q: "你们的服务费用是多少？",
      a: "我们的标准费用从每月 RM699 起。包含规范的月度记账、对账和持续支持。费用会根据交易量逐步调整，不会随着你成长而出现突然的大幅跳价。",
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
  ];

  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">常见问题</h1>

        <p className="page-lead">
          MacroByte 在马来西亚提供的记账服务常见问题解答。
        </p>

        <div style={{ marginTop: 28, display: "grid", gap: 16 }}>
          {faqs.map((item, i) => (
            <div key={i} className="card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="center-note">
          还有问题？{" "}
          <a className="link" href="/zh/contact">
            点击这里联系我们
          </a>
          。
        </div>
      </div>
    </main>
  );
}