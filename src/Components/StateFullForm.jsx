import React, { useState } from 'react';

const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleEmailChange = e => {
        console.log(`Email: ${e.target.value}`);
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        console.log(`Password: ${e.target.value}`);
        setPassword(e.target.value);
    }

    return (
        <div  className='flex gap-1 items-center justify-center w-full h-screen bg-[#202020]'>
            <form onSubmit={handleSubmit}  className='flex bg-[#333333] shadow-2xl rounded-4xl h-[40%] w-[80%] md:w-[70%] lg:w-[40%] flex-col p-[5%] gap-2 justify-center items-center'>
                <input placeholder='Name' className='px-5 py-3 w-full bg-white rounded-2xl' type="text" name='name' />
                <input onChange={handleEmailChange} placeholder='E-mail' className='px-5 py-3 w-full bg-white rounded-2xl' type="email" name='email' />
                <input onChange={handlePassChange} placeholder='Password' className='px-5 py-3 w-full bg-white rounded-2xl' type="password" name='password' />
                <input type="submit" value="submit" className='border-3 border-white text-white font-bold text-2xl uppercase hover:bg-white hover:text-black w-full p-3 rounded-2xl'/>
            </form>
        </div>
    );
};

export default StateFullForm;