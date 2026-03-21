import { AppSidebar } from "@/components/app-sidebar";

export default function ProfilePage() {
  return (
    <>
      <div className="flex">
        <AppSidebar />
        <main>Profile content</main>
      </div>
    </>
  );
}
