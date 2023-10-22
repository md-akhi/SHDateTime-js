import SHDate from "shdate";
import words from "shdate/words";
import { toNumber } from "shdate/tools";
import fa_IR from "shdate/lang/fa_IR";
import ckb_IR from "shdate/lang/l10n/ckb_IR";

console.log([
	SHDate.VERSION,
	words.word_language,
	toNumber,
	fa_IR.LANGUAGE,
	ckb_IR.LANGUAGE
]);
