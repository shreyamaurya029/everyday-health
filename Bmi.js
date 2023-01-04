import React, { useState } from 'react';
export default function Bmi(){

    const[weight, setWeight] = useState("");
    const[height, setHeight] = useState("");
    const[bmiResult, setBmiResult] = useState("");
    const[status, setStatus] = useState("");

    function calculateBMI(){
        let bmi  = Number(weight / (height /100)**2).toFixed(2);
        setBmiResult(bmi);

        let status = getStatus(bmi);
        setStatus(status);
    }

    function getStatus(bmi){
        if(bmi < 18.5) return "underweight";
        else if(bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if(bmi >=25 && bmi <29.9) return "Overweight";
        else if(bmi >=30 && bmi < 34.9) return "obesity";
        else return "extreme obesity"
    } 

    return(
      
    <div className='p-10 '>
      <div className='p-10'>
      <h1 className=' text-6xl'>BODY MASS INDEX</h1>
      </div>
      
      <p className='text-left p-22 m-6'>Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Rem debitis quam suscipit 
         mpedit. Nesciunt voluptas nulla odio. Ipsa, 
         non vero nesciunt dolorem iste, dicta hic
         totam quo eum suscipit explicabo!Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Rem debitis quam suscipit 
         mpedit. Nesciunt voluptas nulla odio. Ipsa, 
         non vero nesciunt dolorem iste, dicta hic
         totam quo eum suscipit explicabo!Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Rem debitis quam suscipit 
         mpedit. Nesciunt voluptas nulla odio. Ipsa, 
         non vero nesciunt dolorem iste, dicta hic
         totam quo eum suscipit explicabo!
        </p>
      <div className='p-10'>
      <img className='w-full ' src="bmi.png" alt="bmi" />
      </div>
     
    <div className="flex flex-col justify-center items-center ">

<form className="w-full max-w-lg p-10 bg-red">
  <div className='border-2 border-black'>
    <div className="flex flex-wrap p-3 ">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
      for="grid-first-name">
      Enter Weight
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="grid-first-name"
       type="text"
        placeholder="in kgs" 
        value={weight}
        onChange={e => setWeight(e.target.value)}/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-last-name">
      Enter Height
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="enter_height" 
       type="text" 
       placeholder="in cm" 
       value={height}
       onChange={e => setHeight(e.target.value)} />
      
    </div>
  </div>
  <div className="flex items-center justify-center pt-3">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-1 py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      onClick={calculateBMI}>
        Calculate
      </button>
    </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
      for="grid-city">
        BMI
      </label>

      <label>
      <p className='border-4 p-4  '>{bmiResult}</p>
      </label>
    
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="relative">
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-zip">
        Result
      </label>

      <label >
      <p className='border-4 p-4 '>{status}</p>
      </label>
     
    </div>
  </div>
</div>
</form>
</div>
{/* 1st card */}
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full"
  src="/img/card-top.jpg"
  alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

{/* 2ndcard */}
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" 
  src="/img/card-top.jpg" 
  alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

{/* 3rd card */}
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

{/* 4th card */}
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
{/* 5th card */}
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

</div>
    );


}