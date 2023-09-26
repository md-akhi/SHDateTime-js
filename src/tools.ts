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
	const EN: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
	const FA: string[] = [
		"۰",
		"۱",
		"۲",
		"۳",
		"۴",
		"۵",
		"۶",
		"۷",
		"۸",
		"۹",
		comma
	];
	const FA2: string[] = [
		"٠",
		"١",
		"٢",
		"٣",
		"٤",
		"٥",
		"٦",
		"٧",
		"٨",
		"٩",
		comma
	];
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
	return source;
}
