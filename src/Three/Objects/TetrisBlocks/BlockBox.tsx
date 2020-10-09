import React, { useMemo } from 'react';
import * as THREE from 'three';
import { BLOCK_BOX_SIZE, Vec3Array } from './block.model';

interface BlockBoxProps {
  width?: number;
  position: Vec3Array;
}
export const BlockBox: React.FC<BlockBoxProps> = React.memo(({ width = BLOCK_BOX_SIZE[0], position }) => {
  const shape = useMemo(() => {
    const newShape = new THREE.Shape();
    newShape.moveTo(0, 0);
    newShape.lineTo(0, width * 0.8);
    newShape.lineTo(width * 0.8, width * 0.8);
    newShape.lineTo(width * 0.8, 0);
    newShape.lineTo(0, 0);
    return newShape;
  }, [width]);
  const extrudeSettings = {
    steps: 2,
    depth: width / 2,
    bevelEnabled: true,
    bevelThickness: width * 0.1,
    bevelSize: width * 0.1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  return (

    <mesh position={[position[0], position[1], position[2] - width / 4]}>
      <extrudeBufferGeometry attach="geometry" args={[shape, extrudeSettings]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
});
BlockBox.displayName = 'BlockBox';
