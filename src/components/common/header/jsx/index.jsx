// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import HeaderBanner from "@/components/common/header-banner/jsx/index.jsx"
import HeaderMobile from "@/components/common/header/mobile/index.jsx"

// IMPORTS ATOMS
import LinkAtom from "@/atoms/link/jsx/index.jsx"

// HEADER COLLECTION
import { getCollection } from "astro:content"

let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

import { Link, animateScroll as scroll } from "react-scroll"
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

const Header = ( props ) => {

    // GET PROPS
    const { ENVIRONMENT } = props

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-150%", transition: { duration: 1 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })
    return (
        <>
            <header className="hidden md:block bg-white" id="header">
                <motion.header className="border-b border-zinc-100 bg-white w-full fixed left-0 z-30"
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                >
                    <HeaderBanner ENVIRONMENT={ ENVIRONMENT } />
                    <Container>
                        <nav className="flex justify-between items-center py-6">
                            <div onMouseEnter={ () => updateNavigationDisplay( null ) }>
                                <LinkAtom href="/" aria_label="FIFTY & FIVE.">
                                    <p className="text-[#101010] font-jost font-thin text-5xl tracking-tighter">FIFTY & FIVE.</p>
                                </LinkAtom>
                            </div>
                            <ul className="flex items-center gap-8">
                                {

                                    header_data.map( ( value, index ) => {

                                        return(
                                            <li className="uppercase text-faf_black hover:text-faf_gray font-helvetica_neue_light tracking-wide" key={ index }>
                                                <LinkAtom href={ value.data.link } aria_label={ value.data.title }>
                                                    { value.data.title }
                                                </LinkAtom>
                                            </li>
                                        )

                                    })

                                }
                            </ul>
                        </nav>
                    </Container>
                </motion.header>
                <Link to="header" smooth={ true }>
                    <div className="bg-white border border-imperial rounded-full fixed bottom-5 right-5 z-30 w-10 aspect-square flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-imperial">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </Link>
            </header>
            <HeaderMobile header_data={ header_data } />
        </>
    )

}

export default Header
