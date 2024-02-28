import React from 'react'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-emerald-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmacia Bomfim | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
              <GithubLogo size={48} weight='bold'/ >
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer