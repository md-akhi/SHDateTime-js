/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
import SHToken from "./token.js";

export default class SHLexer {
	static SINGLE_QUOTE: any = `\\'`;
	static COMMA: any = `,`;
	static DOT: any = `.`;
	static SPACE: any = `[ \t\\s]`;

	static tokenDefinitions: any = {
		SPACE: `${SHLexer.SPACE}`,
		DASH: `-`, // MINUS
		PLUS: `\\+`,
		SLASH: `\\/`,
		COLON: ":",
		COMMA: ",",
		SINGLE_QUOTE: SHLexer.SINGLE_QUOTE,

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
		FIRST: "first",
		TWO: "two",
		SECOND: "seconds?|secs?",
		THREE: "three",
		FOUR: "four",
		FIVE: "five",
		SIX: "six",
		SEVEN: "seven",
		EIGHT: "eight",
		NINE: "nine",
		TEN: "ten",
		TENTH: "tenth",
		ELEVEN: "eleven",
		ELEVENTH: "eleventh",
		TWELVE: "twelve",
		TWELFTH: "twelfth",
		THIRD: "third",
		THIRTEEN: "thirteen",
		THIRTEENTH: "thirteenth",
		FOURTH: "fourth",
		FOURTEEN: "fourteen",
		FOURTEENTH: "fourteenth",
		FIFTH: "fifth",
		FIFTEEN: "fifteen",
		FIFTEENTH: "fifteenth",
		SIXTH: "sixth",
		SIXTEEN: "sixteen",
		SIXTEENTH: "sixteenth",
		SEVENTH: "seventh",
		SEVENTEEN: "seventeen",
		SEVENTEENTH: "seventeenth",
		EIGHTH: "eighth",
		EIGHTEEN: "eightt?een",
		EIGHTEENTH: "eighteenth",
		NINTH: "ninth",
		NINETEEN: "nineteen",
		NINETEENTH: "nineteenth",
		TWENTY: "twenty",
		TWENTIETH: "twentieth",
		THIRTIETH: "thirtieth",
		THIRTY: "thirty",

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
		ESFAND: "es[fp]{1}(and)?",

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

		AT: "@",
		BACK: "back",
		FRONT: "front",
		AM: "a" + SHLexer.DOT + "?m" + SHLexer.DOT + "?",
		PM: "p" + SHLexer.DOT + "?m" + SHLexer.DOT + "?",

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

		// "FOOL"         : 'fool|fools|fool'+SHLexer.SINGLE_QUOTE+'s',
		// "BLACK"        : 'black',
		// "CHRISTMAS"    : '(christmas|xmas|x-mas)(es)?',
		// "COLUMBUS"     : 'columbus',
		// "EARTH"        : 'earth',
		// "EASTER"       : 'easter',
		// "FATHER"       : 'father|fathers|father'+SHLexer.SINGLE_QUOTE+'s',
		// "FLAG"         : 'flag',
		// "GOOD"         : 'good',
		// "GROUNDHOG"    : SHLexer.GROUND .SHLexer.SPACE+'?'+SHLexer.HOG .SHLexer.SINGLE_QUOTE+'?s?',
		// "HALLOWEEN"    : '(halloween|haloween)s?',
		// "INAUGURATION" : 'inauguration|inaugaration',
		// "INDEPENDENCE" : 'independence|independance',
		// "KWANZAA"      : '(kwanzaa?)s?',
		// "LABOR"        : 'labor',
		// "MLK"          : 'mlk|martin'+SHLexer.SPACE+'luther'+SHLexer.SPACE+'king('+SHLexer.COMMA.SHLexer.SPACE+'jr'+SHLexer.DOT+')?',
		// "MEMORIAL"     : 'memorial',
		// "MOTHER"       : 'mother'+SHLexer.SINGLE_QUOTE+'?s?',
		// "NEW"          : 'new',
		// "PALM"         : 'palm',
		// "PATRIOT"      : 'patriot'+SHLexer.SINGLE_QUOTE+'?s?',
		// "PRESIDENT"    : 'president'+SHLexer.SINGLE_QUOTE+'?s?',
		// "PATRICK"      : '(patrick|patty|paddy)'+SHLexer.SINGLE_QUOTE+'?s?',
		// "SAINT"        : 'saint',
		// "TAX"          : 'tax',
		// "THANKSGIVING" : 'thanksgivings?',
		// "ELECTION"     : 'election',
		// "VALENTINE"    : 'valentine'+SHLexer.SINGLE_QUOTE+'?s?',
		// "VETERAN"      : 'veteran'+SHLexer.SINGLE_QUOTE+'?s?',
		// "GROUND" 	   : SHLexer.GROUND,//  fragment
		// "HOG"    	   : SHLexer.HOG,//  fragment

		// ********** season specific **********

		// WINTER: "winters?",
		// FALL: "falls?",
		// AUTUMN: "autumns?",
		// SPRING: "springs?",
		// SUMMER: "summers?",

		TZ: "[A-Za-z]{3,6}",

		DOT: `${SHLexer.DOT}`,
		UNKNOWN_CHAR: `[^ \t\\s${SHLexer.DOT}]` //  fragment
	}; //https://github.com/areknawo/AIM

	/** @var string */
	private input: any;

	/** @var int */
	private position: any;

	/** @var int */
	private peek: any;

	/** @var Token[] */
	private tokens: any;

	/** @var Token */
	private lookahead: any;

	/** @var Token */
	private token: any;

	/**
	 * @param string input
	 */
	public constructor(input: any) {
		this.input = input;
		this.reset();
		this.tokens = SHLexer.scan(input);
		this.moveNext();
	}

	/**
	 * @param LexerConfig config
	 * @param string      input
	 *
	 * @return Token[]
	 */
	public static scan(input: any) {
		let tokens: any = [];
		let offset: any,
			position: any = 0;
		//input = input.toLowerCase();
		let i = input.length;
		const tokenDefinitions = Object.entries(SHLexer.tokenDefinitions);
		while (i-- >= 0) {
			let anyMatch = false;
			for (const [tokenName, tokenRegex] of tokenDefinitions) {
				const Regex: RegExp = new RegExp("^" + tokenRegex, "i");
				const match = Regex.exec(input);
				// console.log(input, Regex, match);
				if (match !== null) {
					const len = match[0].length;
					// console.log(input, len, match, Regex);
					if (tokenName.length > 0) {
						tokens.push(
							new SHToken(tokenName, match[0], offset, position, len)
						);
						position++;
					}
					// console.log(input, tokenName, match, offset, position);
					input = input.substr(len);
					// console.log(input);
					anyMatch = true;
					offset += len;
					break;
				}
			}
			if (!anyMatch) {
				//throw new UnknownTokenException(sprintf('At offset %s: %s', offset, substr(input, 0, 16).'...'));
			}
			//inputlen--;
		}

		// console.log(JSON.stringify(tokens, null, 2));
		return tokens;
	}

	/**
	 * @return string
	 */
	public getInput() {
		return this.input;
	}

	/**
	 * @return int
	 */
	public getPosition() {
		return this.position;
	}

	/**
	 * @return Token
	 */
	public getLookahead() {
		return this.lookahead;
	}

	/**
	 * @return Token
	 */
	public getToken() {
		return this.token;
	}

	// public setInput(input: any) {
	// 	this.input = input;
	// 	this.reset();
	// 	this.tokens = SHLexer.scan(input);
	// }

	public reset() {
		this.position = 0;
		this.peek = 0;
		this.token = null;
		this.lookahead = null;
	}

	public resetPeek() {
		this.peek = 0;
	}

	public resetPosition(position = 0) {
		this.position = position - 1;
		this.moveNext();
	}

	/**
	 * @param string tokenName
	 *
	 * @return bool
	 */
	public isNextToken(tokenName: any) {
		return this.lookahead !== false && this.lookahead.getName() === tokenName;
	}

	/**
	 * @param string[] tokenNames
	 *
	 * @return bool
	 */
	public isNextTokenAny(tokenNames: any[]) {
		return (
			this.lookahead !== false &&
			tokenNames.find((value: any[]) => value == this.lookahead.getName())
		);
	}

	/**
	 * @return bool
	 */
	public moveNext() {
		this.peek = 0;
		this.token = this.lookahead;
		if (typeof this.tokens[this.position] !== "undefined") {
			this.lookahead = this.tokens[this.position++];
			return true;
		}
		return (this.lookahead = false);
	}

	/**
	 * @param string tokenName
	 */
	public skipUntil(tokenName: any) {
		while (this.lookahead !== false && this.lookahead.getName() !== tokenName) {
			this.moveNext();
		}
	}

	/**
	 * @param string[] tokenNames
	 */
	public skipTokens(tokenNames: any[]) {
		while (
			this.lookahead !== false &&
			tokenNames.find((value: any[]) => value == this.lookahead.getName())
		) {
			this.moveNext();
		}
	}

	/**
	 * Moves the lookahead token forward.
	 *
	 * @return null|Token
	 */
	public peeks() {
		if (typeof this.tokens[this.position + this.peek] !== "undefined")
			return this.tokens[this.position + this.peek++];
		return false;
	}

	/**
	 * @param string[] tokenNames
	 *
	 * @return null|Token
	 */
	public peekWhileTokens(tokenNames: any[]) {
		let token = this.peeks();
		while (token) {
			if (!tokenNames.find((value: any[]) => value == token.getName())) {
				break;
			}
		}
		return token;
	}

	/**
	 * Peeks at the next token, returns it and immediately resets the peek.
	 *
	 * @return null|Token
	 */
	public glimpse() {
		let peek = this.peeks();
		this.peek = 0;
		return peek;
	}
}
