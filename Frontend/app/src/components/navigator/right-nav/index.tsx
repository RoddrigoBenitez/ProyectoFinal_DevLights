'use client';
import { useRouter } from "next/navigation";
import { User, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { signIn, signOut, useSession } from "next-auth/react";

export default function RightNav() {
    const { totalItems } = useCart();
    const router = useRouter();
    const { data: session, status } = useSession();

    const userName = session?.user?.username || null;
    const userInitial = userName ? userName.charAt(0).toUpperCase() : null;

    if (status === 'loading') {
        return <div>Cargando...</div>; // Indicador de carga mientras se sincroniza la sesión
    }

    return (
        <div className="flex items-center gap-4">
            {session ? (
                <div className="relative flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                        {userInitial}
                    </div>
                    <span className="text-lg font-bold">{userName}</span>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="text-sm text-red-600 hover:underline"
                    >
                        Cerrar sesión
                    </button>
                </div>
            ) : (
                <div onClick={() => router.push('/login')} className="relative flex items-center px-4">
                    <User strokeWidth="1" className="cursor-pointer" />
                </div>
            )}
            <div onClick={() => router.push(`/cart`)} className="relative flex items-center">
                <ShoppingCart strokeWidth="1" className="cursor-pointer" />
                {totalItems > 0 && (
                    <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                        {totalItems} items
                    </span>
                )}
            </div>
        </div>
    );
}