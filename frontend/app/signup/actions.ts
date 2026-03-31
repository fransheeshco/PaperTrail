"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("full_name") as string; // Capture the name

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName, // This saves the name to the user's metadata
      },
    },
  });

  if (error) {
    console.error(error.message);
    // handle error redirect
    revalidatePath('/', 'layout')
    redirect('/')
  }

  // successful redirect
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
