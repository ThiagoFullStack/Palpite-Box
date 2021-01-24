import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'


const fecther = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fecther)
  // return (<pre>{JSON.stringify(data)}</pre>)
  return (
    <div>
      <PageTitle title='Seja bem-vindo' />
      <p className='mt-12 text-center'>
        O restaurante <strong className='text-pink-500'>AP Explosão de Sabores </strong> <br />
    sempre busca por atender melhor seus clientes.<br />
    Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
            Dar opinião
          </a>
        </Link>
      </div>

      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&

        <p className='my-12 text-center'>
          {data.message}
          {/* Mensagem do desconto */}
        </p>
      }
    </div>
  )
}


export default Index




