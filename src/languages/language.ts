/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
import Language_fa_IR from "./i18n/fa_IR.js";
import Language_en_US from "./i18n/en_US.js";
import Language_ckb_IR from "./l10n/ckb_IR.js";

/**
 * list of supported languages
 */
enum Languages {
	//i18n
	fa_IR = "fa_IR",
	en_US = "en_US",

	//l10n
	ckb_IR = "ckb_IR"
}

export default class Language {
	static WORD: string = Languages.en_US;

	/**
	 * cheeck Language
	 * @param {string} language
	 * @return string
	 */
	static check(language: string = Language.WORD): boolean {
		switch (language) {
			case Languages.fa_IR:
			case Languages.en_US:
			case Languages.ckb_IR:
				return true;
			default:
				return false;
		}
	}

	/**
	 * Get Language class
	 * @param {string} language
	 * @return string
	 */
	static getClass(language: string = Language.WORD): any {
		switch (language) {
			case Languages.fa_IR:
				return Language_fa_IR;
			case Languages.en_US:
				return Language_en_US;
			case Languages.ckb_IR:
				return Language_ckb_IR;
			default:
				return Language_en_US;
		}
	}
}
