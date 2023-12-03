import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import React ,{ Suspense, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fox } from "../models/Fox";
import Loader from "../components/Loader";
import Navbar from '../components/Navbar'
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Armature.002|Armature.002|idle|Armature.002|idle");
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Armature.002|Armature.002|walk|Armature.002|walk");
  const handleBlur = () => setCurrentAnimation("Armature.002|Armature.002|idle|Armature.002|idle");
  
  
const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);
  setCurrentAnimation("Armature.002|Armature.002|hit|Armature.002|hit");
  emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name:form.name,
      to_name:"Abishek M S",
      from_email:form.email,
      to_email:'727721euee003@skcet.ac.in',
      message: form.message
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
 
  ).then(()=>{
    setLoading(false);
    setTimeout(()=>{
      //hideAlert(false);
      setCurrentAnimation("Armature.002|Armature.002|idle|Armature.002|idle");
      setForm({name:'', email:'', message:''});
      setShowNotification(true);
      toast['success']("Message sent successfully 👍");
     
      
    },[3000]);
  },
    (error)=>{
      setLoading(false);
      console.log(error);
      setCurrentAnimation("attack1");
      toast.error("Failed to send message 😢");
      setTimeout(()=>{
        setCurrentAnimation("Armature.002|Armature.002|idle|Armature.002|idle")
      },[5000]);
      
    });
   
  
};
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      <Navbar/>  

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Kane Williamson'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='KaneWilliamson@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;