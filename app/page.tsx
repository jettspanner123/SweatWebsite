"use client";
import React from "react";
import {ApplicationHelper, ApplicationLinearGradient, ApplicationType} from "@/app/modules/ApplicationHelper";
import {useScroll, useTransform, motion, useMotionValueEvent} from "framer-motion";
import AutoScrollingMarquee from "@/app/components/AuroScrollingMarquee";


export default function Home(): React.JSX.Element {

    React.useEffect((): void => {
        (
            async () => {
                let locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const numberOfBoxesForOverflow = Array.from({length: 50}, (_, i: number): number => i + 1);

    const {scrollYProgress} = useScroll();

    const slidingThingOnScrollX = useTransform(scrollYProgress, [0, 1], ["rotate(-25deg) translate(0, -300vh)", "rotate(-25deg) translate(-100rem, -300vh)"])

    return (
        <React.Fragment>
            <main
                className={`min-h-[300vh] w-screen`}>


                <section style={{
                    background: ApplicationLinearGradient.current.appBackground
                }} className={`h-screen w-screen relative overflow-hidden relative`}>
                    <AutoScrollingMarquee/>


                    <motion.div animate={{
                        x: 0,
                        y: 0
                    }} initial={{
                        x: 2500,
                        y: -1200
                    }} transition={{
                        duration: 1.5,
                        ease: [0.85, 0, 0.15, 1]
                    }}
                    >
                        <motion.div style={{
                            transform: slidingThingOnScrollX,
                        }} className={`flex w-[1000vw] h-[35rem] gap-[2rem]`}>
                            {numberOfBoxesForOverflow.map((item: number, index: number) => {
                                return <div key={index}
                                            className={`h-full bg-[#21212180] w-[35rem] rounded-xl border-[0.5px] border-white/10 `}/>
                            })}
                        </motion.div>
                    </motion.div>

                </section>

            </main>
        </React.Fragment>
    );
}

