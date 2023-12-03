import React from "react";

const Resume = () => {
  const handle=()=>{
    window.location.href = 'https://drive.google.com/drive/folders/1_n8myLajHXRTlY8WVOxXBh3w2nZ9yZvS';
  }
  return (
    <section className='cta'>
      <p className='cta-text'>
        To know more about me <br className='sm:block hidden' />
        Here is my Resume and bio-data..
      </p>
      <button  onClick={handle} className="btn"> This way
      </button>
    </section>
  );
};

export default Resume;