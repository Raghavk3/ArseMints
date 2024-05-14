import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");

  return (
    <main>
      <div className="flex justify-center pt-64 fixed left-2/4">
        <h1>Welcome to AssMints</h1>
      </div>
      <LoginForm />
    </main>
  );
}
