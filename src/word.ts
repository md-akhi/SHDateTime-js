/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @link http://codehub.akhi.ir/js/SHDateTime
 */
import Language_fa_IR from "./i18n/fa_IR.js";
import Language_en_US from "./i18n/en_US.js";

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
	static LANGUAGE_WORD: string = Language.en_US;
	static FIRST_DAY_OF_WEEK: number = 0;
	/**
	 * cheeck Language
	 * @param {string} language
	 * @return string
	 * @since 1.0.0
	 */
	static checkLanguage(
		language: string = Word.LANGUAGE_WORD
	): Language | boolean {
		switch (language) {
			case Language.fa_IR:
			case Language.en_US:
				return true;
			default:
				return false;
		}
	}
	/**
	 * Get Language class
	 * @param {string} language
	 * @return string
	 * @since 1.0.0
	 */
	static getClassLanguage(language: string = Word.LANGUAGE_WORD): any {
		switch (language) {
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
	 * @param {number} H24 numeric
	 * @param {string} language_word language word
	 * @return string Ante/Post meridiem
	 * @since 1.0.0
	 */
	static getMeridienFullNames(
		H24: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.MERIDIEN_FULL_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * Lowercase Ante meridiem and Post meridiem, two letters
	 * @param {number} H24 numeric
	 * @param {string} language_word language    word
	 * @return {string} Ante/Post meridiem, two letters
	 * @since 1.0.0
	 */
	static getMeridienShortNames(
		H24: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.MERIDIEN_SHORT_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * A full textual representation of a month
	 * @param {number} month numeric of a month
	 * @param {string} language_word language word
	 * @return {string} A full textual of a month
	 * @since 1.0.0
	 */
	static getMonthFullNames(
		month: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.MONTH_FULL_NAMES[month];
	}

	/**
	 * A short textual representation of a month, three letters
	 * @param {number} month numeric of a month
	 * @param {string} language_word language word
	 * @return {string} A short textual of a month, three letters
	 * @since 1.0.0
	 */
	static getMonthShortNames(
		month: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.MONTH_SHORT_NAMES[month];
	}

	/**
	 * A full textual representation of the day of the week
	 * @param {number} dow numeric of the day of the week
	 * @param {string} language_word language word
	 * @param {number} FDOW numeric of the first day of the week
	 * @return {string} A full textual the day of the week
	 * @since 1.0.0
	 */
	static getDayFullNames(
		dow: number,
		language_word = Word.LANGUAGE_WORD,
		FDOW: number = Word.FIRST_DAY_OF_WEEK
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.DAY_FULL_NAMES[(dow + FDOW) % 7];
	}

	/**
	 * A short textual representation of the day of the week, three letters
	 * @param {number} dow numeric of the day of the week
	 * @param {string} language_word language word
	 * @param {number} FDOW numeric of the first day of the week
	 * @return {string} A short textual of a day, three letters
	 * @since 1.0.0
	 */
	static getDayShortNames(
		dow: number,
		language_word = Word.LANGUAGE_WORD,
		FDOW: number = Word.FIRST_DAY_OF_WEEK
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.DAY_SHORT_NAMES[(dow + FDOW) % 7];
	}

	/**
	 * Ordinal suffix for the day of the month
	 * @param {number} num numeric the day of the month
	 * @param {string} language_word language word
	 * @return {string} Ordinal suffix for the day of the month
	 * @since 1.0.0
	 */
	static getSuffixNames(
		num: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.SuffixNames(num);
	}

	/**
	 *
	 */
	static getConstellationsFullNames(
		month: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.CONSTELLATIONS_FULL_NAMES[month];
	}

	/**
	 *
	 */
	static getAnimalsFullNames(
		year: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.ANIMALS_FULL_NAMES[year % 12];
	}

	/**
	 *
	 */
	static getSeasonFullNames(
		month: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		return cls.SEASON_FULL_NAMES[parseInt(((month + 1) / 3.1).toString())];
	}

	/**
	 *
	 */
	static getSolsticeFullNames(
		month: number,
		date: number,
		language_word = Word.LANGUAGE_WORD
	): string {
		const cls = Word.getClassLanguage(language_word);
		if (month === 2 && date === 31) return cls.SOLSTICE_FULL_NAMES[0];
		else if (month === 8 && date === 30) return cls.SOLSTICE_FULL_NAMES[1];
		return "";
	}
}
