import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Carousel from "./components/Carousel/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Carousel />
    </main>
  );
}
