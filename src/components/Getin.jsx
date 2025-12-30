import React from 'react'

const Getin = () => {
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
                    <div className='flex flex-col lg:w-115 lg:gap-4.5 lg:mt-1.5'>
                        <input className='border rounded py-1 px-2'required type="text" placeholder='Your Name' />
                        <input className='border rounded py-1 px-2'required type="email" placeholder='Your Email'/>
                        <input className='border rounded py-1 px-2'required type="text" placeholder='Subject'/>
                        <textarea className='border rounded py-1 px-2'required name="text" id="" placeholder='Your Message '></textarea>
                        {/* <input className='border rounded py-1 px-2'required type="text" placeholder='Your Message'/> */}
                        <button className='bg-[#2463EB] text-white rounded-lg border py-1.5 px-3'>Send Message</button>
                    </div>
                    
                    
                
                <div>

                </div>
            </div>   
          </div>
        </div>
    </div>
  )
}

export default Getin
