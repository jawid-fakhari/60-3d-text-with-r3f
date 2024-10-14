import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
// import { useEffect, useState } from 'react'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry()
const material = new THREE.MeshMatcapMaterial()

export default function Experience() {
    // const [torusGeometry, setTorusGeometry] = useState()
    // const [material, setMaterial] = useState()

    //questo matcapTexture viene da una libreria di texture di github "7B5254_E9DCC7_B19986_C8AC91"
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    useEffect(() => {
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])

    const tempArray =
        [...Array(100)]
            .map(() =>
                <mesh
                    geometry={torusGeometry}
                    material={material}
                    scale={0.2 + Math.random() * 0.2}
                    position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10
                    ]}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0
                    ]}
                >
                </mesh>
            )

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <torusGeometry ref={setTorusGeometry} />

        <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} /> */}

        {/* Center helper mette il text al centro */}
        <Center>
            {/* importare Text3D */}
            <Text3D
                material={material}
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                Hello R3F
            </Text3D>
        </Center>

        {tempArray}


    </>
}