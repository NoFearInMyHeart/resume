"use client";

import {Canvas, RootState, useFrame} from "@react-three/fiber";
import {Suspense, useRef, useState} from "react";
import {PointMaterial, Points, Preload} from "@react-three/drei";
import {random} from "maath";

const Stars = () => {
    const ref = useRef<any>();
    const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array);
    useFrame((state: RootState, delta: number) => {
        if (ref.current === undefined) return

        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
