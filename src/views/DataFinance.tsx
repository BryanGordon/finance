import { useState } from 'react'
import '../styles/DataFinance.css'

export function DataFinance () {
  const [gain, setGain] = useState(0)
  const [dataGain, setDataGain] = useState<string>('')
  const [totalGain, setTotalGain] = useState<number>(0)

  const getDataGain = (value) => {
    setDataGain(value)
    console.log(dataGain)
  }

  return (
    <>
      <article className='data-container-info'>
        <label className='text-lg font-medium'>Ingrese el monto recibido: </label>
        <input
          className='bg-blue-400 rounded-lg indent-2.5 placeholder:text-stone-700 text-slate-900'
          type='number'
          placeholder='500'
          onChange={(e) => setGain(e.target.value)}
        />
        <div className='flex justify-center mt-4'>
          <textarea
            className='block border-2 rounded-lg p-2 w-3/4'
            placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, autem.'
            onChange={(e) => getDataGain(e.target.value)}
          />
        </div>
      </article>

      <article className='data-container-info'>
        <span className='text-lg font-medium'>Total recibido en el mes: </span>
        <span className='text-amber-900 text-lg'>$ {totalGain}</span>
      </article>

    </>
  )
}
