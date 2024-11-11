import Image from "next/image"
import LoginForm from "./form-login"

export default function Page() {
    return(
        
    <main className="max-w-screen max-h-screen">
      <div className=" flex  items-center">
        <div className=" w-1/2 flex items-center justify-center">
        <Image
          src="/vulcano-logo.jpg"
          alt="logo"
          height={300}
          width={500}
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
        <div className=" w-1/2 flex items-center justify-center">
           <LoginForm />
          </div>
      </div>
    
    </main>
    )
}