import React from "react";

export default function useDimension(): {
    width: number;
    height: number;
} {
    const [dimensions, setDimensions] = React.useState<{
        width: number;
        height: number;
    }>({ width: 0, height: 0 });

    React.useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = (): void => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimensions;
}
