import React from 'react';

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`First name: ${e.target.firstname.value}`);
        console.log(`Last name: ${e.target.lastname.value}`);
        console.log(`E-mail: ${e.target.email.value}`);
        console.log(`Phone: ${e.target.phone.value}`);
    }
    return (
        <div className='flex gap-1 items-center justify-center w-full h-screen bg-[#202020]'>
            <form onSubmit={handleSubmit}  className='flex bg-[#333333] shadow-2xl rounded-4xl h-[40%] w-[80%] md:w-[70%] lg:w-[40%] flex-col p-[5%] gap-2 justify-center items-center'>
                <input placeholder='First name' className='px-5 py-3 w-full bg-white rounded-2xl' type="text" name='firstname' />
                <input placeholder='Last Name' className='px-5 py-3 w-full bg-white rounded-2xl' type="text" name='lastname' />
                <input placeholder='E-mail' className='px-5 py-3 w-full bg-white rounded-2xl' type="email" name='email' />
                <input placeholder='Phone' className='px-5 py-3 w-full bg-white rounded-2xl' type="number" name='phone' />
                <input type="submit" value="submit" className='border-3 border-white text-white font-bold text-2xl uppercase hover:bg-white hover:text-black w-full p-3 rounded-2xl'/>
            </form>
        </div>
    );
};

export default SimpleForm;