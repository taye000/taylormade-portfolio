import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutsection";
import Projectsection from "@/components/Projectsection";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Herosection/>
      <Aboutsection/>
      <Projectsection/>
    </main>
  );
}
