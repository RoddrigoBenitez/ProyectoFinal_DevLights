"use server";

import { signOut } from "@/auth";

export async function logOut() {
  await signOut();
}

import { signIn } from "@/auth";

export async function login(credentials: { email: string; password: string }) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByMail(email: string) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/users?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return {
      userId: data._id,
      role: data.role,
      username: data.username,
      email: data.email,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function formLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const parsedEmail = email.toLowerCase();
  const password = formData.get("password");

  try {
    const result = await signIn("credentials", {
      email: parsedEmail,
      password: password as string,
      redirect: false,
    });
    return result;
  } catch (error) {
    console.log("actions error", error);
    throw new Error((error as Error).message);
  }
}
