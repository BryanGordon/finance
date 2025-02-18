import { DataFinance } from '@/views/DataFinance'
import { DatePicker } from '@/views/DatePicker'

export function Home () {
  return (
    <main>
      <h1 className='text-4xl text-center'>Finance App</h1>
      <section>
        <DataFinance />
      </section>

      <section>
        <DatePicker />
      </section>
    </main>
  )
}
