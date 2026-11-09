import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';

export type RenderMode = 'realistic' | 'structure' | 'wireframe';

interface ArchitecturalSceneProps {
  renderMode: RenderMode;
  wireframeColor?: string;
  isExploded?: boolean;
}

// Bâtiment Architectural Moderne avec étages modulaires et modes de vue
function BuildingModel({ renderMode, isExploded }: ArchitecturalSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const craneArmRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Mesh>(null);

  const isWireframe = renderMode === 'wireframe';
  const isStructureOnly = renderMode === 'structure';

  // Décalage pour l'effet "Explosion / Déconstruction des étages"
  const explodeOffset = isExploded ? 0.45 : 0;

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      // Rotation oscillatoire douce et élégante
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.25;
    }

    if (craneArmRef.current) {
      // Rotation réaliste de la flèche de grue
      craneArmRef.current.rotation.y = Math.sin(time * 0.4) * 0.75 + 0.3;
    }

    if (hookRef.current) {
      // Montée et descente lente du crochet
      hookRef.current.position.y = -0.5 + Math.sin(time * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* 1. FONDATIONS & RADIER BÉTON */}
      <mesh position={[0, -1.25, 0]} receiveShadow>
        <boxGeometry args={[4.4, 0.2, 4.4]} />
        {isWireframe ? (
          <meshBasicMaterial color="#E87524" wireframe />
        ) : (
          <meshStandardMaterial color="#212529" roughness={0.9} />
        )}
      </mesh>

      {/* Dalle de niveau zéro */}
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[4.0, 0.15, 4.0]} />
        {isWireframe ? (
          <meshBasicMaterial color="#151515" wireframe />
        ) : (
          <meshStandardMaterial color="#E9ECEF" roughness={0.3} />
        )}
      </mesh>

      {/* 2. REZ-DE-CHAUSSÉE (Niveau 0) */}
      <group position={[0, -0.5 - explodeOffset * 1.5, 0]}>
        {/* Noyau central béton / ascenseur */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.6, 0.95, 1.6]} />
          {isWireframe ? (
            <meshBasicMaterial color="#E87524" wireframe />
          ) : (
            <meshStandardMaterial color="#495057" roughness={0.6} />
          )}
        </mesh>

        {/* Murs-rideaux en verre (masqués en mode structure) */}
        {!isStructureOnly && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.2, 0.9, 3.2]} />
            {isWireframe ? (
              <meshBasicMaterial color="#ADB5BD" wireframe />
            ) : (
              <meshPhysicalMaterial
                color="#E6F2F7"
                transparent
                opacity={0.3}
                roughness={0.05}
                transmission={0.7}
                thickness={0.8}
              />
            )}
          </mesh>
        )}

        {/* 4 Piliers béton / acier d'angle */}
        {[
          [-1.5, -1.5],
          [-1.5, 1.5],
          [1.5, -1.5],
          [1.5, 1.5],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.08, 0.08, 0.95, 16]} />
            <meshStandardMaterial
              color="#E87524"
              metalness={0.4}
              roughness={0.2}
              wireframe={isWireframe}
            />
          </mesh>
        ))}

        {/* Plancher 1er étage */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[3.4, 0.1, 3.4]} />
          {isWireframe ? (
            <meshBasicMaterial color="#E87524" wireframe />
          ) : (
            <meshStandardMaterial color="#CED4DA" roughness={0.4} />
          )}
        </mesh>
      </group>

      {/* 3. ÉTAGE 1 (Porte-à-faux géométrique architectural) */}
      <group position={[0.25, 0.45, 0]}>
        {/* Corps principal décalé */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.85, 2.8]} />
          {isWireframe ? (
            <meshBasicMaterial color="#151515" wireframe />
          ) : isStructureOnly ? (
            <meshStandardMaterial color="#6C757D" roughness={0.5} wireframe />
          ) : (
            <meshPhysicalMaterial
              color="#F8F9FA"
              roughness={0.15}
              clearcoat={0.4}
            />
          )}
        </mesh>

        {/* Brise-soleil / Lames d'ombrage tropicales BTP */}
        {[-0.25, -0.05, 0.15].map((y, idx) => (
          <mesh key={idx} position={[0, y, 1.45]}>
            <boxGeometry args={[2.9, 0.05, 0.15]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#E87524' : '#212529'}
              wireframe={isWireframe}
            />
          </mesh>
        ))}

        {/* Poutrelle de soutien en porte-à-faux (profilé IPE orange) */}
        <mesh position={[-1.2, -0.45, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial color="#E87524" metalness={0.7} roughness={0.2} />
        </mesh>

        {/* Dalle niveau 2 */}
        <mesh position={[0, 0.45, 0]}>
          <boxGeometry args={[3.0, 0.09, 3.0]} />
          {isWireframe ? (
            <meshBasicMaterial color="#E87524" wireframe />
          ) : (
            <meshStandardMaterial color="#ADB5BD" roughness={0.4} />
          )}
        </mesh>
      </group>

      {/* 4. ÉTAGE 2 / PENTHOUSE AVEC TOITURE-TERRASSE */}
      <group position={[-0.15, 1.35 + explodeOffset * 1.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.0, 0.8, 2.0]} />
          {isWireframe ? (
            <meshBasicMaterial color="#E87524" wireframe />
          ) : (
            <meshPhysicalMaterial
              color="#E87524"
              transparent
              opacity={0.88}
              roughness={0.2}
              metalness={0.1}
            />
          )}
        </mesh>

        {/* Baies vitrées du penthouse */}
        {!isStructureOnly && (
          <mesh position={[0, 0, 1.02]}>
            <boxGeometry args={[1.8, 0.65, 0.05]} />
            <meshPhysicalMaterial
              color="#DDF2F8"
              transparent
              opacity={0.4}
              transmission={0.8}
            />
          </mesh>
        )}

        {/* Acrotère de toiture */}
        <mesh position={[0, 0.42, 0]}>
          <boxGeometry args={[2.2, 0.08, 2.2]} />
          <meshStandardMaterial color="#212529" roughness={0.8} />
        </mesh>
      </group>

      {/* 5. GRUE À TOUR INDUSTRIELLE DE CHANTIER */}
      <group position={[0.8, 1.75 + explodeOffset * 2, 0.7]}>
        {/* Mât treillis vertical */}
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#E87524" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Cabine du grutier */}
        <mesh position={[0.1, 1.35, 0]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#212529" roughness={0.4} />
        </mesh>

        {/* Flèche pivotante */}
        <group ref={craneArmRef} position={[0, 1.5, 0]}>
          {/* Flèche avant longue avec tirant */}
          <mesh position={[1.1, 0, 0]}>
            <boxGeometry args={[2.2, 0.06, 0.06]} />
            <meshStandardMaterial color="#E87524" metalness={0.6} roughness={0.3} />
          </mesh>
          {/* Tirant supérieur oblique */}
          <mesh position={[0.7, 0.2, 0]} rotation={[0, 0, -Math.PI / 10]}>
            <boxGeometry args={[1.5, 0.02, 0.02]} />
            <meshBasicMaterial color="#151515" />
          </mesh>

          {/* Contre-flèche courte */}
          <mesh position={[-0.5, 0, 0]}>
            <boxGeometry args={[1.0, 0.06, 0.06]} />
            <meshStandardMaterial color="#E87524" />
          </mesh>
          {/* Blocs contrepoids béton */}
          <mesh position={[-0.85, -0.06, 0]}>
            <boxGeometry args={[0.25, 0.18, 0.18]} />
            <meshStandardMaterial color="#495057" roughness={0.9} />
          </mesh>

          {/* Câble d'acier */}
          <mesh position={[1.6, -0.3, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 0.6]} />
            <meshBasicMaterial color="#151515" />
          </mesh>

          {/* Crochet de levage mobile */}
          <mesh ref={hookRef} position={[1.6, -0.5, 0]}>
            <boxGeometry args={[0.09, 0.09, 0.09]} />
            <meshStandardMaterial color="#E87524" metalness={0.8} />
          </mesh>
        </group>
      </group>

      {/* 6. BALISES GÉODÉSIQUES TOPOGRAPHIQUES DU BÉNIN */}
      <group position={[-1.7, -0.95, 1.7]}>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5]} />
          <meshStandardMaterial color="#ADB5BD" />
        </mesh>
        <mesh position={[0, 0.52, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color="#E87524"
            emissive="#E87524"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* Grille de sol topographique */}
      <Grid
        position={[0, -1.36, 0]}
        args={[10, 10]}
        cellSize={0.5}
        cellThickness={0.8}
        cellColor="#A8ADB3"
        sectionSize={2}
        sectionThickness={1.2}
        sectionColor="#E87524"
        fadeDistance={9}
        fadeStrength={1.5}
      />
    </group>
  );
}

// Nuage de particules de chantier
function ConstructionParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 60;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = Math.random() * 6 - 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E87524"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

interface ArchitecturalCanvasProps {
  renderMode?: RenderMode;
  isExploded?: boolean;
}

export const ArchitecturalCanvas: React.FC<ArchitecturalCanvasProps> = ({
  renderMode = 'realistic',
  isExploded = false,
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <PerspectiveCamera makeDefault position={[4.6, 2.8, 5.0]} fov={38} />

        {/* Éclairage architectural studio haut de gamme */}
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[7, 10, 6]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-6, 4, -4]} intensity={0.5} color="#FFE8D6" />
        <spotLight
          position={[0, 6, 0]}
          intensity={0.8}
          angle={0.6}
          penumbra={0.8}
          color="#E87524"
        />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <BuildingModel renderMode={renderMode} isExploded={isExploded} />
        </Float>

        <ConstructionParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 4.5}
          rotateSpeed={0.55}
        />
      </Canvas>
    </div>
  );
};
