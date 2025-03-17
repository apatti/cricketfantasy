'use client'
import { Tabs, Authenticator, Table, TableBody,TableCell,TableHead,TableRow, View, TableFoot, Flex, Accordion } from "@aws-amplify/ui-react";


export default function Home() {

    const generalContent = ()=>{
        return(
            <Flex direction="column" width="fit">
                <View as="li">Top 5 participants will get season prizes. Top 2 participants will get phase prizes. </View>
                <View as="li">Fantasy team owner need to pick Captain & Vice Captain for each game. Captain will 2x points & vice captain will get 1.5x points in each game. There are two powerplay options. One powerplay option is per phase & second powerplay option is once in the season.</View>
                <View as="li">There is no bench option, all 6 players are eligible for scoring. </View>
                <View as="li">Players have option to trade players from Free Agency. Each participant has $250 virtual money ($50 actual money) alloted for trading. All bid amount will be contributing to overall pot. FA money is non-refundable - use it or lose it. Minimum bid for Free Agency player is $1.
                </View>
                <View as="li">There is no limit on bids for free agency throughout season. But Free agency amount for every partiticpant is $200 & min bid is $1.  </View>
                <View as="li">Cutoff time for bidding on players daily is 7 PM PST. All winning bids & every bid will be shown in Transaction tab in website.</View>
                <View as="li">Winning bid in case if two teams are tied is based on reverse ranking of the fantasy team in standing.</View>
                <View as="li">In case if lower rank team places two bids & those bids have same amount with other teams, in that case based on priority order, first bid will be alloted to lower ranked team and then that lower ranked team will be moved to last in priority order to give fair chance for other teams to get player from free agency. We will explain this before auction.</View>
                <View as="li">Any changes made to team (changing c/vc) will be considered for next game after current game start time i.e., 7 AM PST & 3 AM PST.</View>
                <View as="li">Orange Cap, Purple Cap, Emerging Player awards will be awarded by IPL after IPL final game is completed.  </View>
                <View as="li">All free agency bids are blind bids (No one will be able to see them till cuto off time 7 PM PST) is over. </View>
                <View as="li">Each fantasy team should have below team combo:
                    <ul>
                        <li>Batsmen - min 2, max 3</li>
                        <li>Bowlers - min 2, max 3</li>
                        <li>All Rounders - min 1, max 3</li>
                        <li>Wicket Keepers - max 2</li>
                    </ul>
                </View>
            </Flex>
        );
    }

    const scoringContent = ()=>{
        return(
            <Table
                highlightOnHover={true}
                padding={"10x"}
                variation="bordered"
            >
                <TableHead>
                    <TableRow>
                        <TableCell textAlign={"center"}>Category</TableCell>
                        <TableCell>Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"}>MOM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Official Man of the Match</TableCell>
                        <TableCell>50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"}>Batting</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Run scored</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6 Run Bonus</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4 Run bonus</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} >Dismissed for duck</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Exclude bowlers in dismissed for duck points</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dismissed for duck points</TableCell>
                        <TableCell>-10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} >Negative bonus for batsman getting out within 1 to X Runs</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Exclude bowlers for negative bonus</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Applicable for getting out within these runs</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Negative bonus imposed for getting out within above mentioned runs</TableCell>
                        <TableCell>-5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} >Run Rate Bonus</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Exclude bowlers for negative bonus</TableCell>
                        <TableCell>No</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between  0 and  100 runs per 100 balls:</TableCell>
                        <TableCell>-10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 101 and 110 runs per 100 balls:</TableCell>
                        <TableCell>-5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 111 and 120 runs per 100 balls:</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 121 and 140 runs per 100 balls:</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 141 and 160 runs per 100 balls:</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 161 and 180 runs per 100 balls:</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 181 and 200 runs per 100 balls:</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum runs to be scored by the batsmen for scoring bonus</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum balls to be faced by the batsmen for scoring bonus</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>200 and above runs per 100 balls:</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Milestone bonus</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 25 runs</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 50 runs</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 75 runs</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 100 runs</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"} >Bowling</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wicket</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dot Balls</TableCell>
                        <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Maiden over</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} >Economy Rate Bonus</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum overs to be bowled by the bowler for scoring bonus</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 0 and 5.99 runs per over:</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 6 and 6.99 runs per over:</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 7 and 7.99 runs per over:</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 8 and 8.99 runs per over:</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 9 and 9.99 runs per over:</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 10 and 10.99 runs per over:</TableCell>
                        <TableCell>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Between 11 and 11.99 runs per over:</TableCell>
                        <TableCell>-5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>12 and above runs per over:</TableCell>
                        <TableCell>-10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"}  >Milestone bonus</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On taking  2  wickets</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On taking  3  wickets</TableCell>
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On taking  4  wickets</TableCell>
                        <TableCell>35</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On taking  5  wickets</TableCell>
                        <TableCell>40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"}>Fielding</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Catch</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stumping</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Run out</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"}>Bonus for fielders taking X no. of fielding dismissals</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum number of fielding dismissals by the fielder for scoring bonus</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Points for taking the above mentioned minimum fielding dismissals</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"}>Captain & Vice Captain</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Captain - Points earned by your captain get multiplied by x</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vice Captain - Points earned by your vice-captain get multiplied by x</TableCell>
                        <TableCell>1.5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} backgroundColor={"grey"}>Power Play: Phase Booster (One game per Phase)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Phase Booster Captain - Points earned by your captain get multiplied by x</TableCell>
                        <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Phase Booster Vice Captain - Points earned by your vice-captain get multiplied by x</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Points earned by every other player in fantasy team (Other than Captain & Vice-Captain) get multiplied by x</TableCell>
                        <TableCell>1.5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>If Phase Booster Power Play is not picked by fantasy participant for 6 games of phase, then 7th game (last game of phase) will be auto picked for Phase Booster Power Play for that participant.</TableCell>
                    </TableRow>
                </TableBody>
                <TableFoot>
                    <TableRow>
                        <TableCell backgroundColor={"grey"} colspan={2}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>* Substitute : If any substitute player takes a catch, or effects run out, their points will not be counted in the fantasy scoring.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>* Super Over : Fantasy scores are counted till the last ball of the regulation game. Super over activities are not counted in fantasy scoring.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>* Points will be allotted for players who have performed even in No Result games.</TableCell>
                    </TableRow>
                </TableFoot>
            </Table>
        );
    }

    const phasesContent = () =>{
        return (
            <Table
            highlightOnHover={true}
            padding="10x">
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Rule</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Schedule is divided into 10 phases. Each phase will have 7 games. Topper of each phase will get phase winner prize. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Fantasy team which gets the most points in those 7 games in each phase will be the phase winner. Only one prize per phase. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell><b>Phase 1</b> ends on Thursday, Mar, 27 </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell><b>Phase 2</b> ends on Wednesday, Apr, 2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell><b>Phase 3</b> ends on Monday, Apr, 7</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell><b>Phase 4</b> ends on Sunday, Apr, 13</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell><b>Phase 5</b> ends on Saturday, Apr, 19</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell><b>Phase 6</b> ends on Thursday, Apr, 24</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell><b>Phase 7</b> ends on Wednesday, Apr, 30</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell><b>Phase 8</b> ends on Tuesday, May, 6</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell><b>Phase 9</b> ends on Monday, May, 12</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell><b>Phase 10</b> ends on Sunday, May, 18</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        );
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
                            <TableCell>20%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Runner Up</TableCell>
                            <TableCell>16%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3rd place</TableCell>
                            <TableCell>12%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4th place</TableCell>
                            <TableCell>8%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 1 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 2 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 3 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 4 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 5 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 6 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 7 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 8 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 9 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phase 10 Winner</TableCell>
                            <TableCell>3%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Orange Cap (IPL)</TableCell>
                            <TableCell>2.5%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Purple Cap (IPL)</TableCell>
                            <TableCell>2.5%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Emerging Player (IPL)</TableCell>
                            <TableCell>2.5%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>MVP (IPL)</TableCell>
                            <TableCell>2.5%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Most Dots</TableCell>
                            <TableCell>2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Most Boundaries</TableCell>
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

    const draftContent = () =>{ 
        return (
            <Table
            highlightOnHover={true}
            padding="10x">
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Rule</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Each fantasy team owner has $1000 virtual money ($250 actual money) for auction as buy-in. Total 229 players are available in auction to pick.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Each fantasy team owner has to pick 8 players from auction. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Each fantasy team should have required team structure at end of draft.</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        );
    }

    return(
        <Flex direction="column" width="fit">
            <Tabs.Container defaultValue="General">
                <Tabs.List justifyContent="center">
                    <Tabs.Item value="General">General</Tabs.Item>
                    <Tabs.Item value="Draft">Draft</Tabs.Item>
                    <Tabs.Item value="Scoring">Scoring</Tabs.Item>
                    <Tabs.Item value="Phases">Phases</Tabs.Item>
                    <Tabs.Item value="Prizes">Prizes</Tabs.Item>
                </Tabs.List>
                <Tabs.Panel value="General">{generalContent()}</Tabs.Panel>
                <Tabs.Panel value="Draft">{draftContent()}</Tabs.Panel>
                <Tabs.Panel value="Scoring">{scoringContent()}</Tabs.Panel>
                <Tabs.Panel value="Phases">{phasesContent()}</Tabs.Panel>
                <Tabs.Panel value="Prizes">{prizesContent()}</Tabs.Panel>
            </Tabs.Container>
        </Flex>
        
    );

}