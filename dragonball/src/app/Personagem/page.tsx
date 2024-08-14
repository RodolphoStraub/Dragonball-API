import type { Metadata } from "next";
import Personagem from "./[PersonagemName]";


export const metadata: Metadata = {
    title: "Personagens",
  };

  export default function Page(){
    return(
        <>
        <Personagem/>
        </>
    )
  }