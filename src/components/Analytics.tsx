import React from 'react';
import Laptop from '../assets/laptop.jpg';

export function Analytics() {
    return (

        <section id="services">
            <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
                <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>PAINEL DE ANÁLISE DE DADOS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gerencie a análise de dados de forma centralizada</h1>
                <p>
                    Fique por dentro das tendências e insights de mercado com nosso painel de análise de dados.
                    Mantenha-se informado sobre o desempenho de suas plataformas
                    e tome decisões de negócios mais informadas. 
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
            </div>
        </section>
        
    )
}