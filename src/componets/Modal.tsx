import { CrossIcon } from '@/icons/cross'
// import { useState } from 'react'
import { useStore } from 'zustand'

export function Modal () {
  // const [active, setActive] = useState(true)
  // console.log('value ' + active)
  const showModal = 'fixed bg-stone-500/50 w-dvw h-dvh m-0 content-center'
  const hideModal = 'hidden'
  const active = useStore((state) => {})
  const modalStyles = active ? showModal : hideModal

  console.log(active)

  return (
    <article className={modalStyles}>
      <div className='p-7 bg-slate-300/90 rounded-lg text-stone-800 w-[50%] h-[50%] mx-auto'>
        <div className='flex justify-end mb-5'>
          <button onClick={() => changeActive(!active)}>
            <CrossIcon />
          </button>
        </div>
        <h1 className='text-center text-3xl'>Informacion modal</h1>
        <div className='w-full mt-10 flex flex-wrap justify-center px-7 space-x-4 space-y-2.5'>
          <strong>Fecha de pago:</strong>
          <span>26/03/2025</span>
          <strong>Motivo del pago:</strong>
          <span>Lorem ipsum dolor sit amet.</span>
          <strong>Detalles del deposito:</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi in laboriosam blanditiis natus iure velit!</p>
        </div>
      </div>
    </article>
  )
}
