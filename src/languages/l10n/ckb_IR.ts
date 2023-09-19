/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
/**
 * class SHDate Language Central Kurdish (Iran)
 * @since 1.2.4
 */
export default class ckb_IR {
	/**
	 * @var LANGUAGE Language Persian
	 */
	public static LANGUAGE: string = "ckb_IR"; //Central Kurdish (Iran) ckb

	public static DIGIT: string[] = [
		"٠",
		"١",
		"٢",
		"٣",
		"۴",
		"۵",
		"۶",
		"٧",
		"٨",
		"٩",
		","
	];

	public static DIGIT2: string[] = [
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
		","
	];

	public static SUFFIX: string = "ام";

	public static MERIDIEN_FULL_NAMES: string[] = ["پێش زایین", "زایینی"];

	public static MERIDIEN_SHORT_NAMES: string[] = ["ب.ن", "د.ن"];

	public static MONTH_FULL_NAMES: string[] = [
		"کانوونی دووەم",
		"شوبات",
		"ئازار",
		"نیسان",
		"ئایار",
		"حوزەیران",
		"تەمووز",
		"ئاب",
		"ئەیلوول",
		"تشرینی یەکەم",
		"تشرینی دووەم",
		"کانونی یەکەم"
	];

	public static MONTH_SHORT_NAMES: string[] = [];

	public static DAY_FULL_NAMES: string[] = [
		"یەکشەممە",
		"دووشەممە",
		"سێشەممە",
		"چوارشەممە",
		"پێنجشەممە",
		"ھەینی",
		"شەممە"
	];

	public static DAY_SHORT_NAMES: string[] = ["ی", "د", "س", "چ", "پ", "ھ", "ش"];

	public static CONSTELLATIONS_FULL_NAMES: string[] = [
		"حَمَل",
		"ثَور",
		"جَوزا",
		"سَرَطان",
		"اَسَد",
		"سُنبُله",
		"مِیزان",
		"عَقرَب",
		"قَوس",
		"جَدْی",
		"دَلو",
		"حوت"
	];

	public static ANIMALS_FULL_NAMES: string[] = [
		"مار", // 5
		"اسب", // 6
		"گوسفند", // 7
		"ميمون", // 8
		"مرغ", // 9
		"سگ", // 10
		"خوک", // 11
		"موش", // 0
		"گاو", // 1
		"پلنگ", // 2
		"خرگوش", // 3
		"نهنگ" // 4
	];

	public static SEASON_FULL_NAMES: string[] = [
		"بهار",
		"تابستان",
		"پاييز",
		"زمستان"
	];

	public static SOLSTICE_FULL_NAMES: string[] = ["تموز", "يلدا"];

	/**
	 * Ordinal suffix for the day of the month
	 * @return string  Ordinal suffix for the day of the month
	 * @since 1.0.0
	 */
	public static SuffixNames(): string {
		return ckb_IR.SUFFIX;
	}
}
