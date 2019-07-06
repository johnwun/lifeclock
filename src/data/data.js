// rank is value from 1 to 10 reflecting its heaviness on the map (10 is heaviest).

export const data = {
  cfg: {
    start: "01 January 1970",
    end: "31 December 2070"
  },
  years: {
    offset: 100,
    fontSize: 17,
    color: [0],
    lineColor: [0, 0, 0],
    default: true,
    list: [
      { name: "1980", start: "1 January 1980", rank: 10 },
      { name: "1990", start: "1 January 1990", rank: 10 },
      { name: "2000", start: "1 January 2000", rank: 10 },
      { name: "2010", start: "1 January 2010", rank: 10 },
      { name: "2020", start: "1 January 2020", rank: 10 },
      { name: "2030", start: "1 January 2030", rank: 10 },
      { name: "2040", start: "1 January 2040", rank: 10 },
      { name: "2050", start: "1 January 2050", rank: 10 },
      { name: "2060", start: "1 January 2060", rank: 10 }
    ]
  },
  age: {
    offset: 97.5,
    color: [114, 100, 40],
    fontSize: 12,
    list: [
      { name: "BIRTH", start: "23 October 1971", rank: 10 },
      { name: "10 yo", start: "23 October 1981", rank: 5 },
      { name: "12 yo", start: "23 October 1983", rank: 5 },
      { name: "16 yo", start: "23 October 1987", rank: 10 },
      { name: "18 yo", start: "23 October 1989", rank: 10 },
      { name: "20 yo", start: "23 October 1991", rank: 10 },
      { name: "21 yo", start: "23 October 1992", rank: 10 },
      { name: "30 yo", start: "23 October 2001", rank: 10 },
      { name: "40 yo", start: "23 October 2011", rank: 10 },
      { name: "50 yo", start: "23 October 2021", rank: 10 },
      { name: "60 yo", start: "23 October 2031", rank: 10 },
      { name: "66.5 (Retirement)", start: "23 October 2038", rank: 10 },
      { name: "70 yo", start: "23 October 2041", rank: 10 },
      { name: "80 yo", start: "23 October 2051", rank: 10 },
      { name: "90 yo", start: "23 October 2061", rank: 10 }
    ]
  },

  computers: {
    offset: 39,
    color: [20, 30, 44],
    fontSize: 8,
    list: [
      { name: "Apple IIe", start: "1 January 1983" },
      { name: "Apple IIGS", start: "1 December 1992" },
      { name: "Windows 3.1", start: "2 August 1992" },
      { name: "Windows 95", start: "24 June 1995" },
      { name: "Windows98", start: "25 June 1998" },
      { name: "WindowsXP", start: "25 October 2001" },
      { name: "Windows 7", start: "31 July 2009" },
      { name: "Windows 8", start: "1 October 2012" },
      { name: "Windows 10", start: "29 July 2015" },
      { name: "Mac OS X 10.0 Cheetah", start: "March 24, 2001 " },
      { name: "Mac OS X 10.1 Puma", start: "September 25, 2001 " },
      { name: "Mac OS X 10.2 Jaguar", start: "August 24, 2002 " },
      { name: "Mac OS X 10.3 Panther", start: "October 24, 2003 " },
      { name: "Mac OS X 10.4 Tiger", start: "April 29, 2005 " },
      { name: "Mac OS X 10.5 Leopard", start: "October 26, 2007 " },
      { name: "Mac OS X 10.6 Snow Leopard", start: "August 28, 2009 " },
      { name: "Mac OS X 10.7 Lion", start: "July 20, 2011 " },
      { name: "OS X 10.8 Mountain Lion", start: "July 25, 2012 " },
      { name: "OS X 10.9 Mavericks", start: "October 22, 2013 " },
      { name: "OS X 10.10 Yosemite", start: "October 16, 2014 " },
      { name: "OS X 10.11 El Capitan", start: "September 30, 2015 " },
      { name: "macOS 10.12 Sierra", start: "September 20, 2016 " },
      { name: "macOS 10.13 High Sierra", start: "September 25, 2017" },
      { name: "macOS 10.14 Mojave", start: "September 24, 2018" }
    ]
  },
  albums: {
    offset: 64,
    color: [30, 130, 74],
    fontSize: 8,
    list: [
      { name: "Accept: Balls to the Wall", start: "5 December 1983" },
      { name: "And Justice for All", start: "25 August 1988", rank: 10 },
      { name: "Appetite for Destruction", start: "July 21, 1987" },
      { name: "August And Everything After", start: "September 1993", rank: 8 },
      { name: "Back in Black", start: "31 October 1980" },
      { name: "Bad Co", start: "26 June 1974" },
      { name: "Blood on the Tracks", start: "17 January 1975", rank: 10 },
      { name: "Blood Sugar Sex Magik", start: "September 24, 1991", rank: 10 },
      { name: "DIO", start: "1 January 1983" },
      { name: "Garage Days", start: "21 August 1987", rank: 10 },
      { name: "Holy Diver", start: "May 25, 1983", rank: 8 },
      { name: "How Did You Find Me Here", start: "1 Jan 1989" },
      { name: "Hysteria", start: "3 August 1987", rank: 4 },
      { name: "Kill Em All", start: "July 25, 1983", rank: 10 },
      { name: "LA Woman", start: "April 19, 1971" },
      { name: "Love at first Sting", start: "27 March 1984" },
      { name: "Master of Puppets", start: "3 March 1986", rank: 10 },
      { name: "Mothers Milk", start: "August 16, 1989", rank: 10 },
      { name: "Nirvana: Nevermind", start: "September 10, 1991", rank: 10 },
      { name: "Nirvana: Nevermind", start: "September 10, 1991", rank: 10 },
      { name: "Out of the Cellar", start: "1 January 1984" },
      { name: "Piece of Mind", start: "1 January 1983" },
      { name: "Police: Synchronicity", start: "17 June 1983" },
      { name: "Pyromania", start: "20 January 1983" },
      { name: "Ride the Lightning", start: "July 27, 1984", rank: 10 },
      { name: "Sacred Heart", start: "August 15, 1985", rank: 4 },
      { name: "Shout at the Devil", start: "1 January 1983" },
      { name: "Stay Hungry", start: "May 10, 1984" },
      { name: "Stu Hamm Radio Free Albemuth", start: "1988", rank: 10 },
      {
        name: "Tesla Great Radio Controversy",
        start: "February 1, 1989",
        rank: 10
      },
      { name: "The Wall", start: "30 November 1979", rank: 6 },
      { name: "Van Halen", start: "1 January 1978", rank: 10 },
      { name: "ZZ Top: Eliminator", start: "March 23, 1983" }
    ]
  },
  games: {
    offset: 76,
    color: [130, 60, 254],
    fontSize: 8,
    list: [
      { name: "Asteroids", start: "November 1979" },
      { name: "Baldur's Gate", start: "December 21, 1998" },
      { name: "Bioshock", start: "August 21, 2007" },
      { name: "Borderlands 2", start: "Sep 17, 2012" },
      { name: "Borderlands The Pre-Sequel", start: "Oct 13, 2014" },
      { name: "Borderlands", start: "Oct 13, 2009" },
      { name: "Centipede", start: "1 June 1981" },
      { name: "Civilization V", start: "Sep 21, 2010" },
      { name: "COD Modern Warfare", start: "November 5, 2007" },
      { name: "Conan Exiles", start: "May 8, 2018" },
      { name: "Dark Messiah of Might & Magic", start: "24 October 2006" },
      { name: "Defender", start: "March 1981" },
      { name: "Deus Ex: Human Revolution", start: "August 23, 2011" },
      { name: "Diablo 2", start: "June 29, 2000" },
      { name: "Diablo 3", start: "May 15, 2012" },
      { name: "Diablo", start: "31 December 1996" },
      { name: "Dig Dug", start: "May 1, 1982" },
      { name: "Donkey Kong", start: "July 31, 1981" },
      { name: "DOOM", start: "26 June 2009" },
      { name: "DOOM", start: "December 10, 1993" },
      { name: "Dragons Lair", start: "1983", rank: 8 },
      { name: "Fallout", start: "30 September 1997" },
      { name: "FarCry", start: "23 March 2004" },
      { name: "Frogger", start: "October 23, 1981", rank: 8 },
      { name: "Gauntlet", start: "October 1985", rank: 8 },
      { name: "GTA4", start: "April 29, 2008" },
      { name: "GTA5", start: "September 17, 2013" },
      { name: "Half-Life", start: "19 November 1998" },
      { name: "Hitman", start: "March 11, 2016" },
      { name: "Joust", start: "July 16, 1982" },
      { name: "Mario Bros", start: "July 20, 1983", rank: 8 },
      { name: "MaxPayne", start: "July 23, 2001" },
      { name: "Minecraft", start: "May 17, 2009" },
      { name: "Missle Command", start: "July, 1980", rank: 8 },
      { name: "No Mans Sky", start: "August 9, 2016" },
      { name: "Oblivion", start: "March 20, 2006" },
      { name: "Pong", start: "29 November 1972", rank: 8 },
      { name: "Quake", start: "22 June 1996" },
      { name: "RAGE", start: "October 4, 2011" },
      { name: "Rainbow Six: Vegas", start: "November 20, 2006" },
      { name: "Risen", start: "October 2, 2009" },
      { name: "S.T.A.L.K.E.R.", start: "March 20, 2007" },
      { name: "Skyrim", start: "November 11, 2011" },
      { name: "Space Invaders", start: "July 1978" },
      { name: "Starcraft 2", start: "July 27, 2010" },
      { name: "Starcraft", start: "March 31, 1998" },
      { name: "Tetris", start: "10 October 1985" },
      { name: "The Bards Tale", start: "May 17, 1985" },
      { name: "The Immortal", start: "November 1990" },
      { name: "Unreal", start: "1 June 1999" },
      { name: "Warcraft", start: "1 November 1994" },
      { name: "Witcher 2", start: "May 17, 2011" },
      { name: "Witcher 3", start: "May 19, 2015" },
      { name: "Witcher", start: "October 26, 2007" },
      { name: "Wolfenstein 3D", start: "May 5, 1992" },
      { name: "Wolfenstein", start: "August 18, 2009" },
      { name: "XCOM 2", start: "Feb 4, 2016" },
      { name: "Pac Man", start: "May 22, 1980" }
    ]
  },
  presidents: {
    offset: 42,
    color: [140, 70, 44],
    fontSize: 8,

    default: true,
    list: [
      { name: "Nixon", start: "1/23/1970", end: "9/9/1974" },
      { name: "Ford", start: "9/9/1974", end: "1/20/1977" },
      { name: "Carter", start: "1/20/1977", end: "1/20/1981" },
      { name: "Regan", start: "1/20/1981", end: "1/20/1989" },
      { name: "Bush Sr.", start: "1/20/1989", end: "1/20/1993" },
      { name: "Clinton", start: "1/20/1993", end: "1/20/2001" },
      { name: "Bush Jr.", start: "1/20/2001", end: "1/20/2009" },
      { name: "Obama", start: "1/20/2009", end: "1/20/2017" },
      { name: "Trump", start: "1/20/2017", end: "1/20/2020" }
    ]
  },
  movies: {
    offset: 92,
    color: [40, 100, 144],
    fontSize: 8,

    default: true,
    list: [
      // 70s
      { name: "A Clockwork Orange", start: "2 February 1972", rank: 1 },
      { name: "Alien", start: "22 June 1979", rank: 10 },
      { name: "Animal House", start: "28 July 1978", rank: 4 },
      { name: "Apocalypse Now", start: "15 August 1979", rank: 3 },
      { name: "Carrie", start: "16 November 1976", rank: 3 },
      {
        name: "Close Encounters of the Third Kind",
        start: "14 December 1977",
        rank: 10
      },
      { name: "Dawn of the Dead", start: "24 May 1979", rank: 7 },
      { name: "The Piano", start: "November 2, 1993", rank: 7 },
      { name: "Godfather ", start: "24 March 1972", rank: 5 },
      { name: "Grease", start: "16 June 1978", rank: 1 },
      { name: "Jaws", start: "20 June 1975", rank: 10 },
      { name: "King Kong", start: "17 December 1976", rank: 5 },
      { name: "Logan's Run", start: "23 June 1976", rank: 4 },
      { name: "Mad Max", start: "21 March 1980", rank: 1 },
      { name: "Moonraker", start: "29 June 1979", rank: 6 },
      {
        name: "One Flew Over the Cuckoo's Nest",
        start: "19 November 1975",
        rank: 1
      },
      { name: "Rocky", start: "3 December 1976", rank: 10 },
      {
        name: "Star Wars: Episode IV - A New Hope",
        start: "25 May 1977",
        rank: 10
      },
      { name: "Superman", start: "15 December 1978", rank: 9 },
      { name: "Taxi Driver", start: "8 February 1976", rank: 5 },
      { name: "Rocky Horror Picture Show", start: "31 August 1975", rank: 10 },
      { name: "Watership Down", start: "1 November 1978", rank: 2 },
      //80s
      { name: "A Fish Called Wanda", start: "5 August 1988", rank: 3 },
      { name: "Aliens", start: "18 July 1986", rank: 8 },
      { name: "Amadeus", start: "19 September 1984", rank: 3 },
      { name: "Back to the Future", start: "3 July 1985", rank: 7 },
      { name: "Batman", start: "23 June 1989", rank: 8 },
      { name: "Beetlejuice", start: "30 March 1988", rank: 7 },
      { name: "Blade Runner", start: "25 June 1982", rank: 10 },
      { name: "Blue Velvet", start: "23 October 1986 ", rank: 4 },
      { name: "Brazil", start: "18 December 1985", rank: 1 },
      { name: "Breakfast Club ", start: "15 February 1985", rank: 7 },
      { name: "Chariots of Fire", start: "9 April 1982", rank: 2 },
      { name: "Color Purple ", start: "7 February 1986", rank: 4 },
      { name: "Commando", start: "4 October 1985", rank: 10 },
      { name: "Conan the Barbarian", start: "14 May 1982", rank: 8 },
      { name: "Das Boot", start: "10 February 1982", rank: 6 },
      { name: "Dead Poets Society", start: "9 June 1989", rank: 10 },
      { name: "Die Hard", start: "20 July 1988", rank: 10 },
      { name: "E.T. the Extra-Terrestrial", start: "11 June 1982", rank: 10 },
      { name: "Elephant Man ", start: "10 October 1980", rank: 3 },
      { name: "First Blood", start: "22 October 1982", rank: 10 },
      { name: "Full Metal Jacket", start: "10 July 1987", rank: 8 },
      { name: "Gandhi", start: "25 February 1983", rank: 5 },
      { name: "Ghostbusters", start: "8 June 1984", rank: 8 },
      { name: "Heathers", start: "31 March 1989", rank: 8 },
      { name: "Heavy Metal", start: "7 August 1981", rank: 10 },
      { name: "Highlander", start: "7 March 1986", rank: 10 },
      { name: "Platoon", start: "6 February 1987", rank: 10 },
      { name: "Porky's", start: "19 March 1982", rank: 7 },
      { name: "Predator", start: "12 June 1987", rank: 10 },
      { name: "Princess Bride ", start: "9 October 1987", rank: 10 },
      { name: "Raiders of the Lost Ark", start: "12 June 1981", rank: 10 },
      { name: "Rain Man", start: "16 December 1988", rank: 2 },
      { name: "Road House", start: "19 May 1989", rank: 2 },
      { name: "Running Man ", start: "13 November 1987", rank: 5 },
      { name: "Scarface", start: "9 December 1983", rank: 4 },
      { name: "Shining ", start: "13 June 1980", rank: 9 },
      { name: "Sixteen Candles", start: "4 May 1984", rank: 6 },
      { name: "Sophie's Choice", start: "4 March 1983", rank: 6 },
      { name: "Stand by Me", start: "26 November 1986", rank: 8 },
      {
        name: "Star Wars: Episode V -  Empire Strikes Back",
        start: "20 June 1980",
        rank: 10
      },
      {
        name: "Star Wars: Episode VI - Return of the Jedi",
        start: "25 May 1983",
        rank: 10
      },
      { name: "Starman", start: "14 December 1984", rank: 4 },
      { name: "Terminator ", start: "26 October 1984", rank: 10 },
      { name: "Blue Lagoon", start: "2 July 1980", rank: 3 },
      { name: "They Live", start: "4 November 1988", rank: 10 },
      { name: "Thing ", start: "25 June 1982", rank: 10 },
      { name: "Time Bandits", start: "6 November 1981", rank: 5 },
      { name: "TRON", start: "9 July 1982", rank: 10 },
      { name: "Weird Science ", start: "2 August 1985", rank: 8 },
      //90s
      { name: "Apollo 13", start: "30 June 1995", rank: 2 },
      { name: "Batman Returns", start: "19 June 1992", rank: 2 },
      { name: "Boondock Saints", start: "19 November 1999", rank: 10 },
      { name: "Bram Stoker's Dracula", start: "13 November 1992", rank: 7 },
      { name: "Braveheart", start: "24 May 1995", rank: 3 },
      { name: "Fifth Element", start: "9 May 1997", rank: 10 },
      { name: "From Dusk Till Dawn", start: "19 January 1996", rank: 8 },
      { name: "Home Alone", start: "16 November 1990", rank: 1 },
      { name: "Independence Day", start: "3 July 1996", rank: 4 },
      { name: "Jurassic Park", start: "11 June 1993", rank: 10 },
      { name: "L.A. Confidential", start: "19 September 1997", rank: 5 },
      { name: "Léon:  Professional", start: "18 November 1994", rank: 10 },
      { name: "Mars Attacks!", start: "13 December 1996", rank: 8 },
      { name: "Matrix", start: "31 March 1999", rank: 10 },
      { name: "Natural Born Killers", start: "26 August 1994", rank: 2 },
      { name: "Office Space", start: "19 February 1999", rank: 2 },
      { name: "Point Break", start: "12 July 1991", rank: 1 },
      { name: "Shawshank Redemption", start: "14 October 1994", rank: 10 },
      { name: "Silence of the Lambs", start: "14 February 1991", rank: 10 },
      { name: "Starship Troopers", start: "7 November 1997", rank: 5 },
      { name: "Total Recall", start: "1 June 1990", rank: 5 },
      { name: "Toy Story", start: "22 November 1995", rank: 8 },
      { name: "True Romance", start: "10 September 1993", rank: 6 },
      { name: "Usual Suspects", start: "15 September 1995", rank: 10 },
      { name: "Waterworld", start: "28 July 1995", rank: 1 },
      // 2000s
      { name: "Amélie", start: "8 February 2002", rank: 7 },
      { name: "Avatar", start: "18 December 2009", rank: 0 },
      { name: "Bourne Identity", start: "14 June 2002", rank: 4 },
      { name: "Cast Away", start: "22 December 2000", rank: 4 },
      { name: "Children of Men", start: "5 January 2007", rank: 1 },
      { name: "Constantine", start: "18 February 2005", rank: 4 },
      { name: "District 9", start: "14 August 2009", rank: 5 },
      { name: "Finding Nemo", start: "30 May 2003", rank: 10 },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        start: "16 November 2001",
        rank: 10
      },
      { name: "Hostel", start: "6 January 2006", rank: 10 },
      { name: "Idiocracy", start: "25 January 2007", rank: 10 },
      { name: "In Bruges", start: "29 February 2008", rank: 8 },
      { name: "Iron Man", start: "2 May 2008", rank: 10 },
      { name: "Jurassic Park III", start: "18 July 2001", rank: 3 },
      { name: "King Kong", start: "14 December 2005", rank: 4 },
      {
        name: "Lord of the Rings:  Fellowship of the Ring",
        start: "19 December 2001",
        rank: 10
      },
      {
        name: "Lord of the Rings:  Return of the King",
        start: "17 December 2003",
        rank: 10
      },
      {
        name: "Lord of the Rings:  Two Towers",
        start: "18 December 2002",
        rank: 10
      },
      { name: "Memento", start: "25 May 2001", rank: 10 },
      { name: "Men in Black II", start: "3 July 2002", rank: 6 },
      { name: "Men in Black", start: "2 July 1997", rank: 10 },
      { name: "Monsters, Inc.", start: "2 November 2001", rank: 9 },
      { name: "Napoleon Dynamite", start: "27 August 2004", rank: 3 },
      { name: "Ocean's Eleven", start: "7 December 2001", rank: 1 },
      {
        name: "Pirates of the Caribbean:  Curse of the Black Pearl",
        start: "9 July 2003",
        rank: 10
      },
      { name: "Ratatouille", start: "29 June 2007", rank: 3 },
      { name: "Reign of Fire", start: "12 July 2002", rank: 10 },
      { name: "Resident Evil", start: "15 March 2002", rank: 6 },
      { name: "Saw", start: "29 October 2004", rank: 2 },
      { name: "School of Rock", start: "3 October 2003", rank: 3 },
      { name: "Serenity", start: "30 September 2005", rank: 10 },
      { name: "Shrek", start: "18 May 2001", rank: 10 },
      { name: "Spider-Man 2", start: "30 June 2004", rank: 4 },
      { name: "Spider-Man 3", start: "4 May 2007", rank: 3 },
      { name: "The Dark Knight", start: "18 July 2008", rank: 10 },
      { name: "Van Helsing", start: "7 May 2004", rank: 4 },
      { name: "WALL·E", start: "27 June 2008", rank: 5 },
      { name: "X-Men:  Last Stand", start: "26 May 2006", rank: 2 },
      { name: "X2: X-Men United", start: "2 May 2003", rank: 4 },
      { name: "Zombieland", start: "2 October 2009", rank: 5 },
      //2010s
      { name: "Avengers: Infinity War", start: "27 April 2018", rank: 10 },
      { name: "Avengers", start: "4 May 2012", rank: 10 },
      { name: "Black Panther", start: "16 February 2018", rank: 3 },
      { name: "BlacKkKlansman", start: "10 August 2018", rank: 5 },
      { name: "Bohemian Rhapsody", start: "2 November 2018", rank: 7 },
      { name: "Deadpool", start: "12 February 2016", rank: 10 },
      { name: "Doctor Strange", start: "4 November 2016", rank: 4 },
      { name: "Get Out", start: "24 February 2017", rank: 3 },
      { name: "Guardians of the Galaxy", start: "1 August 2014", rank: 4 },
      { name: "It", start: "8 September 2017", rank: 10 },
      { name: "Logan", start: "3 March 2017", rank: 10 },
      { name: "Ready Player One", start: "29 March 2018", rank: 5 },
      {
        name: "Rogue One: A Star Wars Story",
        start: "16 December 2016",
        rank: 10
      },
      { name: "Star Wars:  Last Jedi", start: "15 December 2017", rank: 10 },
      { name: "Thor: Ragnarok", start: "3 November 2017", rank: 4 },
      { name: "Thor", start: "6 May 2011", rank: 7 },
      { name: "Venom", start: "5 October 2018", rank: 3 },
      { name: "Vice", start: "25 December 2018", rank: 5 },
      { name: "Wonder Woman", start: "2 June 2017", rank: 3 },
      { name: "The Dark Knight", start: "July 14, 2008", rank: 8 },
      { name: "Inception", start: "July 13, 2010", rank: 5 },
      { name: "Django", start: "December 25, 2012", rank: 5 },
      { name: "Wolf of Wall Street", start: "December 25, 2013", rank: 6 },
      { name: "Interstellar", start: "October 26, 2014", rank: 5 },
      { name: "Mad Max Fury Road", start: "May 15, 2015", rank: 5 },
      { name: "Ex Machina", start: "April 24, 2015", rank: 5 },
      {
        name: "The Girl with All the Gifts",
        start: "23 September 2016",
        rank: 5
      },
      { name: "Blade Runner 2049", start: "6 October 2017", rank: 5 }
    ]
  }
};