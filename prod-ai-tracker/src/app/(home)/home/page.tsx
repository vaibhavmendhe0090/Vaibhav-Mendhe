import Donut from "./components/Donut";
import RadarChart from "./components/RadarChart";
import StreakGrid from "./components/StreakGrid";
import Logo from "@/app/components/Logo";

export default function HomePage() {
  return (
    <div className="home-bg min-h-svh">
      <div className="max-w-[420px] mx-auto px-6 pt-6 pb-24 space-y-10">
        <div className="flex items-center justify-between">
          <Logo dark />
          <div className="bg-[#3B3941] text-white rounded-full text-xs px-3 py-2">100₹</div>
        </div>

        <section className="space-y-6">
          <div className="text-[56px] leading-none font-extrabold">Hi !</div>
          <div className="text-[56px] leading-[0.9] font-extrabold">NAME</div>
          <div className="muted -mt-3">plan your day</div>
          <div className="flex items-center justify-center mt-4">
            <Donut />
          </div>
        </section>

        <section className="surface card-rounded p-5 shadow-soft">
          <div className="font-semibold text-lg">Date: Oct 3 2025</div>
          <div className="mt-3 text-white/60">task</div>
          <div className="text-white/60">task</div>
          <div className="mt-4 text-center text-xs text-white/40">slide to add</div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-center">
            <RadarChart />
          </div>
          <div className="text-center text-white/60 -mt-5">Hydration Chart</div>
        </section>

        <section className="space-y-4">
          <div className="text-2xl font-bold">Streak🔥</div>
          <StreakGrid />
          <div className="text-center text-white/50 text-sm">Progress Chart 30 days</div>
        </section>

        <section className="space-y-3">
          <div className="text-2xl font-bold">Ai Summary</div>
          <div className="surface card-rounded min-h-40 p-5" />
        </section>
      </div>
    </div>
  );
}

