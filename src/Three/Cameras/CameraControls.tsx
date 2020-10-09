import React, { useContext, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { Box3 } from 'three';
import { CameraControlContext } from '../contexts/CameraContext';
import { OrbitControls } from '../libs/OrbitControls/OrbitControls';
import { useSetControlToContext } from './hooks/use-set-control-to-context.hook';

const enableDamping = true;
const dampingFactor = 0.05;
// const minAzimuthAngle = Math.PI / -3;
// const maxAzimuthAngle = Math.PI / 3;
// const maxPolarAngle = Math.PI / 4;

interface ICameraControls {
  boundaries: Box3;
}

export const CameraControls: React.FC<ICameraControls> = ({ boundaries }) => {
  const { camera, gl } = useThree();
  const [, setOrbitControl] = useContext(CameraControlContext);
  const controlsRef = useRef<OrbitControls>();

  useSetControlToContext(controlsRef.current, setOrbitControl);

  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
    />
  );
};
