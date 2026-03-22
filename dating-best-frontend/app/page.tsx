import Image from "next/image";

import AdBlock from "./components/adBlock";
import ForYou from "./components/forYou";
import Events from "./components/events";

// TODO: Удали фотку стула из проекта 
export default function Home() {
  return (
    <>
      <AdBlock />
      <ForYou />
      <Events />
    </>
  );
}
