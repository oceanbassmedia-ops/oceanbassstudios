'use client'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Stars } from '@react-three/drei'

export default function OceanScene() {
  return <div className="three-canvas ocean-emblem-scene">
    <Canvas camera={{ position: [0, 0, 5.2], fov: 38 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={45} color="#d8edff" />
      <pointLight position={[-4, -2, 3]} intensity={35} color="#087bff" />
      <Sparkles count={100} scale={6.5} size={2} speed={0.22} opacity={0.7} color="#56d7ff" />
      <Stars radius={35} depth={20} count={450} factor={2} saturation={0.6} fade speed={0.25} />
    </Canvas>
    <div className="emblem-image-wrap"><img className="emblem-image" src="/ob-ocean-emblem.png" alt="OceanBassStudios interlocking OB ocean emblem" /></div>
    <div className="scene-ring ring-one" /><div className="scene-ring ring-two" />
    <div className="scene-label">OCEANBASS <span>— INTERLOCKING OB / OCEAN FINISH</span></div>
  </div>
}
