import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { create, all, MathJsInstance } from 'mathjs';
import './styles.css';

const math: MathJsInstance = create(all, {});

function RosslerAttractor() {
  const lineRef = useRef<THREE.Line>(null);
  const [vertices, setVertices] = useState<Float32Array>(new Float32Array());

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
  const steps = 9500;
  const x0: number[] = [0, 1, 0];

  // Generate the trajectory
  const trajectory: number[][] = integrateRossler(x0, a, b, c, dt, steps);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allVertices: Float32Array = new Float32Array(trajectory.flat());

  useEffect(() => {
    let currentVertices = new Float32Array();
    const interval = setInterval(() => {
      setVertices((prevVertices) => {
        const newIndex = prevVertices.length / 3 + 50; // Increase the number of points added per iteration
        if (newIndex > allVertices.length / 3) {
          clearInterval(interval);
          return allVertices; // Return all vertices when complete
        }
        currentVertices = allVertices.slice(0, newIndex * 3);
        return currentVertices;
      });
    }, 10); // Adjust the interval for different speeds

    return () => clearInterval(interval);
  }, [allVertices]);

  useEffect(() => {
    if (lineRef.current && vertices.length > 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      lineRef.current.geometry = geometry;
    }
  }, [vertices]);

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry" />
      <lineBasicMaterial attach="material" color="white" linewidth={1} />
    </line>
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


