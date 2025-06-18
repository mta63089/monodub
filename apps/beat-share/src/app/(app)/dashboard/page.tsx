// app/dashboard/page.tsx
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await authClient.getSession();

  if (!session?.data?.user) {
    redirect("/not-authorized");
  }

  return (
    <div>
      <b>Welcome </b>
      {session.data.user.name}
      <DashboardPage />
    </div>
  );
}
