/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
import Language from "./languages/language.js";

/**
 * Word class
 */
export default class Word extends Language {
	static word_language: string = Word.LANGUAGE;
	static FIRST_DAY_OF_WEEK: number = 0; //Saterday

	/**
	 * Uppercase Ante meridiem and Post meridiem
	 * @param {number} H24 numeric of hours
	 * @param {string} word_language word language
	 * @return string Ante/Post meridiem
	 */
	static getMeridienFullNames(
		H24: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).MERIDIEN_FULL_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * Lowercase Ante meridiem and Post meridiem, two letters
	 * @param {number} H24 numeric of hours
	 * @param {string} word_language word language
	 * @return {string} Ante/Post meridiem, two letters
	 */
	static getMeridienShortNames(
		H24: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).MERIDIEN_SHORT_NAMES[H24 > 11 ? 1 : 0];
	}

	/**
	 * A full textual representation of a month
	 * @param {number} month numeric of a month
	 * @param {string} word_language word language
	 * @return {string} A full textual of a month
	 */
	static getMonthFullNames(
		month: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).MONTH_FULL_NAMES[month];
	}

	/**
	 * A short textual representation of a month, three letters
	 * @param {number} month numeric of a month
	 * @param {string} word_language word language
	 * @return {string} A short textual of a month, three letters
	 */
	static getMonthShortNames(
		month: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).MONTH_SHORT_NAMES[month];
	}

	/**
	 * A full textual representation of the day of the week
	 * @param {number} dow numeric of the day of the week
	 * @param {string} word_language word language
	 * @param {number} FDOW numeric of the first day of the week
	 * @return {string} A full textual the day of the week
	 */
	static getDayFullNames(
		dow: number,
		word_language: string = Word.LANGUAGE,
		FDOW: number = Word.FIRST_DAY_OF_WEEK
	): string {
		return Word.getClass(word_language).DAY_FULL_NAMES[(dow + FDOW) % 7];
	}

	/**
	 * A short textual representation of the day of the week, three letters
	 * @param {number} dow numeric of the day of the week
	 * @param {string} word_language word language
	 * @param {number} FDOW numeric of the first day of the week
	 * @return {string} A short textual of a day, three letters
	 */
	static getDayShortNames(
		dow: number,
		word_language: string = Word.LANGUAGE,
		FDOW: number = Word.FIRST_DAY_OF_WEEK
	): string {
		return Word.getClass(word_language).DAY_SHORT_NAMES[(dow + FDOW) % 7];
	}

	/**
	 * Ordinal suffix for the day of the month
	 * @param {number} date numeric the day of the month
	 * @param {string} word_language word language
	 * @return {string} Ordinal suffix for the day of the month
	 */
	static getSuffixNames(
		date: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).SuffixNames(date);
	}

	/**
	 * A full textual representation of the constellations
	 * @param {number} month numeric the month of the year
	 * @param {string} word_language word language
	 * @return {string} full textual the constellations
	 */
	static getConstellationsFullNames(
		month: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).CONSTELLATIONS_FULL_NAMES[month];
	}

	/**
	 * A full textual representation of the animal of the year
	 * @param {number} year numeric the year
	 * @param {string} word_language word language
	 * @return {string} full textual the animal of the year
	 */
	static getAnimalsFullNames(
		year: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).ANIMALS_FULL_NAMES[year % 12];
	}

	/**
	 * A full textual representation of the seasons of the year
	 * @param {number} month numeric the month of the year
	 * @param {string} word_language word language
	 * @return {string} full textual the season of the year
	 */
	static getSeasonFullNames(
		month: number,
		word_language: string = Word.LANGUAGE
	): string {
		return Word.getClass(word_language).SEASON_FULL_NAMES[
			parseInt(((month + 1) / 3.1).toString())
		];
	}

	/**
	 *
	 * @param {number} month numeric the month of the year
	 * @param {number} date numeric the day of the month
	 * @param {string} word_language word language
	 * @return {string}
	 */
	static getSolsticeFullNames(
		month: number,
		date: number,
		word_language: string = Word.LANGUAGE
	): string {
		if (month === 2 && date === 31)
			return Word.getClass(word_language).SOLSTICE_FULL_NAMES[0];
		else if (month === 8 && date === 30)
			return Word.getClass(word_language).SOLSTICE_FULL_NAMES[1];
		return "";
	}
}
