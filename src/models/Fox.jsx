import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/fox2.glb";

export function Fox({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
        name="Object_7"
        geometry={nodes.Object_7.geometry}
        material={materials["Material.025"]}
        skeleton={nodes.Object_7.skeleton}
      />
        <skinnedMesh
        name="Object_8"
        geometry={nodes.Object_8.geometry}
        material={materials["Material.026"]}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        name="Object_9"
        geometry={nodes.Object_9.geometry}
        material={materials["Material.027"]}
        skeleton={nodes.Object_9.skeleton}
      />
      <skinnedMesh
        name="Object_10"
        geometry={nodes.Object_10.geometry}
        material={materials["Material.028"]}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        name="Object_11"
        geometry={nodes.Object_11.geometry}
        material={materials["Material.029"]}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        name="Object_12"
        geometry={nodes.Object_12.geometry}
        material={materials["Material.031"]}
        skeleton={nodes.Object_12.skeleton}
      />
      <skinnedMesh
        name="Object_13"
        geometry={nodes.Object_13.geometry}
        material={materials["Material.032"]}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        name="Object_14"
        geometry={nodes.Object_14.geometry}
        material={materials["Material.001"]}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        name="Object_15"
        geometry={nodes.Object_15.geometry}
        material={materials["Material.002"]}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        name="Object_16"
        geometry={nodes.Object_16.geometry}
        material={materials["Material.005"]}
        skeleton={nodes.Object_16.skeleton}
      />
      <skinnedMesh
        name="Object_17"
        geometry={nodes.Object_17.geometry}
        material={materials["Material.004"]}
        skeleton={nodes.Object_17.skeleton}
      />
      <skinnedMesh
        name="Object_18"
        geometry={nodes.Object_18.geometry}
        material={materials.material_0}
        skeleton={nodes.Object_18.skeleton}
      />
      </group>
    </group>
  );
}

useGLTF.preload(scene);
