"use client";
import React from "react";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import {AnimatePresence, motion} from "framer-motion";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {addDoc, collection} from "@firebase/firestore";
import {FirebaseDatabase} from "../database/FirebaseConfig";
import {IoIosCheckmarkCircle} from "react-icons/io";
import { FaFilePrescription } from "react-icons/fa6";


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


    const [userName, setUserName] = React.useState<string>("");
    const [userEmail, setUserEmail] = React.useState<string>("");
    const [userDescription, setUserDescription] = React.useState<string>("");

    const [showError, setShowError] = React.useState<boolean>(false);
    const [errorDescription, setErrorDescription] = React.useState<string>("");

    const [loading, setLoading] = React.useState<boolean>(false);
    const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

    React.useEffect((): void => {
        if (showSuccess) {
            setTimeout(() => {
                setShowSuccess(false);
            }, 2500);
        }
    }, [showSuccess]);

    function pushRoute(path: string): void {

        setPageChangeState(true);

        setTimeout(() => {
            window.location.assign(path);
        }, 1000);
    }

    async function sendQuestion(): Promise<void> {
        if (!userName || !userEmail || !userDescription) {
            setErrorDescription("Please enter each and every text fields!");
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
                setErrorDescription("");
            }, 2500);
            return;
        }

        if (!(userName.split(" ").length >= 2)) {
            setErrorDescription("Please enter full name only!");
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
                setErrorDescription("");
            }, 2500);
            return;
        }

        if (!(userEmail.includes("@") && userEmail.includes("."))) {
            setErrorDescription("Please enter valid email address!");
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
                setErrorDescription("");
            }, 2500);
            return;
        }

        try {
            setLoading(true);
            await addDoc(collection(FirebaseDatabase, "contacts"), {
                fullName: userName,
                email: userEmail,
                description: userDescription,
            })
            setShowSuccess(true);
            setUserName("");
            setUserEmail("");
            setUserDescription("");
        } catch {
            setErrorDescription("Some Error Occured! Please try again later!");
            setShowError(true);


            setTimeout(() => {
                setShowError(false);
                setErrorDescription("");
            }, 2500);
        } finally {
            setLoading(false);
        }
    }

    return (
        <React.Fragment>
            <main style={{background: ApplicationLinearGradient.current.appBackground, paddingBlock: "5rem"}}
                  className={`min-h-screen w-screen relative !pt-[1rem] md:!py-[5rem]`}>
                <motion.div
                    animate={{y: pageChangeState ? "100vh" : "0"}}
                    transition={{duration: 0.75, ease: [0.85, 0, 0.15, 1]}}
                    style={{marginInline: "auto"}} className={`w-[90vw] md:w-[70vw]`}>

                    <nav style={{paddingBlock: "1.25rem", marginInline: "auto"}}
                         className={`lg:w-[70vw] w-full flex justify-between items-center`}>


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
                        <h1 className={`text-white oswaldBold lg:text-[4rem] md:text-[3rem] text-[1.75rem] uppercase`}>
                            {
                                "Contact-Us".split("").map((item: string, index: number): React.JSX.Element => {
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
                                onClick={() => pushRoute("/privacyPolicy")}
                                className={`text-white border-[1px] border-white h-[3rem] w-[3rem] md:h-[4rem] md:w-[8rem] rounded-full`}>
                                <MouseMagnetic>
                                    <div
                                        className={`h-[3rem] w-[3rem] md:h-[4rem] md:w-[8rem] pointer-events-none gap-[0.5rem] flex justify-center items-center`}>
                                        <span className={`md:block hidden`}>
                                            Privacy Policy
                                        </span>
                                        <FaFilePrescription size={20} className={`md:hidden block`}/>
                                    </div>
                                </MouseMagnetic>
                            </motion.div>
                        </MouseMagnetic>
                    </nav>


                    <motion.div layout style={{marginTop: "2rem"}} className={`w-full`}>

                        {/*user name text field*/}
                        <div className={`flex gap-[1rem] w-full`}>
                            <div className={`flex-1`}>
                                <motion.h1
                                    animate={{opacity: 1}}
                                    initial={{opacity: 0}}
                                    transition={{
                                        duration: 1,
                                    }}
                                    style={{paddingInline: "0.5rem"}} className={`text-[1rem] md:text-[1.25rem] text-white`}>
                                    Full Name
                                </motion.h1>
                                <motion.input
                                    animate={{scaleX: 1}}
                                    initial={{scaleX: 0}}
                                    transition={{duration: 1, delay: 0.25, ease: [0.85, 0, 0.15, 1]}}
                                    onChange={(e) => setUserName((e.target.value))}
                                    value={userName}
                                    type={"text"}
                                    style={{padding: "0.75rem", transformOrigin: "left"}}
                                    className={`border-[0.5px] !mt-[0.25rem] md:!mt-[1rem] border-white rounded-2xl w-full text-white text-[1rem] md:text-[1.25rem]`}
                                    placeholder={"Name"}
                                />
                            </div>

                            {/*email text field*/}
                            <div className={`flex-1`}>
                                <div className={`flex-1`}>
                                    <motion.h1
                                        animate={{opacity: 1}}
                                        initial={{opacity: 0}}
                                        transition={{
                                            duration: 1,
                                            delay: 0.2
                                        }}
                                        style={{paddingInline: "0.5rem"}} className={`text-[1rem] md:text-[1.25rem] text-white`}>
                                        Email Address
                                    </motion.h1>
                                    <motion.input
                                        animate={{scaleX: 1}}
                                        initial={{scaleX: 0}}
                                        transition={{duration: 1, ease: [0.85, 0, 0.15, 1]}}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        value={userEmail}
                                        type={"email"}
                                        style={{padding: "0.75rem", marginTop: "1rem", transformOrigin: "left"}}
                                        className={`border-[0.5px] !mt-[0.25rem] md:!mt-[1rem] border-white rounded-2xl w-full text-white text-[1rem] md:text-[1.25rem]`}
                                        placeholder={"Address"}
                                    />
                                </div>
                            </div>
                        </div>

                        <motion.textarea
                            animate={{scaleY: 1}}
                            initial={{scaleY: 0}}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0.85, 0, 0.15, 1],
                            }}
                            style={{marginTop: "1rem", padding: "0.75rem"}}
                            placeholder={"Tell Us What You Think."}
                            className={`w-full border-[0.5px] text-[1rem] md:text-[1.25rem] min-h-[15rem] border-white rounded-xl text-white`}
                            onChange={(e) => setUserDescription(e.target.value)} value={userDescription}>

                        </motion.textarea>


                        <motion.button
                            onClick={async (e) => {
                                e.preventDefault();
                                await sendQuestion();
                            }}
                            animate={{y: 0}}
                            initial={{y: 500}}
                            transition={{duration: 1, ease: [0.85, 0, 0.15, 1], delay: 0.5}}
                            style={{
                                padding: "0.5rem",
                                marginTop: "1rem",
                                background: ApplicationLinearGradient.current.appThanosGradient
                            }}
                            className={`w-full h-[3rem] flex justify-center items-center gap-[0.5rem] text-white text-[0.75rem] md:text-[1rem] rounded-xl border-none outline-none cursor-pointer`}>
                            {loading ? "Loading" : "Submit"}

                            {!loading && (
                                <div style={{padding: "0.25rem"}} className={`bg-[#21212175] rounded-full`}>
                                    <FaChevronRight className={`scale-75`}/>
                                </div>
                            )}
                        </motion.button>
                    </motion.div>

                    <AnimatePresence>
                        {showError && (
                            <motion.div
                                animate={{scaleY: 1, filter: "blur(0)"}}
                                initial={{scaleY: 0, filter: "blur(10px)"}}
                                exit={{scaleY: 0, filter: "blur(10px)"}}
                                transition={{}}
                                style={{
                                    marginBlock: "1rem",
                                    background: ApplicationLinearGradient.current.appRedGradient,
                                    padding: "0.75rem"
                                }}
                                className={`flex justify-center items-center text-white rounded-xl`}>
                                {errorDescription}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showSuccess && (
                            <motion.div
                                animate={{scaleY: 1, filter: "blur(0)"}}
                                initial={{scaleY: 0, filter: "blur(10px)"}}
                                exit={{scaleY: 0, filter: "blur(10px)"}}
                                transition={{}}
                                style={{
                                    marginBlock: "1rem",
                                    background: ApplicationLinearGradient.current.appGreenGradient,
                                    padding: "0.75rem"
                                }}
                                className={`flex justify-center gap-[0.5rem] items-center text-white rounded-xl`}>
                                Successfully Send Message
                                <IoIosCheckmarkCircle/>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </main>
        </React.Fragment>
    )
}
