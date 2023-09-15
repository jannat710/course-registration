/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse,remaining,totalHour}) => {
console.log(selectedCourse);
    return (
        <div>
            <h1>Credit Hour Remaining {remaining} hr</h1>
            <h1>Course Name :{selectedCourse.length}</h1>
            {
                selectedCourse.map(course =>(
                    <li key={course.id} className='list-decimal list-inside'>{course.title}</li>
                ))
            }
            <h2>Total Credit Hour :{totalHour}</h2>
        </div>
    );
};

export default Cart;