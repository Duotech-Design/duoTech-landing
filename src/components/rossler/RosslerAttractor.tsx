import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { create, all, MathJsInstance } from 'mathjs';
import './styles.css';
import { useThree } from '@react-three/fiber';
const math: MathJsInstance = create(all, {});

  // Define the Rössler attractor equations
  function rossler(x: number[], a: number, b: number, c: number): number[] {
    const dxdt: number[] = [-x[1] - x[2], x[0] + a * x[1], b + x[2] * (x[0] - c)];
    return dxdt;
  }
 // Integrate the equations using Euler's method
 function integrateRossler(x0: number[], a: number, b: number, c: number, dt: number, steps: number): number[][] {
  const trajectory: number[][] = [];
  let x: number[] = x0;

  for (let i = 0; i < steps; i++) {
    trajectory.push([...x]);
    const dxdt: number[] = rossler(x, a, b, c);
    x = math.add(x, math.multiply(dxdt, dt)) as number[];
  }

  return trajectory;
}

// Parameters
const a = 0.2;
const b = 0.2;
const c = 6.7;
const dt = 0.01;
const steps = 8500;
const x0: number[] = [0, 1, 0];

// Generate the trajectory
const trajectory: number[][] = integrateRossler(x0, a, b, c, dt, steps);
// eslint-disable-next-line react-hooks/exhaustive-deps



function RosslerAttractor() {
  const lineRef = useRef<THREE.Line>(null);
  const [vertices] = useState<Float32Array>(new Float32Array());
  const { camera } = useThree(); // Obtén la cámara aquí

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allVertices: Float32Array = new Float32Array(trajectory.flat());

  useEffect(() => {
    let zoomInterval: NodeJS.Timeout;
  
    if (lineRef.current) {
      let currentVertices = new Float32Array();
      const geometry = new THREE.BufferGeometry();
      lineRef.current.geometry = geometry;
  
      const interval = setInterval(() => {
        const newIndex = currentVertices.length / 3 + 50;
        if (newIndex > allVertices.length / 3) {
          clearInterval(interval);
          currentVertices = allVertices;
  
          // Inicia el zoom aquí
          zoomInterval = setInterval(() => {
            if (camera.zoom < 15) {
              camera.zoom += 0.1; // Ajusta el incremento del zoom aquí
              camera.updateProjectionMatrix();
            } else {
              clearInterval(zoomInterval);
            }
          }, 10); // Ajusta la frecuencia del zoom aquí
        } else {
          currentVertices = allVertices.slice(0, newIndex * 3);
        }
  
        geometry.setAttribute('position', new THREE.BufferAttribute(currentVertices, 3));
      }, 68);
  
      return () => {
        clearInterval(interval);
        if (zoomInterval) clearInterval(zoomInterval);
      };
    }
  }, [allVertices, camera]);

  useEffect(() => {
    if (lineRef.current && vertices.length > 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      lineRef.current.geometry = geometry;
    }
  }, [vertices]);

  return (
    <primitive object={new THREE.Line()} ref={lineRef}>
      <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
    </primitive>
  );
}
function RosslerComponent() {
  return (
    <Canvas camera={{ position: [0, -50, 10], fov: 75 }}>
      <RosslerAttractor />
      <OrbitControls enableRotate={false} enableZoom={true} enablePan={true} />
    </Canvas>
  );
}

export default RosslerComponent;
