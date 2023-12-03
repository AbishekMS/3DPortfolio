import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky3.glb'
const Sky = () => {
    const sky=useGLTF(skyScene);
    //mesh is used because sky is a primitive componenet which is only used to enclose the main 3D component .
  return (
    <group>
    <mesh>
    <primitive object={sky.scene}/>
    
    </mesh> </group>
  )
}

export default Sky