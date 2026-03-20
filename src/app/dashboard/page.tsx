import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import SignOutButton from "@/components/sign-out-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Kalanium",
};

const statusStyles: Record<string, string> = {
  pending: "bg-gold/20 text-gold",
  reviewed: "bg-clay/20 text-clay",
  accepted: "bg-moss/20 text-moss",
  rejected: "bg-terracotta/20 text-terracotta",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in");
  }

  const { data: applications } = await supabase
    .from("talent_applications")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <>
      <Nav />
      <section className="bg-cream py-28 px-16 pt-36 min-h-[80vh]">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="section-tag">Dashboard</div>
              <h2 className="section-title">
                Your <em>applications.</em>
              </h2>
            </div>
            <SignOutButton />
          </div>

          <p className="text-sm text-ash mb-8">Signed in as {user.email}</p>

          {!applications || applications.length === 0 ? (
            <div className="bg-white border border-clay/15 rounded p-12 text-center">
              <p className="text-ash font-light mb-6">You haven&apos;t submitted any applications yet.</p>
              <a
                href="/apply"
                className="inline-block bg-clay text-white px-8 py-3 rounded-[2px] text-[0.82rem] font-medium tracking-[0.1em] uppercase no-underline transition-colors hover:bg-terracotta"
              >
                Apply Now
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {applications.map((app) => (
                <div key={app.id} className="bg-white border border-clay/15 rounded p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-heading text-xl font-normal text-bark">{app.role}</div>
                    <span className={`text-[0.72rem] tracking-[0.1em] uppercase px-3 py-1 rounded-full ${statusStyles[app.status] || "bg-ash/20 text-ash"}`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-sm text-ash font-light leading-relaxed">{app.bio}</p>
                  <div className="text-[0.72rem] text-ash/50 mt-4">
                    Applied {new Date(app.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
