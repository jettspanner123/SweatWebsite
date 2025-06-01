import React from "react";
import {motion} from "framer-motion";


interface PrimaryButtonWithIconProps {
    text: string;
    icon: React.JSX.Element;
    background: string;
    onTapGesture: () => void;
}

const PrimaryButtonWithIcon = ({text, icon, background, onTapGesture}: PrimaryButtonWithIconProps): React.JSX.Element => {
    return (
        <motion.div>
            <motion.button
                onClick={onTapGesture}
                style={{
                    paddingBlock: "0.75rem",
                    background: background
                }}
                whileHover={{
                    cursor: "pointer",
                    y: -5
                }}
                className={`w-[200px] [@media(max-width:790px)]:w-[150px] flex gap-[0.5rem] justify-center items-center h-[55px] rounded-[17px] text-white/70 group hover:text-white transition-colors text-[1rem] [@media(max-width:790px)]:text-[0.75rem] font-semibold`}>
                {text}

                <div style={{padding: "0.5rem"}}
                     className={`bg-black/25 rounded-full flex justify-center items-center`}>
                    {icon}
                </div>
            </motion.button>
        </motion.div>
    )
}
export default PrimaryButtonWithIcon;