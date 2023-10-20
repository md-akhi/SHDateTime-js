import shdate from "shdate";
import words from "shdate/words";
import { NumbersTo } from "shdate/tools";
import fa_IR from "shdate/lang/fa_IR";
import ckb_IR from "shdate/lang/l10n/ckb_IR";

console.log(
	shdate.VERSION,
	words.FIRST_DAY_OF_WEEK,
	NumbersTo,
	fa_IR.LANGUAGE,
	ckb_IR.LANGUAGE
);
