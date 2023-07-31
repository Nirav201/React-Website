import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-[#161212] py-[80px]'>
        <div className='layout'>
            <div className='flex justify-between'>
                <div className='w-[400px]'>
                    <a href='/' className='mb-[40px] block'>
                        <img src='https://themazine.com/html/snappy/images/logo/logo2.png' alt='footer logo' />
                    </a>
                    <p className='text-[#b1b1b1]'>We create Finance ,Business and trainers, individual therapists, diet and nutrition consultants, as well as other specialists who need a personal website, Check our latest work in profile . . . .</p>
                </div>
                <div className='w-[200px] px-[10px]'>
                    <h4 className='text-[#fff] text-[20px]  mb-[40px] block'>About</h4>
                    <div className='flex flex-col'>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Home</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Business Partners</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Snappy</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>About us</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Blog</a>
                    </div>
                </div>
                <div className='w-[200px] px-[10px]'>
                    <h4 className='text-[#fff] text-[20px]  mb-[40px] block'>Short Link</h4>
                    <div className='flex flex-col'>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Services</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Business Growth</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Project</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Case Study</a>
                    </div>
                </div>
                <div className='w-[200px] px-[10px]'>
                    <h4 className='text-[#fff] text-[20px]  mb-[40px] block'>Privacy</h4>
                    <div className='flex flex-col'>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Privacy Policy</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>Terms & Conditions</a>
                        <a href='/' className='text-[16px] text-[#b1b1b1] block mb-[10px] hover:text-[#35b8f8]'>PCI Compliance</a>
                    </div>
                </div>
            </div>
        </div>        
      </div>
      <div></div>
    </div>
  )
}

export default Footer
