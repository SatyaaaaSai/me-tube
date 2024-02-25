import React from 'react'
import Buttons from './Buttons';
const btnList=["All","Cricket","Movies","Politics","Dhoni","Messi","Soccer","Lofi","Football","India","AndhraPradesh","Food","Trailers","Anurag","Games"]

const ButtonList = () => {
  return (
    <div className="flex">
        {btnList.map((btn,index)=><Buttons key={index} name={btn}/>)}
        {/* <Buttons name="All"/>
        <Buttons name="Cricket"/>
        <Buttons name="Movies"/>
        <Buttons name="Politics"/>
        <Buttons name="Dhoni"/>
        <Buttons name="Messi"/>
        <Buttons name="Pawan Kalyan"/> */}
    </div>
  )
}

export default ButtonList