import { DataFinance } from '@/views/DataFinance'
import { DatePicker } from '@/views/DatePicker'
// import { useState } from 'react'

export function Home () {
  return (
    <main>
      <header>
        <h1 className='text-4xl text-center'>Finance App</h1>
      </header>

      {/*
      <section>
        <DataFinance />
      </section>
      */}
      <section>
        <DatePicker />
      </section>

      {/*
      <article className='my-0 mx-auto w-1/2 flex justify-center'>
        <button
          className='rounded-xl bg-stone-500/75 text-white cursor-pointer px-4 py-2 my-5 text-center w-1/2'
        >
          Registrar
        </button>
      </article>
      */}
    </main>
  )
}
