"use client";
import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import {useScroll, useTransform, motion, useMotionValueEvent} from "framer-motion";

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

                    <motion.div style={{
                        // transform: "rotate(-25deg) translate(0, -300vh)"
                        transform: slidingThingOnScrollX,
                    }} className={`flex w-[1000vw] h-[35rem] gap-[2rem]`}>
                        {numberOfBoxesForOverflow.map((item: number, index: number) => {
                            return <div key={index}
                                        className={`h-full bg-[#21212180] w-[35rem] rounded-xl border-[0.5px] border-white/10 `}/>
                        })}
                    </motion.div>


                </section>

            </main>
        </React.Fragment>
    );
}

function AutoScrollingMarquee(): React.JSX.Element {

    const MarqueeOptions: Array<{ name: string, color: string }> = [
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Workout", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Diet", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "AI Coach", color: ApplicationLinearGradient.current.appBlueGradientInverted},
        {name: "Food Scanner", color: ApplicationLinearGradient.current.appThanosGradient},
        {name: "Macro Recommendation", color: ApplicationLinearGradient.current.appGreenGradient},
        {name: "Workout Creation", color: ApplicationLinearGradient.current.appRedGradient},
        {name: "Weekly Routine", color: ApplicationLinearGradient.current.appThanosGradient},
    ];

    const { scrollYProgress } = useScroll();
    
    return (
        <motion.div
            animate={{ transform: "translate(-100%)"}}
            transition={{
                duration: 2500,
                ease: "linear"
            }}
            className={`oswaldBold absolute top-[3rem] z-[300] text-white uppercase text-[3rem] w-[10000vw] flex gap-[1rem]`}>
            {MarqueeOptions.map((item: { name: string, color: string }, index: number): React.JSX.Element => {
                return <div key={index} className={`flex items-center gap-[1rem]`}>
                    {item.name}
                    <div style={{background: item.color}}
                         className={`h-[2.5rem] aspect-square rounded-full`}/>
                </div>
            })}
        </motion.div>
    )
}