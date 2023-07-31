import React, { useState } from 'react'

export default function CrudOpration() {

    const [btnText, setBtnText] = useState(false)
    const [editDataR, setEditData] = useState('');
    const [finput, setFinput] = useState({
        name: '',
        email: ''
    })

    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        setFinput({
            ...finput,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form data', finput);
        if(btnText){
            const tempTableData = tableData;
            // Object.assign value compare karva mate use thay
            Object.assign(tempTableData[editDataR], finput);
            setTableData([...tempTableData])
            setBtnText(false);
            setFinput({
                name: '',
                email: '',
            })
        }else{
            setTableData([
                ...tableData,
                finput
            ]);   
            
            setFinput({
                name: '',
                email: '',
            })
        }
    }

    console.log('table data', tableData);

    const editData = (index) => {
        // selected data get using index
        const temData = tableData[index]
        setFinput({
            name: temData.name,
            email: temData.email,
        })
        console.log('temData', temData)
        setBtnText(true);
        setEditData(index);
    }
    const deleteData = (index) => {
        console.log('i', tableData.filter((item, i)=>i));
        console.log('index', index);
        const filterData = tableData.filter((item, i)=>i !== index);
        setTableData(filterData)
    }
    
  return (
    <div className='pt-[80px] pb-[80px]'>
        <div className='layout'>
            <h2 className='text-[#151515] text-[42px] font-bold mb-[40px] block text-center'>Services</h2>
            <div className='bg-[#ececec] p-[30px] mb-[50px]'>
            <h1 className='text-3xl text-center mb-[20px] font-bold'>Crud Opration</h1>
            <div className='w-[400px] m-auto'>
                <form onSubmit={handleSubmit} >
                    <div className='flex flex-col mb-[10px]'>
                        <label className='font-bold text-[16px]'>Name</label>
                        <input name='name' value={finput.name} onChange={handleChange} className='h-[40px] px-3' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-[16px]'>Email</label>
                        <input name='email' value={finput.email} onChange={handleChange} className='h-[40px] px-3' />
                    </div>
                    <div className='mt-[20px] text-center'>
                        <button type="submit" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 min-w-[100px] p-[5px] rounded-[3px] text-[#fff]'>{btnText?"Update":"Add"}</button>
                    </div>
                </form>
            </div>
            <div className='mt-[50px]'>
                <table width="100%" className='table-fixed border-collapse border border-b-slate-500'>
                    <thead>
                        <tr>
                            <th className='p-[5px] bg-[#1976d2] text-[#fff]'>Name</th>
                            <th className='p-[5px] bg-[#1976d2] text-[#fff]'>Email</th>
                            <th className='p-[5px] bg-[#1976d2] text-[#fff]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                    
                        tableData.map((item, i)=>(
                            <tr key={item.name} className='border border-b-slate-500 odd:bg-white even:bg-gray-200'>
                                <td className='p-[5px]'>{item.name}</td>
                                <td className='p-[5px]'>{item.email}</td>
                                <td className='p-[5px]'>
                                    <a href='#' onClick={()=>editData(i)} className='text-[#333333] font-semibold mr-6 hover:underline'>Edit</a>
                                    <a href='#' onClick={()=>deleteData(i)} className='text-[red] font-semibold hover:underline'>Delete</a>
                                </td>
                            </tr>
                        )) 
                        }                
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    
    
  )
}
