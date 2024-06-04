import Header from "@/components/Header";
import MenuButton from "@/components/MenuButton";
import { HomeHero } from "@/layout";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Juliet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-auto">
        <Header />

        <div className="block px-20 pt-40 text-[7vh]">
          <div>Athens, Greece</div>
          <div>Jaipur, Rajasthan, India</div>
          <div>Bergen, Norway</div>
          <div>Marrakesh, Morocco</div>
          <div>Dublin, Ireland</div>
          <div>Cartagena, Colombia</div>
          <div>Bangkok, Thailand</div>
          <div>San Sebastian, Spain</div>
          <div>Dubrovnik, Croatia</div>
          <div>Seoul, South Korea</div>
          <div>San Miguel de Allende, Mexico</div>
          <div>Queenstown, New Zealand</div>
          <div>Hanoi, Vietnam</div> <div>Bangkok, Thailand</div>
          <div>San Sebastian, Spain</div>
          <div>Dubrovnik, Croatia</div>
          <div>Seoul, South Korea</div>
          <div>San Miguel de Allende, Mexico</div>
          <div>Queenstown, New Zealand</div>
        </div>
        <div className="bg-white">
          <HomeHero />
        </div>
        {/* <MenuButton>Menu</MenuButton>
        <MenuButton>Contact</MenuButton> */}
        {/* <button className="... transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-150">
          <Image src="/next.svg" alt="Vercel Logo" width={200} height={200} />
        </button> */}
      </main>
    </div>
  );
}
