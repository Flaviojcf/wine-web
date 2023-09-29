import Image from 'next/image'
import Link from 'next/link'
import { TbArrowNarrowLeft } from 'react-icons/tb'
import { BsStarFill } from 'react-icons/bs'
import { FormattedMoney } from '@/utils/helpers/formattedMoney'

export default function WineDetails() {
  return (
    <div className="flex flex-col w-screen pt-9 px-64 gap-6 lg:px-4 mb-14">
      <div className="text-black font-bold text-base  w-fit group">
        <Link
          href="/"
          className="flex items-center group-hover:text-indigo-800 transition-all duration-200 dark:text-emerald-700 dark:group-hover:text-white"
        >
          <TbArrowNarrowLeft size={40} />
          <p>Voltar</p>
        </Link>
      </div>
      <div className="flex gap-20 lg:flex-col lg:items-center">
        <Image
          alt="Big wine"
          src="/images/wines/bigWine.png"
          width={640}
          height={580}
          className="object-scale-down lg:hidden"
        />
        <Image
          alt="Big wine"
          src="/images/wines/bigWineMobile.png"
          width={640}
          height={580}
          className="object-scale-down hidden lg:flex"
        />
        <div className="flex flex-col text-black gap-12 w-[460px] lg:w-full lg:items-center lg:text-center">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl dark:text-white">
              Apothic Red 2019
            </p>
            <div className="flex items-center gap-4">
              <p className="font-normal text-sm text-gray-800 dark:text-white">
                Estados Unidos Tinto Meio Seco/Demi-Sec 750 ml
              </p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((star, i) => (
                  <BsStarFill key={`star-${i}`} color="yellow" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-pricePartner dark:text-emerald-700">
              {FormattedMoney(2)}
            </span>
            <span className="font-normal text-xl text-gray-600 dark:text-gray-200">
              NÃO SÓCIO {FormattedMoney(3)}/un.
            </span>
          </div>
          <div className="flex flex-col text-black gap-2">
            <h2 className="font-bold text-lg dark:text-white">
              Comentário do Sommelier
            </h2>
            <p className="font-normal text-sm text-gray-800 dark:text-gray-200">
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
