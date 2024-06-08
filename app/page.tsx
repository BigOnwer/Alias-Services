import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { HomePage } from "@/components/HomePage";
import { CardProvider } from "@/Contexts/ChartsContext";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
    const session = await getCurrentUser()

  return (
    <CardProvider>
      <div>
        {session === undefined ? (
          <HomePage/>
        ): (
          <DashboardPage/>
        )}
      </div>
    </CardProvider>
  );
}
