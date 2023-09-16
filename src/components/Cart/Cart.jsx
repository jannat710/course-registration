/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse,remaining,totalHour}) => {
console.log(selectedCourse);
    return (
        <div className='bg-white w-64  p-3'>
            <h1 className='text-lg font-bold text-blue-600 border-b-2 pb-2'>Credit Hour Remaining {remaining} hr</h1>
            <p className='text-base font-bold border-b-2 py-2'>Course Name </p>
            {
                selectedCourse.map(course =>(
                    <li key={course.id} className='list-decimal list-inside text-[#1c1b1b99] py-2'>{course.title}</li>
                ))
            }
            <p className='border-b-2 text-base font-medium py-2'>Total Credit Hour : {totalHour}</p>
        </div>
    );
};

export default Cart;