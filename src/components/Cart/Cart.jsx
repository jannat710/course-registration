/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse}) => {
console.log(selectedCourse);
    return (
        <div>
            <h1>Course Name ;{selectedCourse.length}</h1>
            {
                selectedCourse.map(course =>(
                    <li className='list-decimal list-inside'>{course.title}</li>
                ))
            }
        </div>
    );
};

export default Cart;