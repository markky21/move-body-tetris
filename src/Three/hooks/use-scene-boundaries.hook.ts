import React, { useEffect, useState } from 'react';
import { Box3, Object3D } from 'three';

export const useSceneBoundariesHook = (scene: React.MutableRefObject<Object3D>, dependents: any[]): Box3 => {
  const [sceneBoundaries, setSceneBoundaries] = useState<Box3>(null);

  useEffect(() => {
    const boundaries = new Box3();

    boundaries.setFromObject(scene.current);
    setSceneBoundaries(boundaries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependents);

  return sceneBoundaries;
};
