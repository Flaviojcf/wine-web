'use client'

import { ChangeEvent, useState } from 'react'
import { Button } from '@/app/components/Button'
import { IFilter } from '@/app/interfaces/IFilter'

export function Filter({ handleFilterWine }: IFilter) {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleOptionChange = (
    value: string,
    event?: ChangeEvent<HTMLInputElement>,
  ) => {
    if (event) {
      setSelectedOption(event!.target.value)
    } else {
      setSelectedOption('')
    }
    handleFilterWine(value)
  }

  return (
    <div className="text-black">
      <div>
        <p className="font-bold text-xl mb-8">Refine sua busca</p>
      </div>
      <div>
        <p className="mb-4 font-bold text-lg">Por preço</p>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4">
            <input
              type="radio"
              id="option1"
              checked={selectedOption === 'option1'}
              name="price-range"
              value="option1"
              onChange={(e) => handleOptionChange('0-40', e)}
            />
            <label htmlFor="option1" className="text-sm">
              Até R$40
            </label>
          </li>
          <li className="flex gap-4">
            <input
              type="radio"
              id="option2"
              checked={selectedOption === 'option2'}
              name="price-range"
              value="option2"
              onChange={(e) => handleOptionChange('40-60', e)}
            />
            <label htmlFor="option2" className="text-sm">
              R$40 a R$60
            </label>
          </li>
          <li className="flex gap-4">
            <input
              type="radio"
              id="option3"
              checked={selectedOption === 'option3'}
              name="price-range"
              value="option3"
              onChange={(e) => handleOptionChange('100-200', e)}
            />
            <label htmlFor="option3" className="text-sm">
              R$100 a R$200
            </label>
          </li>
          <li className="flex gap-4">
            <input
              type="radio"
              id="option4"
              checked={selectedOption === 'option4'}
              name="price-range"
              value="option4"
              onChange={(e) => handleOptionChange('200-500', e)}
            />
            <label htmlFor="option4" className="text-sm">
              R$200 a R$500
            </label>
          </li>
          <li className="flex gap-4">
            <input
              type="radio"
              id="option5"
              checked={selectedOption === 'option5'}
              name="price-range"
              value="option5"
              onChange={(e) => handleOptionChange('500', e)}
            />
            <label htmlFor="option5" className="text-sm">
              Acima de R$500
            </label>
          </li>
          <li className="flex gap-4">
            <Button onClick={() => handleOptionChange('')}>
              Limpar Filtro
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
