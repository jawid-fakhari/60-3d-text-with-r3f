import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience() {
    //questo matcapTexture viene da una libreria di texture di github "7B5254_E9DCC7_B19986_C8AC91"
    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    const tempArray =
        [...Array(100)]
            .map(() =>
                <mesh
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
                    <torusGeometry />
                    <meshMatcapMaterial matcap={matcapTexture} />
                </mesh>
            )

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />
        {/* Center helper mette il text al centro */}
        <Center>
            {/* importare Text3D */}
            <Text3D
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
                <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
        </Center>

        {tempArray}


    </>
}