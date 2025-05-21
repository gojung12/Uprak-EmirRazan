import React from 'react'

function Footer() {
  return (
    <div className="bg-card text-white text-center pt-[5rem]">
        <h1 className='text-[#2dd4bf] font-bold  '>NewsLetter 📫</h1>
        <h1 className='text-2xl font-bold pt-[1.5rem] '>Biar gak ketinggalan Update...</h1>
        <p className='text-[#cbd5e1] opacity-[1] pt-[1.5rem] pb-[3rem] '>Subscribe Newsletter Petani kode agar kamu bisa dapat info dan <br /> tips belajar coding biar langsung dikirim ke email kamu?</p>
        <button className='bg-lightPetani p-1 rounded-full w-[50vh] mb-[5rem] shadow-2xl hover:bg-petani cursor-pointer'> ✉️ Subscribe</button>
    </div>
  )
}

export default Footer
