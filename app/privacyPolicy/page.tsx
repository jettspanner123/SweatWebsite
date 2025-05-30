"use client";
import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import {FaChevronLeft} from "react-icons/fa";
import {motion} from "framer-motion";
import {MdEdit} from "react-icons/md";

export default function Page(): React.JSX.Element {


    React.useEffect((): void => {
        (
            async (): Promise<void> => {
                let locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    const [pageChangeState, setPageChangeState] = React.useState<boolean>(false);

    function pushRoute(path: string): void {

        setPageChangeState(true);
        setTimeout(() => {
            window.location.assign(path);
        }, 1000);
    }

    return (
        <React.Fragment>
            <main
                className={`min-h-screen w-screen relative`}
                style={{paddingBlock: "5rem"}}>

                <div style={{background: ApplicationLinearGradient.current.appBackground, top: "0"}}
                     className={`fixed w-screen h-screen z-[-1]`}>

                </div>

                <motion.div
                    animate={{y: pageChangeState ? "100vh" : "0"}}
                    transition={{duration: 0.75, ease: [0.85, 0, 0.15, 1]}}
                >
                    <nav style={{paddingBlock: "1.25rem", marginInline: "auto"}}
                         className={`lg:w-[70vw] w-[90%] flex justify-between items-center`}>


                        {/*bac button*/}
                        <MouseMagnetic>
                            <motion.div
                                onClick={() => pushRoute("/")}
                                animate={{
                                    scale: 1
                                }}
                                initial={{
                                    scale: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.85, 0, 0.15, 1]
                                }}
                                whileHover={{scale: 1.1, cursor: "pointer"}}
                                className={`bg-white h-[3rem] w-[3rem] md:h-[4rem] md:w-[8rem] overflow-hidden rounded-full`}>
                                <MouseMagnetic>
                                    <div
                                        className={`h-[3rem] h-[3rem] md:h-[4rem] md:w-[8rem] pointer-events-none  gap-[0.5rem] flex justify-center items-center`}>
                                        <FaChevronLeft/>
                                        <p className={`cursor-default lg:block hidden`}>Back</p>
                                    </div>
                                </MouseMagnetic>
                            </motion.div>
                        </MouseMagnetic>

                        {/*the privacy policy heading*/}
                        <h1 className={`text-white oswaldBold lg:text-[4rem] md:text-[3rem] text-[2rem] uppercase`}>
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
                        <MouseMagnetic>
                            <motion.div
                                animate={{scale: 1}}
                                initial={{scale: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 0.15,
                                    ease: [0.85, 0, 0.15, 1]
                                }}
                                whileHover={{scale: 1.1, cursor: "pointer"}}
                                onClick={() => pushRoute("/contactUs")}
                                className={`text-white border-[1px] border-white h-[3rem] w-[3rem] md:h-[4rem] md:w-[8rem] rounded-full`}>
                                <MouseMagnetic>
                                    <div
                                        className={`h-[3rem] w-[3rem] md:h-[4rem] md:w-[8rem] pointer-events-none gap-[0.5rem] flex justify-center items-center`}>
                                        <span className={`md:block hidden`}>
                                            Contact Us
                                        </span>
                                        <MdEdit size={20} className={`md:hidden block`}/>
                                    </div>
                                </MouseMagnetic>
                            </motion.div>
                        </MouseMagnetic>
                    </nav>


                    {/*red banner*/}
                    <motion.div
                        animate={{scaleY: 1}}
                        initial={{scaleY: 0}}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease: [0.85, 0, 0.15, 1]
                        }}
                        style={{
                            background: ApplicationLinearGradient.current.appRedGradient,
                            marginInline: "auto",
                            marginTop: "2rem",
                            padding: "1.5rem",
                            transformOrigin: "top center"
                        }}
                        className={`lg:w-[70vw] w-[90%] flex justify-center items-center text-white rounded-2xl text-[1.25rem]`}>
                        The Privacy Policy will help you better understand how we collect, use and share you personal
                        information.
                    </motion.div>


                    {/*actual privacy Policy*/}
                    <div style={{marginInline: "auto"}} className={`w-[90%] lg:w-[70vw]`}>

                        {/*date of privacy policy*/}
                        <motion.h1
                            style={{marginTop: "2rem"}}
                            className={`text-white text-[1.25rem] flex gap-[1rem] items-center`}>
                            <motion.div
                                animate={{scale: 1}}
                                initial={{scale: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 0.3,
                                    ease: [0.85, 0, 0.15, 1]
                                }}
                                style={{
                                    background: ApplicationLinearGradient.current.appThanosGradient,
                                    padding: "0.5rem",
                                    paddingInline: "1rem"
                                }} className={`rounded-xl`}>
                                Effective Date
                            </motion.div>

                            <motion.span className={`inline-block`} animate={{opacity: 1}} initial={{opacity: 0}}
                                         transition={{duration: 1, delay: 0.3}}>
                                24th of April, 2025
                            </motion.span>
                        </motion.h1>

                        {/*small privacy policy description*/}
                        <motion.h1
                            animate={{opacity: 1}} initial={{opacity: 0}}
                            transition={{duration: 1, delay: 0.35}} style={{marginTop: "1rem"}}
                            className={`text-white text-[1.25rem] text-justify`}>
                            Welcome to <span className={`font-bold`}> Sweat If </span> We value your privacy and are
                            committed to protecting your personal
                            information. This Privacy Policy outlines how we collect, use, store, and protect the data
                            you
                            provide while using our workout, fitness, and diet application, which includes AI-powered
                            features to personalize and enhance your experience.
                        </motion.h1>

                        <div style={{marginTop: "2rem"}}>
                            <PaddedBackgroundText
                                text={"1. Information We Collect"}
                                background={ApplicationLinearGradient.current.appThanosGradient}
                                delay={0.4}
                            />

                            <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                <motion.span animate={{opacity: 1}} initial={{opacity: 0}}
                                             transition={{duration: 1, delay: 0.3}}>
                                    We may collection the following types of information:
                                </motion.span>

                                <div className={`gap-[0.5rem] md:!ml-[4rem] !mt-[1rem] !ml-[1.5rem]`}>
                                    <PaddedBackgroundText
                                        text={"Personal Information"}
                                        background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                        wantRightMargin={true}
                                        fixedWidth={true}
                                        delay={0.9}
                                    />
                                    <motion.span
                                        animate={{opacity: 1}} initial={{opacity: 0}}
                                        transition={{duration: 1, delay: 0.8}}
                                    >
                                        Name, email address, age, gender, weight, height, fitness goals, and dietary
                                        preferences.
                                    </motion.span>

                                </div>

                                <div className={`gap-[0.5rem] md:!ml-[4rem] !mt-[1rem] !ml-[1.5rem]`}>
                                    <PaddedBackgroundText
                                        text={"Health & Fitness Data"}
                                        background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                        wantRightMargin={true}
                                        fixedWidth={true}
                                        delay={0.3}
                                    />
                                    <motion.span
                                        animate={{opacity: 1}} initial={{opacity: 0}}
                                        transition={{duration: 1, delay: 0.2}}
                                    >
                                        Workout history, activity levels, food logs, water intake, sleep patterns, and
                                        progress
                                        metrics.
                                    </motion.span>
                                </div>

                                <div className={`gap-[0.5rem] md:!ml-[4rem] !mt-[1rem] !ml-[1.5rem]`}>
                                    <PaddedBackgroundText
                                        text={"Device Information"}
                                        background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                        wantRightMargin={true}
                                        fixedWidth={true}
                                        delay={0.1}
                                    />
                                    <motion.span
                                        animate={{opacity: 1}} initial={{opacity: 0}}
                                        transition={{duration: 1, delay: 0.76}}
                                    >
                                        Device type, operating system, app version, and usage data.
                                    </motion.span>
                                </div>

                                <div className={`gap-[0.5rem] md:!ml-[4rem] !mt-[1rem] !ml-[1.5rem]`}>
                                    <PaddedBackgroundText
                                        text={"AI Driven Data Inputs"}
                                        background={ApplicationLinearGradient.current.appBlueGradientInverted}
                                        wantRightMargin={true}
                                        fixedWidth={true}
                                    />
                                    <motion.span
                                        animate={{opacity: 1}} initial={{opacity: 0}}
                                        transition={{duration: 1, delay: 0.1}}
                                    >
                                        User input related to preferences, goals, and performance that the AI uses to
                                        provide
                                        tailored recommendations.
                                    </motion.span>
                                </div>
                            </div>
                        </div>


                        {/*how we use information*/}
                        <div style={{marginTop: "3rem"}}>
                            <PaddedBackgroundText
                                text={"2. How We User Your Information"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>
                            <motion.div
                                animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: 0.3}}
                                style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                We use the information we collect to provide you with a personalized and effective
                                health
                                and fitness experience. This includes generating customized workout routines and diet
                                plans
                                based on your goals and preferences, tracking your progress over time, and offering
                                actionable insights through our AI-powered features. Additionally, we use your data to
                                enhance app performance, deliver motivational messages and reminders, and support your
                                overall health journey. Your information also helps us troubleshoot issues, respond to
                                inquiries, and continuously improve our services.
                            </motion.div>
                        </div>


                        {/*ai and personaqlization*/}
                        <div style={{marginTop: "3rem"}}>
                            <PaddedBackgroundText
                                text={"3. AI And Personalisation"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>

                            <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                Our app uses AI algorithms to deliver smart recommendations tailored to your fitness
                                level,
                                goals, and habits. The AI learns from your data to improve over time and enhance your
                                user
                                experience. This data is never sold or shared with third-party advertisers.
                            </div>
                        </div>


                        {/*data sharing and third parties*/}
                        <div style={{marginTop: "3rem"}}>
                            <PaddedBackgroundText
                                text={"4. Data Sharing And Third Parties"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>

                            <h1 style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                We do not sell your personal data. We may share data with:
                            </h1>
                            <div style={{marginLeft: "4rem"}}>
                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText text={"Cloud providers for secure storage."}
                                                          background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>

                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText
                                        text={"Analytics services to improve app performance (anonymized data only)."}
                                        background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>

                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText
                                        text={"Healthcare integrations (only if you explicitly authorize)."}
                                        background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>
                            </div>
                        </div>


                        {/*data security*/}
                        <div style={{marginTop: "3rem"}} className={`text-white text-[1.25rem]`}>
                            <PaddedBackgroundText
                                text={"5. Data Security"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>
                            <div style={{marginTop: "1rem"}}>
                                We implement strong security measures including encryption, secure storage, and limited
                                access
                                to protect your information.
                            </div>

                        </div>

                        {/*Your RIghts*/}
                        <div style={{marginTop: "3rem"}}>
                            <PaddedBackgroundText
                                text={"6. Your Rights"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>

                            <h1 style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                You have the right to:
                            </h1>
                            <div style={{marginLeft: "4rem"}}>
                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText text={"Access or update your personal data."}
                                                          background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>

                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText
                                        text={"Delete your account and associated data."}
                                        background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>

                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText
                                        text={"Withdraw consent for data processing."}
                                        background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>

                                <div style={{marginTop: "1rem"}} className={`text-white text-[1.25rem]`}>
                                    <PaddedBackgroundText
                                        text={"Contact us for any privacy-related concerns."}
                                        background={ApplicationLinearGradient.current.appRedGradient}/>
                                </div>
                            </div>
                        </div>


                        {/*Changes To Privacy Policy*/}
                        <div style={{marginTop: "3rem"}} className={`text-white text-[1.25rem]`}>
                            <PaddedBackgroundText
                                text={"7. Changes To Privacy Policy"}
                                background={ApplicationLinearGradient.current.appThanosGradient}/>
                            <div style={{marginTop: "1rem"}}>
                                We may update this Privacy Policy periodically. We will notify you of significant
                                changes
                                through the app or via email.
                            </div>

                        </div>


                    </div>

                    <div style={{marginInline: "auto", marginTop: "5rem"}}
                         className={`w-[70vw] flex justify-center items-center`}>
                        <PaddedBackgroundText text={"Thank You Cutie ❤️"}
                                              background={ApplicationLinearGradient.current.appRedPinkGradient}/>
                    </div>
                </motion.div>
            </main>
        </React.Fragment>
    )
}


type PaddedBackgroundTextProps = {
    text: string;
    background: string;
    wantRightMargin?: boolean;
    fixedWidth?: boolean;
    delay?: number;
};
const PaddedBackgroundText = ({
                                  text,
                                  background,
                                  wantRightMargin = false,
                                  fixedWidth = false,
                                  delay = 0.5
                              }: PaddedBackgroundTextProps): React.JSX.Element => {
    return (
        <motion.div
            animate={{scale: 1}}
            initial={{scale: 0}}
            transition={{duration: 1, delay: delay, ease: [0.85, 0, 0.15, 1]}}
            style={{
                width: fixedWidth ? "15rem" : "auto",
                padding: "0.5rem",
                paddingInline: "1rem",
                background: background,
                marginRight: wantRightMargin ? "1rem" : "0"
            }}
            className={`text-white inline-block text-[1.25rem] rounded-xl`}>
            {text}
        </motion.div>
    )
}