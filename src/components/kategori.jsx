import React from 'react'
import {Link} from 'react-router-dom';
function Kategori() {
  return (
   <div className="bg-petaniDark2 h-[100vh] text-white   ">
     <div className="relative left-[25vh] top-[8vh] w-max">
        <h1 className='text-[#2dd4bf] font-bold'>KATEGORI</h1>
        <h1 className='text-3xl font-bold '>Mau belajar apa hari ini?</h1>
        <p className='text-[#cbd5e1] opacity-[1]'>temukan tutorial berdasarkan minatmu.</p>
    </div>
    {/* card */}
    <div className="relative top-[20vh] left-[10vh] w-max flex gap-3 cursor-pointer">
        <Link to="/Gagal">
            <div className="bg-card p-[3rem] rounded-xl shadow-lg hover:shadow-2xl flex ">
            <div className="">
                <img src="code.png" alt="" width={30} />
            <h1 className='mt-[1.25rem] font-bold'>Basic Programming</h1>
            <p className='mt-[1.25rem] opacity-[1] text-[#cbd5e1]'>Baca tutorial dasar-dasar pemograman <br /> menggunakan c, c++, c#, java, javascript, dan <br /> masih banyak lagi  </p>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
        </div>
        </Link>

        <Link to="/Gagal">
            <div className="bg-card p-[3rem] rounded-xl shadow-lg hover:shadow-2xl flex ">
            <div className="">
                <img src="browser.png" alt="" width={30} />
            <h1 className='mt-[1.25rem] font-bold '>Web Programming</h1>
            <p className='mt-[1.25rem] opacity-[1] text-[#cbd5e1]'>Baca tutorial cara membuat web. mulai dari HTML, <br /> css, js, php, MySql, codeIgniter, react, dan masih <br /> banyak lagi. </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
        </div>
        </Link>
        <Link to="/Gagal">
            <div className="bg-card p-[3rem] rounded-xl shadow-lg hover:shadow-2xl flex">
            <div className="">
                <img src="other.png" alt="" width={30} />
            <h1 className='mt-[1.25rem] font-bold '>Tutorial Lainnya</h1>
            <p className='mt-[1.25rem] opacity-[1] text-[#cbd5e1]'>Baca tutorial dalam kategori lainnya seperti Mobile <br /> programming, Game Programming, loT, Blockchain <br /> dan masih banyak lagi.   </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
        </div>
        </Link>
        
    </div>
   </div>
  )
}

export default Kategori
