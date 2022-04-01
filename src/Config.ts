/**
 * class SHDate Configuration
 * @since 1.0.0
 */
export default class Config {
	public static version: string = "1.0.0";
	/**
	 *	The time difference with the server
	 */
	public static TIME_SERVER: number = 0;
	public static TSERVER: number = Config.TIME_SERVER;
	/**
	 *    Timezone identifier
	 */
	public static TIME_ZONE: string = "Asia/Tehran";
	public static TZONE: string = Config.TIME_ZONE;

	/**
	 *    Language words Software
	 */
	public static LANGUAGE_WORD: string = "en_US"; //en_US
	public static FIRST_DAY_OF_WEEK: number = 0; // 0 = Saturday | 6 = Friday
}
