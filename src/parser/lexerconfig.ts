import SHTokenDefn from "./tokendefn.js";
export default class SHLexerConfig {
	static SINGLE_QUOTE: any = `\'`;
	static COMMA: any = `,`;
	static DOT: any = `.`;
	static SPACE: any = `[ \t\s]`;

	static tokenDefinitions: any = {
		DASH: `\-`, // MINUS
		PLUS: `\\+`,
		SLASH: `\/`,
		COLON: ":",
		COMMA: SHLexerConfig.COMMA,
		SINGLE_QUOTE: SHLexerConfig.SINGLE_QUOTE,
		SPACE: `${SHLexerConfig.SPACE}`,
		// ********* numeric rules **********
		INT_00: "00",
		INT_01: "01",
		INT_02: "02",
		INT_03: "03",
		INT_04: "04",
		INT_05: "05",
		INT_06: "06",
		INT_07: "07",
		INT_08: "08",
		INT_09: "09",
		INT_10: "10",
		INT_11: "11",
		INT_12: "12",
		INT_13: "13",
		INT_14: "14",
		INT_15: "15",
		INT_16: "16",
		INT_17: "17",
		INT_18: "18",
		INT_19: "19",
		INT_20: "20",
		INT_21: "21",
		INT_22: "22",
		INT_23: "23",
		INT_24: "24",
		INT_25: "25",
		INT_26: "26",
		INT_27: "27",
		INT_28: "28",
		INT_29: "29",
		INT_30: "30",
		INT_31: "31",
		INT_32: "32",
		INT_33: "33",
		INT_34: "34",
		INT_35: "35",
		INT_36: "36",
		INT_37: "37",
		INT_38: "38",
		INT_39: "39",
		INT_40: "40",
		INT_41: "41",
		INT_42: "42",
		INT_43: "43",
		INT_44: "44",
		INT_45: "45",
		INT_46: "46",
		INT_47: "47",
		INT_48: "48",
		INT_49: "49",
		INT_50: "50",
		INT_51: "51",
		INT_52: "52",
		INT_53: "53",
		INT_54: "54",
		INT_55: "55",
		INT_56: "56",
		INT_57: "57",
		INT_58: "58",
		INT_59: "59",
		INT_60: "60",
		INT_61: "61",
		INT_62: "62",
		INT_63: "63",
		INT_64: "64",
		INT_65: "65",
		INT_66: "66",
		INT_67: "67",
		INT_68: "68",
		INT_69: "69",
		INT_70: "70",
		INT_71: "71",
		INT_72: "72",
		INT_73: "73",
		INT_74: "74",
		INT_75: "75",
		INT_76: "76",
		INT_77: "77",
		INT_78: "78",
		INT_79: "79",
		INT_80: "80",
		INT_81: "81",
		INT_82: "82",
		INT_83: "83",
		INT_84: "84",
		INT_85: "85",
		INT_86: "86",
		INT_87: "87",
		INT_88: "88",
		INT_89: "89",
		INT_90: "90",
		INT_91: "91",
		INT_92: "92",
		INT_93: "93",
		INT_94: "94",
		INT_95: "95",
		INT_96: "96",
		INT_97: "97",
		INT_98: "98",
		INT_99: "99",

		INT_0: "0",
		INT_1: "1",
		INT_2: "2",
		INT_3: "3",
		INT_4: "4",
		INT_5: "5",
		INT_6: "6",
		INT_7: "7",
		INT_8: "8",
		INT_9: "9",

		DIGIT: "[0-9]+", //  fragment

		ONE: "one",
		TWO: "two",
		THREE: "three",
		FOUR: "four",
		FIVE: "five",
		SIX: "six",
		SEVEN: "seven",
		EIGHT: "eight",
		NINE: "nine",
		TEN: "ten",
		ELEVEN: "eleven",
		TWELVE: "twelve",
		THIRTEEN: "thirteen",
		FOURTEEN: "fourteen",
		FIFTEEN: "fifteen",
		SIXTEEN: "sixteen",
		SEVENTEEN: "seventeen",
		EIGHTEEN: "eightt?een",
		NINETEEN: "nineteen",
		TWENTY: "twenty",
		THIRTY: "thirty",

		FIRST: "first",
		SECOND: "seconds?|secs?",
		THIRD: "third",
		FOURTH: "fourth",
		FIFTH: "fifth",
		SIXTH: "sixth",
		SEVENTH: "seventh",
		EIGHTH: "eighth",
		NINTH: "ninth",
		TENTH: "tenth",
		ELEVENTH: "eleventh",
		TWELFTH: "twelfth",
		THIRTEENTH: "thirteenth",
		FOURTEENTH: "fourteenth",
		FIFTEENTH: "fifteenth",
		SIXTEENTH: "sixteenth",
		SEVENTEENTH: "seventeenth",
		EIGHTEENTH: "eighteenth",
		NINETEENTH: "nineteenth",
		TWENTIETH: "twentieth",
		THIRTIETH: "thirtieth",

		// ********** month rules **********

		FARVARDIN: "far(vardin)?",
		ORDIBEHESHT: "ord(ibehesht)?",
		KHORDAD: "kho(rdad)?",
		TIR: "tir",
		AMORDAD: "amo(rdad)?|mor(dad)?",
		SHAHRIVAR: "sha(hrivar)?",
		MEHR: "mehr?",
		ABAN: "aban?",
		AZAR: "azar?",
		DEY: "dey",
		BAHMAN: "bah(man)?",
		ESFAND: "es[fp]{1}and|es[fp]{1}",

		MICROSECOND: "microsecond|usec",
		MILLISECOND: "millisecond|msec|µsec|ms|µs",
		HOUR: "hours?",
		MINUTE: "minutes?|mins?",
		DAY: "days?",
		WEEKDAY: "weekdays?",
		WEEK: "weeks?",
		MONTH: "months?|mons?",
		YEAR: "years?",
		FORTNIGHT: "forth?night",

		TODAY: "today",
		TOMORROW: "tomorrow",
		TONIGHT: "tonight",
		YESTERDAY: "yesterday",

		// ********** date rules **********

		SATURDAY: "sat(urday)?",
		SUNDAY: "sun(day)?",
		MONDAY: "mon(day)?",
		TUESDAY: "tue(sday)?",
		WEDNESDAY: "wed(nesday)?",
		THURSDAY: "thu(rsday)?",
		FRIDAY: "fri(day)?|weekend",

		// ********** common rules **********

		THIS: "this",
		OF: "of",
		LAST: "last",
		NEXT: "next",
		NOW: "now",
		AGO: "ago",
		BEFORE: "before",
		START: "start",
		END: "end",
		PREVIOUS: "previous",

		// ********** suffixes **********

		SUFFIXES: "st|nd|rd|th", //[stndrh]
		// ST: "st", ND: "nd", RD: "rd", TH: "th",

		// ********** time rules **********

		AT: "@",
		BACK: "back",
		FRONT: "front",
		AM: "a" + SHLexerConfig.DOT + "?m" + SHLexerConfig.DOT + "?",
		PM: "p" + SHLexerConfig.DOT + "?m" + SHLexerConfig.DOT + "?",

		MIDNIGHT: "mid-?night",
		NOON: "noon|after-?noon",
		MORNING: "morning",
		EVENING: "evening|eve",
		NIGHT: "night",

		SIGN_TIME: "t",
		SIGN_WEEK: "w",
		UTC: "utc|gmt",
		EST: "est",
		EDT: "edt",
		CST: "cst",
		CDT: "cdt",
		MST: "mst",
		MDT: "mdt",
		PST: "pst",
		PDT: "pdt",

		// ********** date rules **********

		INT_VIII: "viii", // 8
		INT_VII: "vii", // 7
		INT_VI: "vi", // 6
		INT_V: "v", // 5
		INT_XII: "xii", // 12
		INT_XI: "xi", // 11
		INT_X: "x", // 10
		INT_IX: "ix", // 9
		INT_IV: "iv", // 4
		INT_III: "iii", // 3
		INT_II: "ii", // 2
		INT_I: "i", // 1

		// ********** holiday specific **********

		// "FOOL"         : 'fool|fools|fool'+SHLexerConfig.SINGLE_QUOTE+'s',
		// "BLACK"        : 'black',
		// "CHRISTMAS"    : '(christmas|xmas|x-mas)(es)?',
		// "COLUMBUS"     : 'columbus',
		// "EARTH"        : 'earth',
		// "EASTER"       : 'easter',
		// "FATHER"       : 'father|fathers|father'+SHLexerConfig.SINGLE_QUOTE+'s',
		// "FLAG"         : 'flag',
		// "GOOD"         : 'good',
		// "GROUNDHOG"    : SHLexerConfig.GROUND .SHLexerConfig.SPACE+'?'+SHLexerConfig.HOG .SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "HALLOWEEN"    : '(halloween|haloween)s?',
		// "INAUGURATION" : 'inauguration|inaugaration',
		// "INDEPENDENCE" : 'independence|independance',
		// "KWANZAA"      : '(kwanzaa?)s?',
		// "LABOR"        : 'labor',
		// "MLK"          : 'mlk|martin'+SHLexerConfig.SPACE+'luther'+SHLexerConfig.SPACE+'king('+SHLexerConfig.COMMA.SHLexerConfig.SPACE+'jr'+SHLexerConfig.DOT+')?',
		// "MEMORIAL"     : 'memorial',
		// "MOTHER"       : 'mother'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "NEW"          : 'new',
		// "PALM"         : 'palm',
		// "PATRIOT"      : 'patriot'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "PRESIDENT"    : 'president'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "PATRICK"      : '(patrick|patty|paddy)'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "SAINT"        : 'saint',
		// "TAX"          : 'tax',
		// "THANKSGIVING" : 'thanksgivings?',
		// "ELECTION"     : 'election',
		// "VALENTINE"    : 'valentine'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "VETERAN"      : 'veteran'+SHLexerConfig.SINGLE_QUOTE+'?s?',
		// "GROUND" 	   : SHLexerConfig.GROUND,//  fragment
		// "HOG"    	   : SHLexerConfig.HOG,//  fragment

		// ********** season specific **********

		// WINTER: "winters?",
		// FALL: "falls?",
		// AUTUMN: "autumns?",
		// SPRING: "springs?",
		// SUMMER: "summers?",

		TZ: "[A-Za-z]{3,6}",

		DOT: `${SHLexerConfig.DOT}`,
		UNKNOWN_CHAR: `[^ \t\s${SHLexerConfig.DOT}]` //  fragment
	};

	definitions: any[] = [];

	constructor() {
		for (const [key, value] of Object.entries(SHLexerConfig.tokenDefinitions)) {
			if (value instanceof SHTokenDefn) {
				this.addTokenDefinition(value);
			} else if (typeof key === "string" && typeof value === "string") {
				this.addTokenDefinition(new SHTokenDefn(key, value));
			}
		}
	}

	/**
	 * @param TokenDefn tokenDefn
	 */
	public addTokenDefinition(tokenDefn: SHTokenDefn) {
		this.definitions.push(tokenDefn);
	}

	/**
	 * @return TokenDefn[]
	 */
	public getTokenDefinitions() {
		return this.definitions;
	}
}
