import React from 'react'

function Projects() {
  return (
    <div className='bg-[#10252e] pt-[80px] pb-[80px]'>
        <div className='layout'>
            <h2 className='text-[#fff] text-[42px] font-bold mb-[40px] block text-center'>Business</h2>
            <div className='flex gap-[30px]'>
                <div className='bg-[#fff] p-[30px] w-[400px] text-center flex flex-col justify-center business-block'>
                    <div className='m-auto b-icon'>
                        <img src='https://themazine.com/html/snappy/images/icon/1.png' alt='icon' />
                    </div>                    
                    <a href='/' className='text-[22px] text-[#151515] block mt-[25px] mb-[20px] hover:text-[#35b8f8] font-bold transition ease-in'>Plan to Market</a>
                    <p className='text-[16px] text-[#717171] block'>Sometimes it's hard running a business. Where are all the good people to be found?</p>
                </div>
                <div className='bg-[#fff] p-[30px] w-[400px] text-center flex flex-col justify-center business-block'>
                    <div className='m-auto b-icon'>
                        <img src='https://themazine.com/html/snappy/images/icon/2.png' alt='icon' />
                    </div>                    
                    <a href='/' className='text-[22px] text-[#151515] block mt-[25px] mb-[20px] hover:text-[#35b8f8] font-bold transition ease-in'>Know Your Market</a>
                    <p className='text-[16px] text-[#717171] block'>Sometimes it's hard running a business. Where are all the good people to be found?</p>
                </div>
                <div className='bg-[#fff] p-[30px] w-[400px] text-center flex flex-col justify-center business-block'>
                    <div className='m-auto b-icon'>
                        <img src='https://themazine.com/html/snappy/images/icon/3.png' alt='icon' />
                    </div>                    
                    <a href='/' className='text-[22px] text-[#151515] block mt-[25px] mb-[20px] hover:text-[#35b8f8] font-bold transition ease-in'>Create A Sales Plan</a>
                    <p className='text-[16px] text-[#717171] block'>Sometimes it's hard running a business. Where are all the good people to be found?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
