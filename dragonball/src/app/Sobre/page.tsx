import type { Metadata } from "next";
import Sobre from "./Sobre"

export const metadata: Metadata = {
    title: "Sobre",
  };

  export default function Page(){
    return(
        <>
        <Sobre/>
        </>
    )
  }