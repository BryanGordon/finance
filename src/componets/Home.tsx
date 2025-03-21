import { useTests } from '@/hooks/useTests'
import { CrossIcon } from '@/icons/cross'
import { DataFinance } from '@/views/DataFinance'
import { DatePicker } from '@/views/DatePicker'
import { useEffect } from 'react'
// import { useState } from 'react'

export function Home () {
  const { dataStoredInfo, setDataStored } = useTests()

  useEffect(() => {
    setDataStored([45,45])
  }, [])

  return (
    <main>
      <header>
        <h1 className='text-4xl text-center'>Finance App</h1>
      </header>

      <section>
        <DataFinance />
      </section>
      {/*
      <section>
        <DatePicker />
      </section>
        */}
      {/*
      <article className='my-0 mx-auto w-1/2 flex justify-center'>
        <button
          className='rounded-xl bg-stone-500/75 text-white cursor-pointer px-4 py-2 my-5 text-center w-1/2'
        >
          Registrar
        </button>
      </article>
      */}
      <div className='bg-white'>
        <CrossIcon />
      </div>
        {
          dataStoredInfo.map((item, index) => (
            <div key={index} className='bg-slate-600'>
              <p className='text-lg text-white'>{item}</p>
            </div>

          ))
        }
    </main>
  )
}
