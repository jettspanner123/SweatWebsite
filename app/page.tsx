"use client";
import React from "react";
import {ApplicationLinearGradient, ApplicationHelper, ApplicationType} from "@/app/modules/ApplicationHelper";
import Navbar from "@/app/components/Navbar";
import IPhone from "@/app/iphone_image.png";
import Image from "next/image";

export default function Home(): React.JSX.Element {

    const [mousePosition, setMousePosition] = React.useState<ApplicationType.MousePosition<number>>({x: 0, y: 0});
    const [mouseSize, setMouseSize] = React.useState<number>(5 * 16);

    const imageRef = React.useRef<HTMLImageElement>(null);
    React.useEffect(() => {
        window.onmousemove = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        }
    }, [])

    const something = imageRef.current?.getBoundingClientRect().left;

    // @ts-ignore
    return (
        <React.Fragment>
            <main
                className={`h-[300vh] w-screen`}>


                <section
                    style={{background: ApplicationLinearGradient.current.appBackground}}
                    className={`h-screen w-screen overflow-hidden relative`}>

                    <Navbar/>

                    <Image ref={imageRef} src={IPhone} alt={""} style={{ scale: 2, position: "absolute", background: "blue", left: "50%", transform: `translate(calc(-25% + ${mousePosition.x - something}px))` }} className={`top-[70vh]`}/>

                </section>

                <section style={{
                    background: ApplicationLinearGradient.current.appBackgroundInverted
                }} className={`h-screen w-screen`}>
                </section>
            </main>
        </React.Fragment>
    );
}

