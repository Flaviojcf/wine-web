import Image from 'next/image'
import Link from 'next/link'
import { TbArrowNarrowLeft } from 'react-icons/tb'

export default function WineDetails() {
  return (
    <div className="flex flex-col w-screen pt-9 px-40 gap-6 lg:px-4 mb-14">
      <Link
        className="flex items-center justify-start gap-2 text-black font-bold text-base "
        href="/"
      >
        <TbArrowNarrowLeft size={40} />
        <p>Voltar</p>
      </Link>
      <div className="flex gap-8 border border-red-500 lg:flex-col lg:items-center">
        <Image
          alt="Big wine"
          src="/images/wines/bigWine.png"
          width={640}
          height={580}
          className="border border-red-500 object-scale-down lg:hidden"
        />
        <Image
          alt="Big wine"
          src="/images/wines/bigWineMobile.png"
          width={640}
          height={580}
          className="border border-red-500 object-scale-down hidden lg:flex"
        />
        <div className="flex flex-col text-black gap-12 border border-red-500 w-[460px] lg:w-full lg:items-center lg:text-center">
          <h1>Apothic Red 2019</h1>
          <div>Estados Unidos Tinto Meio Seco/Demi-Sec 750 ml (2)</div>
          <div>R$63,67 NÃO SÓCIO R$ 120,95/un.</div>
          <div className="flex flex-col text-black gap-2">
            <h2>Comentário do Sommelier</h2>
            <p>
              Produzido no terroir californiano, esse tinto mescla as variedades
              Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho
              inspirado nas antigas Apothecas (adegas subterrâneas), um lugar
              misterioso onde há mais de 800 anos os viticultores misturavam e
              armazenavam seus cobiçados vinhos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
