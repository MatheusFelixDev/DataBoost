import React from 'react';

export function Newsletter(){
    return (

        <section id="tips">
            <div className='w-full py-16 text-white px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Quer dicas para otimizar seu fluxo?
                    </h1>
                    <p>Assine nosso boletim de noticias e mantenha-se atualizado.</p>
                    </div>
                    <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                        className='p-3 flex w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2 focus:ring-offset-zinc-900'
                        type='email'
                        placeholder='Email'
                        />
                        <button className='bg-[#00df9a] hover:bg-green-400 transition-colors text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Me avise
                        </button>
                    </div>
                    <p>
                    Nós nos preocupamos com a proteção de seus dados. Leia nossa{' '}
                        <span className='text-[#00df9a]'>Política de Privacidade.</span>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}