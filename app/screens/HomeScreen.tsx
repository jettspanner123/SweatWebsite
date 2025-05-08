import React from "react";
import {ApplicationLinearGradient, CurrentSelectedScreenType} from "@/app/modules/ApplicationHelper";
import {AnimatePresence, motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import PrimaryButtonWithIcon from "@/app/components/PrimaryButton";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import IphoneImage from "@/app/assets/iphone.png";


// Icon Import
import {FaApple} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {MotionValue} from "motion";


// IMages import
import WorkoutImage from "@/app/assets/TabBarDumbbell.svg";
import HomeImage from "@/app/assets/hom.svg";
import DietImage from "@/app/assets/Food.png";
import ProfileImage from "@/app/assets/User.png";
import CoachImage from "@/app/assets/Training.png";
import AppHomeScreenImage from "@/app/assets/app_home.jpeg";
import AppWorkoutScreenImage from "@/app/assets/workout_screen.png";
import AppDietScreenImage from "@/app/assets/diet_screen.png";
import AppProfileScreenImage from "@/app/assets/diet_screen.png";


interface HomeScreenProps {
    currentSelectedScreen: CurrentSelectedScreenType;
    setCurrentSelectedScreen: (something: CurrentSelectedScreenType) => void;
}

export default function HomeScreen({
                                       currentSelectedScreen,
                                       setCurrentSelectedScreen
                                   }: HomeScreenProps): React.JSX.Element {

    const numberOfBoxesForOverflow: Array<number> = Array.from({length: 50}, (_, i: number): number => i + 1);

    const {scrollYProgress} = useScroll();

    const slidingThingOnScrollX: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["rotate(-25deg) translate(0, -300vh)", "rotate(-25deg) translate(-100rem, -300vh)"])

    function getRandomImage(index: number) {
        if (index % 2) return WorkoutImage;
        if (index % 3) return HomeImage;
        if (index % 4) return DietImage;
        return ProfileImage;
    }

    const description: string = "Your all-in-one fitness companion. Track workouts, follow personalized diet plans, and achieve your health goals — all in one app.";

    const firstSectionRef: React.RefObject<HTMLElement | null> = React.useRef(null);

    const {scrollYProgress: firstSectionScrollProgress} = useScroll({
        target: firstSectionRef,
        offset: ["end end", "end start"]
    })

    const iphoneYTransformation = useTransform(firstSectionScrollProgress, [0, 1], ["translate(0, 0)", "translate(0, 100%)"]);

    return (
        <React.Fragment>
            <main
                className={`w-screen relative overflow-x-hidden`}>

                <section
                    ref={firstSectionRef}
                    style={{
                        background: ApplicationLinearGradient.current.appBackground
                    }}
                    className={`h-screen w-screen relative`}>


                    {/*backgorund cards*/}
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
                                return (
                                    <motion.div key={index}
                                                className={`h-full opacity-50 bg-[#21212180] flex justify-center items-center w-[35rem] rounded-xl border-[0.5px] border-white/10 `}>
                                        <div style={{height: "5rem", width: "5rem"}}
                                             className={`border-[1px] border-white/30 rounded-full flex justify-center items-center`}>
                                            <Image style={{height: "2rem", width: "2.5rem", opacity: 0.5}}
                                                   src={getRandomImage(index)} alt={""}/>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>


                    {/*twin workout and diet icons*/}
                    <div
                        className={`absolute w-[70%] flex justify-between items-center top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200]`}>


                        {/*workout icon*/}
                        <MouseMagnetic>
                            <motion.div data-scroll data-scroll-speed={"0.3"} style={{padding: "3rem"}}>
                                <motion.div animate={{scale: 1, rotate: 0}} initial={{scale: 0, rotate: -90}}
                                            transition={{duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.5}}
                                            style={{background: ApplicationLinearGradient.current.appRedGradient}}
                                            className={`h-[6rem] aspect-square rounded-full flex justify-center items-center`}>
                                    <Image src={WorkoutImage} alt={""} className={`scale-75`}/>
                                </motion.div>
                            </motion.div>
                        </MouseMagnetic>


                        {/*diet icon*/}
                        <MouseMagnetic>
                            <motion.div data-scroll data-scroll-speed={"0.05"} style={{padding: "3rem"}}>
                                <motion.div animate={{scale: 1, rotate: 0}} initial={{scale: 0, rotate: -90}}
                                            transition={{duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.75}}
                                            style={{background: ApplicationLinearGradient.current.appGreenGradient}}
                                            className={`h-[6rem] aspect-square rounded-full flex justify-center items-center`}>
                                    <Image src={DietImage} alt={""} className={`scale-75`}/>
                                </motion.div>
                            </motion.div>
                        </MouseMagnetic>

                    </div>

                    {/*hero section with a overlay div*/}
                    <div
                        style={{paddingTop: "10rem"}}
                        className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-start`}>
                        <motion.div className={`flex flex-col items-center`}>

                            {/*tab before heading */}
                            <motion.div data-scroll data-scroll-speed={0.15}>
                                <motion.div animate={{y: 0}} initial={{y: -500}}
                                            transition={{duration: 1, ease: [0.87, 0, 0.13, 1]}}
                                            style={{paddingInline: "1.5rem", paddingBlock: "0.5rem"}}
                                            className={`border-[1px] border-white/20 rounded-full text-white/80`}>
                                    Explore Your Potential
                                </motion.div>
                            </motion.div>


                            {/*fisrst heading*/}
                            <motion.div data-scroll data-scroll-speed={"0.15"}>
                                <motion.h1
                                    animate={{y: 0, filter: "blur(0)"}} initial={{y: -500, filter: "blur(10px)"}}
                                    transition={{duration: 1.25, ease: [0.87, 0, 0.13, 1]}}
                                    style={{lineHeight: "6.5rem"}}
                                    className={`oswaldBold text-white text-[6rem]`}>
                                    Be your own
                                </motion.h1>
                            </motion.div>

                            {/*second heading*/}
                            <motion.div data-scroll data-scroll-speed={"0.1"}>
                                <motion.h1
                                    animate={{scale: 1, filter: "blur(0)"}} initial={{scale: 0, filter: "blur(10px)"}}
                                    transition={{duration: 1.25, ease: [0.87, 0, 0.13, 1], delay: 0.25}}
                                    className={`oswaldBold text-white text-[6rem] leading-none`}>workout guide.
                                </motion.h1>
                            </motion.div>


                            {/*description*/}
                            <motion.div data-scroll data-scroll-speed={"0.05"}>
                                <p style={{marginTop: "3rem", lineHeight: "1"}}
                                   className={`flex flex-wrap max-w-[50%] justify-center text-justify translate-x-1/2 relative`}>
                                    {description.split(" ").map((word: string, index: number): React.JSX.Element => {
                                        return <motion.span animate={{scale: 1, filter: "blur(0)"}}
                                                            initial={{scale: 0, filter: "blur(10px)"}}
                                                            transition={{duration: 0.5, delay: 0.05 * index}}
                                                            style={{marginRight: "8px"}}
                                                            className={`text-white/50 font-semibold text-[1.25rem] inline-block overflow-hidden`}
                                                            key={index}>{word}</motion.span>
                                    })}
                                </p>
                            </motion.div>

                            {/*twin button*/}
                            <motion.div animate={{y: 0}} initial={{y: 1000}}
                                        transition={{duration: 1.75, ease: [0.87, 0, 0.13, 1]}}
                                        style={{marginTop: "3rem"}} className={`flex justify-center gap-[1rem]`}>
                                <PrimaryButtonWithIcon
                                    text={"Download App"} icon={<FaApple/>}
                                    background={ApplicationLinearGradient.current.appThanosGradient}
                                    onTapGesture={() => {
                                    }}/>
                                <PrimaryButtonWithIcon
                                    text={"Contact Team"} icon={<MdEmail/>}
                                    background={ApplicationLinearGradient.current.appRedGradient}
                                    onTapGesture={() => {
                                        setCurrentSelectedScreen(CurrentSelectedScreenType.CONTACT_US_SCREEN)
                                    }}/>
                            </motion.div>
                        </motion.div>


                    </div>


                    {/*iphone image section with div overlay*/}
                    <motion.div
                        animate={{y: 0}}
                        initial={{y: 1200}}
                        transition={{duration: 1.25, ease: [0.87, 0, 0.13, 1], delay: 0.5}}
                        className={`absolute top-0 left-0 pointer-events-none w-screen h-screen flex justify-center items-center`}>
                        <motion.div style={{transform: iphoneYTransformation}}
                                    className={`h-full w-full relative translate-y-[55%]`}>
                            <Image src={IphoneImage} style={{scale: 0.7}} alt={""}
                                   className={`object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3300]`}/>

                            <Image src={AppHomeScreenImage} alt={""} style={{scale: 0.39}}
                                   className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10rem]`}/>
                        </motion.div>
                    </motion.div>
                </section>


                <FeatureScreen/>

            </main>
        </React.Fragment>
    )
}


const FeatureScreen = (): React.JSX.Element => {

    // First Section Shit
    const firstSectionRef: React.RefObject<HTMLElement | null> = React.useRef(null);
    const {scrollYProgress: firstSectionScrollProgress} = useScroll({
        target: firstSectionRef,
        offset: ["start 80%", "start 25%"]
    })
    const firstSectionIphoneTranslation = useTransform(firstSectionScrollProgress, [0, 1], [800, 0]);
    const firstSectionHeadingIconTranslation = useTransform(firstSectionScrollProgress, [0, 1], [-370, 0]);
    const firstSectionText: string = "We’ve built a feature-packed workout and diet application for iOS to help users achieve their fitness goals with ease. It offers personalized workout plans, diet tracking, progress monitoring, and daily reminders. Designed for all fitness levels, our app makes staying healthy simple, engaging, and effective.";


    // Second Section Shit
    const secondSectionRef: React.RefObject<HTMLElement | null> = React.useRef(null);
    const {scrollYProgress: secondSectionScrollProgress} = useScroll({
        target: secondSectionRef,
        offset: ["start end", "start 25%"]
    })
    const secondSectionHeadingIconTranslation = useTransform(secondSectionScrollProgress, [0, 1], [370, 0]);


    const secondSectionTexts: Array<string> = [
        "The home page of the app serves as a personalized dashboard, offering users a quick and clear overview of their daily health metrics and tasks. It features intuitive widgets that display key information such as calories ingested, calories burned, and water intake, helping users stay on track with their fitness goals. Additionally, an \"Agenda Today\" widget outlines scheduled workouts, meals, or other wellness activities, keeping users organized and motivated throughout the day. The clean and user-friendly layout ensures that all essential data is accessible at a glance, making it easy to monitor progress and maintain healthy habits.",
    ];

    const secondSectionImages: Array<StaticImageData> = [AppHomeScreenImage, AppWorkoutScreenImage, AppDietScreenImage, AppProfileScreenImage];
    const [currentSelectedScreen, setCurrentSelectedScreen] = React.useState<number>(0);


    return (
        <section className={`w-screen h-[300vh] relative bg-black overflow-y-auto`}>


            {/*first seciont*/}
            <section ref={firstSectionRef}
                     className={`w-screen h-screen flex justify-center items-center`}>


                <div style={{paddingInline: "3rem", paddingBlock: "3.5rem"}} className={`flex-2 h-full `}>


                    {/*first section heading*/}
                    <div className={`flex gap-[1rem] items-center relative w-[20rem]`}>
                        <motion.div style={{
                            background: ApplicationLinearGradient.current.appRedGradient,
                            x: firstSectionHeadingIconTranslation
                        }} className={`h-[3.5rem] aspect-square flex justify-center items-center rounded-full`}>
                            <Image src={HomeImage} alt={""} className={`scale-75`}/>
                        </motion.div>
                        <motion.h1 style={{
                            transformOrigin: "left center",
                            x: firstSectionHeadingIconTranslation
                        }} className={`oswaldBold uppercase text-[3rem] relative text-white `}>
                            Quick Look
                        </motion.h1>
                    </div>


                    {/*first section text*/}
                    <motion.h1
                        style={{marginTop: "1rem"}}
                        className={`text-[1.25rem] text-white text-justify`}>
                        {firstSectionText}
                    </motion.h1>
                </div>


                <motion.div data-scroll data-scroll-speed={"0.5"}>
                    <motion.div style={{x: firstSectionIphoneTranslation}}
                                className={`flex flex-1 h-full justify-center items-center`}>
                        <IphoneWithImage withImage={AppHomeScreenImage}/>
                    </motion.div>
                </motion.div>
            </section>


            {/*second section*/}
            <section ref={secondSectionRef} className={`w-screen h-screen flex justify-center items-center`}>

                {/*second section iphone*/}
                <motion.div data-scroll data-scroll-speed={"0.5"}>
                    <motion.div className={`flex flex-1 h-full justify-center items-center`}>
                        <IphoneWithImage withImage={AppHomeScreenImage}/>
                    </motion.div>
                </motion.div>


                <div style={{paddingInline: "3rem", paddingBlock: "3.5rem"}} className={`flex-2 h-full flex justify-between flex-col `}>


                    {/*second section heading*/}
                    <div className={`flex gap-[1rem]  items-center relative justify-end`}>
                        <motion.div style={{
                            background: ApplicationLinearGradient.current.appRedGradient,
                            x: secondSectionHeadingIconTranslation
                        }} className={`h-[3.5rem] aspect-square flex justify-center items-center rounded-full`}>
                            <Image src={HomeImage} alt={""} className={`scale-75`}/>
                        </motion.div>
                        <motion.h1 style={{
                            transformOrigin: "left center",
                            x: secondSectionHeadingIconTranslation
                        }} className={`oswaldBold uppercase text-[3rem] relative text-white `}>
                            Application Features
                        </motion.h1>
                    </div>


                    {/*second section text*/}
                    <motion.h1
                        style={{marginTop: "1rem"}}
                        className={`text-[1.25rem] text-white text-justify`}>
                        <AnimatePresence>
                            <motion.div>
                                {secondSectionTexts[currentSelectedScreen]}
                            </motion.div>
                        </AnimatePresence>
                    </motion.h1>
                </div>
            </section>
        </section>
    )
}

interface ImageWithImageProps {
    withImage: StaticImageData;
}

const IphoneWithImage = ({withImage}: ImageWithImageProps) => {
    return (
        <motion.div style={{height: 1000, width: 550}} className={`relative`}>
            <Image src={IphoneImage} alt={""} style={{scale: 1.3}}
                   className={`absolute left-1/2 z-[1000] top-1/2 -translate-x-1/2 -translate-y-1/2`}/>
            <Image src={withImage} alt={""} style={{scale: 0.8, transform: "translate(0, -7rem)"}}
                   className={`rounded-[80px]`}/>
        </motion.div>
    )
}