
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './components/Experience';

// NOTE: This application requires the following libraries to be installed:
// npm install three @react-three/fiber @react-three/drei @react-three/postprocessing

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 2, 10], fov: 42 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#101010'
        }}
      >
        <color attach="background" args={['#101010']} />
        <Suspense fallback={null}>
            <Experience />
        </Suspense>
      </Canvas>
      <Loader />
      <UIOverlay />
    </>
  );
}

const UIOverlay = () => (
  <div className="fixed top-0 left-0 w-full h-full pointer-events-none text-white">
    <div className="absolute top-8 left-8">
      <h1 className="text-2xl font-bold tracking-wider">JOHN DOE</h1>
      <p className="text-sm text-gray-400">Creative Developer & 3D Artist</p>
    </div>
    <div className="absolute bottom-8 right-8 text-right">
      <p className="text-lg font-medium animate-pulse">Scroll to explore</p>
      <p className="text-xs text-gray-500">↓</p>
    </div>
  </div>
);

export default App;
