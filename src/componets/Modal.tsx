import { CrossIcon } from '@/icons/cross'
import { useState } from 'react'

export function Modal () {
  const [active, setActive] = useState(false)
  console.log('value ' + active)

  return (
    <article className='fixed bg-stone-500/50 w-dvw h-dvh m-0 content-center'>
      <div className='p-20 bg-blue-200/25 rounded-lg text-red-800 content-center w-1/2 h-1/4 mx-auto'>
        <div className='flex justify-end mb-5'>
          <button onClick={() => setActive(!active)}>
            <CrossIcon />
          </button>
        </div>
        <h1>Informacion modal</h1>
        <div className='flex flex-wrap space-x-5 space-y-2.5'>
          <strong>Fecha de pago:</strong>
          <span>26/03/2025</span>
          <strong>Motivo del pago:</strong>
          <span>Lorem ipsum dolor sit amet.</span>
          <strong>Detalles del deposito</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi in laboriosam blanditiis natus iure velit!</p>
        </div>
      </div>
    </article>
  )
}
