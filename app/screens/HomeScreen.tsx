import React from "react";
import {
    ApplicationLinearGradient,
    CurrentSelectedScreenType,
} from "@/app/modules/ApplicationHelper";
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import PrimaryButtonWithIcon from "@/app/components/PrimaryButton";
import MouseMagnetic from "@/app/components/MouseMagnetic";
import IphoneImage from "@/app/assets/iphone.png";

// Icon Import
import { FaApple, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MotionValue } from "motion";

// IMages import
import WorkoutImage from "@/app/assets/TabBarDumbbell.svg";
import HomeImage from "@/app/assets/hom.svg";
import DietImage from "@/app/assets/Food.png";
import ProfileImage from "@/app/assets/User.png";
import AppHomeScreenImage from "@/app/assets/app_home.jpeg";
import FeatureScreen from "@/app/screens/FeaturesScreen";

interface HomeScreenProps {
    currentSelectedScreen: CurrentSelectedScreenType;
    setCurrentSelectedScreen: (something: CurrentSelectedScreenType) => void;
}

export default function HomeScreen({
    currentSelectedScreen,
    setCurrentSelectedScreen,
}: HomeScreenProps): React.JSX.Element {
    const [pageChangeState, setPageChangeState] =
        React.useState<boolean>(false);

    const numberOfBoxesForOverflow: Array<number> = Array.from(
        { length: 50 },
        (_, i: number): number => i + 1,
    );

    const { scrollYProgress } = useScroll();

    const slidingThingOnScrollX: MotionValue<string> = useTransform(
        scrollYProgress,
        [0, 1],
        [
            "rotate(-25deg) translate(0, -300vh)",
            "rotate(-25deg) translate(-100rem, -300vh)",
        ],
    );

    function getRandomImage(index: number) {
        if (index % 2) return WorkoutImage;
        if (index % 3) return HomeImage;
        if (index % 4) return DietImage;
        return ProfileImage;
    }

    const description: string =
        "Your all-in-one fitness companion. Track workouts, follow personalized diet plans, and achieve your health goals — all in one app.";

    const firstSectionRef: React.RefObject<HTMLElement | null> =
        React.useRef(null);

    const { scrollYProgress: firstSectionScrollProgress } = useScroll({
        target: firstSectionRef,
        offset: ["end end", "end start"],
    });

    const iphoneYTransformation: MotionValue<string> = useTransform(
        firstSectionScrollProgress,
        [0, 1],
        ["translate(0, 0)", "translate(0, 100%)"],
    );

    function pushPage(text: string): void {
        setPageChangeState(true);
        setTimeout(() => {
            window.location.assign(text);
        }, 1000);
    }

    return (
        <React.Fragment>
            <motion.main className={`w-screen relative overflow-x-hidden`}>
                <section
                    ref={firstSectionRef}
                    style={{
                        background:
                            ApplicationLinearGradient.current.appBackground,
                    }}
                    className={`h-screen w-screen relative`}
                >
                    <motion.div
                        animate={{ opacity: pageChangeState ? 0 : 1 }}
                        transition={{
                            duration: 0.75,
                        }}
                    >
                        {/*backgorund cards*/}
                        <motion.div
                            animate={{
                                x: 0,
                                y: 0,
                            }}
                            initial={{
                                x: 2500,
                                y: -1200,
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0.85, 0, 0.15, 1],
                            }}
                        >
                            <motion.div
                                style={{
                                    transform: slidingThingOnScrollX,
                                }}
                                className={`flex w-[1000vw] h-[35rem] gap-[2rem]`}
                            >
                                {numberOfBoxesForOverflow.map(
                                    (item: number, index: number) => {
                                        return (
                                            <motion.div
                                                key={index}
                                                className={`h-full opacity-50 bg-[#21212180] flex justify-center items-center w-[35rem] rounded-xl border-[0.5px] border-white/10 `}
                                            >
                                                <div
                                                    style={{
                                                        height: "5rem",
                                                        width: "5rem",
                                                    }}
                                                    className={`border-[1px] border-white/30 rounded-full flex justify-center items-center`}
                                                >
                                                    <Image
                                                        style={{
                                                            height: "2rem",
                                                            width: "2.5rem",
                                                            opacity: 0.5,
                                                        }}
                                                        src={getRandomImage(
                                                            index,
                                                        )}
                                                        alt={""}
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    },
                                )}
                            </motion.div>
                        </motion.div>

                        {/*twin workout and diet icons*/}
                        <div
                            className={`absolute [@media(max-width:1400px)]:hidden w-[70%] flex justify-between items-center top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200]`}
                        >
                            {/*workout icon*/}
                            <MouseMagnetic>
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={"0.3"}
                                    style={{ padding: "3rem" }}
                                >
                                    <motion.div
                                        animate={{ scale: 1, rotate: 0 }}
                                        initial={{ scale: 0, rotate: -90 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.87, 0, 0.13, 1],
                                            delay: 0.5,
                                        }}
                                        style={{
                                            background:
                                                ApplicationLinearGradient
                                                    .current.appRedGradient,
                                        }}
                                        className={`h-[6rem] aspect-square rounded-full flex justify-center items-center`}
                                    >
                                        <MouseMagnetic>
                                            <div
                                                className={`h-[6rem] aspect-square flex justify-center items-center`}
                                            >
                                                <Image
                                                    src={WorkoutImage}
                                                    alt={""}
                                                    className={`scale-75`}
                                                />
                                            </div>
                                        </MouseMagnetic>
                                    </motion.div>
                                </motion.div>
                            </MouseMagnetic>

                            {/*diet icon*/}
                            <MouseMagnetic>
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={"0.05"}
                                    style={{ padding: "3rem" }}
                                >
                                    <motion.div
                                        animate={{ scale: 1, rotate: 0 }}
                                        initial={{ scale: 0, rotate: -90 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.87, 0, 0.13, 1],
                                            delay: 0.75,
                                        }}
                                        style={{
                                            background:
                                                ApplicationLinearGradient
                                                    .current.appGreenGradient,
                                        }}
                                        className={`h-[6rem] aspect-square rounded-full flex justify-center items-center`}
                                    >
                                        <MouseMagnetic>
                                            <div
                                                className={`h-[6rem] aspect-square flex justify-center items-center`}
                                            >
                                                <Image
                                                    src={DietImage}
                                                    alt={""}
                                                    className={`scale-75`}
                                                />
                                            </div>
                                        </MouseMagnetic>
                                    </motion.div>
                                </motion.div>
                            </MouseMagnetic>
                        </div>

                        {/*hero section with a overlay div*/}
                        <div
                            style={{ paddingTop: "10rem" }}
                            className={`absolute top-0 left-0 w-screen h-screen flex justify-center items-start`}
                        >
                            <motion.div
                                className={`flex flex-col items-center`}
                            >
                                {/*tab before heading */}
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={0.15}
                                >
                                    <motion.div
                                        animate={{ y: 0 }}
                                        initial={{ y: -500 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.87, 0, 0.13, 1],
                                        }}
                                        style={{
                                            paddingInline: "1.5rem",
                                            paddingBlock: "0.5rem",
                                        }}
                                        className={`border-[1px] border-white/20 rounded-full text-white/80`}
                                    >
                                        Explore Your Potential
                                    </motion.div>
                                </motion.div>

                                {/*fisrst heading*/}
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={"0.15"}
                                >
                                    <motion.h1
                                        animate={{ y: 0, filter: "blur(0)" }}
                                        initial={{
                                            y: -500,
                                            filter: "blur(10px)",
                                        }}
                                        transition={{
                                            duration: 1.25,
                                            ease: [0.87, 0, 0.13, 1],
                                        }}
                                        style={{ lineHeight: "6.5rem" }}
                                        className={`oswaldBold text-white text-[6rem] [@media(max-width:500px)]:text-[3rem] [@media(max-width:790px)]:text-[4rem]`}
                                    >
                                        Be your own
                                    </motion.h1>
                                </motion.div>

                                {/*second heading*/}
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={"0.1"}
                                >
                                    <motion.h1
                                        animate={{
                                            scale: 1,
                                            filter: "blur(0)",
                                        }}
                                        initial={{
                                            scale: 0,
                                            filter: "blur(10px)",
                                        }}
                                        transition={{
                                            duration: 1.25,
                                            ease: [0.87, 0, 0.13, 1],
                                            delay: 0.25,
                                        }}
                                        className={`oswaldBold text-white text-[6rem] [@media(max-width:790px)]:text-[4rem] leading-none`}
                                    >
                                        workout guide.
                                    </motion.h1>
                                </motion.div>

                                {/*description*/}
                                <motion.div
                                    data-scroll
                                    data-scroll-speed={"0.05"}
                                >
                                    <p
                                        style={{
                                            marginTop: "3rem",
                                            lineHeight: "1",
                                        }}
                                        className={`flex flex-wrap w-[50%] !mx-auto [@media(max-width:790px)]:w-[70%] justify-center text-justify relative`}
                                    >
                                        {description
                                            .split(" ")
                                            .map(
                                                (
                                                    word: string,
                                                    index: number,
                                                ): React.JSX.Element => {
                                                    return (
                                                        <motion.span
                                                            animate={{
                                                                scale: 1,
                                                                filter: "blur(0)",
                                                            }}
                                                            initial={{
                                                                scale: 0,
                                                                filter: "blur(10px)",
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    0.05 *
                                                                    index,
                                                            }}
                                                            style={{
                                                                marginRight:
                                                                    "8px",
                                                            }}
                                                            className={`text-white/50 font-semibold text-[1rem] md:text-[1.25rem] inline-block overflow-hidden`}
                                                            key={index}
                                                        >
                                                            {word}
                                                        </motion.span>
                                                    );
                                                },
                                            )}
                                    </p>
                                </motion.div>

                                {/*twin button*/}
                                <motion.div
                                    animate={{ y: 0 }}
                                    initial={{ y: 1000 }}
                                    transition={{
                                        duration: 1.75,
                                        ease: [0.87, 0, 0.13, 1],
                                    }}
                                    style={{ marginTop: "3rem" }}
                                    className={`flex justify-center gap-[1rem]`}
                                >
                                    <PrimaryButtonWithIcon
                                        text={"Download App"}
                                        icon={<FaApple />}
                                        background={
                                            ApplicationLinearGradient.current
                                                .appThanosGradient
                                        }
                                        onTapGesture={() => {}}
                                    />
                                    <PrimaryButtonWithIcon
                                        text={"Contact Team"}
                                        icon={<MdEmail />}
                                        background={
                                            ApplicationLinearGradient.current
                                                .appRedGradient
                                        }
                                        onTapGesture={() => {
                                            pushPage("/contactUs");
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/*iphone image section with div overlay*/}
                        <motion.div
                            animate={{ y: 0 }}
                            initial={{ y: 1200 }}
                            transition={{
                                duration: 1.25,
                                ease: [0.87, 0, 0.13, 1],
                                delay: 0.5,
                            }}
                            className={`absolute top-0 left-0 pointer-events-none w-screen h-screen flex justify-center items-center`}
                        >
                            <motion.div
                                style={{ transform: iphoneYTransformation }}
                                className={`h-full w-full relative translate-y-[55%]`}
                            >
                                <Image
                                    src={IphoneImage}
                                    style={{ scale: 0.7 }}
                                    alt={""}
                                    className={`object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3300]`}
                                />

                                <Image
                                    src={AppHomeScreenImage}
                                    alt={""}
                                    style={{ scale: 0.39 }}
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50px]`}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                <FeatureScreen />
            </motion.main>
        </React.Fragment>
    );
}




