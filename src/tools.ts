/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */

import Language from "./languages/language.js";

/**
 * Convert a number to Persian digit
 * @param {string} source The string to be converted to Persian digits.
 * @param {string} destination If true, convert to persian digits.
 * @param {string} comma If true, convert to persian digits.
 * @returns {string} The converted string.
 */
export default function NumbersTo(
	source: string,
	destination: string | string[] = "FA",
	comma: string = ","
): string {
	const EN: string[] = Language.getClass("en_US").DIGIT;
	const FA: string[] = Language.getClass("fa_IR").DIGIT;
	const FA2: string[] = Language.getClass("fa_IR").DIGIT2;
	switch (destination) {
		case "FA":
			destination = FA;
			break;
		case "FA2":
			destination = FA2;
			break;
		default:
			destination = FA;
			break;
	}
	EN.forEach((value, index) => {
		source = source.toString().replace(value, destination[index]);
	});
	// for (const [index, value] of EN.entries()) {
	// 	source = source.split(value).join(destination[index]);
	return source;
}
