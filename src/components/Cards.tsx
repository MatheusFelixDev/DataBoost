import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


export function Cards() {
    return (

        <section id="packs">
            <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Plano Único</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB de armazenamento</p>
                            <p className='py-2 border-b mx-8'>1 usuário concedido</p>
                            <p className='py-2 border-b mx-8'>Envie até 2 GB</p>
                        </div>
                        <button className='bg-[#00df9a]  hover:bg-green-400 transition-colors w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Iniciar teste</button>
                    </div>

                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Plano Equipe</h2>
                        <p className='text-center text-4xl font-bold'>$299</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>1000 GB de armazenamento</p>
                            <p className='py-2 border-b mx-8'>5 usuários concedidos</p>
                            <p className='py-2 border-b mx-8'>Envie até 5 GB</p>
                        </div>
                        <button className='bg-black   transition-colors text-[#00df9a] hover:bg-green-400 hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Iniciar teste</button>
                    </div>

                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Plano Empresarial</h2>
                        <p className='text-center text-4xl font-bold'>$499</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>armazenamento ilimitado</p>
                            <p className='py-2 border-b mx-8'>10 usuários concedidos</p>
                            <p className='py-2 border-b mx-8'>Envie até 10 GB</p>
                        </div>
                        <button className='bg-[#00df9a]  hover:bg-green-400 transition-colors w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Iniciar teste</button>
                    </div>
                </div>
            </div>
        </section>
    )
}