/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
import Language_fa_IR from "./i18n/fa_IR.js";
import Language_en_US from "./i18n/en_US.js";

/**
 * list of supported languages
 * @since 1.0.0
 */
enum Languages {
	fa_IR = "fa_IR",
	en_US = "en_US"
}

export default class Language {
	static WORD: string = Languages.en_US;
	/**
	 * cheeck Language
	 * @param {string} language
	 * @return string
	 * @since 1.0.0
	 */
	static check(language: string = Language.WORD): boolean {
		switch (language) {
			case Languages.fa_IR:
			case Languages.en_US:
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
	static getClass(language: string = Language.WORD): any {
		switch (language) {
			case Languages.fa_IR:
				return Language_fa_IR;
			case Languages.en_US:
				return Language_en_US;
			default:
				return Language_en_US;
		}
	}
}
