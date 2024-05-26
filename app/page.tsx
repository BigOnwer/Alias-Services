import { Dashboard } from "@/components/Dashboard/DashboardPage";
import { HomePage } from "@/components/HomePage";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const session = await getCurrentUser()

  return (
    <div>
      {session === undefined ? (
        <HomePage/>
      ): (
        <Dashboard/>
      )}
    </div>
  );
}
