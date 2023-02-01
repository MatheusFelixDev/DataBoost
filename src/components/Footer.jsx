import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

export function Footer() {
    return (

        <section id="contacts">
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>

                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DataBoost.</h1>
                    <p className='py-4 '>Siga-nos nas nossas redes sociais para ficar atualizado sobre nossos produtos e novidades.  Não perca a oportunidade de se manter conectado com a DataBoost!</p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} color='#00df9a' />
                        <FaInstagram size={30} color='#00df9a' />
                        <FaTwitterSquare size={30} color='#00df9a' />
                        <FaGithubSquare size={30} color='#00df9a' />
                        <FaDribbbleSquare size={30} color='#00df9a'  />
                    </div>
                </div>
                    
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-white'>Soluções</h6>
                        <ul>
                            <li className='py-2 text-sm'>Análises</li>
                            <li className='py-2 text-sm'>Marketing</li>
                            <li className='py-2 text-sm'>Commerce</li>
                            <li className='py-2 text-sm'>Insights</li>
                        </ul>
                    </div>
                        
                    <div>
                        <h6 className='font-medium text-gray-400'>Suporte</h6>
                        <ul>
                            <li className='py-2 text-sm'>Valores</li>
                            <li className='py-2 text-sm'>Documentação</li>
                            <li className='py-2 text-sm'>Guia</li>
                            <li className='py-2 text-sm'>API Status</li>
                        </ul>
                    </div>
                        
                    <div>
                        <h6 className='font-medium text-gray-400'>Empresa</h6>
                        <ul>
                            <li className='py-2 text-sm'>Sobre</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Serviço</li>
                            <li className='py-2 text-sm'>Carreira</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </section>
    )
}