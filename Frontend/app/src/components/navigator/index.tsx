'use client'
import RightNav from "./right-nav"; // Ajusta según la ruta correcta
import SearchInput from "../search-product";
import { useRouter } from "next/navigation";


export default function Navegation() {
    const router = useRouter()
    return (
        <nav className="w-[1200px] flex justify-between items-center p-4">
            <div onClick={() => router.push(`/`)}  className="flex items-center p-4 cursor-pointer sm:max-w-4xl border border-spacing-1">
                <h1 className="text-3xl">
                    ecommerce <span className="font-bold">Lights</span>
                </h1>
            </div>

            <div className="flex justify-start items-start text-1xl gap-4 p-4">
                <SearchInput onChange={() => {}}/>
            </div>

            <RightNav />
        </nav>
    );
}