import React, { useState } from 'react';
import { useRouter } from 'next/router';

export function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-900 text-white">
      <div className="w-96 p-6 shadow-xl bg-white text-gray-900 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-900">התחברות ל-WETRADE</h2>
        <input type="email" placeholder="אימייל" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3 w-full p-2 border rounded-lg" />
        <input type="password" placeholder="סיסמה" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3 w-full p-2 border rounded-lg" />
        <button onClick={handleLogin} className="w-full bg-blue-700 text-white p-2 rounded-lg">התחבר</button>
      </div>
    </div>
  );
}