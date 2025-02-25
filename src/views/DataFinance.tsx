import '../styles/DataFinance.css'

export function DataFinance () {
  return (
    <>
      <article className='data-container-info'>
        <label className='text-lg font-medium'>Ingrese el monto recibido: </label>
        <input
          className='bg-blue-400 rounded-lg indent-2.5 placeholder:text-stone-700 text-slate-900'
          type='number'
          placeholder='500'
        />
        <div className='flex justify-center mt-4'>
          <textarea className='block border-2 rounded-lg p-2 w-3/4 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, autem.
          </textarea>
        </div>
      </article>

      <article className='data-container-info'>
        <span className='text-lg font-medium'>Total recibido en el mes: </span>
        <span className='text-amber-900 text-lg'>$1200</span>
      </article>
    </>
  )
}
