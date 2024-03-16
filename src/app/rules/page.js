'use client'
import { Tabs, Authenticator, Table, TableBody,TableCell,TableHead,TableRow, View, TableFoot, Flex, Accordion } from "@aws-amplify/ui-react";


export default function Home() {

    const generalContent = ()=>{
        return(
            <Flex direction="column" width="fit">
                <View as="li">Top 5 participants will get season prizes. Top 2 participants will get phase prizes. </View>
                <View as="li">Fantasy team owner need to pick Captain & Vice Captain for each game. Captain will 2x points & vice captain will get 1.5x points in each game. There are two powerplay options. One powerplay option is per phase & second powerplay option is once in the season.</View>
                <View as="li">There is no bench option, all 6 players are eligible for scoring. </View>
                <View as="li">Players have option to trade players from Free Agency. Each participant has $200 virtual money ($50 actual money) alloted for trading. All bid amount will be contributing to overall pot. </View>
                <View as="li">There is no limit on bids for free agency throughout season. But Free agency amount for every partiticpant is $200 & min bid is $1.  </View>
                <View as="li">Cutoff time for bidding on players daily is 7 PM PST. All winning bids & every bid will be shown in Transaction tab in website.</View>
                <View as="li">Winning bid in case if two teams are tied is based on reverse ranking of the fantasy team in standing.</View>
                <View as="li">In case if lower rank team places two bids & those bids have same amount with other teams, in that case based on priority order, first bid will be alloted to lower ranked team and then that lower ranked team will be moved to last in priority order to give fair chance for other teams to get player from free agency. We will explain this before auction.</View>
                <View as="li">Any changes made to team (changing c/vc) will be considered for next game after current game start time i.e., 7 AM PST & 3 AM PST.</View>
                <View as="li">Orange Cap, Purple Cap, Emerging Player awards will be awarded by IPL after IPL final game is completed.  </View>
                <View as="li">All free agency bids are blind bids (No one will be able to see them till cuto off time 7 PM PST) is over. </View>
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
                        <TableCell colSpan={2} textAlign={"center"}>MOM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Official Man of the Match</TableCell>
                        <TableCell>50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} textAlign={"center"} >Batting</TableCell>
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
                        <TableCell>-20</TableCell>
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
                        <TableCell>Between 101 and 120 runs per 100 balls:</TableCell>
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
                        <TableCell>Between 101 and 120 runs per 100 balls:</TableCell>
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
                        <TableCell>Between 121 and 140 runs per 100 balls:</TableCell>
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
                        <TableCell>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Milestone bonus</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 25 runs (Default : 25)</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 40 runs (Default : 40)</TableCell>
                        <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 60 runs (Default : 60)</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 80 runs (Default : 80)</TableCell>
                        <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>On reaching 100 runs (Default : 100)</TableCell>
                        <TableCell>40</TableCell>
                    </TableRow>
                </TableBody>
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
                    <TableCell>Schedule is divided into 7 phases. Each phase will have 10 games (Going this way because full schedule is not provided by IPL). Topper(s) of each phase will get phase winner prize(s). </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Top 2 participants will get season prizes. Top 2 participants will get phase prizes. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell><b>Phase 1</b> ends on Fri, Mar, 29 </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell><b>Phase 2</b> ends on Sun, Apr 7 (3 AM)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell><b>Phase 3</b> ends on TBD</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell><b>Phase 4</b> ends on TBD</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell><b>Phase 5</b> ends on TBD</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell><b>Phase 6</b> ends on TBD</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell><b>Phase 7</b> ends on TBD</TableCell>
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
                    <TableCell>Each fantasy team owner has $1000 virtual money ($250 actual money) for auction as buy-in. Total 243 players are available in auction to pick. Players will be picked from auction from 3 tiers.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Tier 1 has 42 players. Starting price of player in Tier 1 is $100. Increment of $5. Order will be through random generator.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Tier 2 has 66 players. Starting price of player in Tier 2 is $35. Increment of $1. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>Tier 3 has 133 players. Starting price of player in Tier 3 is $10. Increment of $1. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>For 16 participants league, pick max 3 from Tier 1, Tier 2 & Tier 3; pick min 1 players from Tier 2 & Tier 3. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell>Each participant should have 6 players in their squad after auction. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell>If any player is unsold in Tier 1 (minimum base price $100), then at end of Tier 1 players, we will re-auction that player with reduced price ($50).</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell>Same with Tier 2 player, we will re-auction at the end of Tier 2 list for reduced price ($20).</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell>Participants need to nominate Tier 3 players, they won’t be picked in random order. That way if any one picks Tier 3 player, he will be sold for sure (even for base price).</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>Once any participant reaches max limit to auction players in any tier, they wont be allowed to bid for other players in that particular tier for rest of auction. </TableCell>
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