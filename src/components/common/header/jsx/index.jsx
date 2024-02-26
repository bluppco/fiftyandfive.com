// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS ASTRO ATOMS
import LinkAtom from "@/atoms/link/jsx/index.jsx"

// IMPORTS JSX COMPONENTS
import HeaderBanner from "@/components/common/header-banner/jsx/index.jsx"

// HEADER COLLECTION
import { getCollection } from "astro:content"

let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

import { Link, animateScroll as scroll } from "react-scroll"
import { motion, useScroll, useAnimation, useMotionValueEvent, AnimatePresence } from "framer-motion"
import React from "react"

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
                <motion.header className="border-b border-zinc-200 bg-white w-full fixed left-0 z-30"
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                >
                    <HeaderBanner ENVIRONMENT={ ENVIRONMENT } />
                    <Container>
                        <nav className="flex justify-between items-center py-6">
                            <div onMouseEnter={ () => updateNavigationDisplay( null ) }>
                                <LinkAtom href="/" aria_label="FIFTY & FIVE.">
                                    <p className="text-[#101010] font-helvetica_neue font-thin text-5xl">FIFTY & FIVE.</p>
                                </LinkAtom>
                            </div>
                            <ul className="flex items-center gap-8">
                                {

                                    header_data.map( ( value ) => {

                                        return(
                                            <LinkAtom href={ value.data.link } aria_label={ value.data.title }>
                                                <li className="uppercase text-faf_black hover:text-faf_gray">{ value.data.title }</li>
                                            </LinkAtom>
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
        </>
    )

}

export default Header
