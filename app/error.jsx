'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex-center w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] px-4'>
            <div className='col-center bg-white rounded-2xl shadow-2xl p-8 sm:p-10 gap-4 max-w-md w-full text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold text-blue-600'>
                    Ceva nu a mers bine
                </h1>
                <p className='text-gray-600 text-[14px] sm:text-[15px]'>
                    A apărut o eroare neașteptată. Poți încerca din nou sau te poți întoarce la pagina principală.
                </p>
                <div className='flex flex-wrap justify-center gap-3 mt-2'>
                    <button
                        onClick={() => reset()}
                        className='py-2 px-6 border-2 border-black bg-gray-200 rounded-2xl hover:bg-gray-300 transition-colors cursor-pointer text-[14px] sm:text-[16px]'
                    >
                        Încearcă din nou
                    </button>
                    <Link
                        href='/'
                        className='py-2 px-6 border-2 border-black bg-white rounded-2xl hover:bg-gray-100 transition-colors text-[14px] sm:text-[16px]'
                    >
                        Acasă
                    </Link>
                </div>
            </div>
        </div>
    )
}