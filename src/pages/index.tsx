import Header from "@/components/Header";
import MenuButton from "@/components/MenuButton";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Juliet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-auto">
        <MenuButton>Menu</MenuButton>
        <MenuButton>Contact</MenuButton>
        {/* <button className="... transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-150">
          <Image src="/next.svg" alt="Vercel Logo" width={200} height={200} />
        </button> */}
        <Header />
      </main>
    </div>
  );
}
