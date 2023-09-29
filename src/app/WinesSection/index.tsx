'use client'
import { WinesData } from '@/utils/mock/wines/wines'
import { Filter } from '@/app/components/Filter'
import { WineCard } from '@/app/components/WineCard'
import { useState } from 'react'

interface RangeValue {
  min: number
  max: number
}

export function WinesSection() {
  const [value, setValue] = useState<RangeValue>()

  function handleFilterWine(value: string) {
    const [min, max] = value.split('-').map(Number)

    if (typeof max === 'undefined') {
      setValue({ min, max: 99999 })
    } else {
      setValue({ min, max })
    }
  }

  return (
    <div className="flex justify-center gap-24 mt-10 h-full mb-10 lg:gap-10 sm:gap-0 sm:flex-col">
      <div className="sm:flex sm:items-center sm:justify-center">
        <Filter handleFilterWine={handleFilterWine} />
      </div>
      <div className="flex flex-col gap-6 w-1/2 sm:justify-center sm:w-full sm:text-center">
        <h1 className="text-lg font-bold text-black">
          {WinesData.length} produtos encontrados
        </h1>
        <div className="flex flex-wrap gap-8 sm:justify-center">
          {WinesData.filter((wineCard) => {
            if (value !== null && typeof value !== 'undefined') {
              return wineCard.price >= value.min && wineCard.price <= value.max
            } else {
              return wineCard
            }
          }).map((wineCard, i) => (
            <WineCard
              image={wineCard.image}
              name={wineCard.name}
              offer={wineCard.offer}
              partnerOffer={wineCard.partnerOffer}
              price={wineCard.price}
              key={`wine-${wineCard.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
