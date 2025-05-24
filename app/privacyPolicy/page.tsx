"use client";
import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import {FaChevronLeft} from "react-icons/fa";
import {motion} from "framer-motion";

export default function Page(): React.JSX.Element {
    function pushRoute(path: string): void {
        window.location.assign(path);
    }

    return (
        <React.Fragment>
            <main
                className={`min-h-screen w-screen`}
                style={{background: ApplicationLinearGradient.current.appBackground, paddingTop: "5rem"}}>

                <nav style={{paddingBlock: "1.25rem", marginInline: "auto"}}
                     className={`w-[70vw] flex justify-between items-center`}>


                    {/*bac button*/}
                    <motion.div
                        onClick={() => pushRoute("/")}
                        whileHover={{scale: 1.1, cursor: "pointer"}}
                        className={`bg-white h-[4rem] w-[8rem] overflow-hidden rounded-full`}>
                        <MouseMagnetic>
                            <div
                                className={`h-[4rem] pointer-events-none w-[8rem] gap-[0.5rem] flex justify-center items-center`}>
                                <FaChevronLeft/>
                                <p className={`cursor-default`}>Back</p>
                            </div>
                        </MouseMagnetic>
                    </motion.div>

                    {/*the privacy policy heading*/}
                    <h1 className={`text-white oswaldBold text-[4rem] uppercase`}>
                        {
                            "Privacy-Policy".split("").map((item: string, index: number): React.JSX.Element => {
                                return (
                                    <motion.span
                                        animate={{y: 0}} initial={{y: -200}}
                                        transition={{
                                            delay: 0.005 * (index + 1),
                                            ease: [0.16, 1, 0.3, 1],
                                            duration: 1

                                        }}
                                        key={index} className={`inline-block`}>
                                        {item}
                                    </motion.span>
                                )
                            })
                        }
                    </h1>


                    {/*the contact us button*/}

                    <motion.div whileHover={{scale: 1.1, cursor: "pointer"}}
                                className={`text-white overflow-hidden border-[1px] border-white h-[4rem] w-[8rem] rounded-full`}>
                        <MouseMagnetic>
                            <div
                                className={`h-[4rem] pointer-events-none w-[8rem] gap-[0.5rem] flex justify-center items-center`}>
                                Contact Us
                            </div>
                        </MouseMagnetic>
                    </motion.div>
                </nav>


                {/*red banner*/}
                <div style={{
                    background: ApplicationLinearGradient.current.appRedGradient,
                    marginInline: "auto",
                    marginTop: "2rem",
                    padding: "1.5rem"
                }} className={`w-[70vw] flex justify-center items-center text-white rounded-2xl text-[1.25rem]`}>
                    The Privacy Policy will help you better understand how we collect, use and share you personal
                    information.
                </div>


                {/*actual privacy Policy*/}
                <div style={{marginInline: "auto"}} className={`w-[70vw]`}>

                    {/*date of privacy policy*/}
                    <h1 style={{marginTop: "2rem"}}
                        className={`text-white text-[1.25rem] flex gap-[1rem] items-center`}>
                        <div style={{
                            background: ApplicationLinearGradient.current.appThanosGradient,
                            padding: "0.5rem",
                            paddingInline: "1rem"
                        }} className={`rounded-xl`}>
                            Effective Date
                        </div>

                        24th of April, 2025
                    </h1>

                    {/*small privacy policy description*/}
                    <h1 style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                        Welcome to <span className={`font-bold`}> Sweat If </span> We value your privacy and are
                        committed to protecting your personal
                        information. This Privacy Policy outlines how we collect, use, store, and protect the data you
                        provide while using our workout, fitness, and diet application, which includes AI-powered
                        features to personalize and enhance your experience.
                    </h1>

                    <PaddedBackgroundText text={"1. Information We Collect"}
                                          background={ApplicationLinearGradient.current.appThanosGradient}/>

                    <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                        We may collection the following types of information:

                        <div style={{marginLeft: "4rem"}} className={`gap-[0.5rem]`}>
                            <PaddedBackgroundText
                                text={"Personal Information"}
                                background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                wantRightMargin={true}
                                fixedWidth={true}
                            />
                            Name, email address, age, gender, weight, height, fitness goals, and dietary preferences.
                        </div>

                        <div style={{marginLeft: "4rem"}} className={`gap-[0.5rem]`}>
                            <PaddedBackgroundText
                                text={"Health & Fitness Data"}
                                background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                wantRightMargin={true}
                                fixedWidth={true}
                            />
                            Workout history, activity levels, food logs, water intake, sleep patterns, and progress
                            metrics.
                        </div>

                        <div style={{marginLeft: "4rem"}} className={`gap-[0.5rem]`}>
                            <PaddedBackgroundText
                                text={"Device Information"}
                                background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                wantRightMargin={true}
                                fixedWidth={true}
                            />
                            Device type, operating system, app version, and usage data.
                        </div>

                        <div style={{marginLeft: "4rem"}} className={`gap-[0.5rem]`}>
                            <PaddedBackgroundText
                                text={"AI Driven Data Inputs"}
                                background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                wantRightMargin={true}
                                fixedWidth={true}
                            />
                            User input related to preferences, goals, and performance that the AI uses to provide
                            tailored recommendations.
                        </div>
                    </div>


                    {/*how we use information*/}
                    <div style={{marginTop: "1rem"}}>
                        <PaddedBackgroundText
                            text={"2. How We User Your Information"}
                            background={ApplicationLinearGradient.current.appThanosGradient}/>

                        <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                            We use the information we collect to provide you with a personalized and effective health
                            and fitness experience. This includes generating customized workout routines and diet plans
                            based on your goals and preferences, tracking your progress over time, and offering
                            actionable insights through our AI-powered features. Additionally, we use your data to
                            enhance app performance, deliver motivational messages and reminders, and support your
                            overall health journey. Your information also helps us troubleshoot issues, respond to
                            inquiries, and continuously improve our services.
                        </div>
                    </div>


                    {/*ai and personaqlization*/}
                    <div style={{marginTop: "1rem"}}>
                        <PaddedBackgroundText
                            text={"3. AI And Personalisation"}
                            background={ApplicationLinearGradient.current.appThanosGradient}/>

                        <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                            Our app uses AI algorithms to deliver smart recommendations tailored to your fitness level,
                            goals, and habits. The AI learns from your data to improve over time and enhance your user
                            experience. This data is never sold or shared with third-party advertisers.
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}


type PaddedBackgroundTextProps = {
    text: string;
    background: string;
    wantRightMargin?: boolean;
    fixedWidth?: boolean;
};
const PaddedBackgroundText = ({
                                  text,
                                  background,
                                  wantRightMargin = false,
                                  fixedWidth = false
                              }: PaddedBackgroundTextProps): React.JSX.Element => {
    return (
        <div
            style={{
                width: fixedWidth ? "15rem" : "auto",
                marginTop: "2rem",
                padding: "0.5rem",
                paddingInline: "1rem",
                background: background,
                marginRight: wantRightMargin ? "1rem" : "0"
            }}
            className={`text-white inline-block text-[1.25rem] rounded-xl`}>
            {text}
        </div>
    )
}