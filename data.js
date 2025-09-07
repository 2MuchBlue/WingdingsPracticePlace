const Sheet = new Image();
Sheet.src = "OrderedWingdings.png"


class Region {
    constructor( x, y, w=19, h=19, offsetX = 0, offsetY = 0){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
}

const WingdingChars = {
    "A" : new Region(16 *  0, 16 * 0, 16, 16),
    "B" : new Region(16 *  1, 16 * 0, 16, 16),
    "C" : new Region(16 *  2, 16 * 0, 16, 16),
    "D" : new Region(16 *  3, 16 * 0, 16, 16),
    "E" : new Region(16 *  4, 16 * 0, 16, 16),
    "F" : new Region(16 *  5, 16 * 0, 16, 16),
    "G" : new Region(16 *  6, 16 * 0, 16, 16),
    "H" : new Region(16 *  7, 16 * 0, 16, 16),
    "I" : new Region(16 *  8, 16 * 0, 16, 16),
    "J" : new Region(16 *  9, 16 * 0, 16, 16),
    "K" : new Region(16 * 10, 16 * 0, 16, 16),
    "L" : new Region(16 * 11, 16 * 0, 16, 16),
    "M" : new Region(16 * 12, 16 * 0, 16, 16),
    "N" : new Region(16 * 13, 16 * 0, 16, 16),
    "O" : new Region(16 * 14, 16 * 0, 16, 16),
    "P" : new Region(16 * 15, 16 * 0, 16, 16),
    "Q" : new Region(16 *  0, 16 * 1, 16, 16),
    "R" : new Region(16 *  1, 16 * 1, 16, 16),
    "S" : new Region(16 *  2, 16 * 1, 16, 16),
    "T" : new Region(16 *  3, 16 * 1, 16, 16),
    "U" : new Region(16 *  4, 16 * 1, 16, 16),
    "V" : new Region(16 *  5, 16 * 1, 16, 16),
    "W" : new Region(16 *  6, 16 * 1, 16, 16),
    "X" : new Region(16 *  7, 16 * 1, 16, 16),
    "Y" : new Region(16 *  8, 16 * 1, 16, 16),
    "Z" : new Region(16 *  9, 16 * 1, 16, 16),
    "." : new Region(16 * 10, 16 * 1, 16, 16),
    "," : new Region(16 * 12, 16 * 1, 16, 16),
    " " : new Region(0, 0, 0, 0),
}

const NumToLetter = {
    0  : "A",
    1  : "B",
    2  : "C",
    3  : "D",
    4  : "E",
    5  : "F",
    6  : "G",
    7  : "H",
    8  : "I",
    9  : "J",
    10 : "K",
    11 : "L",
    12 : "M",
    13 : "N",
    14 : "O",
    15 : "P",
    16 : "Q",
    17 : "R",
    18 : "S",
    19 : "T",
    20 : "U",
    21 : "V",
    22 : "W",
    23 : "X",
    24 : "Y",
    25 : "Z",
    26 : ".",
    27 : ",",
    28 : " "
}

const Sentances = [
    "Buck Bumble",
    "Buck to the bum to the bum to the bass",
    "Buck to the buck de bumble",
    "Apple Core",
    "Mango",
    "Hello World",
    "ENTRY", "NUMBER",
    "DARK", "DARKER", "YET",
    "THE", "DARKNESS", "KEEPS", "GROWING",
    "SHADOWS", "CUTTING", "DEEPER", 
    "PHOTON", "READINGS", 
    "NEGATIVE", "THIS", "NEXT", "EXPERIMENT", 
    "SEEMS", "VERY", "INTERESTING",
    "WHAT", "DO", "YOU", "TWO", "THINK",
    "Toobular", "Fire", "Green", "Gaster",
    "Hello", "World", "Wing", "Dings", "Undertale",
    "Deltarune", "I", "Just", "Snorted", "A", "Suitcase",
    "full", "of", "coke", "and", "im", "starting", "to",
    "feel", "effects", "Toriel", "Pupyrus", "Sans",
    "Undyne", "Napstablook", "Flowey", "Asriel", "Dreemurr",
    "Alphys", "Hots Fireguy", "Heats Flamesman", "Nicecream guy",
    "Asgore", "Mettaton", "egg", "Tree", "Mad Dummy", "Mad Mew Mew",
    "Some Random Characters AKVLKNLKRSLWPOQUPLMVKN"
]