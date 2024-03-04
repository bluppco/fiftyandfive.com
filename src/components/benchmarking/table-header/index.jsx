// IMPORTS TABLE COMPONENTS
import {

    TableHead,
    TableHeader,
    TableRow,

} from "@/components/ui/table"

const Tableheader = () => {

    return(
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead className="text-center">Current Size (Kb)</TableHead>
                <TableHead className="text-center">Current Size (Mb)</TableHead>
                <TableHead className="text-center">Blupp Size (Kb)</TableHead>
                <TableHead className="text-center">Blupp Size (Mb)</TableHead>
                <TableHead className="text-center">Change (Mb)</TableHead>
                <TableHead className="text-center">Change %</TableHead>
                <TableHead className="text-center">Less %</TableHead>
            </TableRow>
        </TableHeader>
    )

}

export default Tableheader
