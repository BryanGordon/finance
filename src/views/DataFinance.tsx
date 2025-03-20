import { useState } from 'react'
import '../styles/DataFinance.css'

export function DataFinance () {
  const [gain, setGain] = useState(0)
  const [dataGain, setDataGain] = useState<string>('')
  const [totalGain, setTotalGain] = useState<number>(0)

  const store = localStorage.getItem('test-fina-data')

  const getDataGain = (value) => {
    setDataGain(value)
  }

  const getData = () => {
    if (store) {
      return JSON.parse(store)
    }

    return []
  }
  const [data, setData] = useState(getData())

  const handleClickRegister = () => {
    const objData = [
      gain,
      dataGain
    ]

    setData([...data, objData])
    localStorage.setItem('test-fina-data', JSON.stringify(data))
  }

  const getTotalGain = () => {
    let res = totalGain
    res += gain
    setTotalGain(res)
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

      <article className='my-0 mx-auto w-1/2 flex justify-center'>
        <button
          className='rounded-xl bg-stone-500/75 text-white cursor-pointer px-4 py-2 my-5 text-center w-1/2'
          onClick={handleClickRegister}
        >
          Registrar
        </button>
      </article>

      <article className='data-container-info'>
        <button
          className='rounded-xl bg-stone-500/75 text-white cursor-pointer px-4 py-2 my-5 text-center w-full'
        >
          Mostrar ganancias
        </button>
        <p className='bg-amber-700 rounded-2xl flex flex-col'>{getData()}</p>
      </article>

    </>
  )
}
