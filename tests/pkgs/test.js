import SHDate from "shdate";
import words from "shdate/words";
import { toNumbers } from "shdate/tools";
import fa_IR from "shdate/lang/fa_IR";
import ckb_IR from "shdate/lang/l10n/ckb_IR";

console.log(
	SHDate.VERSION,
	words.word_language,
	toNumbers,
	fa_IR.LANGUAGE,
	ckb_IR.LANGUAGE
);
