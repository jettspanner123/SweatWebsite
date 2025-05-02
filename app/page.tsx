"use client";
import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import {useScroll, useTransform, motion, useSpring, color} from "framer-motion";
import {MotionValue} from "motion";


// images import
import ProfileImage from "@/app/assets/User.png";
import DietImage from "@/app/assets/Food.png";
import WorkoutImage from "@/app/assets/TabBarDumbbell.svg";
import CoachImage from "@/app/assets/Training.png";
import HomeImage from "@/app/assets/hom.svg";


export default function Home(): React.JSX.Element {

    React.useEffect((): void => {
        (
            async (): Promise<void> => {
                let locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const numberOfBoxesForOverflow: Array<number> = Array.from({length: 50}, (_, i: number): number => i + 1);

    const {scrollYProgress} = useScroll();

    const slidingThingOnScrollX: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["rotate(-25deg) translate(0, -300vh)", "rotate(-25deg) translate(-100rem, -300vh)"])

    interface HeroSectionBottomImageData {
        image: any;
        backgroundColor: string;
    };

    const heroSectionBottomImages: Array<HeroSectionBottomImageData> = [
        {image: HomeImage, backgroundColor: ApplicationLinearGradient.current.appThanosGradient},
        {image: WorkoutImage, backgroundColor: ApplicationLinearGradient.current.appRedGradient},
        {image: CoachImage, backgroundColor: ApplicationLinearGradient.current.appBlueGradientInverted},
        {image: DietImage, backgroundColor: ApplicationLinearGradient.current.appGreenGradient},
        {image: ProfileImage, backgroundColor: ApplicationLinearGradient.current.appRedGradient},
    ];

    const getRoundnessBasedOnColor = (color: string): number => {
        switch (color) {
            case ApplicationLinearGradient.current.appRedGradient:
                return 12;
            case ApplicationLinearGradient.current.appThanosGradient:
                return 12;
            case ApplicationLinearGradient.current.appBlueGradientInverted:
                return 1000;
            default:
                return 200;
        }
    }

    return (
        <React.Fragment>
            <main
                className={`min-h-[300vh] w-screen relative`}>


                <section style={{
                    background: ApplicationLinearGradient.current.appBackground
                }} className={`h-screen w-screen overflow-hidden`}>


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
                                return <motion.div key={index}
                                                   className={`h-full bg-[#21212180] w-[35rem] rounded-xl border-[0.5px] border-white/10 `}/>
                            })}
                        </motion.div>
                    </motion.div>


                    {/*hero section*/}

                    <div
                        className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
                        <div className={`flex flex-col items-center`}>
                            <motion.h1 data-scroll data-scroll-speed={"0.15"} style={{lineHeight: "7rem"}}
                                       className={`oswaldBold text-white text-[6rem]`}>Be your own
                            </motion.h1>
                            <motion.h1 data-scroll data-scroll-speed={"0.1"}
                                       className={`oswaldBold text-white text-[6rem] leading-none`}>workout guide.
                            </motion.h1>




                            {/*twin button*/}
                            <div style={{marginTop: "5rem"}} className={`flex justify-center gap-[1rem]`}>
                                <motion.div data-scroll data-scroll-speed={"0.15"}>
                                    <motion.button
                                        style={{
                                            paddingBlock: "0.75rem",
                                            background: ApplicationLinearGradient.current.appThanosGradient
                                        }}
                                        whileHover={{
                                            cursor: "pointer",
                                            y: -5
                                        }}
                                        className={`w-[175px] rounded-full text-white text-[0.9rem]`}>
                                        Download The App
                                    </motion.button>
                                </motion.div>


                               <motion.div data-scroll data-scroll-speed={"0.1"}>
                                   <motion.button
                                       style={{
                                           paddingBlock: "0.75rem",
                                           background: ApplicationLinearGradient.current.appRedGradient
                                       }}
                                       whileHover={{
                                           cursor: "pointer",
                                           y: -5
                                       }}
                                       className={`w-[175px] rounded-full text-white text-[0.9rem]`}>
                                       Get In Touch
                                   </motion.button>
                               </motion.div>

                            </div>
                        </div>
                    </div>

                </section>


                <section className={`w-screen h-[200vh] relative`}>

                    <section className={`w-screen h-screen sticky top-0 bg-black`}>


                    </section>
                </section>

            </main>
        </React.Fragment>
    );
}

