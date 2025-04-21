import React from "react";
import {BiDumbbell} from "react-icons/bi";
import {ApplicationLinearGradient} from "@/app/modules/ApplicationHelper";
import {motion} from "framer-motion";
import {PageStateStore} from "@/app/modules/PageStateStore";

export default function Navbar(): React.JSX.Element {

    const navbarOptions: Array<{ name: string, link: string }> = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Features', link: '/features'},
        {name: 'Working', link: '/working'},
    ];

    return (
        <motion.nav
            animate={{
                y: 0,
                filter: "blur(0px)"
            }}

            initial={{
                y: -200,
                filter: "blur(100px)"
            }}

            transition={{
                duration: 1,
                ease: [0.85, 0, 0.15, 1]
            }}
            style={{
                paddingBlock: "1.5rem"
            }} className={`w-screen flex justify-center items-center`}>
            <section className={`w-[85%] bg-transparent flex text-white justify-between`}>

                {/*Applicaiton Name here*/}
                <div className={`flex gap-[0.25rem] items-center`}>
                    <BiDumbbell size={35}/>
                    <h1 className={`text-[1.75rem] oswaldBold uppercase`}>Sweat It</h1>
                </div>


                {/*Application link here*/}
                <ul className={`flex gap-[0.25rem]`}>
                    {navbarOptions.map((item: { name: string, link: string }, index: number) => {
                        return <NavbarLink name={item.name} link={item.link} key={index}/>
                    })}
                </ul>


                {/*contact us button*/}
                <div style={{ padding: "0.5rem", background: ApplicationLinearGradient.current.appBlueGradient}} className={`font-semibold rounded-full w-[100px] flex justify-center items-center hover:cursor-pointer`}>
                    Contact
                </div>
            </section>
        </motion.nav>
    )
}

interface NavbarLinkInterface {
    name: string;
    link: string;
}

export function NavbarLink(item: NavbarLinkInterface): React.JSX.Element {

    const ref = React.useRef<HTMLLIElement>(null);
    const [isHovered, setHover] = React.useState<boolean>(false);

    const {selectedPageLink} = PageStateStore();

    return (
        <li onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} ref={ref}
            style={{padding: "0.5rem"}}
            className={`w-[100px] font-semibold hover:cursor-pointer flex justify-center items-center relative rounded-full`}>
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]`}>
                {item.name}
            </span>

            <motion.div
                style={{
                    background: selectedPageLink === item.link ? ApplicationLinearGradient.current.appRedGradient : ApplicationLinearGradient.current.appBlueGradient,
                    height: ref.current?.getBoundingClientRect().height,
                    width: isHovered ? ref.current?.getBoundingClientRect().width : selectedPageLink === item.link ? ref.current?.getBoundingClientRect().width : 0,
                    scaleY: isHovered ? 1 : selectedPageLink === item.link ? 1 : 0.25,
                    transformOrigin: "center"
                }} className={`absolute left-0 top-0  rounded-full transition-all duration-500 ease-in-out`}>

            </motion.div>

        </li>
    )
}