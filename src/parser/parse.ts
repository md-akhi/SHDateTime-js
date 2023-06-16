//import SHDate from "./index.js";
function isNumeric(value: string) {
	return /^\d+\.\d+$/.test(value);
}

import { Export_SHDate } from "../base.js";

import SHLexer from "./lexer.js";

/**
 * SHParser
 */
export default class SHParser {
	/**
	 * Lexer
	 *
	 * @var object
	 */
	public Lexer;
	time: any;
	data: any = {
		YEAR: "",
		MONTH: "",
		DAY: "",
		HOURS: "",
		MINUTES: "",
		SECONDS: "",
		DAY_OF_YEAR: "",
		DAY_OF_WEEK: "",
		TIMESTAMP: "",
		Sign_Timestamp: ""
	};
	Date: any;
	/**
	 * __construct
	 *
	 * @param  string srt
	 * @param  int time
	 * @return array
	 */
	constructor(srt: any, time: any = Date.now()) {
		this.time = time;
		this.Lexer = new SHLexer(srt);
		this.Date = new Export_SHDate();
		this.setDateTime(time);
		do {
			if (this.CompoundFormats()) {
			} else if (this.RelativeFormats()) {
			} else if (this.DateFormats()) {
			} else if (this.TimeFormats()) {
			}
		} while (this.nextToken());
		return this.data;
	}
	/**
	 * Compound Formats
	 *
	 * @return bool
	 */
	public CompoundFormats() {
		// Localized Notations
		if (this.commonLogFormat()) {
			// dd/M/Y:HH:II:SS tspace tzcorrection
			return true;
		} else if (this.EXIF()) {
			//  YY:MM:DD HH:II:SS
			return true;
		} else if (this.isoYearWeekDay()) {
			//  YY-?"W"W-?[0-7]
			return true;
		} else if (this.MySQL()) {
			//  YY-MM-DD HH:II:SS
			return true;
		} else if (this.postgreSQL()) {
			// YY .? doy
			return true;
		} else if (this.SOAP()) {
			//  YY "-" MM "-" DD "T" HH ":" II ":" SS frac tzcorrection?
			return true;
		} else if (this.unixTimestamp()) {
			// "@" "-"? [0-9]+
			return true;
		} else if (this.XMLRPC()) {
			// & (Compact) YY MM DD "T" hh :? II :? SS
			return true;
		} else if (this.WDDX()) {
			// YY "-" mm "-" dd "T" hh ":" ii ":" ss
			return true;
		} else if (this.MSSQL()) {
			// time
			return true;
		}
		return false;
	}

	/**
	 * Common Log Format
	 *
	 * @return bool
	 */
	commonLogFormat() {
		let day, month, year, h24, min, sec;
		let pos = this.getPosition();
		if ((day = this.dayOptionalPrefix())) {
			if (this.isToken("SLASH")) {
				this.nextToken();
				if ((month = this.monthTextualShort())) {
					if (this.isToken("SLASH")) {
						this.nextToken();
						if ((year = this.year4MandatoryPrefix())) {
							if (this.isToken("COLON")) {
								this.nextToken();
								if ((h24 = this.hour24())) {
									if (this.isToken("COLON")) {
										this.nextToken();
										if ((min = this.minutesMandatoryPrefix())) {
											if (this.isToken("COLON")) {
												this.nextToken();
												if ((sec = this.secondsMandatoryPrefix())) {
													if (this.whiteSpace()) {
														if (this.TZCorrection()) {
															this.data["YEAR"] = year;
															this.data["MONTH"] = month;
															this.data["DAY"] = day;
															this.data["HOURS"] = h24;
															this.data["MINUTES"] = min;
															this.data["SECONDS"] = sec;
															return true;
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * EXIF
	 *
	 * @return bool
	 */
	EXIF() {
		let pos, year, month, day, h24, min, sec;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("COLON")) {
				this.nextToken();
				if ((month = this.monthMandatoryPrefix())) {
					if (this.isToken("COLON")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							if (this.whiteSpace()) {
								if ((h24 = this.hour24())) {
									if (this.isToken("COLON")) {
										this.nextToken();
										if ((min = this.minutesMandatoryPrefix())) {
											if (this.isToken("COLON")) {
												this.nextToken();
												if ((sec = this.secondsMandatoryPrefix())) {
													this.data["YEAR"] = year;
													this.data["MONTH"] = month;
													this.data["DAY"] = day;
													this.data["HOURS"] = h24;
													this.data["MINUTES"] = min;
													this.data["SECONDS"] = sec;
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * ISO year with ISO week
	 * ISO year with ISO week and day
	 *
	 * @return bool
	 */
	isoYearWeekDay() {
		let dow,
			week,
			year,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
			}
			if (this.isToken("SIGN_WEEK")) {
				this.nextToken();
				if ((week = this.setWeekOfYear())) {
					if (this.isToken("DASH")) {
						this.nextToken();
					}
					if ((dow = this.int1To7() || this.int0())) {
						this.data["DAY_OF_WEEK"] = dow;
					}
					this.data["WEEK_OF_YEAR"] = week;
					this.data["YEAR"] = year;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * MySQL
	 *
	 * @return bool
	 */
	MySQL() {
		let pos, year, month, day, h24, min, sec;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthMandatoryPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							if (this.whiteSpace()) {
								if ((h24 = this.hour24())) {
									if (this.isToken("COLON")) {
										this.nextToken();
										if ((min = this.minutesMandatoryPrefix())) {
											if (this.isToken("COLON")) {
												this.nextToken();
												if ((sec = this.secondsMandatoryPrefix())) {
													this.data["YEAR"] = year;
													this.data["MONTH"] = month;
													this.data["DAY"] = day;
													this.data["HOURS"] = h24;
													this.data["MINUTES"] = min;
													this.data["SECONDS"] = sec;
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * PostgreSQL: Year with day-of-year
	 *
	 * @return bool
	 */
	postgreSQL() {
		let year,
			doy,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DOT")) {
				this.nextToken();
			}
			if ((doy = this.setDayOfYear())) {
				this.data["YEAR"] = year;
				this.data["DAY_OF_YEAR"] = doy;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * SOAP
	 *
	 * @return bool
	 */
	SOAP() {
		let year,
			month,
			day,
			h24,
			min,
			sec,
			frac,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthMandatoryPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							if (this.isToken("SIGN_TIME")) {
								this.nextToken();
								if ((h24 = this.hour24())) {
									if (this.isToken("COLON")) {
										this.nextToken();
										if ((min = this.minutesMandatoryPrefix())) {
											if (this.isToken("COLON")) {
												this.nextToken();
												if ((sec = this.secondsMandatoryPrefix())) {
													if ((frac = this.fraction())) {
														this.TZCorrection();
														this.data["YEAR"] = year;
														this.data["MONTH"] = month;
														this.data["DAY"] = day;
														this.data["HOURS"] = h24;
														this.data["MINUTES"] = min;
														this.data["SECONDS"] = sec;
														this.data["FRAC"] = frac;
														return true;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Unix Timestamp
	 *
	 * @return bool
	 */
	unixTimestamp() {
		let sign,
			int,
			pos = this.getPosition();
		if (this.isToken("AT")) {
			this.nextToken();
			if ((sign = this.signNumber())) {
				this.data["Sign_Timestamp"] = sign;
			}
			if ((int = this.number())) {
				this.data["Timestamp"] = int;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * XMLRPC
	 * XMLRPC (Compact)
	 *
	 * @return bool
	 */
	XMLRPC() {
		let year,
			month,
			day,
			h1t2,
			min,
			sec,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if ((month = this.monthMandatoryPrefix())) {
				if ((day = this.dayMandatoryPrefix())) {
					if (this.isToken("SIGN_TIME")) {
						this.nextToken();
						if ((h1t2 = this.hour12()) || (h1t2 = this.hour24())) {
							if (this.isToken("COLON")) {
								this.nextToken();
							}
							if ((min = this.minutesMandatoryPrefix())) {
								if (this.isToken("COLON")) {
									this.nextToken();
								}
								if ((sec = this.secondsMandatoryPrefix())) {
									this.data["YEAR"] = year;
									this.data["MONTH"] = month;
									this.data["DAY"] = day;
									this.data["HOURS"] = h1t2;
									this.data["MINUTES"] = min;
									this.data["SECONDS"] = sec;
									return true;
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * WDDX
	 *
	 * @return bool
	 */
	WDDX() {
		let year,
			month,
			day,
			h12,
			min,
			sec,
			pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthOptionalPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayOptionalPrefix())) {
							if (this.isToken("SIGN_TIME")) {
								this.nextToken();
								if ((h12 = this.hour12())) {
									if (this.isToken("COLON")) {
										this.nextToken();
										if ((min = this.minutesOptionalPrefix())) {
											if (this.isToken("COLON")) {
												this.nextToken();
												if ((sec = this.secondsOptionalPrefix())) {
													this.data["YEAR"] = year;
													this.data["MONTH"] = month;
													this.data["DAY"] = day;
													this.data["HOURS"] = h12;
													this.data["MINUTES"] = min;
													this.data["SECONDS"] = sec;
													return true;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * MS SQL (Hour, minutes, seconds and fraction with meridian)
	 *
	 * @return bool
	 */
	MSSQL() {
		//hh ":" II ":" SS [.:] [0-9]+ meridian  |  in Time Formats
		let h12,
			min,
			sec,
			frac,
			meridian,
			pos = this.getPosition();
		if ((h12 = this.hour12())) {
			if (this.isToken("COLON")) {
				this.nextToken();
				if ((min = this.minutesMandatoryPrefix())) {
					if (this.isToken("COLON")) {
						this.nextToken();
						if ((sec = this.secondsMandatoryPrefix())) {
							if (this.isToken("DOT") || this.isToken("COLON")) {
								this.nextToken();
								if ((frac = this.number())) {
									if ((meridian = this.meridian())) {
										if (meridian) {
											this.data["HOURS"] = h12 + 12;
										} else {
											this.data["HOURS"] = h12;
										}
										this.data["MINUTES"] = min;
										this.data["SECONDS"] = sec;
										this.data["FRAC"] = frac;
										this.data["AM_PM"] = meridian;
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Relative Formats
	 *
	 * @return bool
	 */
	RelativeFormats() {
		let dow: any;
		//Day-based Notations
		if (this.isToken("NOW")) {
			// Now - this is simply ignored
			this.setDateTime(this.time);
			return true;
		} else if (this.isToken("TODAY") || this.isToken("MIDNIGHT")) {
			// The time is set to 00:00:00
			this.restTime();
			return true;
		} else if (this.isToken("NOON")) {
			// The time is set to 12:00:00
			this.restTime(12);
			return true;
		} else if (this.isToken("YESTERDAY")) {
			// Midnight of yesterday
			this.data["RDAY"] -= 1;
			this.restTime();
			return true;
		} else if (this.isToken("TOMORROW")) {
			// Midnight of tomorrow
			this.data["RDAY"] += 1;
			this.restTime();
			return true;
		} else if (this.minutes15Hour()) {
			return true;
		} else if (this.setDayOfMonth()) {
			return true;
		} else if (this.setWeekDayOfMonth()) {
			return true;
		} else if (this.handleRelTimeNumber()) {
			return true;
		} else if (this.handleRelTimeText()) {
			return true;
		} /* //todo
		else if(this.isToken('ago')){ // Negates all the values of previously found relative time items.
			this.nextToken();
			return true;
		}*/ else if ((dow = this.dayNeme())) {
			// Moves to the next day of this name.
			let diffdow,
				dowmonth = this.Date.getDayOfWeek(
					this.data["YEAR"],
					this.data["MONTH"],
					this.data["DAY"]
				);
			if (dow < dowmonth) {
				diffdow = 7 - dowmonth - dow;
			} else if (dow > dowmonth) {
				diffdow = dow - dowmonth;
			} else {
				diffdow = 0;
			}
			[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
				this.Date.getDaysOfDay(
					this.data["YEAR"],
					this.Date.getDayOfYear(false, this.data["MONTH"], 1) + diffdow
				);
			return true;
		} else if (this.handleRelTimeFormat()) {
			return true;
		}
		return false;
	}

	/**
	 * 15 minutes past the specified hour
	 * 15 minutes before the specified hour
	 *
	 * @return bool
	 */
	minutes15Hour() {
		let h24,
			pos = this.getPosition();
		if (this.isToken("BACK")) {
			// 15 minutes past the specified hour
			this.nextToken();
			if (this.whiteSpace()) {
				if (this.isToken("OF")) {
					this.nextToken();
					if (this.whiteSpace()) {
						if (this.hour12Notation() || (h24 = this.hour24())) {
							if (!isNumeric(h24)) {
								h24 = this.data["HOURS"];
							}
							this.data["HOURS"] = h24;
							this.data["MINUTES"] = 15;
							this.data["SECONDS"] = 0;
							return true;
						}
					}
				}
			}
		} else if (this.isToken("FRONT")) {
			// 15 minutes before the specified hour
			h24 = false;
			this.nextToken();
			if (this.whiteSpace()) {
				if (this.isToken("OF")) {
					this.nextToken();
					if (this.whiteSpace()) {
						if (this.hour12Notation() || (h24 = this.hour24())) {
							if (!isNumeric(h24)) {
								h24 = this.data["HOURS"];
							}
							this.data["HOURS"] = h24 - 1;
							this.data["MINUTES"] = 45;
							this.data["SECONDS"] = 0;
							if (!this.Date.checktime(h24 - 1, 45, 0)) {
								this.data["HOURS"] = this.Date.revTime(h24 - 1, 45, 0)[0];
							}
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * day Of Year
	 *
	 * @param  int $int
	 * @return bool
	 */
	setDayOfYear() {
		let int, int2;
		if ((int = this.int00() || this.int01To09() || this.int10To99())) {
			if ((int2 = this.int0() || this.int1To9())) {
				int += int2;
				return true;
			}
		}
		return false;
	}

	/**
	 * Sets the day of the first of the current month.		=>
	 * Sets the day to the last day of the current month.	=>
	 * 		=> This phrase is best used together with a month name following it.
	 *
	 * @return bool
	 */
	setDayOfMonth() {
		let pos = this.getPosition();
		if (this.isToken("FIRST")) {
			// Sets the day of the first of the current month. This phrase is best used together with a month name following it.
			this.nextToken();
			if (this.whiteSpace()) {
				if (this.isToken("DAY")) {
					this.nextToken();
					if (this.whiteSpace()) {
						if (this.isToken("OF")) {
							this.nextToken();
							if (this.whiteSpace()) {
								if (this.RelativeFormats() || this.DateFormats()) {
									this.data["DAY"] = 1;
									this.data["HOURS"] = 0;
									this.data["MINUTES"] = 0;
									this.data["SECONDS"] = 0;
									return true;
								}
							}
						}
					}
				}
			}
		} else if (this.isToken("LAST")) {
			// Sets the day to the last day of the current month. This phrase is best used together with a month name following it.
			this.nextToken();
			if (this.whiteSpace()) {
				if (this.isToken("DAY")) {
					this.nextToken();
					if (this.whiteSpace()) {
						if (this.isToken("OF")) {
							this.nextToken();
							if (this.whiteSpace()) {
								if (this.RelativeFormats() || this.DateFormats()) {
									this.data["DAY"] = this.Date.getDaysInMonth(
										this.data["YEAR"],
										this.data["MONTH"]
									);
									// console.log(
									// 	this.Date.getDaysInMonth(
									// 		this.data["YEAR"],
									// 		this.data["MONTH"]
									// 	)
									// );
									this.data["HOURS"] = 0;
									this.data["MINUTES"] = 0;
									this.data["SECONDS"] = 0;
									return true;
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Calculates the x-th week day of the current month.
	 * Calculates the last week day of the current month.
	 *
	 * @return bool
	 */
	setWeekDayOfMonth() {
		let dow: any,
			dow29month,
			diffdow,
			int: any,
			dow1month,
			pos = this.getPosition();
		if (this.isToken("LAST")) {
			// Calculates the last week day of the current month.
			this.nextToken();
			if (this.whiteSpace()) {
				if ((dow = this.dayNeme())) {
					if (this.whiteSpace()) {
						if (this.isToken("OF")) {
							this.nextToken();
							if (this.whiteSpace()) {
								if (this.RelativeFormats() || this.DateFormats()) {
									dow29month = this.Date.getDayOfWeek(
										this.data["YEAR"],
										this.data["MONTH"],
										this.Date.getDaysInMonth(
											this.data["YEAR"],
											this.data["MONTH"]
										)
									);
									if (dow < dow29month) {
										diffdow = dow29month - dow;
									} else if (dow > dow29month) {
										diffdow = 7 - dow - dow29month;
									} else {
										diffdow = 0;
									}
									[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
										this.Date.getDaysOfDay(
											this.data["YEAR"],
											this.Date.getDayOfYear(false, this.data["MONTH"], 1) -
												diffdow
										);
									this.data["HOURS"] = 0;
									this.data["MINUTES"] = 0;
									this.data["SECONDS"] = 0;
									return true;
								}
							}
						}
					}
				}
			}
		} else if ((int = this.ordinal())) {
			// Calculates the x-th week day of the current month.
			if (this.whiteSpace()) {
				if ((dow = this.dayNeme())) {
					if (this.whiteSpace()) {
						if (this.isToken("OF")) {
							this.nextToken();
							if (this.whiteSpace()) {
								if (this.RelativeFormats() || this.DateFormats()) {
									if (int > 0) {
										dow1month = this.Date.getDayOfWeek(
											this.data["YEAR"],
											this.data["MONTH"],
											1
										);
										if (dow < dow1month) {
											diffdow = dow1month - dow;
										} else if (dow > dow1month) {
											diffdow = 7 - dow - dow1month;
										} else {
											diffdow = 0;
										}
										[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
											this.Date.getDaysOfDay(
												this.data["YEAR"],
												this.Date.getDayOfYear(false, this.data["MONTH"], 1) +
													diffdow +
													(int - 1) * 7
											);
										return true;
									} else if (int == 0) {
									} else if (int == -1) {
									} else if (int == -2) {
									} else if (int == -3) {
									}
									this.data["HOURS"] = 0;
									this.data["MINUTES"] = 0;
									this.data["SECONDS"] = 0;
									return true;
								}
							}
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles relative time items where the value is a number.
	 *
	 * @return bool
	 */
	handleRelTimeNumber() {
		let int: any,
			rel,
			diffdow,
			pos = this.getPosition();
		if ((int = this.number())) {
			// Handles relative time items where the value is a number.
			if (this.whiteSpace()) {
			}
			if ((rel = this.unit() || this.isToken("WEEK"))) {
				if (this.isToken("WEEK") || rel == 53) {
					diffdow = int * 7;
				} else if (rel == 59) {
					// SECONDS
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
				} else if (rel == 60) {
					// MINUTES
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
				} else if (rel == 24) {
					// todo add with date
					[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
						this.Date.revTime(int, this.data["MINUTES"], this.data["SECONDS"]);
				} else if (rel == 31) {
					// DAY
					diffdow = int;
				} else if (rel == 12) {
					// todo calc with month with year
					diffdow = int * 30.5;
				} else if (rel == 100) {
					// YEAR
					if (int < 0) this.data["YEAR"] -= int;
					if (int > 0) this.data["YEAR"] += int;
				} else if (rel == 7) {
					// todo day of week		weekday
				} else if (rel == 14) {
					// FORTNIGHT
					diffdow = int * 14;
				}
				[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
					this.Date.getDaysOfDay(
						this.data["YEAR"],
						this.Date.getDayOfYear(
							this.data["YEAR"],
							this.data["MONTH"],
							this.data["DAY"]
						) + diffdow
					);
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles relative time items where the value is text.
	 *
	 * @return bool
	 */
	handleRelTimeText() {
		let rel,
			int: any,
			diffdoy,
			pos = this.getPosition();
		if ((int = this.ordinal())) {
			// Handles relative time items where the value is text.
			if (this.whiteSpace()) {
				if ((rel = this.unit())) {
					if (this.isToken("WEEK") || rel == 53) {
						diffdoy = int * 7;
					} else if (rel == 59) {
						// SECONDS
						[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
							this.Date.revTime(this.data["HOURS"], this.data["MINUTES"], int);
					} else if (rel == 60) {
						// MINUTES
						[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
							this.Date.revTime(this.data["HOURS"], int, this.data["SECONDS"]);
					} else if (rel == 24) {
						// todo add with date
						[this.data["HOURS"], this.data["MINUTES"], this.data["SECONDS"]] =
							this.Date.revTime(
								int,
								this.data["MINUTES"],
								this.data["SECONDS"]
							);
					} else if (rel == 31) {
						// DAY
						diffdoy = int;
					} else if (rel == 12) {
						// todo calc with month with year
						diffdoy = int * 30.5;
					} else if (rel == 100) {
						// YEAR
						if (int < 0) this.data["YEAR"] -= int;
						if (int > 0) this.data["YEAR"] += int;
					} else if (rel == 7) {
						// todo day of week		weekday
					} else if (rel == 14) {
						// FORTNIGHT
						diffdoy = int * 14;
					}
					[this.data["YEAR"], this.data["MONTH"], this.data["DAY"]] =
						this.Date.getDaysOfDay(
							this.data["YEAR"],
							this.Date.getDayOfYear(
								this.data["YEAR"],
								this.data["MONTH"],
								this.data["DAY"]
							) + diffdoy
						);
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Handles the special format "weekday + last/this/next week".
	 *
	 * @return bool
	 */
	handleRelTimeFormat() {
		let int,
			pos = this.getPosition();
		if ((int = this.relText())) {
			// Handles the special format "weekday + last/this/next week".
			if (this.whiteSpace()) {
				if (this.isToken("WEEK")) {
					this.nextToken();
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * TimeFormats
	 *
	 * @return bool
	 */
	TimeFormats() {
		// hh [.:]? II? [.:]? SS? space? meridian
		if (this.hour12Notation()) {
			return true;
		} else if (this.hour24Notation()) {
			return true;
		}
		return false;
	}

	/**
	 * Hour, optional minutes and seconds, with meridian
	 *
	 *
	 * @return bool
	 */
	hour12Notation() {
		let pos, h12, min, sec, meridian;
		pos = this.getPosition();
		if ((h12 = this.hour12())) {
			if (this.isToken("COLON") || this.isToken("DOT")) {
				this.nextToken();
				if ((min = this.minutesMandatoryPrefix())) {
					this.data["MINUTES"] = min;
					if (this.isToken("COLON") || this.isToken("DOT")) {
						this.nextToken();
						if ((sec = this.secondsMandatoryPrefix())) {
							this.data["SECONDS"] = sec;
						}
					}
				}
			}
			if (this.whiteSpace()) {
				this.nextToken();
			}
			if ((meridian = this.meridian())) {
				if (meridian) {
					this.data["HOURS"] = h12 + 12;
				} else {
					this.data["HOURS"] = h12;
				}
				this.data["AM_PM"] = meridian;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Hour, minutes and optional seconds, optional colon and dot
	 * Hour, minutes, seconds and timezone
	 * Hour, minutes, seconds and fraction
	 * Time zone information
	 *
	 * @return bool
	 */
	hour24Notation() {
		// 't'? HH [.:] II [.:]? SS? (frac | (space? ( tzcorrection | tz )))
		let pos, h24, min, sec, frac;
		pos = this.getPosition();
		if (this.isToken("SIGN_TIME")) {
			this.nextToken();
		}
		if ((h24 = this.hour24())) {
			if (this.isToken("DOT") || this.isToken("COLON")) {
				this.nextToken();
				if ((min = this.minutesMandatoryPrefix())) {
					if (this.isToken("DOT") || this.isToken("COLON")) {
						this.nextToken();
						if ((sec = this.secondsMandatoryPrefix())) {
							this.data["SECONDS"] = sec;
							if ((frac = this.fraction())) {
								this.data["FRAC"] = frac;
							}
							this.whiteSpace();
							this.TZCorrection();
							this.timeZone();
						}
					}
					this.data["HOURS"] = h24;
					this.data["MINUTES"] = min;
					return true;
				}
			} else if ((min = this.minutesMandatoryPrefix())) {
				if ((sec = this.secondsMandatoryPrefix())) {
					this.data["SECONDS"] = sec;
				}
				this.data["HOURS"] = h24;
				this.data["MINUTES"] = min;
				return true;
			}
		} else if (this.TZCorrection() || this.timeZone()) {
			return true;
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Date Formats
	 *
	 * @return bool
	 */
	DateFormats() {
		// Localized Notations
		let year, month;
		if (this.usaDate()) {
			// mm / dd /? y?
			return true;
		} else if (this.year4Date()) {
			return true;
		} else if (this.yearMonthAbbrDayDashes()) {
			return true;
		} else if (this.year2MonthDay()) {
			return true;
		} else if (this.dayMonth2digit4Year()) {
			return true;
		} else if ((year = this.year4MandatoryPrefix())) {
			this.data["YEAR"] = year;
			return true;
		} else if ((month = this.monthTextualFull())) {
			this.data["MONTH"] = month;
			return true;
		}
		return false;
	}

	/**
	 * American month, day and optional year
	 *
	 * @return bool
	 */
	usaDate() {
		let pos, year, month, day;
		pos = this.getPosition();
		if ((month = this.monthOptionalPrefix())) {
			if (this.isToken("SLASH")) {
				this.nextToken();
				if ((day = this.dayOptionalPrefix())) {
					if (this.isToken("SLASH")) {
						this.nextToken();
						if ((year = this.yearOptionalPrefix())) {
							this.data["YEAR"] = year;
						}
					}
					this.data["MONTH"] = month;
					this.data["DAY"] = day;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * year
	 * a number with exactly four digits
	 *
	 * @param  int $int
	 * @return bool
	 */
	year4MandatoryPrefix() {
		let int2, int;
		if ((int = this.year2MandatoryPrefix())) {
			if ((int2 = this.year2MandatoryPrefix())) {
				return (int += int2);
			}
		}
		return false;
	}

	/**
	 * year
	 *  a number between 1 and 9999 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	yearOptionalPrefix() {
		let int, int2;
		if (
			(int =
				this.int00() ||
				this.int0() ||
				this.int01To09() ||
				this.int1To9() ||
				this.int10To99())
		) {
			if (
				(int2 =
					this.int00() ||
					this.int0() ||
					this.int01To09() ||
					this.int1To9() ||
					this.int10To99())
			) {
				return (int += int2);
			}
			return int;
		}
		return false;
	}
	/**
	 * Four digit year, month and day with slashes
	 * Four digit year and month (GNU)
	 * Four digit year and textual month (Day reset to 1)
	 * Year (and just the year)
	 * Four digit year, month and day with optional slashes
	 * Four digit year with optional sign, month and day
	 *
	 * @return bool
	 */
	year4Date() {
		if (this.year4MonthDayDlashes()) {
			// YY "/" mm "/" dd
			return true;
		}
		if (this.year4MonthDay()) {
			//ISO  YY "/"? MM "/"? DD
			return true;
		}
		if (this.year4MonthGNU()) {
			// YY "-" mm
			return true;
		}
		if (this.year4TextualMonth()) {
			// YY ([ \t.-])* m    Day reset to 1
			return true;
		}
		if (this.year4SignMonthDay()) {
			// [+-]? YY "-" MM "-" DD
			return true;
		}
		return false;
	}

	/**
	 * Four digit year, month and day with slashes
	 *
	 * @return bool
	 */
	year4MonthDayDlashes() {
		// YY "/" mm "/" dd
		let pos, year, month, day;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("SLASH")) {
				this.nextToken();
				if ((month = this.monthOptionalPrefix())) {
					if (this.isToken("SLASH")) {
						this.nextToken();
						if ((day = this.dayOptionalPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year, month and day
	 *
	 * @return bool
	 */
	year4MonthDay() {
		// YY "/"? MM "/"? DD
		let pos, year, month, day;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("SLASH")) {
				this.nextToken();
			}
			if ((month = this.monthMandatoryPrefix())) {
				if (this.isToken("SLASH")) {
					this.nextToken();
				}
				if ((day = this.dayMandatoryPrefix())) {
					this.data["YEAR"] = year;
					this.data["MONTH"] = month;
					this.data["DAY"] = day;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year and month (GNU)
	 *
	 * @return bool
	 */
	year4MonthGNU() {
		// YY "-" mm
		let pos, year, month, day;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthOptionalPrefix())) {
					this.data["YEAR"] = year;
					this.data["MONTH"] = month;
					return true;
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year and textual month (Day reset to 1)
	 *
	 * @return bool
	 */
	year4TextualMonth() {
		// YY ([ \t.-])* m    Day reset to 1
		let pos, year, month;
		pos = this.getPosition();
		if ((year = this.year4MandatoryPrefix())) {
			while (this.whiteSpace() || this.isToken("DOT") || this.isToken("DASH")) {
				if (this.isToken("DOT") || this.isToken("DASH")) {
					this.nextToken();
				}
			}
			if ((month = this.monthTextualFull())) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				this.data["DAY"] = 1;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Four digit year with optional sign, month and day
	 *
	 * @return bool
	 */
	year4SignMonthDay() {
		// [+-]? YY "-" MM "-" DD
		let year,
			month,
			day,
			sign,
			pos = this.getPosition();
		if ((sign = this.signNumber())) {
			this.data["SIGN_DATE"] = sign;
		}
		if ((year = this.year4MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthMandatoryPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Year, month and day with dashes
	 * Year, month abbreviation and day
	 *
	 * @return bool
	 */
	yearMonthAbbrDayDashes() {
		if (this.yearMonthDayDashes()) {
			// y "-" mm "-" dd
			return true;
		} else if (this.yearMonthAbbrDay()) {
			// y "-" M "-" DD
			return true;
		}
		return false;
	}

	/**
	 * Year, month and day with dashes
	 *
	 * @return bool
	 */
	yearMonthDayDashes() {
		// y "-" mm "-" dd
		let pos, year, month, day;
		pos = this.getPosition();
		if ((year = this.yearOptionalPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthOptionalPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayOptionalPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Year, month abbreviation and day
	 *
	 * @return bool
	 */
	yearMonthAbbrDay() {
		// y "-" M "-" DD
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((year = this.yearOptionalPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthTextualShort())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Two digit year, month and day with dashes
	 *
	 * @return bool
	 */
	year2MonthDay() {
		// yy "-" MM "-" DD
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((year = this.year2MandatoryPrefix())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((month = this.monthMandatoryPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((day = this.dayMandatoryPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Day, month and four digit year, with dots, tabs or dashes
	 * Day, month and two digit year, with dots or tabs
	 * Day, textual month and year
	 * Day and textual month
	 *
	 * @return bool
	 */
	dayMonth2digit4Year() {
		if (this.dayMonth4Year()) {
			return true;
		} else if (this.dayMonth2Year()) {
			return true;
		} else if (this.dayTextualMonthYear()) {
			return true;
		} else if (this.textualMonth4Year()) {
			return true;
		} else if (this.monthAbbrDayYear()) {
			return true;
		}
		return false;
	}

	/**
	 * Day, month and four digit year, with dots, tabs or dashes
	 *
	 * @return bool
	 */
	dayMonth4Year() {
		// dd [.\t-] mm [.-] YY
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((day = this.dayOptionalPrefix())) {
			if (this.whiteSpace() || this.isToken("DOT") || this.isToken("DASH")) {
				if (this.isToken("DOT") || this.isToken("DASH")) {
					this.nextToken();
				}
				if ((month = this.monthOptionalPrefix())) {
					if (this.isToken("DOT") || this.isToken("DASH")) {
						this.nextToken();
						if ((year = this.year4MandatoryPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Day, month and two digit year, with dots or tabs
	 *
	 * @return bool
	 */
	dayMonth2Year() {
		//  dd [.\t] mm "." yy
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((day = this.dayOptionalPrefix())) {
			if (this.whiteSpace() || this.isToken("DOT")) {
				if (this.isToken("DOT")) {
					this.nextToken();
				}
				if ((month = this.monthOptionalPrefix())) {
					if (this.isToken("DOT")) {
						this.nextToken();
						if ((year = this.year2MandatoryPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Day, textual month and year
	 *
	 * @return bool
	 */
	dayTextualMonthYear() {
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((day = this.dayOptionalPrefix())) {
			// dd ([ \t.-])* m ([ \t.-])* y
			while (this.whiteSpace() || this.isToken("DOT") || this.isToken("DASH")) {
				if (this.isToken("DOT") || this.isToken("DASH")) {
					this.nextToken();
				}
			}
			if ((month = this.monthTextualFull())) {
				// d ([ .\t-])* m
				while (
					this.whiteSpace() ||
					this.isToken("DOT") ||
					this.isToken("DASH")
				) {
					if (this.isToken("DOT") || this.isToken("DASH")) {
						this.nextToken();
					}
				}
				if ((year = this.yearOptionalPrefix())) {
					this.data["YEAR"] = year;
				}
				this.data["MONTH"] = month;
				this.data["DAY"] = day;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Textual month and four digit year (Day reset to 1)
	 *
	 * @return bool
	 */
	textualMonth4Year() {
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((month = this.monthTextualFull())) {
			// m ([ \t.-])* YY         Day reset to 1
			while (this.whiteSpace() || this.isToken("DOT") || this.isToken("DASH")) {
				if (this.isToken("DOT") || this.isToken("DASH")) {
					this.nextToken();
				}
			}
			if ((year = this.year4MandatoryPrefix())) {
				this.data["YEAR"] = year;
				this.data["MONTH"] = month;
				this.data["DAY"] = 1;
				return true;
			} else if ((day = this.dayOptionalPrefix())) {
				// m ([ .\t-])* dd [,.stndrh\t ]+? y?
				while (
					this.whiteSpace() ||
					this.daySuffixTextual() ||
					this.isToken("COMMA") ||
					this.isToken("DOT")
				) {
					if (this.isToken("DOT") || this.isToken("COMMA")) {
						this.nextToken();
					}
				}
				if ((year = this.yearOptionalPrefix())) {
					this.data["YEAR"] = year;
					return true;
				}
				this.data["MONTH"] = month;
				this.data["DAY"] = day;
				return true;
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * Month abbreviation, day and year
	 *
	 * @return bool
	 */
	monthAbbrDayYear() {
		// M "-" DD "-" y
		let year,
			month,
			day,
			pos = this.getPosition();
		if ((month = this.monthTextualShort())) {
			if (this.isToken("DASH")) {
				this.nextToken();
				if ((day = this.dayMandatoryPrefix())) {
					if (this.isToken("DASH")) {
						this.nextToken();
						if ((year = this.yearOptionalPrefix())) {
							this.data["YEAR"] = year;
							this.data["MONTH"] = month;
							this.data["DAY"] = day;
							return true;
						}
					}
				}
			}
		}
		this.resetPosition(pos);
		return false;
	}

	/**
	 * TZCorrection
	 *
	 * @return bool
	 */
	TZCorrection() {
		let PLUS_DASH, h12, min;
		if (this.isToken("UTC")) {
			this.nextToken();
		}
		PLUS_DASH = false;
		if (this.isToken("PLUS")) {
			this.data["TZ_SIGN"] = "+";
			this.nextToken();
			PLUS_DASH = true;
		} else if (this.isToken("DASH")) {
			this.data["TZ_SIGN"] = "-";
			this.nextToken();
			PLUS_DASH = true;
		}
		if (PLUS_DASH && (h12 = this.hour12())) {
			this.data["TZ_HOURS"] = h12;
			if (this.isToken("COLON")) {
				this.nextToken();
			}
			if ((min = this.minutesMandatoryPrefix())) {
				this.data["TZ_MINUTES"] = min;
				return true;
			}
			return true;
		}
		return false;
	}

	// Relative

	/**
	 * number
	 *
	 * @param  int $num
	 * @param  string sign
	 * @return bool
	 */
	number() {
		let sign,
			isInt,
			int,
			num: any,
			signum = 1;
		if ((sign = this.signNumber()))
			if (sign == "-") {
				signum = -1;
			}
		isInt = false;
		while (
			(int =
				this.int10To99() ||
				this.int00() ||
				this.int01To09() ||
				this.int0() ||
				this.int1To9())
		) {
			num += int; //sprintf('%s%s',$num,int);
			isInt = true;
		}
		if (isInt) {
			return num * signum;
		}
		return false;
	}

	/**
	 * set Date/Time
	 *
	 * @param  int time
	 * @return void
	 */
	setDateTime(time: any) {
		//let date = this.Date.getDates(time);
		// console.log(date);
		// this.data["DATE"] = date;
		// this.data["YEAR"] = date["year"];
		// this.data["MONTH"] = date["mon"];
		// this.data["DAY"] = date["mday"];
		// this.data["HOURS"] = date["hours"];
		// this.data["MINUTES"] = date["minutes"];
		// this.data["SECONDS"] = date["seconds"];
		// this.data["TIMESTAMP"] = time;
		//this.data["GDATE"] = this.getdate(time);
	}

	/**
	 * is Token
	 *
	 * @param  string token
	 * @return bool
	 */
	isToken(token: any) {
		return this.Lexer.getLookahead().is(token);
	}

	/**
	 * name Token
	 *
	 * @return bool
	 */
	nameToken() {
		if (this.Lexer.getLookahead()) {
			return this.Lexer.getLookahead().getName();
		}
		return false;
	}

	/**
	 * value Token
	 *
	 * @return bool
	 */
	valueToken() {
		return this.Lexer.getLookahead().getValue();
	}

	/**
	 * next Token
	 *
	 * @return bool
	 */
	nextToken() {
		return this.Lexer.moveNext();
	}

	/**
	 * get Position
	 *
	 * @return bool
	 */
	getPosition() {
		return this.Lexer.getPosition();
	}

	/**
	 * reset Position
	 *
	 * @param  int pos Position
	 * @return bool
	 */
	resetPosition(pos: any) {
		return this.Lexer.resetPosition(pos);
	}

	// ======================================================================================
	// ==================================   Used Symbols   ==================================
	// ======================================================================================

	/**
	 * rest Time
	 *
	 * @param  int h Hours
	 * @param  int m Minutes
	 * @param  int s Seconds
	 * @return bool
	 */
	restTime(h = 0, m = 0, s = 0) {
		this.data["HOURS"] = h;
		this.data["MINUTES"] = m;
		this.data["SECONDS"] = s;
		return true;
	}

	/**
	 * white Space
	 *
	 * @return bool
	 */
	whiteSpace() {
		if (this.isToken("SPACE")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * hours
	 * a number between 1 and 12 inclusive, with a optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	hour12() {
		return this.int01To09() || this.int1To9() || this.int10To12();
	}

	/**
	 * hours
	 * a number between 01 and 24 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	hour24() {
		return this.int01To09() || this.int10To24();
	}

	/**
	 * meridian am/pm indicator
	 *
	 * @param  int str
	 * @return bool
	 */
	meridian() {
		let str: any;
		if (this.isToken("AM")) {
			//00:00-11:59
			str = 0;
			this.nextToken();
			return str;
		} else if (this.isToken("PM")) {
			//12:00-23:59
			str = 1;
			this.nextToken();
			return str;
		}
		return false;
	}

	/**
	 * minutes
	 * a number between 01 and 59 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	minutesMandatoryPrefix() {
		return this.int00() || this.int01To09() || this.int10To59();
	}

	/**
	 * minutes
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	minutesOptionalPrefix() {
		return (this.data["MINUTES"] =
			this.int00() ||
			this.int0() ||
			this.int1To9() ||
			this.int01To09() ||
			this.int10To59());
	}

	/**
	 * seconds
	 * a number between 1 and 59 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	secondsOptionalPrefix() {
		return (this.data["SECONDS"] =
			this.int00() ||
			this.int0() ||
			this.int1To9() ||
			this.int01To09() ||
			this.int10To59());
	}

	/**
	 * seconds
	 * a number between 01 and 59 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	secondsMandatoryPrefix() {
		return this.int00() || this.int01To09() || this.int10To59();
	}

	/**
	 * timeZone
	 *
	 * @return bool
	 */
	timeZone() {
		if (this.isToken("TZ")) {
			this.data["TZ_NAME"] = this.valueToken();
			return true;
		}
		return false;
	}

	/**
	 * fraction
	 *
	 * @param  int num
	 * @return bool
	 */
	fraction() {
		if (this.isToken("DOT")) {
			this.nextToken();
			var isInt = false;
			let int, num;
			while (
				(int =
					this.int10To99() ||
					this.int00() ||
					this.int01To09() ||
					this.int0() ||
					this.int1To9())
			) {
				num = num + "" + int; //sprintf('%s%s',num,int);
				isInt = true;
			}
			if (isInt) {
				return num;
			}
		}
		return false;
	}

	// date
	/**
	 * daySuffixTextual
	 *
	 * @return bool
	 */
	daySuffixTextual() {
		switch (this.nameToken()) {
			case "st":
				this.nextToken();
				return true;
			case "nd":
				this.nextToken();
				return true;
			case "rd":
				this.nextToken();
				return true;
			case "th":
				this.nextToken();
				return true;
			default:
				return false;
		}
	}

	/**
	 * day
	 * a number between 1 and 31 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	dayOptionalPrefix() {
		let int;
		if (
			(int =
				this.int00() ||
				this.int0() ||
				this.int1To9() ||
				this.int01To09() ||
				this.int10To31())
		) {
			if (this.daySuffixTextual()) {
				return int;
			}
			return int;
		}
		return false;
	}

	/**
	 * day
	 * a number between 01 and 31 inclusive, with a mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	dayMandatoryPrefix() {
		return this.int00() || this.int01To09() || this.int10To31();
	}

	/**
	 * Textual month (and just the month)
	 *
	 * @param  int int
	 * @return bool
	 */
	monthTextualFull() {
		var int;
		switch (this.nameToken()) {
			case "FARVARDIN":
			case "INT_I":
				int = 1;
				this.nextToken();
				return int;
			case "ORDIBEHESHT":
			case "INT_II":
				int = 2;
				this.nextToken();
				return int;
			case "KHORDAD":
			case "INT_III":
				int = 3;
				this.nextToken();
				return int;
			case "TIR":
			case "INT_IV":
				int = 4;
				this.nextToken();
				return int;
			case "AMORDAD":
			case "INT_V":
				int = 5;
				this.nextToken();
				return int;
			case "SHAHRIVAR":
			case "INT_VI":
				int = 6;
				this.nextToken();
				return int;
			case "MEHR":
			case "INT_VII":
				int = 7;
				this.nextToken();
				return int;
			case "ABAN":
			case "INT_VIII":
				int = 8;
				this.nextToken();
				return int;
			case "AZAR":
			case "INT_IX":
				int = 9;
				this.nextToken();
				return int;
			case "DEY":
			case "INT_X":
				int = 10;
				this.nextToken();
				return int;
			case "BAHMAN":
			case "INT_XI":
				int = 11;
				this.nextToken();
				return int;
			case "ESFAND":
			case "INT_XII":
				int = 12;
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * Textual abbreviation month  (and just the month)
	 *
	 * @param  int int
	 * @return bool
	 */
	monthTextualShort() {
		// abbreviated month
		return this.monthTextualFull();
	}

	/**
	 * month
	 * a number between 1 and 12 inclusive, with an optional 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	monthOptionalPrefix() {
		return (
			this.int00() ||
			this.int0() ||
			this.int01To09() ||
			this.int1To9() ||
			this.int10To12()
		);
	}

	/**
	 * month
	 * a number between 1 and 12 inclusive, with an mandatory 0 prefix before numbers 0-9
	 *
	 * @param  int int
	 * @return bool
	 */
	monthMandatoryPrefix() {
		return (
			this.int00() || this.int01To09() || this.int1To9() || this.int10To12()
		);
	}

	/**
	 *	a number with exactly two digits
	 *
	 * @param  {int} int
	 * @return bool
	 */
	year2MandatoryPrefix() {
		return this.int00() || this.int01To09() || this.int10To99();
	}

	/**
	 * week of year
	 *
	 * @param  int int
	 * @return bool
	 */
	setWeekOfYear() {
		return this.int00() || this.int01To09() || this.int10To53();
	}
	// Relative

	/**
	 * Space +
	 *
	 * @return bool
	 */
	spaceMore() {
		var space;
		while (this.whiteSpace()) {
			space = true;
		}
		if (space) {
			return true;
		}
		return false;
	}

	/**
	 * day neme
	 *
	 * @param  int dow
	 * @return bool
	 */
	dayNeme() {
		let dow;
		switch (this.nameToken()) {
			case "SATURDAY":
				dow = 0;
				this.nextToken();
				return dow;
			case "SUNDAY":
				dow = 1;
				this.nextToken();
				return dow;
			case "MONDAY":
				dow = 2;
				this.nextToken();
				return dow;
			case "TUESDAY":
				dow = 3;
				this.nextToken();
				return dow;
			case "WEDNESDAY":
				dow = 4;
				this.nextToken();
				return dow;
			case "THURSDAY":
				dow = 5;
				this.nextToken();
				return dow;
			case "FRIDAY":
				dow = 6;
				this.nextToken();
				return dow;
			default:
				return false;
		}
	}

	/**
	 * day text
	 *
	 * @return bool
	 */
	daytext() {
		if (this.isToken("WEEKDAY")) {
			this.nextToken();
			return true;
		}
		return false;
	}

	/**
	 * number sign
	 *
	 * @param  string sign
	 * @return bool
	 */
	signNumber() {
		let sign;
		if (this.isToken("PLUS")) {
			sign = "+";
			this.nextToken();
			return sign;
		} else if (this.isToken("DASH")) {
			sign = "-";
			this.nextToken();
			return sign;
		}
		return false;
	}

	/**
	 * Ordinal number
	 *
	 * @param  int int
	 * @return bool
	 */
	ordinal() {
		let int;
		if ((int = this.firstToThirtyFirstTextual())) {
			return int;
		} else if ((int = this.relText())) {
			return int;
		}
		return false;
	}

	/**
	 * relative text
	 *
	 * @param  int int
	 * @return bool
	 */
	relText() {
		var int;
		switch (this.nameToken()) {
			case "THIS":
				int = 0;
				this.nextToken();
				return int;
			case "NEXT":
				int = -1;
				this.nextToken();
				return int;
			case "PREVIOUS":
				int = -2;
				this.nextToken();
				return int;
			case "LAST":
				int = -3;
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * unit
	 *
	 * @param  int int
	 * @return bool
	 */
	unit() {
		var int;
		switch (this.nameToken()) {
			case "SECOND":
				this.nextToken();
				int = 59;
				return 59;
			case "MINUTE":
				int = 60;
				this.nextToken();
				return int;
			case "HOUR":
				int = 24;
				this.nextToken();
				return int;
			case "DAY":
				int = 31;
				this.nextToken();
				return int;
			case "MONTH":
				int = 12;
				this.nextToken();
				return int;
			case "YEAR":
				int = 100;
				this.nextToken();
				return int;
			case "WEEKS":
				int = 53;
				this.nextToken();
				return int;
			case "WEEKDAY":
				int = 7;
				this.nextToken();
				return int;
			case "FORTNIGHT":
				int = 14;
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	// =================================================================================
	// ==================================   numeric   ==================================
	// =================================================================================

	/**
	 * a spelled number between one and thirty-one (one, two, etc.)
	 *
	 * @param  int int
	 * @return bool
	 */
	oneToThirtyOneTextual() {
		var int;
		switch (this.nameToken()) {
			case "ONE":
				int = 1;
				this.nextToken();
				return int;
			case "TWO":
				int = 2;
				this.nextToken();
				return int;
			case "THREE":
				int = 3;
				this.nextToken();
				return int;
			case "FOUR":
				int = 4;
				this.nextToken();
				return int;
			case "FIVE":
				int = 5;
				this.nextToken();
				return int;
			case "SIX":
				int = 6;
				this.nextToken();
				return int;
			case "SEVEN":
				int = 7;
				this.nextToken();
				return int;
			case "EIGH":
				int = 8;
				this.nextToken();
				return int;
			case "NINE":
				int = 9;
				this.nextToken();
				return int;
			case "TEN":
				int = 10;
				this.nextToken();
				return int;
			case "ELEVEN":
				int = 11;
				this.nextToken();
				return int;
			case "TWELVE":
				int = 12;
				this.nextToken();
				return int;
			case "THIRTEEN":
				int = 13;
				this.nextToken();
				return int;
			case "FOURTEEN":
				int = 14;
				this.nextToken();
				return int;
			case "FIFTEEN":
				int = 15;
				this.nextToken();
				return int;
			case "SIXTEEN":
				int = 16;
				this.nextToken();
				return int;
			case "SEVENTEEN":
				int = 17;
				this.nextToken();
				return int;
			case "EIGHTEEN":
				int = 18;
				this.nextToken();
				return int;
			case "NINETEEN":
				int = 19;
				this.nextToken();
				return int;
			case "TWENTY":
				this.nextToken();
				if (this.isToken("DASH") || this.isToken("SPACE")) {
					this.nextToken();
				}
				switch (this.nameToken()) {
					case "ONE":
						int = 21;
						this.nextToken();
						return int;
					case "TWO":
						int = 22;
						this.nextToken();
						return int;
					case "THREE":
						int = 23;
						this.nextToken();
						return int;
					case "FOUR":
						int = 24;
						this.nextToken();
						return int;
					case "FIVE":
						int = 25;
						this.nextToken();
						return int;
					case "SIX":
						int = 26;
						this.nextToken();
						return int;
					case "SEVEN":
						int = 27;
						this.nextToken();
						return int;
					case "EIGH":
						int = 28;
						this.nextToken();
						return int;
					case "NINE":
						int = 29;
						this.nextToken();
						return int;
					default:
						int = 20;
						this.nextToken();
						return int;
				}
			case "THIRTY":
				if (this.isToken("DASH") || this.isToken("SPACE")) {
					this.nextToken();
				}
				if (this.isToken("ONE")) {
					int = 31;
					this.nextToken();
					return int;
				}
				int = 30;
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a spelled number in sequence between first and thirty-first
	 *
	 * @param  int int
	 * @return bool
	 */
	firstToThirtyFirstTextual() {
		var int;
		switch (this.nameToken()) {
			case "FIRST":
				int = 1;
				this.nextToken();
				return int;
			case "SECOND":
				int = 2;
				this.nextToken();
				return int;
			case "THIRD":
				int = 3;
				this.nextToken();
				return int;
			case "FOURTH":
				int = 4;
				this.nextToken();
				return int;
			case "FIFTH":
				int = 5;
				this.nextToken();
				return int;
			case "SIXTH":
				int = 6;
				this.nextToken();
				return int;
			case "SEVENTH":
				int = 7;
				this.nextToken();
				return int;
			case "EIGHTH":
				int = 8;
				this.nextToken();
				return int;
			case "NINTH":
				int = 9;
				this.nextToken();
				return int;
			case "TENTH":
				int = 10;
				this.nextToken();
				return int;
			case "ELEVENTH":
				int = 11;
				this.nextToken();
				return int;
			case "TWELFTH":
				int = 12;
				this.nextToken();
				return int;
			case "THIRTEENTH":
				int = 13;
				this.nextToken();
				return int;
			case "FOURTEENTH":
				int = 14;
				this.nextToken();
				return int;
			case "FIFTEENTH":
				int = 15;
				this.nextToken();
				return int;
			case "SIXTEENTH":
				int = 16;
				this.nextToken();
				return int;
			case "SEVENTEENTH":
				int = 17;
				this.nextToken();
				return int;
			case "EIGHTEENTH":
				int = 18;
				this.nextToken();
				return int;
			case "NINETEENTH":
				int = 19;
				this.nextToken();
				return int;
			case "TWENTIETH":
				int = 20;
				this.nextToken();
				return int;
			case "TWENTY": {
				this.nextToken();
				if (this.isToken("DASH") || this.isToken("SPACE")) {
					this.nextToken();
				}
				switch (this.nameToken()) {
					case "FIRST":
						int = 21;
						this.nextToken();
						return int;
					case "SECOND":
						int = 22;
						this.nextToken();
						return int;
					case "THIRD":
						int = 23;
						this.nextToken();
						return int;
					case "FOURTH":
						int = 24;
						this.nextToken();
						return int;
					case "FIFTH":
						int = 25;
						this.nextToken();
						return int;
					case "SIXTH":
						int = 26;
						this.nextToken();
						return int;
					case "SEVENTH":
						int = 27;
						this.nextToken();
						return int;
					case "EIGHTH":
						int = 28;
						this.nextToken();
						return int;
					case "NINTH":
						int = 29;
						this.nextToken();
						return int;
				}
				break;
			}
			case "THIRTIETH":
				int = 30;
				this.nextToken();
				return int;
			case "THIRTY": {
				if (this.isToken("DASH") || this.isToken("SPACE")) {
					this.nextToken();
				}
				if (this.isToken("FIRST")) {
					int = 31;
					this.nextToken();
					return int;
				}
				break;
			}
			default:
				return false;
		}
	}

	/**
	 * a number between ten and ninety nine
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To99() {
		switch (this.nameToken()) {
			case "INT_60":
			case "INT_61":
			case "INT_62":
			case "INT_63":
			case "INT_64":
			case "INT_65":
			case "INT_66":
			case "INT_67":
			case "INT_68":
			case "INT_69":
			case "INT_70":
			case "INT_71":
			case "INT_72":
			case "INT_73":
			case "INT_74":
			case "INT_75":
			case "INT_76":
			case "INT_77":
			case "INT_78":
			case "INT_79":
			case "INT_80":
			case "INT_81":
			case "INT_82":
			case "INT_83":
			case "INT_84":
			case "INT_85":
			case "INT_86":
			case "INT_87":
			case "INT_88":
			case "INT_89":
			case "INT_90":
			case "INT_91":
			case "INT_92":
			case "INT_93":
			case "INT_94":
			case "INT_95":
			case "INT_96":
			case "INT_97":
			case "INT_98":
			case "INT_99":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To59();
		}
	}

	/**
	 * a number between ten and fifty nine
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To59() {
		switch (this.nameToken()) {
			case "INT_54":
			case "INT_55":
			case "INT_56":
			case "INT_57":
			case "INT_58":
			case "INT_59":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To53();
		}
	}

	/**
	 * a number between ten and fifty three
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To53() {
		switch (this.nameToken()) {
			case "INT_37":
			case "INT_38":
			case "INT_39":
			case "INT_40":
			case "INT_41":
			case "INT_42":
			case "INT_43":
			case "INT_44":
			case "INT_45":
			case "INT_46":
			case "INT_47":
			case "INT_48":
			case "INT_49":
			case "INT_50":
			case "INT_51":
			case "INT_52":
			case "INT_53":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To36();
		}
	}

	/**
	 * a number between ten and thirty six
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To36() {
		switch (this.nameToken()) {
			case "INT_32":
			case "INT_33":
			case "INT_34":
			case "INT_35":
			case "INT_36":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To31();
		}
	}

	/**
	 * a number between ten and thirty one
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To31() {
		switch (this.nameToken()) {
			case "INT_25":
			case "INT_26":
			case "INT_27":
			case "INT_28":
			case "INT_29":
			case "INT_30":
			case "INT_31":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To24();
		}
	}

	/**
	 * a number between ten and twenty four
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To24() {
		if (this.isToken("INT_24")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return this.int10To23();
	}

	/**
	 * a number between ten and twenty three
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To23() {
		switch (this.nameToken()) {
			case "INT_13":
			case "INT_14":
			case "INT_15":
			case "INT_16":
			case "INT_17":
			case "INT_18":
			case "INT_19":
			case "INT_20":
			case "INT_21":
			case "INT_22":
			case "INT_23":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int10To12();
		}
	}

	/**
	 * a number between ten and twelfth
	 *
	 * @param  int int
	 * @return bool
	 */
	int10To12() {
		switch (this.nameToken()) {
			case "INT_10":
			case "INT_11":
			case "INT_12":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a number between one and nine - two digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int01To09() {
		switch (this.nameToken()) {
			case "INT_01":
			case "INT_02":
			case "INT_03":
			case "INT_04":
			case "INT_05":
			case "INT_06":
			case "INT_07":
			case "INT_08":
			case "INT_09":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a number between one and nine - single digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To9() {
		switch (this.nameToken()) {
			case "INT_8":
			case "INT_9":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return this.int1To7();
		}
	}

	/**
	 * a number between one and seven - single digits
	 *
	 * @param  int int
	 * @return bool
	 */
	int1To7(): Number | false {
		switch (this.nameToken()) {
			case "INT_1":
			case "INT_2":
			case "INT_3":
			case "INT_4":
			case "INT_5":
			case "INT_6":
			case "INT_7":
				const int = this.valueToken();
				this.nextToken();
				return int;
			default:
				return false;
		}
	}

	/**
	 * a zero number - two digit
	 *
	 * @param  int int
	 * @return bool
	 */
	int00(): Number | false {
		if (this.isToken("INT_00")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return false;
	}

	/**
	 * a zero number - single-digit
	 *
	 * @param  int int
	 * @return bool
	 */
	int0(): Number | false {
		if (this.isToken("INT_0")) {
			const int = this.valueToken();
			this.nextToken();
			return int;
		}
		return false;
	}
}

/**
 * ToDo:
 * add match type input and format
 * ex:
 * 13971110T15:00:00 -> [int2, int2, int2, int2, strTime, int2, strColon, int2, strColon, int2] === [13, 97, 11, 10, T, 15, :, 00, :, 00] === formatDefualt
 *
 *
 *
 * "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "yyyy-MM-ddTHH:mm:ssZ",
        "yyyy-MM-ddTHH:mm:ssz",
        "yyyy-MM-ddTHH:mm:ss",
        "yyyy-MM-ddTHH:mmZ",
        "yyyy-MM-ddTHH:mmz",
        "yyyy-MM-ddTHH:mm",
        "ddd, MMM dd, yyyy H:mm:ss tt",
        "ddd MMM d yyyy HH:mm:ss zzz",
        "MMddyyyy",
        "ddMMyyyy",
        "Mddyyyy",
        "ddMyyyy",
        "Mdyyyy",
        "dMyyyy",
        "yyyy",
        "Mdyy",
        "dMyy",
        "d"
 */
