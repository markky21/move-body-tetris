import './three-extend';

import React from 'react';
import { BlockI } from './Objects/TetrisBlocks/BlockI';
import { BlockO } from './Objects/TetrisBlocks/BlockO';
import { BlockT } from './Objects/TetrisBlocks/BlockT';
import { BlockS } from './Objects/TetrisBlocks/BlockS';
import { BlockZ } from './Objects/TetrisBlocks/BlockZ';
import { BlockJ } from './Objects/TetrisBlocks/BlockJ';
import { BlockL } from './Objects/TetrisBlocks/BlockL';
import { TetrisBoard } from './Objects/TetrisBoard/TetrisBoard';
import { Canvas } from 'react-three-fiber';
import { ThreeMonitor } from './utils/ThreeMonitor';
import { CameraControlContextProvider } from './contexts/CameraContext';
import { Scene } from './Objects/Scene';

interface ThreeCanvasProps {
  debug?: boolean;
}
export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ debug = true }) => {
  const boardWidth = 10;
  const boardHeight = 20;

  return (
    <Canvas
      // shadowMap
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 20], fov: 100 }}>
      {debug && <axesHelper args={[10]} />}
      <ThreeMonitor debug={debug} />

      <CameraControlContextProvider>
        <Scene boardHeight={boardHeight} boardWidth={boardWidth}>
          <hemisphereLight intensity={0.35} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize-width={256}
            shadow-mapSize-height={256}
          />
          <BlockI position={[0, 15, 0]} />
          <BlockO position={[0, 12.5, 0]} />
          <BlockT position={[0, 10, 0]} />
          <BlockS position={[0, 7.5, 0]} />
          <BlockZ position={[0, 5, 0]} />
          <BlockJ position={[0, 2.5, 0]} />
          <BlockL position={[0, 0, 0]} />
          <TetrisBoard width={boardWidth} height={boardHeight} />
        </Scene>
      </CameraControlContextProvider>
    </Canvas>
  );
};
