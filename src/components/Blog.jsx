import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Blog() {

    const [dataBlog, setDatablog] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (respone) {
            setDatablog(respone.data)
        })
    },[])
    console.log(dataBlog)

  return (
        // tittle
    <div className="bg-petaniDark2 text-white h-[1880vh]">
        <div className="relative left-[25vh] top-[8vh] w-max">
            <h1 className='text-[#2dd4bf] font-bold'>UPDATE</h1>
            <h1 className='text-3xl font-bold '>Apa yang baru di petani kode? 🔥</h1>
            <p className='text-[#cbd5e1] opacity-[1]'>Baca artikel terbaru yang masih fresh dan hangat.</p>
        </div>
    {/* card */}
    <div className="h-auto">
        <div className="card relative top-[25vh] left-[10vh]  h-auto w-[200vh] p-[1rem] rounded-xl grid grid-cols-3 gap-10">
            {dataBlog.map((data) => (
                <div key={data} className="bg-petaniDark p-[2rem] rounded-2xl">
                    <div className="bg-cyan-500 p-[4rem] rounded-xl text-center mb-5 ">{data.id}</div>
                <div className="">
                    <h1 className='font-bold'>{data.tittle}</h1>
                    <p>{data.body}</p>
                </div>
                </div>
                
            )
        )} 
    </div> 
    </div>
    </div>
  )
}

export default Blog
