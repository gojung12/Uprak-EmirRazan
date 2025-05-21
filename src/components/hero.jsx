import React from 'react'

function Hero() {
  return (
   <div className="bg-petaniDark h-[60vh] text-white flex">
    {/* leftHero */}
    <div className="relative left-[25vh] top-[20vh]">
    <h1 className='text-6xl font-bold mb-5'>Petani Kode</h1>
    <p className='font-light text-2xl mb-5'>Belajar budidaya kode (coding) dengan tutorial yang <br /> mudah dipahami. <span className='italic'>Mostly</span> pakai Linux.</p>
    <button className='bg-petaniButton hover:bg-lightPetani rounded-lg  p-2'>Mari belajar</button>
    <button className='bg-petaniDark border border-petaniButton hover:bg-lightPetani rounded-lg ml-7 p-2'>Join NewsLetter</button>
    </div>
    {/* rightHero */}
    <div className="relative left-[50vh] top-[20vh]">
        <img src="petanikode-hero.svg" alt="" width={500} /> 
    </div>
   </div>
  )
}

export default Hero
