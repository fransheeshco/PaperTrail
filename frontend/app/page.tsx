import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
          PaperTrail
        </h1>

        <Button className="mt-6 mx-auto">
          <Link href="/login">Login</Link>
        </Button>
      </main>
    </div>
  );
}
