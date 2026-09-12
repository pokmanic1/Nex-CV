export default function Loading() {
    return (
        <div className='flex-center w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)]'>
            <div className='col-center gap-4'>
                <div className='w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin' />
                <p className='text-white text-[15px] sm:text-[16px] font-medium tracking-wide'>
                    Se încarcă...
                </p>
            </div>
        </div>
    )
}