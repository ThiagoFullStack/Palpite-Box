import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-pink-500 p-4 shadow-md'>
        <div className='container mx-auto text-5xl'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_palpitebox.png ' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-pink-400 p-4 shadow-md text-center text-xl'>
        <Link href='/sobre'>
          <a className='text-white px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='text-white px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='text-white px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header
