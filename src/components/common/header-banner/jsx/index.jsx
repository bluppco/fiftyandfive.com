
// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

const HeaderBanner = ( props ) => {

    // GET PROPS
    const { ENVIRONMENT } = props

    return(
        <section>
            {

                ENVIRONMENT === "staging" &&
                <section className="bg-gradient-to-r from-violet-200 to-pink-200 h-12 md:h-10">
                    <Container>
                        <div className="flex items-center justify-center h-full">
                            <p className="text-xs md:text-sm text-center text-black">This is staging environment created by <span class="underline underline-offset-4 font-semibold"><a href="https://blupp.co" target="_blank">Blupp Company</a></span> with some initial <span class="underline underline-offset-4 font-semibold"><a href="/benchmarking">benchmarking</a></span>. You can check the codebase on <span class="underline underline-offset-4 font-semibold"><a href="https://github.com/bluppco/fiftyandfive.com" target="_blank">Github</a></span>.</p>
                        </div>
                    </Container>
                </section>

            }
        </section>
    )

}

export default HeaderBanner
