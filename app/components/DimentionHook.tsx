import React from "react";

export default function useDimention(): { width: number, height: number } {
    const [dimensions, setDimensions] = React.useState<{ width: number, height: number }>({width: 0, height: 0});
    React.useEffect(() => {
        setDimensions({width: window.innerWidth, height: window.innerHeight});

        window.addEventListener("resize", (): void => {
            setDimensions({width: window.innerWidth, height: window.innerHeight});
        })

        return () => {
            window.removeEventListener("resize", (): void => {
            })
        }
    }, []);
    return dimensions;
}