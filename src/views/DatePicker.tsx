import '../styles/DatePicker.css'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export function DatePicker () {
  const [date, setDate] = useState<Date>()

  return (
    <article className='calendar-card'>
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={2030}
        />
    </article>
  )
}
