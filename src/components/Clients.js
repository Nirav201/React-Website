import React from 'react'

function Clients() {
  return (
    <div className='clients-main'>
        <div className='layout'>
            <div className='clients-main-inner pt-[80px] pb-[80px]'>
                <h2 className='text-[#151515] text-[42px] font-bold mb-[40px] block text-center'>Clients</h2>
                <div className='client-list flex gap-[25px]'>
                    <div className='client-list-block border-solid border-1 border-[#e8e6e6]'>
                        <img src='https://themazine.com/html/snappy/images/logo/1.jpg' />
                    </div>
                    <div className='client-list-block border-solid border-1 border-[#e8e6e6]'>
                        <img src='https://themazine.com/html/snappy/images/logo/3.jpg' />
                    </div>
                    <div className='client-list-block border-solid border-1 border-[#e8e6e6]'>
                        <img src='https://themazine.com/html/snappy/images/logo/2.jpg' />
                    </div>
                    <div className='client-list-block border-solid border-1 border-[#e8e6e6]'>
                        <img src='https://themazine.com/html/snappy/images/logo/3.jpg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients
