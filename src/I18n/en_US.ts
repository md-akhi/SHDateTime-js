/**
 * class SHDate Language English
 * @since 1.0.0
 */
export default class en_US {
	// Languages
	public static LANGUAGE = "en_US"; //English	en
	public static DIGIT: string[] = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"."
	];
	public static SUFFIX: string[] = ["th", "st", "nd", "rd"];
	public static MERIDIEN_FULL_NAMES: string[] = ["AM", "PM"];
	public static MERIDIEN_SHORT_NAMES: string[] = ["am", "pm"];
	public static MONTH_FULL_NAMES: string[] = [
		"Farvardin",
		"Ordibehesht",
		"Khordad",
		"Tir",
		"Amordad",
		"Shahrivar",
		"Mehr",
		"Aban",
		"Azar",
		"Dey",
		"Bahman",
		"Esfand"
	];
	public static MONTH_SHORT_NAMES: string[] = [
		"Far",
		"Ord",
		"Kho",
		"Tir",
		"Amo",
		"Sha",
		"Meh",
		"Aba",
		"Aza",
		"Dey",
		"Bah",
		"Esf"
	];
	public static DAY_FULL_NAMES: string[] = [
		"Saturday",
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday"
	];
	public static DAY_SHORT_NAMES: string[] = [
		"Sat",
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri"
	];
	public static CONSTELLATIONS_FULL_NAMES: string[] = [
		"Aries",
		"Taurus",
		"Gemini",
		"Cancer",
		"Leo",
		"Virgo",
		"Libra",
		"Scorpio",
		"Sagittarius",
		"Capricorn",
		"Aquarius",
		"Pisces"
	];
	public static ANIMALS_FULL_NAMES: string[] = [
		"Snake",
		"Horse",
		"Sheep",
		"Monkey",
		"Chicken",
		"Dog",
		"Pig",
		"Mouse",
		"Cow",
		"Panther",
		"Rabbit",
		"Whale"
	];
	public static SEASON_FULL_NAMES: string[] = [
		"Spring",
		"Summer",
		"Fall",
		"Winter"
	];
	public static SOLSTICE_FULL_NAMES: string[] = ["Yalda", "Tammuz"];
	/**
	 * Ordinal suffix for the day of the month
	 * @param   int  $num    numeric the day of the month
	 * @return  string  Ordinal suffix for the day of the month
	 * @since   1.0.0
	 */
	public static SuffixNames(num: number): string {
		if (!Number.isInteger(num)) {
			throw new Error("The value is not integer");
		}
		//Calculate Ordinal suffix for the day of the month
		if (num >= 10 && num <= 19) return en_US.SUFFIX[0];
		switch (num % 10) {
			case 1:
				return en_US.SUFFIX[1];
			case 2:
				return en_US.SUFFIX[2];
			case 3:
				return en_US.SUFFIX[3];
			default:
				return en_US.SUFFIX[0];
		}
	}
}
