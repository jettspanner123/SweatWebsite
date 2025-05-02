import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import ProfileImage from "@/app/assets/User.png";
import DietImage from "@/app/assets/Food.png";
import WorkoutImage from "@/app/assets/TabBarDumbbell.svg";
import CoachImage from "@/app/assets/Training.png";
import HomeImage from "@/app/assets/hom.svg";
import {motion} from "framer-motion";
import Image from "next/image";

export default function AutoScrollingMarquee(): React.JSX.Element {

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

    const framer_motion_variants = {
        hoverState: {
            background: "#ffffff15",
            borderRadius: "1rem",
            cursor: "pointer",
            opacity: 1,
        }
    }

    function getImageFromColor(backgroundColor: string) {
        switch (backgroundColor) {
            case ApplicationLinearGradient.current.appBlueGradient:
                return ProfileImage
            case ApplicationLinearGradient.current.appGreenGradient:
                return DietImage
            case ApplicationLinearGradient.current.appRedGradient:
                return WorkoutImage
            case ApplicationLinearGradient.current.appThanosGradient:
                return CoachImage
            default:
                return HomeImage
        }
    }



    return (
        <motion.div
            animate={{transform: "translate(-100%)"}}
            transition={{
                duration: 2500,
                ease: "linear",
            }}
            className={`oswaldBold absolute top-[3rem] z-[300] text-white uppercase text-[2rem] w-[10000vw] flex gap-[1rem]`}>
            {MarqueeOptions.map((item: { name: string, color: string }, index: number): React.JSX.Element => {
                return <motion.div
                    animate={{
                        y: 0,
                    }}
                    initial={{
                        y: -200,
                    }}
                    transition={{
                        y: {
                            duration: 1,
                            delay: 1,
                        },
                        ease: [0.85, 0, 0.15, 1],
                    }}
                    style={{
                        paddingInline: "0.25rem",
                    }}
                    variants={framer_motion_variants}
                    whileHover={`hoverState`} key={index} className={`flex opacity-75 items-center gap-[1rem]`}>
                    {item.name}
                    <div style={{background: item.color}}
                         className={`h-[2.5rem] aspect-square flex items-center justify-center rounded-full`}>
                        <Image src={getImageFromColor(item.color)} alt={""}/>
                    </div>
                </motion.div>
            })}
        </motion.div>
    )
}