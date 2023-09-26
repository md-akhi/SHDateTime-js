/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
/**
 * class SHDate Language Persian
 */
export default class fa_IR {
	/**
	 * @var LANGUAGE Language Persian
	 */
	public static LANGUAGE: string = "fa_IR"; //Persion	fa

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

	public static MERIDIEN_FULL_NAMES: string[] = ["قبل از ظهر", "بعد از ظهر"];

	public static MERIDIEN_SHORT_NAMES: string[] = ["ق‍.ظ", "ب‍.ظ"];

	public static MONTH_FULL_NAMES: string[] = [
		"فروردين",
		"ارديبهشت",
		"خرداد",
		"تير",
		"امرداد",
		"شهريور",
		"مهر",
		"آبان",
		"آذر",
		"دي",
		"بهمن",
		"اسفند"
	];

	public static MONTH_SHORT_NAMES: string[] = [
		"فرو",
		"ارد",
		"خرد",
		"تير",
		"امر",
		"شهر",
		"مهر",
		"آبا",
		"آذر",
		"دي",
		"بهم‍",
		"اسف‍"
	];

	public static DAY_FULL_NAMES: string[] = [
		"شنبه",
		"يک‌شنبه",
		"دوشنبه",
		"سه ش‍‍‍‍نبه",
		"چهارشنبه",
		"پنجشنبه",
		"جمعه"
	];

	public static DAY_SHORT_NAMES: string[] = [
		"ش‍",
		"ی‍",
		"د",
		"س‍",
		"چ‍",
		"پ‍",
		"ج‍"
	];

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
	 */
	public static SuffixNames(): string {
		return fa_IR.SUFFIX;
	}
}
