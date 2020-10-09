import React, { useMemo } from 'react';
import * as THREE from 'three';

interface TetrisBoardProps {
  width?: number;
  height?: number;
}
export const TetrisBoard: React.FC<TetrisBoardProps> = React.memo(({ width = 10, height = 20 }) => {
  const boardGeometry: THREE.Geometry = useMemo(() => {
    const sidePlaneMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, height, 1, height));
    const bottomPlaneMesh = new THREE.Mesh(new THREE.PlaneGeometry(width, 1, width, 1));
    const leftSideMesh = sidePlaneMesh.clone();
    const rightSideMesh = sidePlaneMesh.clone();
    const topSideMesh = bottomPlaneMesh.clone();
    const bottomSideMesh = bottomPlaneMesh.clone();

    bottomSideMesh.position.set(0, 0, 0);
    topSideMesh.position.set(0, height, 0);
    leftSideMesh.position.set(-width / 2, height / 2, 0);
    rightSideMesh.position.set(width / 2, height / 2, 0);

    bottomSideMesh.rotateX(Math.PI / 2);
    topSideMesh.rotateX(Math.PI / 2);
    leftSideMesh.rotateY(Math.PI / 2);
    rightSideMesh.rotateY(Math.PI / 2);

    bottomSideMesh.updateMatrix();
    rightSideMesh.updateMatrix();
    leftSideMesh.updateMatrix();
    topSideMesh.updateMatrix();

    const singleGeometry = new THREE.Geometry();
    singleGeometry.merge(bottomSideMesh.geometry, bottomSideMesh.matrix);
    singleGeometry.merge(rightSideMesh.geometry, rightSideMesh.matrix);
    singleGeometry.merge(leftSideMesh.geometry, leftSideMesh.matrix);
    singleGeometry.merge(topSideMesh.geometry, topSideMesh.matrix);
    return singleGeometry;
  }, [width, height]);

  return (
    <wireframe>
      <wireframeGeometry2 attach="geometry" args={[boardGeometry]} />
      <lineMaterial attach="material" color={0x4080ff} linewidth={0.002} />
    </wireframe>
  );
});
TetrisBoard.displayName = 'TetrisBoard';
