import Image from "next/image";
import ClickMeBtn from "./components/ClickMeBtn";

export default function Home() {

  return (
    <main className="w-screen h-screen bg-gradient-to-t from-light-palette to-green-palette flex justify-center items-center overflow-x-hidden">
      <div className="text-slate-50 space-y-10">
        <h1 className="montserrat text-center text-5xl md:text-7xl">Hi Ally! 😉</h1>
        <ClickMeBtn />
      </div>
    </main>
  );
}
