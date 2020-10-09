export type Vec3Array = [number, number, number];

export interface BlockBoxShape {
  position: Vec3Array;
}

export interface BlockComponentProps {
  position: Vec3Array;
}

export const BLOCK_BOX_SIZE: Vec3Array = [0.9, 0.9, 0.9];
export const BLOCK_BOX_POSITION: (position: Vec3Array) => Vec3Array = (position) => [
  position[0] + 0.05,
  position[1] + 0.05,
  position[2] + 0.05,
];
