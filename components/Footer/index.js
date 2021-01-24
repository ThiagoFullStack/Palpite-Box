import React from 'react'

// https://www.figma.com/file/eDRQxSaN9BZoYHFkQJ4fwG/Untitled?node-id=0%3A1

const Footer = () => {
  return (
    <div className='bg-pink-800 p-4 font-bold text-center text-white'>
      <div className='container mx-auto text-xl'>
        Projeto de Desenvolvimento por: <a className='px-2 hover:underline'
          href='https://drive.google.com/file/d/1i1Nx9s1jqyfhGBTRjxpnbxQkZRYUPirD/view?usp=sharing/'>ThiagoCaetano</a> /{' '}
        <a className='px-2 hover:underline'
          href='https://www.linkedin.com/in/thiagocb2-developer-fullstack/'>Linkedin</a> /{' '}
        <a className='px-2 hover:underline'
          href='https://www.github.com/ThiagoFullStack/'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='logo_semana_fsm.png' />
          <img className='inline p-4' src='logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}
export default Footer