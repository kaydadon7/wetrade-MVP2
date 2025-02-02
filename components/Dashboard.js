import React from 'react';
import { useRouter } from 'next/router';

export function Dashboard() {
  const router = useRouter();
  const userName = "משתמש לדוגמה";

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-5">
      <h2 className="text-3xl font-bold mb-5 text-blue-900">ברוך הבא, {userName}</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-4 shadow-lg cursor-pointer bg-white rounded-lg" onClick={() => router.push('/trading-room')}>
          <h3 className="text-xl font-bold">חדר מסחר חי</h3>
          <p>גש לצ'אט ולתיק ההשקעות בזמן אמת.</p>
        </div>
        <div className="p-4 shadow-lg cursor-pointer bg-white rounded-lg" onClick={() => router.push('/community')}>
          <h3 className="text-xl font-bold">חדשות הקהילה</h3>
          <p>צפה בפוסטים ובחדשות האחרונות מהסוחרים.</p>
        </div>
      </div>
    </div>
  );
}