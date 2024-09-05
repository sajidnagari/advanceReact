import Image from "next/image";
import Navbar from "@/components/navbar/navbar";

export default function Home({children}: any) {

  return (
    <main >
          <Navbar />
          {children}
      {/* <Image src={require('../../app/favicon.ico')} width={100} height={100} alt='Image'/> */}
    </main>
  );
}
