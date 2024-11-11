'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FormRegister() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const { confirmPassword, ...userData } = formData; // Remove confirmPassword from userData
            const res = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!res.ok) {
                const { message } = await res.json();
                throw new Error(message || 'Error registering user');
            }

            router.push('/login'); // Redirecciona al login después de registrarse
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        }
    };

    return (
        <div className="p-4">
            <h3 className="text-lg font-bold">Register</h3>
            <h4 className="text-sm text-gray-600">Create a new account</h4>
            <form onSubmit={handleRegister} className="mt-4">
                <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Register</button>
                <p className="mt-2 text-sm">
                    Already have an account?
                    <Link href="/login" className="text-blue-500"> Go to Login</Link>
                </p>
            </form>
        </div>
    );
}
