import React, { useMemo } from 'react';
import { BLOCK_BOX_POSITION, BlockBoxShape, BlockComponentProps } from './block.model';
import { BlockBox } from './BlockBox';

export const BlockO: React.FC<BlockComponentProps> = React.memo(({ position }) => {
  const shapes: BlockBoxShape[] = useMemo(
    () => [
      { position: BLOCK_BOX_POSITION([0, 0, 0]) },
      { position: BLOCK_BOX_POSITION([1, 0, 0]) },
      { position: BLOCK_BOX_POSITION([0, 1, 0]) },
      { position: BLOCK_BOX_POSITION([1, 1, 0]) },
    ],
    []
  );

  return (
    <group position={position}>
      {shapes.map(({ position }, index) => (
        <BlockBox key={index} position={position} />
      ))}
    </group>
  );
});
BlockO.displayName = 'BlockO';
