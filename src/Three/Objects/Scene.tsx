import React, { useRef } from 'react';
import { Object3D } from 'three';

import { useSceneBoundariesHook } from '../hooks/use-scene-boundaries.hook';
import { CameraControls } from '../Cameras/CameraControls';

interface SceneProps {
  boardWidth: number;
  boardHeight: number;
}

export const Scene: React.FC<SceneProps> = ({ children, boardHeight }) => {
  const group = useRef<Object3D>();
  const sceneBoundaries = useSceneBoundariesHook(group, []);

  return (
    <group ref={group} position={[0, -boardHeight / 2, 0]}>
      <CameraControls boundaries={sceneBoundaries} />
      {children}
    </group>
  );
};
