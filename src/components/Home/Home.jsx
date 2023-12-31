/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse,setSelectedCourse]=useState([]);
    const [remaining,setRemaining]=useState(20);
    const [totalHour,setTotalHour]=useState(0);


    useEffect(() => {
        fetch('./course.json')
            .then((res) => res.json())
            .then((data) => setAllCourse(data))
    }, [])
    // console.log(allCourse)
    const handleSelectCourse = (course) => {
        const isExist=selectedCourse.find(test=>test.id==course.id);

        let hour=course.credit;
        if(isExist){
           return     toast.error("Already enrolled!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
          });
        }
        else{
            selectedCourse.forEach(item => {
                hour=hour+item.credit;
            });      
            const remaining=20-hour;
            
            if(hour>20 || remaining<0){
                return     toast.error("Opss! Completed credit hour .", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                  });
            }
            else{
                setTotalHour(hour);
                setRemaining(remaining);
                // console.log(hour)
                setSelectedCourse([...selectedCourse,course]);
            }
        } 
    };
    // console.log(selectedCourse);

    return (
        <div className='bg-gray-200 container mx-auto'>
            <h1 className='font-bold text-3xl text-center py-10'>Course Registration</h1>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {
                        allCourse.map(course => (<div key={course.id} className='bg-white w-64  p-3'>
                            <div className=''>
                                <img className='w-full mx-auto pb-2' src={course.image} alt="" />
                            </div>
                            <h2 className='text-base font-semibold'>{course.title}</h2>
                            <p className='text-[#1c1b1b99] text-sm font-normal py-3'><small>{course.details}</small></p>
                            <div className="flex justify-between gap-2 pb-3">
                                <button><FiDollarSign></FiDollarSign></button>
                                <p className='text-sm font-medium text-[#1c1b1b99]'>Price : {course.price}</p>
                                <button><BsBook></BsBook></button>
                                <p className='text-sm font-medium text-[#1c1b1b99]'>Credit : {course.credit}hr</p>
                            </div>
                            <button onClick={() => handleSelectCourse(course)} className='bg-blue-600 w-full p-2 rounded-lg text-white'>Select</button>
                        </div>))
                    }
                    <ToastContainer />
                </div>
                <div className="div">
                    <Cart selectedCourse={selectedCourse} remaining={remaining} totalHour={totalHour}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;