/**
 * In the name of Allah, the Beneficent, the Merciful.
 * @package shdate - Date and Time Related Extensions SH{Shamsi Hijri, Solar Hijri, Iranian Hijri}
 * @link http://git.akhi.ir/js/SHDate | https://github.com/md-akhi/SHDateTime-js#readme
 */
export default class SHToken {
	//private lexer: Lexer;

	/** @var string */
	protected name: string | undefined;

	/** @var string */
	protected value: string | undefined;

	/** @var int */ //line
	protected offset: number | undefined;

	/** @var int */ //id
	protected position: number | undefined;

	/** @var int */
	protected length: number | undefined;

	/**
	 * @param string name
	 * @param string value
	 * @param number offset
	 * @param number position
	 * @param number length
	 */
	public constructor(
		name: string,
		value: string,
		offset: number,
		position: number,
		length: number
	) {
		this.name = name;
		this.value = value;
		this.offset = offset;
		this.position = position;
		this.length = length;
	}

	/**
	 * @return int
	 */
	public getPosition() {
		return this.position;
	}

	/**
	 * @return int
	 */
	public getOffset() {
		return this.offset;
	}

	/**
	 * @return string
	 */
	public getName() {
		return this.name;
	}

	/**
	 * @return string
	 */
	public getValue() {
		return this.value;
	}

	/**
	 * @return string
	 */
	public getLength() {
		return this.length;
	}

	public is(token: any) {
		if (typeof token === "string") {
			return this.name === token;
		} else if (token instanceof SHToken) {
			return this.name === token.getName();
		}
		//throw new InvalidArgumentException('Expected string or Token');
	}
	/**
	 * Removes token from lexer.
	 */
	public remove() {
		this.name = undefined;
		this.value = undefined;
		this.offset = undefined;
		this.position = undefined;
		this.length = undefined;
		//this.lexer.update();
	}
}
