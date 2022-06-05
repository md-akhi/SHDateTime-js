class token {
	type: any;
	value: any;
	constructor(type: any, value: any) {
		this.type = type;
		this.value = value;
	}
}

class parser {
	constructor(public input: string) {}
	public parse(): any {
		let tokens = this.tokenize(this.input);
		let ast = this.parseTokens(tokens);
		return ast;
	}
	public tokenize(input: string): token[] {
		let tokens: token[] = [];
		let i = 0;
		while (i < input.length) {
			let c = input[i];
			if (c == " " || c == "\n") {
				i++;
				continue;
			}
			if (c == "(") {
				tokens.push(new token("(", i));
				i++;
				continue;
			}
			if (c == ")") {
				tokens.push(new token(")", i));
				i++;
				continue;
			}
			if (c == '"') {
				let s = "";
				i++;
				while (i < input.length && input[i] != '"') {
					s += input[i];
					i++;
				}
				tokens.push(new token(s, i));
				i++;
				continue;
			}
			let s = "";
			while (
				i < input.length &&
				input[i] != " " &&
				input[i] != "\n" &&
				input[i] != "(" &&
				input[i] != ")"
			) {
				s += input[i];
				i++;
			}
			tokens.push(new token(s, i));
		}
		return tokens;
	}
	public parseTokens(tokens: token[]): any {
		let i = 0;
		let ast = this.parseExpression(tokens, i);
		return ast;
	}
	public parseExpression(tokens: token[], i: number): any {
		let ast: any = {};
		if (tokens[i].value == "(") {
			i++;
			ast.type = "list";
			ast.value = [];
			while (tokens[i].value != ")") {
				ast.value.push(this.parseExpression(tokens, i));
				i++;
			}
			i++;
		} else {
			ast.type = "atom";
			ast.value = tokens[i].value;
			i++;
		}
		return ast;
	}
}
