"use strict;"

Consoles = [
    ["1972 - Magnavox Odyssey ","The Magnavox Odyssey was the first-ever home console. It was created by Sanders Associates and sold 350,000 units by the time it was discontinued in 1975. ","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Magnavox-Odyssey-Console-Set.jpg/330px-Magnavox-Odyssey-Console-Set.jpg"],
    ["1974 - Fairchild Video Entertainment System","Also known as the Fairchild Channel F, it was created by Alpex Computer Corp. and was the first console to use a game cartridge. It sold for $170 ($910 today).","https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Fairchild-Channel-F.jpg/330px-Fairchild-Channel-F.jpg"],
    ["1977 - Atari 2600","The Atari 2600 was the first home console to implement the game cartridge. Around 30 million units sold for around $125 each, ($390 today).","https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Atari-2600-Wood-4Sw-Set.png/330px-Atari-2600-Wood-4Sw-Set.png"],
    ["1983 - Nintendo Entertainment System","This system was called an entertainment system instead of a video game console due to the stigma behind the name due to the 1983 video game crash.","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/330px-NES-Console-Set.png"],
    ["1983 - Sega SG - 1000","This console was created at the same time as the NES, due to the recommendation of Hayao Nakayama who was the president of the SEGA Japanese branch. ","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sega-SG-1000-Console-Set.jpg/330px-Sega-SG-1000-Console-Set.jpg"],
    ["1987 - Sega Genesis","Despite having an 8-bit processor, it had a 16-bit graphics processor which made it comparable to other consoles released around that time. ","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg/375px-Sega-Mega-Drive-JP-Mk1-Console-Set.jpg"],
    ["1989 - Game Boy","The handheld featured an LCD screen and came with Tetris as a package, making it a best seller. This device also kickstarted the Kirby franchise.","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/330px-Game-Boy-FL.jpg"],
    ["1989 - Atari Lynx","This device was the first handheld console with a color display and featured an 8-bit CPU. It was considered superior to the Game Boy. ","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Atari-Lynx-I-Handheld.jpg/330px-Atari-Lynx-I-Handheld.jpg"],
    ["1990 - Super Nintendo Entertainment System","The Sega Genesis and the Super Nintendo entertainment systems had a rivalry on the market that was dubbed the console wars. ","https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/375px-SNES-Mod1-Console-Set.jpg"],
    ["1993 - Atari Jaguar","The console sported two 32-bit processors dubbed “Tom and Jerry” and was advertised as the first 64-bit game system.","https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Atari-Jaguar-Console-Set.png/330px-Atari-Jaguar-Console-Set.png"],
    ["1994 - Sony Playstation","The playstation is the result of a failed venture between sony and Nintendo to add an optical peripheral to the SNES. ","https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PlayStation-SCPH-1000-with-Controller.jpg/375px-PlayStation-SCPH-1000-with-Controller.jpg"],
    ["1995 - Sega Saturn","This console gained popularity due to Sega's recent release of 3D graphics and the inclusion of game discs.","https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sega-Saturn-Console-Set-Mk1.png/375px-Sega-Saturn-Console-Set-Mk1.png"],
    ["1995 - Virtual Boy","This console was the first attempt at virtual reality, its design could have been more appealing and appealing which led to Nintendo refocusing on the Game Boy.","https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Virtual-Boy-Set.jpg/300px-Virtual-Boy-Set.jpg"],
    ["1996 - Nintendo 64","This console was the last to use game cartridges but had 3D graphics thanks to its 64-bit processor. Its launch date was delayed by a year to finish developing its launch games Super Mario 64 and Pilotwings 64. ","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/N64-Console-Set.jpg/330px-N64-Console-Set.jpg"],
    ["1998 - Dreamcast","This console was the first home console to feature a modem. This allowed users to access online play. ","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dreamcast-Console-Set.png/330px-Dreamcast-Console-Set.png"],
    ["2000 - PlayStation 2","The PlayStation 2 is the best-selling console of all time with 155 million units sold.","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PS2-Versions.jpg/330px-PS2-Versions.jpg"],
    ["2001 - Game Cube","The Game Cube was the first Nintendo console to use discs instead of cartridges. ","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/GameCube-Set.jpg/330px-GameCube-Set.jpg"],
    ["2001 - Xbox","Created by Microsoft, it was the second-ever console created by an American company.","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Xbox-Console-wDuke-L.jpg/375px-Xbox-Console-wDuke-L.jpg"],
    ["2001 - Game Boy Advance","The Gameboy Advance was built with a 32-bit CPU and was created as the last Gameboy console.","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nintendo-Game-Boy-Advance-Purple-FL.jpg/450px-Nintendo-Game-Boy-Advance-Purple-FL.jpg"],
    ["2003 - N-Gage","The N-gage was created by Nokia in an attempt to combine a cellphone and a game system. ","https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nokia-NGage-LL.jpg/390px-Nokia-NGage-LL.jpg"],
    ["2004 - Nintendo DS","The Nintendo DS was the first handheld console with the capability to connect multiple systems over wifi.","https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nintendo-DS-Fat-Blue.jpg/330px-Nintendo-DS-Fat-Blue.jpg"],
    ["2004 - PlayStation Portable","The PlayStation Portable was the most powerful handheld device of its time and was also the only ever handheld console to use disks instead of cartridges. ","https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/330px-Psp-1000.jpg"],
    ["2005 - Xbox 360","The Xbox 360 was the 9th best-selling console in history. It would have sold more units had it not been for supply issues during the first year of its release.","https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Xbox-360S-Console-Set.jpg/128px-Xbox-360S-Console-Set.jpg"],
    ["2006 - Wii","The Wii was created to focus on appealing to a broader audience with casual gameplay instead of competing with the Sony and Sega. ","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Wii-Console.png/330px-Wii-Console.png"],
    ["2011 - Nintendo 3DS","The Nintendo 3DS started at a price of $249.99 but they dropped the price to $169.99 after poor sales after launch. ","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nintendo-3DS-AquaOpen.jpg/330px-Nintendo-3DS-AquaOpen.jpg"],
    ["2012 - Wii U","The Wii U was the first Nintendo console to sport HD graphics. It was created to compete with the Xbox 360 and Playstation 3.","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/330px-Wii_U_Console_and_Gamepad.png"],
    ["2013 - Nintendo 2DS","The Nintendo 2DS was created for children 7 and under due to concerns of eye injuries cause from the 3D functions of the 3DS.","https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nintendo-2DS-angle.jpg/330px-Nintendo-2DS-angle.jpg"],
    ["2013 - Xbox 1","The Xbox 1 faced criticism for its poor graphical quality in comparison to the Playstation 4. ","https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Microsoft-Xbox-One-Console-Set-wKinect.jpg/450px-Microsoft-Xbox-One-Console-Set-wKinect.jpg"],
    ["2013 - Playstation 4","The Playstation 4 was created to emphasize social interaction and was subsequently praised for acknowledging the want of the user base.  ","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.png/330px-PS4-Console-wDS4.png"],
    ["2017 - Nintendo Switch","The Nintendo Switch is classified as a hybrid console due to its ability to be played as a table or be docked and used as a console. ","https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/450px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg"],
    ["2020 - Xbox Series X","The Xbox Series X and S were originally referred to as codename “Scarlette” as a whole with each individually being called “Anoconda” and “Lockhart”. ","https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Xbox_Series_X_2.jpg/167px-Xbox_Series_X_2.jpg"],
    ["2020 - Playstation 5","The Playstation 5 is notorious for being hard to obtain due to the global chip shortage in 2020-2023. This problem was compounded by the prevailance of scalping that took place.","https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png/330px-Black_and_white_Playstation_5_base_edition_with_controller.png"]
];

var consolesHTML = "";
if (document.getElementById("consoleHTML")) {
    for(let i = 0; i < Consoles.length; i++){
        consolesHTML += "<div class='col-12 col-sm-12 col-md-6 col-lg-4'>\
                            <div class='border border-3 rounded-4 border-primary p-3 m-3 bg-light'>\
                                <h2 class='text-danger text-center'>";
        for (let j = 0; j < Consoles[i].length; j++) {
            if (j == 0){
                consolesHTML += Consoles[i][j] + "</h2> <p class='text-muted'>";
            }
            if (j == 1){
                consolesHTML += Consoles[i][j] + "</p> <img src='";
            }
            if (j == 2) {
                consolesHTML += Consoles[i][j] + "' alt='Console' style='width=80%'; height=auto display:block; margin:0 auto;'></img>"
            }
        }
        consolesHTML += "</div> </div>"
    }

    document.getElementById("consoleHTML").innerHTML = consolesHTML;
}

const Games = [
  ["1958 - Tennis for Two", 
   "Considered one of the first video games, Tennis for Two was developed by physicist William Higinbotham. The game was displayed on an oscilloscope and allowed two players to simulate a tennis match.", 
   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg/330px-Tennis_For_Two_on_a_DuMont_Lab_Oscilloscope_Type_304-A.jpg"],

  ["1962 - Spacewar!", 
   "Created by MIT students, Spacewar! is one of the earliest known digital computer games. Two players controlled spaceships engaged in a dogfight while avoiding gravitational pull from a central star.", 
   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Spacewar_gameplay.jpg/330px-Spacewar_gameplay.jpg"],

  ["1972 - Pong", 
   "Developed by Atari, Pong became one of the earliest arcade hits. This simple table tennis simulation game popularized video gaming in arcades.", 
   "https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif"],

  ["1978 - Space Invaders", 
   "A seminal arcade game developed by Tomohiro Nishikado, Space Invaders set the template for the shoot 'em up genre. Players control a cannon and must defeat waves of aliens.", 
   "https://upload.wikimedia.org/wikipedia/en/2/20/SpaceInvaders-Gameplay.gif"],

  ["1980 - Pac-Man", 
   "Pac-Man, developed by Namco, became a cultural icon. Players navigate Pac-Man through mazes, eating pellets and avoiding ghosts. It introduced iconic characters and widespread appeal.", 
   "https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png"],

  ["1981 - Donkey Kong", 
   "One of Nintendo’s earliest hits, Donkey Kong introduced characters like Jumpman (later known as Mario) and the titular Donkey Kong in a challenging platforming game.", 
   "https://upload.wikimedia.org/wikipedia/en/f/fd/Donkey_Kong_Gameplay.png"],

  ["1983 - Dragon's Lair", 
   "A groundbreaking laserdisc arcade game that featured full-motion video graphics. Players guide a knight through quick-time events, pioneering a new form of interactive storytelling.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/ARC_Dragon%27s_Lair.png/330px-ARC_Dragon%27s_Lair.png"],

  ["1985 - Super Mario Bros.", 
   "A landmark title developed by Nintendo, Super Mario Bros. revolutionized the platformer genre. Players control Mario as he embarks on a quest to save Princess Peach from Bowser.", 
   "https://upload.wikimedia.org/wikipedia/en/5/50/NES_Super_Mario_Bros.png"],

  ["1986 - The Legend of Zelda", 
   "Nintendo's action-adventure game featured an open world for players to explore. It introduced key elements such as dungeons, puzzles, and exploration that defined the series.", 
   "https://upload.wikimedia.org/wikipedia/en/3/3a/Legend_of_Zelda_NES.PNG"],

  ["1987 - Final Fantasy", 
   "The first entry in the long-running RPG series, Final Fantasy set the stage for decades of role-playing adventures with its innovative mechanics and epic storytelling.", 
   "https://upload.wikimedia.org/wikipedia/en/0/04/Final_Fantasy_I_Lich_Battle.png"],

  ["1989 - Tetris", 
   "A puzzle game created by Soviet software engineer Alexey Pajitnov. Tetris tasks players with arranging falling blocks to complete lines. It became one of the most popular games of all time.", 
   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/330px-Typical_Tetris_Game.svg.png"],

  ["1991 - Sonic the Hedgehog", 
   "Sega's Sonic the Hedgehog introduced a speedy mascot to compete with Nintendo’s Mario. The game’s fast-paced platforming and vibrant art made it an instant hit.", 
   "https://upload.wikimedia.org/wikipedia/en/d/d3/MD_Sonic_the_Hedgehog.png"],

  ["1992 - Mortal Kombat", 
   "Known for its intense, graphic violence and revolutionary digitized graphics, Mortal Kombat became a landmark in fighting games and sparked debates over video game violence.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Mortal_Kombat.png/330px-Mortal_Kombat.png"],

  ["1993 - Doom", 
   "Doom is often credited with popularizing the first-person shooter genre. Its fast-paced gameplay, 3D graphics, and multiplayer mode helped it become a major hit.", 
   "https://upload.wikimedia.org/wikipedia/en/d/de/Doom_ingame_1.png"],

  ["1994 - Donkey Kong Country", 
   "A visually impressive platformer that pushed the limits of the Super Nintendo’s hardware. Donkey Kong Country used pre-rendered 3D graphics to create lifelike animations.", 
   "https://upload.wikimedia.org/wikipedia/en/3/30/Donkey_Kong_Country_Shot_2.png"],

  ["1996 - Pokémon Red/Blue", 
   "Released for the Game Boy, Pokémon Red/Blue kickstarted a global phenomenon. Players capture and train creatures called Pokémon and battle to become the Pokémon Champion.", 
   "https://upload.wikimedia.org/wikipedia/en/a/aa/Pok%C3%A9mon_Red%2C_Blue%2C_and_Yellow_screenshot.png"],

  ["1996 - Resident Evil", 
   "The game that defined the survival horror genre, Resident Evil introduced players to tense gameplay, limited resources, and a haunting atmosphere in the zombie-infested Spencer Mansion.", 
   "https://upload.wikimedia.org/wikipedia/en/8/89/Resident_Evil_original_version.png"],

  ["1997 - Final Fantasy VII", 
   "Final Fantasy VII brought RPGs into the mainstream with its cinematic storytelling, memorable characters, and pre-rendered backgrounds, making it one of the most beloved games of all time.", 
   "https://upload.wikimedia.org/wikipedia/en/1/1b/FFVIIbattleexample.png"],

  ["1998 - The Legend of Zelda: Ocarina of Time", 
   "Hailed as one of the greatest video games of all time, Ocarina of Time brought the Zelda franchise into 3D. Its expansive world, storytelling, and mechanics were groundbreaking.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/OcarinaOfTimeBattle.JPG/300px-OcarinaOfTimeBattle.JPG"],

  ["1999 - Counter-Strike", 
   "Starting as a Half-Life mod, Counter-Strike became a defining competitive first-person shooter with its emphasis on team-based tactics and skill, becoming a mainstay in esports.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Counter-Strike_screenshot.png/220px-Counter-Strike_screenshot.png"],

  ["2001 - Halo: Combat Evolved", 
   "Halo: Combat Evolved launched with the original Xbox, setting a new standard for first-person shooters. Its engaging story, multiplayer, and controls made it a defining game of its era.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Halo_-_Combat_Evolved_%28screencap%29.jpg/330px-Halo_-_Combat_Evolved_%28screencap%29.jpg"],

  ["2001 - Grand Theft Auto III", 
   "This open-world action game from Rockstar Games redefined sandbox games, offering players unprecedented freedom in a 3D environment where they could interact with a living city.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Gta3-pc-walking.jpeg/330px-Gta3-pc-walking.jpeg"],

  ["2003 - Call of Duty", 
   "Call of Duty introduced players to immersive World War II battles, with intense first-person action and squad-based gameplay. It launched one of the most successful game franchises ever.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/CallDuty1PC.jpg/315px-CallDuty1PC.jpg"],

  ["2004 - World of Warcraft", 
   "Blizzard's World of Warcraft revolutionized the MMORPG genre. It immersed millions of players in a vast fantasy world where they could embark on quests, battle monsters, and interact with others online.", 
   "https://www.gamespot.com/a/uploads/original/gamespot/images/2004/reviews/624406-534914_20041129_004.jpg"],

  ["2007 - BioShock", 
   "BioShock combined immersive storytelling with philosophical themes and a unique underwater setting. Players explore the dystopian city of Rapture while making moral choices that affect the game’s outcome.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Bioshock_enemies.jpg/330px-Bioshock_enemies.jpg"],

  ["2007 - Portal", 
   "A puzzle-platformer from Valve, Portal is praised for its innovative gameplay and humorous writing. Players use a portal gun to solve physics-based puzzles in a testing facility.", 
   "https://upload.wikimedia.org/wikipedia/en/7/7e/Portalgame.jpg"],

  ["2010 - Red Dead Redemption", 
   "A critically acclaimed open-world Western game developed by Rockstar Games. It tells the story of John Marston, a former outlaw trying to start a new life, set in a beautifully crafted world.", 
   "https://upload.wikimedia.org/wikipedia/en/c/c4/Red_Dead_Redemption_-_Jack_Marston_as_an_outlaw.jpg"],

  ["2011 - The Elder Scrolls V: Skyrim", 
   "Bethesda’s open-world RPG allows players to explore a massive fantasy realm filled with dragons, quests, and endless customization. Skyrim remains a fan favorite thanks to its vast modding community.", 
   "https://upload.wikimedia.org/wikipedia/en/6/68/Skyrim_game_world.jpg"],

  ["2013 - The Last of Us", 
   "This post-apocalyptic action-adventure game from Naughty Dog is renowned for its emotional storytelling, memorable characters, and intense survival mechanics. It follows Joel and Ellie as they navigate a dangerous world.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/The_Last_of_Us_Listen_Mode.jpg/390px-The_Last_of_Us_Listen_Mode.jpg"],

  ["2013 - Grand Theft Auto V", 
   "The latest entry in Rockstar’s open-world crime series, Grand Theft Auto V is known for its sprawling world, dynamic storytelling, and online multiplayer, Grand Theft Auto Online.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Grand_Theft_Auto_V_combat.jpg/330px-Grand_Theft_Auto_V_combat.jpg"],

  ["2015 - The Witcher 3: Wild Hunt", 
   "Praised for its deep narrative, stunning world, and complex characters, The Witcher 3 is an open-world RPG that follows Geralt of Rivia on his quest to find his adopted daughter.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Witcher3Gameplay.png/330px-Witcher3Gameplay.png"],

  ["2016 - Overwatch", 
   "Blizzard’s team-based first-person shooter introduced a diverse cast of heroes with unique abilities, emphasizing teamwork and strategy. It quickly became a staple in the competitive gaming scene.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Overwatch_screenshot.png/330px-Overwatch_screenshot.png"],

  ["2017 - The Legend of Zelda: Breath of the Wild", 
   "Breath of the Wild redefined open-world exploration by giving players immense freedom in a beautifully crafted, physics-driven environment. It is regarded as one of the best games ever made.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Breath_of_the_Wild_paraglide.jpg/330px-Breath_of_the_Wild_paraglide.jpg"],

  ["2017 - Fortnite", 
   "Fortnite popularized the battle royale genre with its fast-paced, last-person-standing gameplay. Its free-to-play model and frequent updates make it a global phenomenon.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Building_in_Fortnite.png/330px-Building_in_Fortnite.png"],

  ["2018 - God of War", 
   "This action-adventure game reimagined the God of War series, focusing on a more mature narrative with Kratos and his son Atreus exploring Norse mythology. It won numerous Game of the Year awards.", 
   "https://upload.wikimedia.org/wikipedia/en/3/37/God_of_War_%282018%29_Leviathan_Axe_gameplay.gif"],

  ["2020 - Animal Crossing: New Horizons", 
   "This life-simulation game was a massive hit during the pandemic, offering a relaxing and customizable experience. Players develop their island, interact with villagers, and trade with others online.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Animal_Crossing_New_Horizons_Gameplay.jpg/330px-Animal_Crossing_New_Horizons_Gameplay.jpg"],

  ["2022 - Elden Ring", 
   "FromSoftware’s open-world RPG combined the studio’s signature tough gameplay with expansive exploration. Elden Ring became a critical and commercial success with its rich lore and challenge.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Elden_Ring_gameplay.png/330px-Elden_Ring_gameplay.png"],

  ["2023 - The Legend of Zelda: Tears of the Kingdom", 
   "The highly anticipated sequel to Breath of the Wild, this game expands on the vast open-world concept, introducing new mechanics like sky islands and the ability to fuse items.", 
   "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Tears_of_the_kingdom_contraptions.jpg/330px-Tears_of_the_kingdom_contraptions.jpg"]
];



var gamesHTML = "";
if (document.getElementById("gameHTML")) {
    for(let i = 0; i < Games.length; i++){
        gamesHTML += "<div class='col-12 col-sm-12 col-md-6 col-lg-4'>\
                            <div class='border border-3 rounded-4 border-primary p-3 m-3 bg-light'>\
                                <h2 class='text-danger text-center'>";
        for (let j = 0; j < Games[i].length; j++) {
            if (j == 0){
                gamesHTML += Games[i][j] + "</h2> <p class='text-muted'>";
            }
            if (j == 1){
                gamesHTML += Games[i][j] + "</p> <img src='";
            }
            if (j == 2) {
                gamesHTML += Games[i][j] + "' alt='Console' width='350px' height='350px'></img>"
            }
        }
        gamesHTML += "</div> </div>"
    }

    document.getElementById("gameHTML").innerHTML = gamesHTML;
}

const OurPicks = [
    ["XBOX - Assassin's Creed", 
     "the Assassin's Creed video game series depicts a fictional millennia-old struggle between the Order of Assassins, who fight for peace and free will, and the Knights Templar, who desire peace through order and control.", 
     "https://youtu.be/zKua34QXhMA"],
  
    ["PC - Elden Ring", 
     "Elden Ring is a dark fantasy RPG videogame, winner of over 300 Game of the Year awards. A world that was born of a collaboration between George R.R. Martin, best-selling author best known for Game of Thrones, and Hidetaka Miyazaki, creator of the Dark Souls video game series.", 
     "https://youtu.be/AKXiKBnzpBQ?si=gXXEuG67eO151hJD"],
  
    ["PS5 - Dead Space", 
     "Set on a mining spaceship overrun by deadly monsters called Necromorphs following the discovery of an artifact called the Marker, the player controls engineer Isaac Clarke as he navigates the spaceship and fights the Necromorphs while struggling with growing psychosis.", 
     "https://youtu.be/ctQl9wa3ydE?si=FAZS-xLwW3ein7da"],
  
    ["Switch - Mario Cart", 
     "Mulitplayer players controlling a Mario character in races around tracks. Tracks are themed around locales from the Super Mario series populated with power-ups that help players gain advantages in races.", 
     "https://youtu.be/tKlRN2YpxRE?si=M2ld4Tm35KdXVAJu"],

     ["VR - Half Life: Alyx", 
        "Earth has been conquered by the alien Combine, who have implemented a brutal police state.[9] In City 17, Alyx Vance (Ozioma Akagha) and her father Eli (James Moses Black) are arrested by Combine forces as part of a crackdown on the Resistance.", 
        "https://youtu.be/3uKUSnY0HVs?si=z4GzX0m8majaUCuX"],

    ["Mobile - Slay the spire", 
        "In Slay the Spire, the player attempts to ascend a spire of multiple floors created through procedural generation as one of four characters, battling through enemies and bosses.", 
        "https://www.youtube.com/watch?v=EQgbV9Dc6bQ"]

];

var consolesHTMLPicks = "";
if (document.getElementById("consoleHTMLPicks")) {
    for (let i = 0; i < OurPicks.length; i++) {
        consolesHTMLPicks += "<div class='col-12 col-sm-12 col-md-6 col-lg-6'>\
                            <div id='youtube' class='border border-3 rounded-4 border-primary p-3 m-3 bg-light'>\
                                <h2 class='text-danger text-center'>";
        for (let j = 0; j < OurPicks[i].length; j++) {
            if (j == 0) {
                consolesHTMLPicks += OurPicks[i][j] + "</h2> <p id='youtubetext' class='text-muted'>";
            }
            if (j == 1) {
                consolesHTMLPicks += OurPicks[i][j] + "</p>";
            }
            if (j == 2) {
                // Assume OurPicks[i][2] is a valid YouTube URL
                let videoURL = OurPicks[i][2];

                // Convert YouTube URLs to embeddable format if needed
                if (videoURL.includes('youtube.com/watch?v=')) {
                    videoURL = videoURL.replace('watch?v=', 'embed/');
                } else if (videoURL.includes('youtu.be/')) {
                    videoURL = videoURL.replace('youtu.be/', 'youtube.com/embed/');
                }

                consolesHTMLPicks += "<iframe width='auto' height='auto' src='" + videoURL + "' frameborder='0' allowfullscreen></iframe>";
            }
        }
        consolesHTMLPicks += "</div> </div>";
    }

    document.getElementById("consoleHTMLPicks").innerHTML = consolesHTMLPicks;
}