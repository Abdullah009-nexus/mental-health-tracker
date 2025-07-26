// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/"); // redirect to home if not signed in
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router, supabase]);

  if (loading) {
    return <div className="text-white text-center p-8">Loading Dashboard...</div>;
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Your AI tools will show here.</p>
    </div>
  );
}
