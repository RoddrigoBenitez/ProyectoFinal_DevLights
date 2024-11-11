import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Page",
    description: "admin component",
  };

export default function page(){
    return(
        <div>
            <h2 className="text-4xl">Its the admin Page</h2>
        </div>
    )
}