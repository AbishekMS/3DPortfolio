import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TypeWritter = ({words, speed}) => {
  const [index,setIndex] =useState(0);
  const [text, setText]=useState("");
  const currentWord=words[index];
  useEffect(()=>{
    let charIndex=0;
    const typingInterval= setInterval(()=>{
      if(charIndex<=currentWord.length){
        setText(currentWord.slice(0,charIndex));
        charIndex++;
      }else{
        clearTimeout(typingInterval);
        setTimeout(()=>{
         setIndex((prevIndex)=>
         prevIndex=== words.length -1? 0: prevIndex+1);
        },1000);
      
      }
    },speed);
    return()=>{
      clearInterval(typingInterval);
    };
  },[currentWord, speed, words]);
  return (
    <span className='tracker-wider text-transport by-clip-text blue-gradient_text drop-shadow font-semibold mt-7' >
    {text}
    </span>
  )
}

export default TypeWritter