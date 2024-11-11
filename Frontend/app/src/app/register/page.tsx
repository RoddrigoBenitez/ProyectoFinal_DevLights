import FormRegister from "./form-register";
import Image from "next/image";
export default function Page(){
    return(
            <main className="w-max-screen h-screen flex items-center justify-center">
    <div className="h-full w-1/2 flex items-center justify-center">
        <Image
          src="/vulcano-logo.jpg"
          alt="logo"
          height={300}
          width={500}
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
        <div className="h-full w-1/2 flex items-center justify-center">
            <FormRegister />
        </div>
        </main>
    )
}