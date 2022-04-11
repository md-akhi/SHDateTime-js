/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package Date and Time Related Extensions SH{ Shamsi Hijri, Solar Hijri, Iranian Hijri }
 * @link http://codehub.akhi.ir/js/SHDateTime
 */

/**
 * Convert a number to Persian digit
 * @param {string} str The string to be converted to Persian digits.
 * @param {boolean} con If true, convert to persian digits.
 * @param {boolean} dec If true, convert to persian digits.
 * @returns {string} The converted string.
 * @since 1.0.0
 */
export default function NumsTo(
	str: string,
	con: string | string[] = "FA",
	dec: string = ","
): string {
	const EN: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
	const FA: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", dec];
	const FA2: string[] = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", dec];
	switch (con) {
		case "FA":
			con = FA;
			break;
		case "FA2":
			con = FA2;
			break;
		default:
			con = FA;
			break;
	}
	EN.forEach((value, index) => {
		str = str.toString().replace(value, con[index]);
	});
	return str;
}
