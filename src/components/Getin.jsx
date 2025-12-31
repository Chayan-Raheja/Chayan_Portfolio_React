import React, { useState } from 'react'

const Getin = () => {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [subject, setsubject] = useState('')
    const [desc, setdesc] = useState('')

const [notif, setNotif] = useState(""); // message store karega

    const formsub=(e)=>{
        e.preventDefault();
        setemail('')
        setsubject('')
        setdesc('')
        setname('')
        
        setNotif("go"); // show message 
        setTimeout(() => setNotif(""), 7500); // 3 sec baad hide
    }
  return (
    <div>
      <div className='flex flex-col justify-center items-center lg:mb-44 lg:mt-65'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl lg:pb-2.5 font-bold text-center">
            Get in <span className="text-[#2463EB]">Touch</span>
            </h1> 
          <div className='flex justify-evenly  lg:mt-3 w-full'>
                  <div className='flex flex-col  lg:gap-4'>
                
                    <h1 className='lg:font-semibold lg:text-2xl'>Contact Information</h1>
                    <div className='flex lg:gap-4.5 lg:mt-1.5'>
                        <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-map-pin-line"></i></div>
                        <div>
                            <h1 className='lg:font-medium'>Location</h1>
                            <h1 className='text-black/60 font-medium'>Kota, Rajasthan</h1>
                        </div>
                    </div>
                    <div className='flex lg:gap-4.5 lg:mt-1.5'>
                        <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-mail-send-line"></i></div>
                        <div>
                            <h1 className='lg:font-medium'  >Email</h1>
                            <a className='text-[#2463EB] hover:underline font-medium' href="mailto:rahejachayan@gmail.com">rahejachayan@gmail.com</a>
                        </div>
                    </div>
                    <div className='flex lg:gap-4.5 lg:mt-1.5'>
                        <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-linkedin-fill"></i></div>
                        <div>
                            <h1 className='lg:font-medium'  >LinkedIn</h1>
                            <a className='text-[#2463EB] hover:underline font-medium' href="https://linkedin.com/in/chayan-raheja">linkedin.com/in/chayan-raheja</a>
                        </div>
                    </div>
                    <div className='flex lg:gap-4.5 lg:mt-1.5'>
                        <div className='bg-[#2463EB]/10 py-2.5 px-4 rounded-[50%] text-[#2463EB] lg:font-normal lg:text-xl'><i class="ri-github-line"></i></div>
                        <div>
                            <h1 className='lg:font-medium'  >GitHub</h1>
                            <a className='text-[#2463EB] hover:underline font-medium' href="github.com/chayan-raheja">github.com/chayan-raheja</a>
                        </div>
                    </div>
                
                <div>

                </div>
            </div>
               <div className='flex flex-col  lg:gap-4'>
                
                    <h1 className='lg:font-semibold lg:text-2xl'>Send Me a Message</h1>
                   
                        <form onSubmit={(e)=>{
                            formsub(e)
                        }} className='flex flex-col lg:w-100 lg:gap-4.5 lg:mt-1.5'>
                                <input value={name} onChange={(e)=>{setname(e.target.value)}} 
                                className='border rounded py-1 px-2'required type="text" placeholder='Your Name' />
                                <input value={email} onChange={(e)=>{setemail(e.target.value)}} 
                                className='border rounded py-1 px-2'required type="email" placeholder='Your Email'/>
                                <input value={subject} onChange={(e)=>{setsubject(e.target.value)}} 
                                className='border rounded py-1 px-2'required type="text" placeholder='Subject'/>
                                <textarea value={desc} onChange={(e)=>{setdesc(e.target.value)}}
                                className='border lg:min-h-32 rounded py-1 px-2'required name="text" id="" placeholder='Your Message '></textarea>
                                <button className='bg-[#2463EB] active:scale-95 text-white rounded-lg border py-1.5 px-3'>Send Message</button>
                        </form>
                        {/* <input className='border rounded py-1 px-2'required type="text" placeholder='Your Message'/> */}
                   
                    
                    {/* Notification */}
      {notif && (
        <div className="fixed bottom-4 right-4 bg-[#f55151] text-white/95 px-6 py-6 rounded shadow-lg">
          <h1 className='font-semibold text-lg'>Error sending message</h1>
            <p className='mt-1'> Please try again later Or connect me directly via email.</p>
        </div>
      )}
                
                <div>

                </div>
            </div>   
          </div>
        </div>
    </div>
  )
}

export default Getin
