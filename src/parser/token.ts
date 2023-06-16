export default class SHToken {
	/** @var string */
	protected name: any;

	/** @var string */
	protected value: any;

	/** @var int */
	protected offset: any;

	/** @var int */
	protected position: any;

	/**
	 * @param string name
	 * @param string value
	 * @param string offset
	 * @param string count
	 */
	public constructor(name: any, value: any, offset: any, count: any) {
		this.name = name;
		this.value = value;
		this.offset = offset;
		this.position = count;
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

	public is(token: any) {
		if (typeof token === "string") {
			return this.name === token;
		} else if (token instanceof SHToken) {
			return this.name === token.getName();
		}
		//throw new InvalidArgumentException('Expected string or Token');
	}
}
