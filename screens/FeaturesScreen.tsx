import React from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import IphoneWithImage from "@/components/IphoneWithImage";
import { ApplicationLinearGradient } from "@/constants/application";

import WorkoutImage from "@/assets/TabBarDumbbell.svg";
import HomeImage from "@/assets/hom.svg";
import DietImage from "@/assets/Food.png";
import AppHomeScreenImage from "@/assets/app_home.jpeg";
import AppWorkoutScreenImage from "@/assets/workout_screen.png";
import AppDietScreenImage from "@/assets/diet_screen.png";
import AppProfileScreenImage from "@/assets/diet_screen.png";
import SohamPortrait from "@/assets/soham.png";
import OmPortrait from "@/assets/tomar.png";
import UddeshyaPortrait from "@/assets/uddeshya_Red.png";
import RonnyPortrait from "@/assets/ronny_pink.png";
import SharanMaamPortrat from "@/assets/sharan_maam.png";
import { IoPersonSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function FeatureScreen(): React.JSX.Element {
    const springOptions = {
        stiffness: 150,
        mass: 0.5,
        damping: 20,
        ease: [0, 0.55, 0.45, 1],
    };

    const [currentSelectedScreen, setCurrentSelectedScreen] =
        React.useState<number>(0);

    // First Section Shit
    const firstSectionRef: React.RefObject<HTMLElement | null> =
        React.useRef(null);
    const { scrollYProgress: firstSectionScrollProgress } = useScroll({
        target: firstSectionRef,
        offset: ["start 80%", "start 25%"],
    });
    const rawFirstSectionIphoneTranslation = useTransform(
        firstSectionScrollProgress,
        [0, 1],
        [800, 0],
    );
    const firstSectionIphoneTranslation = useSpring(
        rawFirstSectionIphoneTranslation,
        springOptions,
    );
    const rawFirstSectionHeadingIconTranslation = useTransform(
        firstSectionScrollProgress,
        [0, 1],
        [-370, 0],
    );
    const firstSectionHeadingIconTranslation = useSpring(
        rawFirstSectionHeadingIconTranslation,
        springOptions,
    );
    const firstSectionText: string =
        "We’ve built a feature-packed workout and diet application for iOS to help users achieve their fitness goals with ease. It offers personalized workout plans, diet tracking, progress monitoring, and daily reminders. Designed for all fitness levels, our app makes staying healthy simple, engaging, and effective.";
    const firstSectionTags: Array<string> = [
        "#Healthy",
        "#EatGood",
        "#Workout",
        "#PersonalisedWorkout",
        "#CleanFood",
        "#BalancedDiet",
        "#AiCoach",
    ];

    // Second Section Shit
    const secondSectionRef: React.RefObject<HTMLElement | null> =
        React.useRef(null);
    const { scrollYProgress: secondSectionScrollProgress } = useScroll({
        target: secondSectionRef,
        offset: ["start end", "start 25%"],
    });
    const rawSecondSectionHeadingIconTranslation = useTransform(
        secondSectionScrollProgress,
        [0, 1],
        [370, 0],
    );
    const secondSectionHeadingIconTranslation = useSpring(
        rawSecondSectionHeadingIconTranslation,
        springOptions,
    );
    const secondSectionHeadingImage: Array<StaticImageData> = [
        HomeImage,
        WorkoutImage,
        DietImage,
    ];
    const secondSectionTexts: Array<string> = [
        "The home page is a personalized dashboard showing daily health stats like calories, water intake, and workouts. Simple widgets and a clear layout help users stay on track and organized at a glance.",
        "The Diet page simplifies nutrition tracking with a smart food scanner that instantly shows calories and macros. Users can log meals, view past entries, and get personalized recommendations to stay on track with their goals.",
        "The Diet page simplifies nutrition tracking with a smart food scanner that instantly shows calories and macros. Users can log meals, view past entries, and get personalized recommendations to stay on track with their goals.",
    ];
    const secondSectionBulletHeading: Array<string> = [
        "Home Screen",
        "Workout Screen",
        "Diet Screen",
    ];

    const secondSectionBulletPoints: Array<Array<string>> = [
        ["Informative Widgets", "Daily Summery", "Agendas"],
        [
            "Customised Workouts",
            "Challenges With Points",
            "Informative Exercise Of The Day Widgets",
        ],
        [
            "AI Food Scanner",
            "Food Recommendations According To Regions",
            "Calories & Macro Nutrient Tracker",
        ],
    ];

    const secondSectionImages: Array<StaticImageData> = [
        AppHomeScreenImage,
        AppWorkoutScreenImage,
        AppDietScreenImage,
        AppProfileScreenImage,
    ];

    // Third section shit
    const thirdSectionRef: React.RefObject<HTMLElement | null> =
        React.useRef(null);
    const { scrollYProgress: thirdSectionScrollProgress } = useScroll({
        target: thirdSectionRef,
        offset: ["start end", "end start"],
    });

    const thirdSectionScrollTranslation = useTransform(
        thirdSectionScrollProgress,
        [0, 1],
        ["0%", "-250%"],
    );
    const thirdSectionNegativeScrollTranslation = useTransform(
        thirdSectionScrollProgress,
        [0, 1],
        ["-500%", "-200%"],
    );
    const thirdSectionSlowScrollTranslation = useTransform(
        thirdSectionScrollProgress,
        [0, 1],
        ["0%", "-100%"],
    );
    const thirdSectionWholeScrollTranslation = useTransform(
        thirdSectionScrollProgress,
        [0, 1],
        [0, -300],
    );

    // Fourth Section
    const [isFourthSectionHovered, setFourthSectionHovered] =
        React.useState<boolean>(false);
    const [currentSelectedImage, setCurrentSelectedImage] =
        React.useState<number>(0);
    const fourthSectionRef: React.RefObject<HTMLElement | null> =
        React.useRef(null);
    const { scrollYProgress: fourthSectionScrollProgress } = useScroll({
        target: fourthSectionRef,
        offset: ["start end", "start 20%"],
    });
    const fourthSectionImages: Array<StaticImageData> = [
        SharanMaamPortrat,
        UddeshyaPortrait,
        RonnyPortrait,
        OmPortrait,
        SohamPortrait,
    ];

    const fourthSectionText: Array<string> = [
        "the mentor~Sharan Maam",
        "the developer~Uddeshya Singh",
        "the designer~Suvogyan Chakraborty",
        "the advisor~Om Tomar",
        "the stratergist~Soham Chakraborty",
    ];

    const [fourthSectionMousePosition, setFourthSectionMousePosition] =
        React.useState<{ x: number; y: number }>({
            x: 0,
            y: 0,
        });

    return (
        <section className={`w-screen relative bg-black overflow-y-auto`}>
            {/*first seciont*/}
            <section
                ref={firstSectionRef}
                className={`w-screen h-screen flex justify-center items-center`}
            >
                <div
                    style={{ paddingInline: "5rem", paddingBlock: "5rem" }}
                    className={`flex-2 h-full `}
                >
                    {/*first section heading*/}
                    <div
                        className={`flex gap-[1rem] items-center relative w-[20rem]`}
                    >
                        <motion.div
                            style={{
                                background:
                                ApplicationLinearGradient.current
                                    .appRedGradient,
                                x: firstSectionHeadingIconTranslation,
                            }}
                            className={`h-[3.5rem] aspect-square flex justify-center items-center rounded-full`}
                        >
                            <Image
                                src={HomeImage}
                                alt={""}
                                className={`scale-75`}
                            />
                        </motion.div>
                        <motion.h1
                            style={{
                                transformOrigin: "left center",
                                x: firstSectionHeadingIconTranslation,
                            }}
                            className={`oswaldBold uppercase text-[3rem] relative text-white `}
                        >
                            Quick Look
                        </motion.h1>
                    </div>

                    {/*first section text*/}
                    <motion.h1
                        style={{ marginTop: "1rem" }}
                        className={`text-[1rem] md:text-[1.25rem] text-white text-justify`}
                    >
                        {firstSectionText}
                    </motion.h1>

                    <div
                        style={{ marginTop: "3rem" }}
                        className={`flex flex-wrap gap-[0.5rem] w-[65%]`}
                    >
                        {firstSectionTags.map(
                            (
                                item: string,
                                index: number,
                            ): React.JSX.Element => {
                                const chipTranslation = useTransform(
                                    firstSectionScrollProgress,
                                    [0, 1],
                                    [100 * (index + 1), 0],
                                );
                                // useSpring accepts MotionValue; types may be strict
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const springChipTranslation = useSpring(
                                    chipTranslation as any,
                                    {
                                        stiffness: 150,
                                        mass: 0.5,
                                        damping: 20,
                                    },
                                );
                                const chipBlur = useTransform(
                                    firstSectionScrollProgress,
                                    [0, 0.8],
                                    ["blur(5px)", "blur(0px)"],
                                );
                                return (
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            marginInline: "1rem",
                                            cursor: "default",
                                            background:
                                            ApplicationLinearGradient
                                                .current.appThanosGradient,
                                        }}
                                        style={{
                                            background:
                                            ApplicationLinearGradient
                                                .current.appRedGradient,
                                            paddingBlock: "0.75rem",
                                            paddingInline: "1rem",
                                            borderRadius: "100px",
                                            y: springChipTranslation,
                                            filter: chipBlur,
                                        }}
                                        className={`text-[1rem] font-bold text-white`}
                                        key={index}
                                    >
                                        {item}
                                    </motion.div>
                                );
                            },
                        )}
                    </div>
                </div>

                <motion.div data-scroll data-scroll-speed={"0.5"}>
                    <motion.div
                        style={{
                            x: firstSectionIphoneTranslation,
                            paddingRight: "2rem",
                        }}
                        className={`flex flex-1 h-full justify-start items-center`}
                    >
                        <IphoneWithImage withImage={AppHomeScreenImage} />
                    </motion.div>
                </motion.div>
            </section>

            {/*second section*/}
            <section
                ref={secondSectionRef}
                className={`w-screen h-screen flex justify-center items-center`}
            >
                {/*second section iphone*/}
                <motion.div data-scroll data-scroll-speed={"0.5"}>
                    <motion.div
                        style={{ paddingLeft: "2rem" }}
                        className={`flex flex-1 h-full justify-end items-center`}
                    >
                        <AnimatePresence mode={"wait"}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(10px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(10px)",
                                }}
                                key={currentSelectedScreen}
                            >
                                <IphoneWithImage
                                    withImage={
                                        secondSectionImages[
                                            currentSelectedScreen
                                            ]
                                    }
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <div
                    style={{ paddingInline: "5rem", paddingBlock: "5rem" }}
                    className={`flex-2 h-full flex justify-between flex-col `}
                >
                    {/*second section heading*/}
                    <div>
                        <div
                            className={`flex gap-[1rem]  items-center relative justify-end`}
                        >
                            <AnimatePresence mode={"wait"}>
                                <motion.div
                                    key={currentSelectedScreen}
                                    animate={{
                                        rotate: 0,
                                        scale: 1,
                                        filter: "blur(0px)",
                                    }}
                                    initial={{
                                        rotate: -90,
                                        scale: 0,
                                        filter: "blur(10px)",
                                    }}
                                    exit={{
                                        rotate: -90,
                                        scale: 0,
                                        filter: "blur(10px)",
                                    }}
                                    style={{
                                        background:
                                            currentSelectedScreen === 0
                                                ? ApplicationLinearGradient
                                                    .current.appThanosGradient
                                                : currentSelectedScreen === 1
                                                    ? ApplicationLinearGradient
                                                        .current.appRedGradient
                                                    : currentSelectedScreen === 2
                                                        ? ApplicationLinearGradient
                                                            .current
                                                            .appGreenGradient
                                                        : ApplicationLinearGradient
                                                            .current
                                                            .appBlueGradientInverted,
                                        x: secondSectionHeadingIconTranslation,
                                    }}
                                    className={`h-[3.5rem] aspect-square flex justify-center items-center rounded-full`}
                                >
                                    <Image
                                        src={
                                            secondSectionHeadingImage[
                                                currentSelectedScreen
                                                ]
                                        }
                                        alt={""}
                                        className={`scale-75`}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <motion.h1
                                style={{
                                    transformOrigin: "left center",
                                    x: secondSectionHeadingIconTranslation,
                                }}
                                className={`oswaldBold uppercase text-[3rem] relative text-white `}
                            >
                                Application Features
                            </motion.h1>
                        </div>

                        {/*second section text*/}
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentSelectedScreen}
                                style={{ marginTop: "1rem" }}
                                className="text-[1rem] md:text-[1.25rem] text-white text-right flex"
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                    filter: "blur(10px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(10px)",
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {secondSectionTexts[currentSelectedScreen]}
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode={"wait"}>
                            <motion.h1
                                key={currentSelectedScreen}
                                animate={{ x: 0 }}
                                initial={{ x: 500 }}
                                exit={{ x: 500 }}
                                style={{ marginTop: "4rem" }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.85, 0, 0.15, 1],
                                }}
                                className={`text-right text-white oswaldBold text-[3rem] relative`}
                            >
                                {
                                    secondSectionBulletHeading[
                                        currentSelectedScreen
                                        ]
                                }
                            </motion.h1>
                        </AnimatePresence>

                        <div
                            className={`h-[0.25rem] w-full bg-white/50 rounded-full`}
                        />

                        <AnimatePresence mode={"wait"}>
                            {secondSectionBulletPoints[
                                currentSelectedScreen
                                ].map(
                                (
                                    item: string,
                                    index: number,
                                ): React.JSX.Element => {
                                    return (
                                        <motion.div
                                            key={`${currentSelectedScreen}-${index}`}
                                            animate={{
                                                scaleY: 1,
                                                y: 0,
                                                filter: "blur(0)",
                                            }}
                                            initial={{
                                                scaleY: 0,
                                                y: -56 * index,
                                                filter: "blur(10px)",
                                            }}
                                            exit={{
                                                scaleY: 0,
                                                y: -56 * index,
                                                filter: "blur(10px)",
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.85, 0, 0.15, 1],
                                            }}
                                            whileHover={{
                                                backgroundColor:
                                                    "rgba(255,255,255,0.5)",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                            className={`w-full bg-white/10 text-right text-white`}
                                        >
                                            <li
                                                style={{
                                                    marginTop: "0.25rem",
                                                    paddingBlock: "0.5rem",
                                                    paddingInline: "1rem",
                                                }}
                                                className={`text-[1.5rem] list-none`}
                                            >
                                                {item}
                                            </li>
                                        </motion.div>
                                    );
                                },
                            )}
                        </AnimatePresence>
                    </div>

                    {/*twin right and left button*/}
                    <div
                        style={{ marginBottom: "10rem" }}
                        className={`w-full h-[2rem] flex justify-end items-center`}
                    >
                        <div className={`flex gap-[1rem]`}>
                            {/*left button*/}
                            <AnimatePresence>
                                {currentSelectedScreen !== 0 && (
                                    <motion.div
                                        animate={{ scale: 1 }}
                                        initial={{ scale: 0 }}
                                        exit={{ scale: 0 }}
                                        transition={{
                                            ease: [0.85, 0, 0.15, 1],
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            cursor: "pointer",
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => {
                                            if (currentSelectedScreen > 0) {
                                                setCurrentSelectedScreen(
                                                    currentSelectedScreen - 1,
                                                );
                                            }
                                        }}
                                        className={`flex justify-center items-center h-[5rem] aspect-square border-[1px] border-white/20 rounded-full`}
                                    >
                                        <FaChevronLeft
                                            color={"rgba(255,255,255,0.5)"}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/*right button*/}
                            <motion.div
                                animate={{
                                    opacity:
                                        currentSelectedScreen ===
                                        secondSectionTexts.length
                                            ? 0.5
                                            : 1,
                                }}
                                transition={{ ease: [0.85, 0, 0.15, 1] }}
                                whileHover={{ scale: 1.1, cursor: "pointer" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    if (
                                        currentSelectedScreen <
                                        secondSectionTexts.length
                                    ) {
                                        setCurrentSelectedScreen(
                                            currentSelectedScreen + 1,
                                        );
                                    }
                                }}
                                className={`flex justify-center items-center h-[5rem] aspect-square border-[1px] border-white/20 rounded-full`}
                            >
                                {currentSelectedScreen <
                                secondSectionTexts.length ? (
                                    <FaChevronRight
                                        color={"rgba(255,255,255,0.5)"}
                                    />
                                ) : (
                                    <RxCross1 color={"rgba(255,255,255,0.5)"} />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/*third section */}
            <motion.section
                ref={thirdSectionRef}
                style={{ y: thirdSectionWholeScrollTranslation }}
                className={`h-screen w-screen flex overflow-hidden`}
            >
                <motion.div
                    style={{ y: thirdSectionScrollTranslation }}
                    className={`flex-1 flex flex-col items-center `}
                >
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                </motion.div>

                <motion.div
                    style={{ y: thirdSectionNegativeScrollTranslation }}
                    className={`h-full flex-1`}
                >
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                </motion.div>

                <motion.div
                    style={{ y: thirdSectionSlowScrollTranslation }}
                    className={`h-full flex-1`}
                >
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                    <IphoneWithImage withImage={AppHomeScreenImage} />
                </motion.div>
            </motion.section>

            {/*fourth section*/}
            <section
                ref={fourthSectionRef}
                onMouseOver={() => setFourthSectionHovered(true)}
                onMouseLeave={() => setFourthSectionHovered(false)}
                onMouseMove={(e) => {
                    setFourthSectionMousePosition({
                        x: e.clientX,
                        y: e.clientY,
                    });
                }}
                // style={{background: ApplicationLinearGradient.current.appBackgroundInverted}}
                className={`h-screen w-screen flex flex-col justify-center items-center relative`}
            >
                {/*mouse thing*/}
                <motion.div
                    animate={{
                        scale: isFourthSectionHovered ? 1 : 0,
                        top: fourthSectionMousePosition.y - 320 / 2,
                        left: fourthSectionMousePosition.x - 320 / 2,
                    }}
                    transition={{
                        scale: {
                            ease: [0.25, 1, 1, 1],
                        },
                        top: {
                            ease: [0, 0.55, 0.45, 1],
                            duration: 1,
                        },
                        left: {
                            ease: [0, 0.55, 0.45, 1],
                            duration: 1,
                        },
                    }}
                    style={{
                        background:
                        ApplicationLinearGradient.current.appThanosGradient,
                    }}
                    className={`fixed z-[100] pointer-events-none h-[20rem] aspect-square rounded-2xl overflow-hidden`}
                >
                    <motion.div
                        animate={{
                            transform: `translate(0, ${currentSelectedImage * -20}rem)`,
                        }}
                        style={{
                            height: `${fourthSectionImages.length * 100}%`,
                        }}
                        className={`w-full rounded-2xl`}
                    >
                        {fourthSectionImages.map(
                            (
                                item: StaticImageData,
                                index: number,
                            ): React.JSX.Element => {
                                function getBackgroundColor(
                                    index: number,
                                ): string {
                                    switch (index) {
                                        case 0:
                                            return ApplicationLinearGradient
                                                .current.appRedPinkGradient;
                                        case 1:
                                            return ApplicationLinearGradient
                                                .current
                                                .appBlueGradientInverted;
                                        case 2:
                                            return ApplicationLinearGradient
                                                .current.appGreenGradient;
                                        case 3:
                                            return ApplicationLinearGradient
                                                .current.appThanosGradient;
                                        default:
                                            return ApplicationLinearGradient
                                                .current
                                                .appBlueGradientInverted;
                                    }
                                }

                                return (
                                    <div
                                        style={{
                                            background:
                                                getBackgroundColor(index),
                                        }}
                                        className={`h-[20rem] aspect-square oswaldBold text-white text-[10rem] flex justify-center items-center`}
                                        key={index}
                                    >
                                            <Image
                                                src={item}
                                                alt={`${index}`}
                                            />
                                    </div>
                                );
                            },
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`w-full h-full flex flex-col justify-center items-center`}
                >
                    {fourthSectionText.map(
                        (item: string, index: number): React.JSX.Element => {
                            const headingScale = useTransform(
                                fourthSectionScrollProgress,
                                [0, 0.7],
                                [0.05 * (index + 1), 1],
                            );
                            const springHeadingScale = useSpring(
                                headingScale,
                                springOptions,
                            );

                            const headingTranslation = useTransform(
                                fourthSectionScrollProgress,
                                [0, 0.7],
                                [600 * (index + 1), 0],
                            );
                            const springHeadingTranslation = useSpring(
                                headingTranslation,
                                springOptions,
                            );

                            const role: string = item.split("~")[0];
                            const name: string = item.split("~")[1];
                            return (
                                <motion.div
                                    onMouseOver={() =>
                                        setCurrentSelectedImage(index)
                                    }
                                    whileHover={{
                                        background:
                                        ApplicationLinearGradient.current
                                            .appRedGradient,
                                        color: "white",
                                        cursor: "default",
                                    }}
                                    style={{
                                        paddingInline: "6rem",
                                        scale: springHeadingScale,
                                        y: springHeadingTranslation,
                                        background: index % 2 ? "transparent" : "rgba(255, 255, 255, 0.1)",
                                    }}
                                    className={`flex-1 w-full flex-col custom-md:flex-row custom-md:flex justify-between poppins-light items-center text-white`}
                                    key={index}
                                >
                                    <h1
                                        style={{
                                            lineHeight: 1,
                                            letterSpacing: "-5px",
                                        }}
                                        className={`oswaldBold text-[7rem] uppercase [@media(max-width:1150px)]:text-[7rem] [@media(max-width:950px)]:text-[5rem] [@media(max-width:950px)]:text-center`}
                                    >
                                        {role}
                                    </h1>

                                    <h1
                                        style={{
                                            lineHeight: 1,
                                            letterSpacing: "0px",
                                        }}
                                        className={`text-[2rem] !px-[1rem] !pt-[1rem] custom-md:!px-0 custom-md:!pt-0 [@media(max-width:950px)]:text-center`}
                                    >
                                        {name}
                                    </h1>
                                </motion.div>
                            );
                        },
                    )}
                </motion.div>
            </section>

            {/*fifth section*/}
            <section
                style={{
                    background:
                    ApplicationLinearGradient.current.appBackgroundInverted,
                }}
                className={`h-screen w-screen relative`}
            ></section>
        </section>
    );
};