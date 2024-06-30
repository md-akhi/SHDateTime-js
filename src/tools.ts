/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */

import Language, { Languages } from "./languages/language.js";

/**
 * Convert a number to Persian digit
 * @param {string} source The string to be converted to Persian digits.
 * @param {string} destination If true, convert to persian digits.
 * @param {string} comma If true, convert to persian digits.
 * @returns {string} The converted string.
 */
export function toNumber(
	source: string | number,
	destination: string = "FA"
	// comma: string = ","
): string {
	const EN: string[] = Language.getClass(Languages.en_US).DIGIT;
	const FA: string[] = Language.getClass(Languages.fa_IR).DIGIT;
	let digits: string[];
	switch (destination.toUpperCase()) {
		case "FA":
		case "FA_IR":
			digits = FA;
			break;
		case "EN":
		case "EN_US":
			digits = EN;
			break;
		default:
			digits = FA;
			break;
	}
	EN.forEach((value, index) => {
		source = `${source}`.replace(value, digits[index]);
	});
	// for (const [index, value] of EN.entries()) {
	// 	source = source.split(value).join(destination[index]);
	return `${source}`;
}
