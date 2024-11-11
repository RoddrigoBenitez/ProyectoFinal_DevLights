"use server";

export async function register(formData: FormData) {
  const name = formData.get("name");
  const lastname = formData.get("lastname");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const bodyPayload = {
    first_name: name,
    last_name: lastname,
    username,
    email,
    password,
  };

  console.log("Register bodyPayload:", bodyPayload);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });
    console.log("Register response status:", response.status);
    if (response.status !== 201) {
      throw new Error("Something went wrong with registration");
    }
    return { data: await response.json(), error: null };
  } catch (error) {
    console.error("Register Error:", error);
    return { data: null, error: (error as Error).message };
  }
}