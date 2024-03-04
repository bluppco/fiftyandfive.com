// IMPORTS TABLE COMPONENTS
import {

    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table"

// IMPORTS COMPONENTS
import Tableheader from "@/components/benchmarking/table-header/index.jsx"


const BenchmarkingJSX = ( props ) => {

    const formatNumber = ( number ) => {

        if( number < 100)
            return (number).toFixed(2) + " MB"
        else if( number/1000 < 1000)
            return (number/1000).toFixed(2) + " GB"
        else if( number/1000 < 10000 )
            return (number/1000000).toFixed(2) + " TB"
        else if( number/1000 < 100000 )
            return (number/1000000).toFixed(2) + " TB"
        else if( number/1000 < 1000000 )
            return (number/1000000).toFixed(2) + " TB"
        else if( number/1000 < 10000000 )
            return (number/1000000000).toFixed(2) + " PB"
        else
            return number

    }
    const formatPrice = ( hits, unit, discount ) => {

        if( hits < discount )
            return "$" + 0
        else {

            let hits_bandwidth = (hits) - discount
            return "$" + (hits_bandwidth * unit / 1000).toLocaleString()

        }

    }
    // GET PROPS
    const {

        about_page_benchmarking,
        contact_page_benchmarking,
        home_page_benchmarking,
        spotlight_page_benchmarking

    } = props
    return (
        <div className="flex flex-col gap-10">
            {/* HOME PAGE BENCHMARKING TABLE */}
            <h1 className="font-semibold">Benchmarking Home Page</h1>
            <Table>
                <TableCaption>Type Split</TableCaption>
                <Tableheader />
                <TableBody>
                    {

                        home_page_benchmarking.data.map( ( value, index ) => {

                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }  key={ "type-split-" + index }>
                                    <TableCell className="font-semibold">{ value.type }</TableCell>
                                    <TableCell className="text-center">{ value.current_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.current_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ value.blupp_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.blupp_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ((value.current_size - value.blupp_size)/1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.current_size*100).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.blupp_size*100).toFixed(2) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
            {/* ABOUT PAGE BENCHMARKING TABLE */}
            <h1 className="font-semibold">Benchmarking About Page</h1>
            <Table>
                <TableCaption>Type Split</TableCaption>
                <Tableheader />
                <TableBody>
                    {

                        about_page_benchmarking.data.map( ( value, index ) => {

                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }  key={ "type-split-" + index }>
                                    <TableCell className="font-semibold">{ value.type }</TableCell>
                                    <TableCell className="text-center">{ value.current_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.current_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ value.blupp_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.blupp_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ((value.current_size - value.blupp_size)/1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.current_size*100).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.blupp_size*100).toFixed(2) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
            {/* SPOTLIGHT PAGE BENCHMARKING TABLE */}
            <h1 className="font-semibold">Benchmarking Spotlight Page</h1>
            <Table>
                <TableCaption>Type Split</TableCaption>
                <Tableheader />
                <TableBody>
                    {

                        spotlight_page_benchmarking.data.map( ( value, index ) => {

                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }  key={ "type-split-" + index }>
                                    <TableCell className="font-semibold">{ value.type }</TableCell>
                                    <TableCell className="text-center">{ value.current_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.current_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ value.blupp_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.blupp_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ((value.current_size - value.blupp_size)/1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.current_size*100).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.blupp_size*100).toFixed(2) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
            {/* CONTACT PAGE BENCHMARKING TABLE */}
            <h1 className="font-semibold">Benchmarking Contact Page</h1>
            <Table>
                <TableCaption>Type Split</TableCaption>
                <Tableheader />
                <TableBody>
                    {

                        contact_page_benchmarking.data.map( ( value, index ) => {

                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" }  key={ "type-split-" + index }>
                                    <TableCell className="font-semibold">{ value.type }</TableCell>
                                    <TableCell className="text-center">{ value.current_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.current_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ value.blupp_size }</TableCell>
                                    <TableCell className="text-center">{ ( value.blupp_size /1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ((value.current_size - value.blupp_size)/1000).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.current_size*100).toFixed(2) }</TableCell>
                                    <TableCell className="text-center">{ ( (value.current_size - value.blupp_size )/value.blupp_size*100).toFixed(2) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
            {/* BANDWIDTH SAVED TABLE */}
            <h1 className="font-semibold">Bandwidth Saved</h1>
            <Table>
                <TableCaption>Bandwidth Saved</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Hits</TableHead>
                        <TableHead className="text-right">Current Bandwidth</TableHead>
                        <TableHead className="text-right">Blupp Bandwidth</TableHead>
                        <TableHead className="text-right">Saved Bandwidth</TableHead>
                        <TableHead className="text-right">Cloudfront Cost ($0.1/GB)</TableHead>
                        <TableHead className="text-right">Vercel Cost ($0.4/GB)</TableHead>
                        <TableHead className="text-right">Prismic Cost ($0.2/GB)</TableHead>
                        <TableHead className="text-right font-semibold">Blupp Cost ($0.05/GB)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        home_page_benchmarking.bandwidth.map( ( value, index ) => {

                            return (
                                <TableRow className={ value.type === "Total" ? "font-semibold" : "" } key={ "bandwidth-saved-" + index }>
                                    <TableCell className="font-semibold">{ value.hits_text }</TableCell>
                                    <TableCell className="text-right">{ formatNumber (value.current_size * value.hits) }</TableCell>
                                    <TableCell className="text-right">{ formatNumber( value.blupp_size * value.hits ) }</TableCell>
                                    <TableCell className="text-right">{ formatNumber( (value.current_size * value.hits) -  (value.blupp_size * value.hits) ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .1, 1000000 ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .4, 1000000 ) }</TableCell>
                                    <TableCell className="text-right">{ formatPrice( value.current_size * value.hits , .2, 500000 ) }</TableCell>
                                    <TableCell className="text-right font-semibold">{ formatPrice( value.blupp_size * value.hits , .05, 1000000 ) }</TableCell>
                                </TableRow>
                            )

                        })
                    }
                </TableBody>
            </Table>
        </div>
    )

}

export default BenchmarkingJSX
