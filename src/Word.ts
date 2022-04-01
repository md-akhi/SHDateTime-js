import Config from "./Config.js";
import Language_fa_IR from "./I18n/fa_IR.js";
import Language_en_US from "./I18n/en_US.js";

/**
 * list of supported languages
 * @since 1.0.0
 */
enum Language {
	fa_IR = "fa_IR",
	en_US = "en_US"
}

/**
 * Word class
 * @since 1.0.0
 */
export default class Word {
	/**
	 * Get Language class
	 * @param string lang
	 * @return  string
	 * @since   1.0.0
	 */
	static getClassLanguage(lang: string = Config.LANGUAGE_WORD) {
		switch (lang) {
			// Languages
			case Language.fa_IR:
				return Language_fa_IR;
			case Language.en_US:
				return Language_en_US;
			default:
				return Language_en_US;
		}
	}

	/**
	 * Uppercase Ante meridiem and Post meridiem
	 * @param   int  num    numeric
	 * @param   string  LW    language    word
	 * @return  string  Ante/Post meridiem
	 * @since   1.0.0
	 */
	static getMeridienFullNames(H24: number, LW = Config.LANGUAGE_WORD) {
		const cls = Word.getClassLanguage(LW);
		return cls.MERIDIEN_FULL_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * Lowercase Ante meridiem and Post meridiem, two letters
	 * @param   int  num    numeric
	 * @param   string  LW    language    word
	 * @return  string  Ante/Post meridiem, two letters
	 * @since   1.0.0
	 */
	static getMeridienShortNames(H24: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.MERIDIEN_SHORT_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * A full textual representation of a month
	 * @param   int  num    numeric of a month
	 * @return  string  A full textual of a month
	 * @since   1.0.0
	 */
	static getMonthFullNames(month: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.MONTH_FULL_NAMES[month];
	}

	/**
	 * A short textual representation of a month, three letters
	 * @param   int  num    numeric of a month
	 * @return  string  A short textual of a month, three letters
	 * @since   1.0.0
	 */
	static getMonthShortNames(month: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.MONTH_SHORT_NAMES[month];
	}

	/**
	 * A full textual representation of the day of the week
	 * @param   int  num    numeric of the day of the week
	 * @return  string  A full textual the day of the week
	 * @since   1.0.0
	 */
	static getDayFullNames(dow: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.DAY_FULL_NAMES[(dow + Config.FIRST_DAY_OF_WEEK) % 7];
	}

	/**
	 * A short textual representation of the day of the week, three letters
	 * @param   int  num    numeric of the day of the week
	 * @return  string  A short textual of a day, three letters
	 * @since   1.0.0
	 */
	static getDayShortNames(dow: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.DAY_SHORT_NAMES[(dow + Config.FIRST_DAY_OF_WEEK) % 7];
	}

	/**
	 * Ordinal suffix for the day of the month
	 * @param   {int}  $num    numeric the day of the month
	 * @return  string  Ordinal suffix for the day of the month
	 * @since   1.0.0
	 */
	static getSuffixNames(num: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.SuffixNames(num);
	}

	/**
	 *
	 */
	static getConstellationsFullNames(
		month: number,
		LW = Config.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(LW);
		return cls.CONSTELLATIONS_FULL_NAMES[month];
	}

	/**
	 *
	 */
	static getAnimalsFullNames(year: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.ANIMALS_FULL_NAMES[year % 12];
	}

	/**
	 *
	 */
	static getSeasonFullNames(month: number, LW = Config.LANGUAGE_WORD): string {
		const cls = Word.getClassLanguage(LW);
		return cls.SEASON_FULL_NAMES[parseInt(((month + 1) / 3.1).toString())];
	}

	/**
	 *
	 */
	static getSolsticeFullNames(
		month: number,
		date: number,
		LW = Config.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(LW);
		if (month === 2 && date === 31) return cls.SOLSTICE_FULL_NAMES[0];
		else if (month === 8 && date === 30) return cls.SOLSTICE_FULL_NAMES[1];
		return "";
	}
}
