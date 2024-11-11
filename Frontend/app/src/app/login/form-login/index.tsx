'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formLogin } from '@/actions/authActions';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const loginResult = await formLogin(formData);

      if (loginResult && !loginResult.error) {
        router.push('/products');
      } else {
        setError(loginResult?.error || "Unexpected login error");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  };

  return (
    <div className="w-screen p-4">
      <h3 className="text-lg font-bold">Login</h3>
      <h4 className="text-sm text-gray-600">Access to your account</h4>
      <form onSubmit={handleLogin} className="mt-4">
        <div className="mb-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
        <p className="mt-2 text-sm">
          Don’t have an account? 
          <Link href="/register" className="text-blue-500"> Register</Link>
        </p>
      </form>
    </div>
  );
}
