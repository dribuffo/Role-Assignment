# PROJECT 2 OVERVIEW
---

## Project Schedule
---
| Day | Deliverable | Status |
|:---:|:-----------:|:------:|
|  F  | Project Worksheet| complete |
|  M  | Core Layout/structure and functionality | complete |
|  T  |     MVP     |  complete |
|  W  |  MVP + Bug fixes | Incomplete |
|  R  |  Post MVP   |  Incomplete |
|  F  |  Presentation | Incomplete | 

## Project Description
---
MVP:
This project is a "who's who" of available jobs for my Final Fantasy XIV guild. This will allow us to see who is able to play what role e.g. Tank, Healer, or DPS, and assign them thusly. It should dynamically pull this information up and adjust as players level different jobs in the game. You will be able to assign players to specific roles based on availability.

Post-MVP:
1 - extend functionality to limit by expansion pack
2 - The above methodology will be applied to crafting and gathering classes.
3 - extend functionality by adding a guild search so that anyone can use this.

## API info
---
[xivapi.com](https://xivapi.com/docs)
[below example](https://xivapi.com/character/210852)
```
{
"Achievements": null,
"AchievementsPublic": null,
"Character": {
"ActiveClassJob": {
"ClassID": 29,
"ExpLevel": 2551628,
"ExpLevelMax": 5992000,
"ExpLevelTogo": 3440372,
"IsSpecialised": false,
"JobID": 30,
"Level": 80,
"Name": "rogue / ninja",
"UnlockedState": {
"ID": 30,
"Name": "Ninja"
}
},
"Avatar": "https://img2.finalfantasyxiv.com/f/0746e050314de952e2e134408401f80f_7a573cbc0cda3a3dfc1795cb3d9f7b23fc0_96x96.jpg?1644604677",
"Bio": "-",
"ClassJobs": [],
"ClassJobsBozjan": {},
"ClassJobsElemental": {},
"DC": "Crystal",
"FreeCompanyId": "9236179148295113228",
"FreeCompanyName": "Lex Talionis",
"GearSet": {},
"Gender": 2,
"GrandCompany": {},
"GuardianDeity": 6,
"ID": 210852,
"Lang": null,
"Name": "Zebix Rune",
"Nameday": "13th Sun of the 4th Umbral Moon",
"ParseDate": 1644605107,
"Portrait": "https://img2.finalfantasyxiv.com/f/0746e050314de952e2e134408401f80f_7a573cbc0cda3a3dfc1795cb3d9f7b23fl0_640x873.jpg?1644604677",
"PvPTeamId": null,
"Race": 1,
"Server": "Balmung",
"Title": 475,
"TitleTop": false,
"Town": 3,
"Tribe": 1
},
"FreeCompany": null,
"FreeCompanyMembers": null,
"Friends": null,
"FriendsPublic": null,
"Minions": null,
"Mounts": null,
"PvPTeam": null
}
```

## Wireframes
---
[Desktop Design](https://drive.google.com/file/d/1xSB7zbE1CGH7gCdIMH7S-4wLphNn5phx/view?usp=sharing)

[Mobile+Tablet Design](https://drive.google.com/file/d/1XWoaJbQTYwd5RBcV-_pmSj2_px_hCJ00/view?usp=sharing)

## Flowchart
---
[Flowchart](https://drive.google.com/file/d/1GY7qwdqRC-5ghePtW3-Eb5QIdclGBUWC/view?usp=sharing)

## Components
---

##### MVP
---
* Build array of guild members
    * Each element has 2 values: ID and Name
    * We only have 20 active members so it's short
* Get Routing to work
    * Create dummy display for all elements and get routing to work
* Get array to map and be clickable
* Get individual character information to display
    * incl. the name of all jobs at level 90
    * display jobs based on roles (tank, healer, or DPS)
* Get individual character info to display on same page as array
* Get the 3 add to roster buttons working
    * in Mobile this is clicking the name of the job
    * on desktop this is clicking the icon of the job
* Get roster to display
    * Should display the character name added on the top half (max of 8)
    * In mobile thsi will display 'job - name' under the defined role
    * On desktop this will display as 'name' on top half and as 'icon - name' under defined role


##### MVP
---
| Component | Priority | Estimated Time | Actual Time |
|:---------:|:--------:|:--------------:|:-----------:|
| Component shell | H  |     .5 hour    |      .5     |
| Array Creation |  H  |     1 hour     |      .5      |
| Header    |    M     |     .5 hour    |      1hr    |
| Footer    |    L     |     .5 hour    |      .5hr   |
| Routing   |    H     |     .5 hour    |      .5hr   |
| info display | H     |     1 hour     |      1hr      |
|  character info display | H | 1 hour  |      1hr      |
| info passing and state management | H | 4 hours | 6hrs |
| Roster display | H   |     1 hour     |      1.5hr      |
| Reactivity |    H    |     2 hours    |      ?      |
| Display adjustments | M |  3 hours    |      ?      |
|    CSS     |   M     |     3 hours    |      ?      |
|    Total   |         |    18 hrs      |      ?      |
 

##### PostMVP
---
* Add functionality to choose the level of content you are searching for 
    * e.g. all classes level 50 and above, etc
* Extend search functionality to crafting and gathering classes
    * add additional pages that display this information
        * Crafting page -> restrict based on crafters / gatherers
* Extend guild functionality to make this searchable by guild instead of hardcoding it to just my own

##### PostMVP
---
| Component | Priority | Estimated Time | Actual Time |
|:---------:|:--------:|:--------------:|:-----------:|
| limit display based on level of content | L | 2 hours | ? |
| add crafting and gathering components/pages | L |  1 hour | ? |
|display crafting and gathering jobs| L  |  1 hour  |  ?  |
| Limiting display based on crafter chosen | L | 1.5 hrs | ?  |
| make this extend to any guild | very low |  5 hours |  ?  |
|    Total  |          |    10.5 hrs     |     ?      |


## Additional Libraries
---
```
```

## Code Snippet
---
```
```

## Credited code blocks
---
I used the pokedex project to setup the frame for everything for this project, they were very similiar in nature so rather than start from nothing I started from something we did in class.