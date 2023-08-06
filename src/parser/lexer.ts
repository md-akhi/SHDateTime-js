import SHToken from "./token.js";
import SHLexerConfig from "./lexerconfig.js";

export default class SHLexer {
	/** @var string */
	private input: any;

	/** @var int */
	private position: any;

	/** @var int */
	private peek: any;

	/** @var Token[] */
	private tokens: any;

	/** @var Token */
	private lookahead: any;

	/** @var Token */
	private token: any;

	/**
	 * @param string input
	 */
	public constructor(input: any) {
		this.setInput(input);
		this.moveNext();
	}

	/**
	 * @param LexerConfig config
	 * @param string      input
	 *
	 * @return Token[]
	 */
	public static scan(config: SHLexerConfig, input: any) {
		let tokens: any = [];
		let offset: any = 0;
		let position: any = 0;
		let match: any = null;
		let i = input.length;
		while (i-- >= 0) {
			let anyMatch = false;
			for (const tokenDefinition of config.getTokenDefinitions()) {
				const GetRegex = tokenDefinition.getRegex();
				const GetName = tokenDefinition.getName();
				const Regex: RegExp = new RegExp("^" + GetRegex, "i");
				match = input.match(Regex);
				// console.log(input, GetName, match);
				if (match) {
					let str = input;
					let len = match[0].length;
					//console.log(input, len, match, Regex);
					if (GetName.length > 0) {
						tokens.push(new SHToken(GetName, match[0], offset, position));
						position++;
					}
					// console.log(str, GetName, match, offset, position);
					// console.log(input);
					input = input.substr(len);
					// console.log(input);
					anyMatch = true;
					offset += len;
					break;
				}
			}
			if (!anyMatch) {
				//throw new UnknownTokenException(sprintf('At offset %s: %s', offset, substr(input, 0, 16).'...'));
			}
			//inputlen--;
		}

		// console.log(JSON.stringify(tokens, null, 2));
		return tokens;
	}

	/**
	 * @return string
	 */
	public getInput() {
		return this.input;
	}

	/**
	 * @return int
	 */
	public getPosition() {
		return this.position;
	}

	/**
	 * @return Token
	 */
	public getLookahead() {
		return this.lookahead;
	}

	/**
	 * @return Token
	 */
	public getToken() {
		return this.token;
	}

	public setInput(input: any) {
		this.input = input;
		this.reset();
		this.tokens = SHLexer.scan(new SHLexerConfig(), input);
	}

	public reset() {
		this.position = 0;
		this.peek = 0;
		this.token = null;
		this.lookahead = null;
	}

	public resetPeek() {
		this.peek = 0;
	}

	public resetPosition(position = 0) {
		this.position = position - 1;
		this.moveNext();
	}

	/**
	 * @param string tokenName
	 *
	 * @return bool
	 */
	public isNextToken(tokenName: any) {
		return this.lookahead !== false && this.lookahead.getName() === tokenName;
	}

	/**
	 * @param string[] tokenNames
	 *
	 * @return bool
	 */
	public isNextTokenAny(tokenNames: any[]) {
		return (
			this.lookahead !== false &&
			tokenNames.find((value: any[]) => value == this.lookahead.getName())
		);
	}

	/**
	 * @return bool
	 */
	public moveNext() {
		this.peek = 0;
		this.token = this.lookahead;
		if (typeof this.tokens[this.position] !== "undefined") {
			this.lookahead = this.tokens[this.position++];
			return true;
		}
		return (this.lookahead = false);
	}

	/**
	 * @param string tokenName
	 */
	public skipUntil(tokenName: any) {
		while (this.lookahead !== false && this.lookahead.getName() !== tokenName) {
			this.moveNext();
		}
	}

	/**
	 * @param string[] tokenNames
	 */
	public skipTokens(tokenNames: any[]) {
		while (
			this.lookahead !== false &&
			tokenNames.find((value: any[]) => value == this.lookahead.getName())
		) {
			this.moveNext();
		}
	}

	/**
	 * Moves the lookahead token forward.
	 *
	 * @return null|Token
	 */
	public peeks() {
		if (typeof this.tokens[this.position + this.peek] !== "undefined")
			return this.tokens[this.position + this.peek++];
		return false;
	}

	/**
	 * @param string[] tokenNames
	 *
	 * @return null|Token
	 */
	public peekWhileTokens(tokenNames: any[]) {
		let token = this.peeks();
		while (token) {
			if (!tokenNames.find((value: any[]) => value == token.getName())) {
				break;
			}
		}
		return token;
	}

	/**
	 * Peeks at the next token, returns it and immediately resets the peek.
	 *
	 * @return null|Token
	 */
	public glimpse() {
		let peek = this.peeks();
		this.peek = 0;
		return peek;
	}
}
