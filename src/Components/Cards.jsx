import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let Category = props.Category;
    const [likedCourses,setLikedCourses] = useState([]);

    let allCourses = [];
    const getCourses = () => {
            if(Category === "All"){
                Object.values(courses).forEach((courseCategory) => {
                allCourses.push(...courseCategory);
            });
            return allCourses;
        }
        else{
            return courses[Category];
        }        
    }
    

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {getCourses().map((course) => (
                <Card
                     key={course.id} 
                    course={course} 
                    likedCourses = {likedCourses} 
                    setLikedCourses = {setLikedCourses}
                /> 
                ))}
        </div>
    );
};

export default Cards;
