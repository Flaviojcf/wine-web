import Image from 'next/image'
import { Button } from '@/app/components/Button'
import Link from 'next/link'
import { FormattedMoney } from '@/utils/helpers/formattedMoney'
import { IWineCard } from '@/app/interfaces/IWineCard'

export function WineCard({
  image,
  name,
  offer,
  partnerOffer,
  price,
}: IWineCard) {
  return (
    <div>
      <Link href="/wine/syrah">
        <div
          className="flex flex-col w-64 h-96 px-1 text-center justify-center bg-white  mb-4 
      hover:opacity-80 hover:shadow-2xl transition-all duration-200 cursor-pointer group"
        >
          <div className="flex justify-center">
            <Image
              src={image}
              alt={name}
              width={200}
              height={178}
              unoptimized
              className="group-hover:scale-110 duration-500 transition-all"
            />

            <Image
              src="/images/wines/wineSelo.png"
              alt="Wine Selo"
              width={38}
              height={38}
              className="w-[38px] h-[38px] self-end absolute ml-[180px]"
              unoptimized
            />
          </div>

          <div className="mt-2">
            <h2 className="font-bold text-base text-black mb-2">{name}</h2>

            <div className="flex items-center justify-center gap-1">
              <strong className="font-bold text-xs text-spanNotPartner line-through">
                {FormattedMoney(price)}
              </strong>
              <span className="bg-bgOff text-white text-xs font-bold p-[1.5px] rounded">
                {offer}% OFF
              </span>
            </div>

            <div className="flex text-center items-center justify-center gap-1 mb-2">
              <p className="flex font-bold text-xs text-black h-7 items-center mt-1">
                SÓCIO WINE
              </p>
              <span className="flex font-bold text-xl text-pricePartner gap-1">
                {FormattedMoney(partnerOffer)}
              </span>
            </div>
            <p className="font-bold text-xs text-spanNotPartner">
              NÃO SÓCIO {FormattedMoney(price)}
            </p>
          </div>
        </div>
      </Link>
      <Button>ADICIONAR</Button>
    </div>
  )
}
