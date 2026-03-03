import Link from "next/link";

export default function ZhThankYou() {
  return (
    <main className="page">
      <div className="container narrow">
        <h1 className="page-title">谢谢</h1>
        <p className="page-lead">
          我们已收到您的请求。我们会通过电子邮箱回复一个简单的月度方案。
        </p>

        <div className="center-note">
          <Link className="link" href="/zh">
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}