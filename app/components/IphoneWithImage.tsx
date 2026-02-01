import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import IphoneImage from "@/app/assets/iphone.png";
import React from "react";

export default function IphoneWithImage({ withImage }: { withImage: StaticImageData }){
    return (
        <motion.div style={{ height: 1000, width: 550 }} className={`relative`}>
            <Image
                src={IphoneImage}
                alt={""}
                style={{ scale: 1.3 }}
                className={`absolute left-1/2 z-[1000] top-1/2 -translate-x-1/2 -translate-y-1/2`}
            />
            <Image
                src={withImage}
                alt={""}
                style={{ scale: 0.8, transform: "translate(0, -7rem)" }}
                className={`rounded-[80px]`}
            />
        </motion.div>
    );
};
