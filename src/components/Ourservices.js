import React from 'react'

function Ourservices() {
  return (
    <div className='our-services pt-[80px] pb-[80px]'>
      <div className='layout'>
        <h2 className='text-[#151515] text-[42px] font-bold mb-[40px] block text-center'>Our Services</h2>
        <div className='our-services-inner flex gap-4'>
            <div className="single-service border-solid border-1 border-gray-300 ">
                <img src="https://themazine.com/html/snappy/images/service/6.jpg" alt="" className='w-[100%]' />
                <div className="single-service-desc px-[20px] pt-[25px] pb-[25px]">                    
                    <h4><a href="service-details.html" className="text-[#151515] text-[22px] font-bold mb-[15px] block">Financial Planning</a></h4>
                    <p>Sometimes it's hard running a business.  Where are all the good people to be found?</p>
                </div> 
            </div>
            <div className="single-service border-solid border-1 border-gray-300 ">
                <img src="https://themazine.com/html/snappy/images/service/1.jpg" alt="" className='w-[100%]' />
                <div className="single-service-desc px-[20px] pt-[25px] pb-[25px]">                    
                    <h4><a href="service-details.html" className="text-[#151515] text-[22px] font-bold mb-[15px] block">Financial Planning</a></h4>
                    <p>Sometimes it's hard running a business.  Where are all the good people to be found?</p>
                </div> 
            </div>
            <div className="single-service border-solid border-1 border-gray-300 ">
                <img src="https://themazine.com/html/snappy/images/service/3.jpg" alt="" className='w-[100%]' />
                <div className="single-service-desc px-[20px] pt-[25px] pb-[25px]">                    
                    <h4><a href="service-details.html" className="text-[#151515] text-[22px] font-bold mb-[15px] block">Financial Planning</a></h4>
                    <p>Sometimes it's hard running a business.  Where are all the good people to be found?</p>
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourservices
