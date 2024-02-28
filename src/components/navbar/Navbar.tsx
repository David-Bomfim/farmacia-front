import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-emerald-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia Bomfim</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div >
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar