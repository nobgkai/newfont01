import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>ตัวอย่างแสดงข้อความด้วย Tailwind</title>
        <meta charSet="UTF-8" />
        {/* ถ้าใช้ Tailwind ผ่าน CDN จริงๆ (ไม่แนะนำใน Next.js แต่ถ้าจะใช้ก็ใส่แบบนี้) */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="bg-gray-100 flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-indigo-600">
          สวัสดีฉันน้องไก่ๆ
        </h1>
      </main>
    </>
  );
}
