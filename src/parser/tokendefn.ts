export default class SHTokenDefn {
	/** @var string */
	protected name: any;

	/** @var string */
	protected regex: any;

	/**
	 * @param string name
	 * @param string regex
	 * @param string modifiers
	 */
	public constructor(name: any, regex: any, modifiers: any = "i") {
		this.name = name;
		//delimiter = this.findDelimiter(regex);
		this.regex = regex; //sprintf('%s^%s%s%s', delimiter, regex, delimiter, modifiers);
		// console.log(name, regex);
		// if (new RegExp(`/${regex}/`, "i").test(name) === false) {
		// 	// empty(regex)
		// 	throw new Error(`Invalid regex for token ${name} : ${regex} `);
		// }
	}

	/**
	 * @return string
	 */
	public getRegex() {
		return this.regex;
	}

	/**
	 * @return string
	 */
	public getName() {
		return this.name;
	}

	/**
	 * @param regex
	 *
	 * @return string
	 */
	private findDelimiter(regex: any) {
		let choice: any;
		let choices = ["/", "|", "#", "~", "@"];
		for (choices of choice) {
			if (regex.indexOf(choice) === false) {
				return choice;
			}
		}

		// throw new InvalidArgumentException(sprintf('Unable to determine delimiter for regex %s', regex));
	}
}
