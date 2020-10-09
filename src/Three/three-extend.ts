/* eslint @typescript-eslint/no-unused-vars: off */

import { ReactThreeFiber } from 'react-three-fiber/three-types';
import { extend } from 'react-three-fiber';
import { Line2 } from 'three/examples/jsm/lines/Line2';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2';
import { OrbitControls } from './libs/OrbitControls/OrbitControls';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      line2: ReactThreeFiber.Object3DNode<Line2, typeof Line2>;
      lineGeometry: ReactThreeFiber.BufferGeometryNode<LineGeometry, typeof LineGeometry>;
      lineMaterial: ReactThreeFiber.MaterialNode<LineMaterial, typeof LineMaterial>;
      wireframe: ReactThreeFiber.Object3DNode<Wireframe, typeof Wireframe>;
      wireframeGeometry2: ReactThreeFiber.BufferGeometryNode<WireframeGeometry2, typeof WireframeGeometry2>;
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

extend({ Line2, LineMaterial, Wireframe, WireframeGeometry2, OrbitControls });
