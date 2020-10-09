import React, { useMemo } from 'react';
import { BLOCK_BOX_POSITION, BlockBoxShape, BlockComponentProps } from './block.model';
import { BlockBox } from './BlockBox';

export const BlockI: React.FC<BlockComponentProps> = React.memo(({ position }) => {
  const shapes: BlockBoxShape[] = useMemo(
    () => [
      { position: BLOCK_BOX_POSITION([0, 0, 0]) },
      { position: BLOCK_BOX_POSITION([1, 0, 0]) },
      { position: BLOCK_BOX_POSITION([2, 0, 0]) },
      { position: BLOCK_BOX_POSITION([3, 0, 0]) },
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
BlockI.displayName = 'BlockI';
