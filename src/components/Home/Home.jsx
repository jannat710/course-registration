/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then((res) => res.json())
            .then((data) => setAllCourse(data))
    }, [])
    console.log(allCourse)

    return (
        <div className='bg-gray-200 container mx-auto'>
            <h1 className='font-bold text-3xl text-center py-10'>Course Registration</h1>
            <div className='flex justify-evenly'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {
                        allCourse.map(course => (<div key={course.id} className='bg-white w-64 h-80 p-3'>
                            <div className=''>
                                <img className='w-full mx-auto' src={course.image} alt="" />
                            </div>
                            <h2 className='text-base font-semibold'>{course.title}</h2>
                            <p className='text-[#1c1b1b99] text-sm font-normal'><small>{course.details}</small></p>
                            <div className="flex justify-evenly">
                                <p>$ Price : {course.price}</p>
                                <p>Credit : {course.credit}hr</p>
                            </div>
                            <button className='btn btn-primary text-white w-full'>Select</button>
                        </div>))
                    }
                </div>
                <div className="div">
                    <h1>This is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;