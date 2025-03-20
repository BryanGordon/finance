import '../styles/DatePicker.css'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export function DatePicker () {
  const [date, setDate] = useState<Date>()
  
  const store = localStorage.getItem('test-fina-date')
  const getData = () => {
    if (store) return JSON.parse(store)
    return []
  }

  const [data, setData] = useState(getData())

  const handleClickRegister = () => {
    setData([...data, date])
    localStorage.setItem('test-fina-date', JSON.stringify(data))
  }

  return (
    <>
      <article className='calendar-card'>
        <Calendar
          mode='single'
          captionLayout='dropdown'
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={2030}
        />
        <span className='text-xl text-red-400'>{date?.toDateString()}</span>
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
      </article>
      <p className='text-sm text-sky-700'>{store}</p>
    </>
  )
}
