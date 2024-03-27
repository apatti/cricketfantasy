import re
import requests
from bs4 import BeautifulSoup

# URL of the scorecard
#url = "https://www.espncricinfo.com/series/indian-premier-league-2024-1410320/chennai-super-kings-vs-royal-challengers-bengaluru-1st-match-1422119/full-scorecard"
players = []
def getPOTM(soup):
    # Find the PLAYER OF THE MATCH details
    potmSoup = soup.find(string='Player Of The Match')
    return potmSoup.parent.next_sibling.a.get_text(strip=True)
    
def getWinningTeam(soup):
    # Find the winning team name
    matchWinnerSoup = soup.find("p", class_="ds-text-tight-s ds-font-medium ds-truncate ds-text-typo").get_text(strip=True)
    result = re.search(r"([A-Za-z]+) won by", matchWinnerSoup)
    matchWinner = result.group(1)

def getBattingnHowOut(soup):
    #batting
    global players
    howOut = []
    battingSoup = soup.findAll(string='BATTING')
    batting={}
    for batSoup in battingSoup:
        batRows = batSoup.parent.parent.parent.next_sibling.find_all("tr",class_="")
        for batRow in batRows:
            batColumns = batRow.find_all("td")
            if(batColumns[0].text.startswith('Fall') or batColumns[0].text.startswith('TOTAL')):
                continue
            playerName = batColumns[0].get_text(strip=True).replace('†','').replace('(c)','')
            players.append(playerName)
            batting[playerName]={
                "howOut":batColumns[1].get_text(strip=True),
                "runs":batColumns[2].get_text(strip=True),
                "balls":batColumns[3].get_text(strip=True),
                "fours":batColumns[5].get_text(strip=True),
                "sixes":batColumns[6].get_text(strip=True),
                "srr":batColumns[7].get_text(strip=True)
            }
            howOut.append(batColumns[1].get_text(strip=True))

    #didnot bat
    didnotBat = soup.findAll(string="Did not bat: ")
    for dnb in didnotBat:
        players.extend([player.get_text(strip=True).replace(',','').replace('†','').replace('(c)','')  for player in dnb.parent.next_siblings])
    
    return batting,howOut
    
def getBowlers(soup):
    global players
    #bowlers:
    bowlingSoup = soup.findAll(string='BOWLING')
    bowling={}
    for bowlSoup in bowlingSoup:
        bowlRows = bowlSoup.parent.parent.parent.next_sibling.find_all("tr",class_="")
        for bowlRow in bowlRows:
            bowlColumns = bowlRow.find_all("td")
            #if(bowlColumns[0].text.startswith('Fall') or batColumns[0].text.startswith('TOTAL')):
            #    continue
            players.append(bowlColumns[0].get_text(strip=True))
            bowling[bowlColumns[0].get_text(strip=True)]={
                "overs":bowlColumns[1].get_text(strip=True),
                "maidens":bowlColumns[2].get_text(strip=True),
                "runs":bowlColumns[3].get_text(strip=True),
                "wickets":bowlColumns[4].get_text(strip=True),
                "eco":bowlColumns[5].get_text(strip=True),
                "dots":bowlColumns[6].get_text(strip=True)
            }
    return bowling

def getFieldName(shortName):
    global players
    if shortName == "VR Iyer":
            return "Venkatesh Iyer"
    if shortName == "SS Iyer":
            return "Shreyas Iyer"
    for p in players:
        if p == shortName or re.search(' '+shortName,p):
            return p
    return shortName
    
def getFielders(howOut):
    #fielders
    fieldDismissalsMatch = [re.search("^c\\s+([^#]+)|(.*)\/(.*)|^st\\s+([^#]+)|(\w+)",h.replace('c & b ','c ').replace('run out (','').replace('†','').replace(')','').replace(' b ',"#").replace('sub (','')) for h in howOut if not h.startswith(('b','not'))]
    fielders = {}
    for dismissal in fieldDismissalsMatch:
        if dismissal.group(1) is not None:
            fielderName = getFieldName(dismissal.group(1))
        if dismissal.group(2) is not None:
            fielderName = getFieldName(dismissal.group(2))
        if dismissal.group(3) is not None:
            fielderName = getFieldName(dismissal.group(3))
        if dismissal.group(4) is not None:
            fielderName = getFieldName(dismissal.group(4))
        if dismissal.group(5) is not None:
            fielderName = getFieldName(dismissal.group(5))
        
        if fielderName not in fielders:
            fielders[fielderName]=0
        fielders[fielderName]+=1
        if dismissal.group(0).startswith("st "):
            fielders[fielderName]+=1
    
    return fielders
    
def lambda_handler(event, context):
    global players
    # Send a GET request to the URL
    url = event.get('url')
    response = requests.get(url)

    # Parse the HTML content using BeautifulSoup    
    soup = BeautifulSoup(response.content, "html.parser")
    #POTM
    potm = getPOTM(soup)
    #match winner
    matchWinner = getWinningTeam(soup)
    #players,batting
    batting,howOut = getBattingnHowOut(soup)
    print(players)
    #bowling
    bowling = getBowlers(soup)
    #fielders
    fielders = getFielders(howOut)
    
    score = {}
    for p in players:
        if p not in score:
            score[p]={}
            
        if p in batting:
            score[p]['batting']=batting[p]
        else:
            score[p]['batting']={}
        
        if p in bowling:
            score[p]['bowling']=bowling[p]
        else:
            score[p]['bowling']={}
        
        if p in fielders:
            score[p]['fielding']=fielders[p]
        else:
            score[p]['fielding']=0
            
        if p==potm:
            score[potm]['potm']={}
            score[potm]['potm']=True
    
    #print(score)
    response = {'score': score,'meta':event}
    return response



    


