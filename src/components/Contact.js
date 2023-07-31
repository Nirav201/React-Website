import React from 'react'

function Contact() {
  return (
    <div className='my-[80px]'>
        <div className='layout'>
            <h2 className='text-[#151515] text-[42px] font-bold mb-[40px] block text-center'>Contact US</h2>
            <div className='contact-inner w-[600px] mx-auto p-[40px] bg-[#000]'>
                <form>
                    <div className='flex flex-col mb-[15px]'>
                        <label className='text-[16px] text-[#fff]'>Name</label>
                        <input name='name' className='h-[40px]' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[16px] text-[#fff]'>Email</label>
                        <input name='email' className='h-[40px]' />
                    </div>
                    <div className='mt-[30px] text-center'>
                        <button type="submit" className='bg-[#35b8f8] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 min-w-[100px] p-[5px] rounded-[3px] text-[#fff] transition'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
