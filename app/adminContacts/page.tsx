"use client";
import React from "react";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import {motion} from "framer-motion";
import {FaChevronLeft} from "react-icons/fa";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";

export default function Page(): React.JSX.Element {

    const [pageChangeState, setPageChangeState] = React.useState<boolean>(false);
    const [isValidAdmin, setIsValidAdmin] = React.useState<boolean>(false);

    function pushRoute(text: string): void {
        setPageChangeState(true);
        setTimeout(() => {
            window.location.assign(text);
        }, 1000);
    }

    return (
        <React.Fragment>
            <main
                style={{ background: ApplicationLinearGradient.current.appBackground, paddingBlock: "5rem"}}
                className={`min-h-screen w-screen`}
            >

                <motion.div
                    animate={{y: pageChangeState ? "100vh" : "0"}}
                    transition={{duration: 0.75, ease: [0.85, 0, 0.15, 1]}}
                    style={{ marginInline: "auto" }}
                    className={`w-[70vw]`}
                >
                    <nav style={{paddingBlock: "1.25rem", marginInline: "auto"}}
                         className={`w-[70vw] flex justify-between items-center`}>


                        {/*bac button*/}
                        <MouseMagnetic>
                            <motion.div
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
                                onClick={() => pushRoute("/")}
                                whileHover={{scale: 1.1, cursor: "pointer"}}
                                className={`bg-white h-[4rem] w-[8rem] overflow-hidden rounded-full`}>
                                <MouseMagnetic>
                                    <div
                                        className={`h-[4rem] pointer-events-none w-[8rem] gap-[0.5rem] flex justify-center items-center`}>
                                        <FaChevronLeft/>
                                        <p className={`cursor-default`}>Home</p>
                                    </div>
                                </MouseMagnetic>
                            </motion.div>
                        </MouseMagnetic>

                        {/*the privacy policy heading*/}
                        <h1 className={`text-white oswaldBold text-[4rem] uppercase`}>
                            {
                                "Contact-Us-List".split("").map((item: string, index: number): React.JSX.Element => {
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
                                animate={{
                                    scale: 1
                                }}
                                initial={{
                                    scale: 0
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.85, 0, 0.15, 1],
                                    delay: 0.15
                                }}
                                whileHover={{scale: 1.1, cursor: "pointer"}}
                                onClick={() => pushRoute("/privacyPolicy")}
                                className={`text-white border-[1px] border-white h-[4rem] w-[9rem] rounded-full`}>
                                <MouseMagnetic>
                                    <div
                                        className={`h-[4rem] pointer-events-none w-[9rem] gap-[0.5rem] flex justify-center items-center`}>
                                        Reset Password
                                    </div>
                                </MouseMagnetic>
                            </motion.div>
                        </MouseMagnetic>
                    </nav>


                    {/*the form*/}
                    <div className={`w-full`}>

                    </div>
                </motion.div>
            </main>
        </React.Fragment>
    )
}