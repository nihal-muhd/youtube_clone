import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming",'Songs','Soccer','Cricket','Cooking','Valentines'];

const ButtonList = () => {
  return (
    <div className="flex">
        {list.map((val,i)=><Button name={val} key={i}/>)}
    </div>
  );
};

export default ButtonList;
