'use client'
import { Tabs, Authenticator, Table, TableBody,TableCell,TableHead,TableRow, View, TableFoot, Flex } from "@aws-amplify/ui-react";


export default function Home() {

    const generalContent = ()=>{

    }

    const scoringContent = ()=>{
        
    }

    const phasesContent = () =>{

    }

    const prizesContent = () =>{
        return (
            <Authenticator>
                <Table
                    highlightOnHover={true}
                    variation="bordered"
                    padding="10x">
                    <TableHead>
                        <TableRow>
                            <TableCell>Prize</TableCell>
                            <TableCell>Percentage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Winner</TableCell>
                            <TableCell>23%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Runner Up</TableCell>
                            <TableCell>17%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3rd place</TableCell>
                            <TableCell>12%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4th place</TableCell>
                            <TableCell>7%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5th place</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 1 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 1 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 2 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 2 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 3 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 3 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 4 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 4 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 5 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 5 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 6 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 6 Runnerup</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Orange Cap (IPL)</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Purple Cap (IPL)</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Emerging Player (IPL)</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>MVP (IPL)</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell>100%</TableCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </Authenticator>
        );

    }

    return(
        <Flex direction="column" justifyContent="center" gap="20px" width="auto" padding="30px">
            <Tabs justifyContent="flex-start"
                  defaultValue='General'
                    items={[
                        {label:'General',value:'General',content:generalContent()},
                        {label:'Scoring',value:'Scoring',content:scoringContent()},
                        {label:'Phases',value:'Phases',content:phasesContent()},
                        {label:'Prizes',value:'Prizes',content:prizesContent()}
                    ]}
            />
        </Flex>
        
    );

}