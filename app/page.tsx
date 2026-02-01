"use client";
import React from "react";
import HomeScreen from "@/screens/HomeScreen";
import { CurrentSelectedScreenType } from "@/constants/application";

export default function Home(): React.JSX.Element {
    React.useEffect((): void => {
        (async (): Promise<void> => {
            let locomotiveScroll = (await import("locomotive-scroll")).default;
            const LocomotiveScroll = new locomotiveScroll();
        })();
    }, []);

    const [currentSelectedScreen, setCurrentSelectedScreen] =
        React.useState<CurrentSelectedScreenType>(
            CurrentSelectedScreenType.HOME_SCREEN,
        );

    return (
        <React.Fragment>
            {currentSelectedScreen == CurrentSelectedScreenType.HOME_SCREEN && (
                <HomeScreen
                    currentSelectedScreen={currentSelectedScreen}
                    setCurrentSelectedScreen={setCurrentSelectedScreen}
                />
            )}
        </React.Fragment>
    );
}
