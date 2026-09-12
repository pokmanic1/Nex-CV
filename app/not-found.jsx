import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex-center w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] px-4'>
            <div className='col-center bg-white rounded-2xl shadow-2xl p-8 sm:p-10 gap-4 max-w-md w-full text-center'>
                <h1 className='text-6xl sm:text-7xl font-bold text-blue-600'>404</h1>
                <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>
                    Pagina nu a fost găsită
                </h2>
                <p className='text-gray-600 text-[14px] sm:text-[15px]'>
                    Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
                </p>
                <Link
                    href='/'
                    className='py-2 px-6 border-2 border-black bg-gray-200 rounded-2xl hover:bg-gray-300 transition-colors mt-2 text-[14px] sm:text-[16px]'
                >
                    Înapoi acasă
                </Link>
            </div>
        </div>
    )
}