import React from 'react';

export function Hero(){
    return (
      <section id=" ">
        <div className='text-white bg-hero bg-cover'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'>
              CRESCENDO COM ANÁLISE DE DADOS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              Cresça com dados.
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                  Financiamento rápido e flexível
              </p>
              
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>monitore suas análises de dados e aumente sua receita para plataformas BTB, BTC e SASS.</p>
            <button className='w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black bg-[#00df9a] hover:bg-green-400 transition-colors'>Comece agora</button>
          </div>
        </div>
      </section>
    );
  };
  