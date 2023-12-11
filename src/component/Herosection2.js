import React from 'react';
import hero from "../assets/images/hero.png";
import hero2 from "../assets/images/hero2.png";

const Herosection2 = () => {
    return (
        <>
            <div className="containr"> 
                <h5 className='text-center herosection2'>The world’s most effective content teams use Writer <button className='btn btn-sm'> <img className='herosection2 ' src={hero} alt="" /></button></h5>
                 
                {/* <div className="hero2_row"> */}
               <b> <img className='hero text-center' src={hero2} alt="all content" /></b>
                {/* </div> */}
            </div>
        </>
    )
}

export default Herosection2

