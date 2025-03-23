import React, { useEffect } from 'react'
import img from "../../public/img.png";
import Image from 'next/image';

function Hero({state}) {
    
    const [description, setDescription] = React.useState('');

    useEffect(() => {
        const {contract} = state;
        const description = async () => {
            const descriptionText = await contract.methods.description().call();
            setDescription(descriptionText);
        };
        contract && description();
    } , [state]);
  return (
    <div className='flex  w-full items-center justify-center  bg-zinc-800 px-10 py-10 mb-10'>
        <div className='flex flex-col w-1/2'>
            <h1 className='text-4xl font-bold'>AKASH <span className='text-amber-400 font-extrabold'>MIRZA.</span></h1>
            <p className='text-sm'>{description}</p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
        <Image src={img} width={300} height={300} alt='picture' className='rounded-sm' />
        </div>
    </div>
  )
}

export default Hero