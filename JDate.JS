
/**
	* In The Name Of God
	* @package JDate
    * @author   MohammaD (MD) Amanalikhani
	* @link    http://md-amanalikhani.github.io | http://md.akhi.ir
	* @copyright   Copyright (C) 2015 - 2020 Open Source Matters,Inc. All right reserved.
	* @license http://www.php.net/license/3_0.txt  PHP License 3.0
	* @version Release: 1.0.0
	*/	

 var dw=function(obj) {
    var out = "\n\n";
	if("object" == typeof obj || "array" == typeof obj) 
		for (var i in obj) {
			out += i + " : " + obj[i] +"\n";
		}
	out += obj +"\n";
    var pre = document.createElement('pre');
    pre.innerHTML = out+ "\n\n";
    document.body.appendChild(pre)
}
 
JDate = function() {
	function JDate(date, cal){
		this.date = date || new Date
	}
	
	JDate.prototype = {
		getFullYear: function() {
			return this.date;
		},
		getMonth: function(){
			return this.date;
		},
		getDate: function() {
			return this.date;
		},
		getDay: function() {
			return this.date;
		},
		/* // get timestamp in linux format
		getTime: function() {
			var gregorian = convert.toGregorian([this.jdate[0], this.jdate[1], this.jdate[2]]),
				tDate = new Date(gregorian[0], gregorian[1], gregorian[2], hour, minute, second, ms);
			return tDate.getTime();
		},
		toString: function(format, convertDigit) {
			var ret = (!!format && format !== null) ? jdate._format(format + '', this.jdate) : jdate._format('yyyy-MM-dd HH:mm:ss.l Z', this.jdate);
			return (!!convertDigit && convertDigit !== null) ? ret.toFaDigit() : ret;
		} */
	};
	function getHours(){}
	function getMinutes(){}
	function getSeconds(){}
	function getWeekNumber(){}
	function getDayOfYear(){}
	/* function gregorian_jalali(gy,gm,gd,julian=0){
		// if(julian&&(gy<=1581||(gy==1582&&gm<=10&&gd<15)))
			// list(gm,gd,gy)=explode('/', jdtogregorian(juliantojd(gm,gd,gy)));
		jdoy=((gy-1)*365+([0,0,31,59,90,120,151,181,212,243,273,304,334)[gm]+gd))-(226745 /*621*365+80*\/)+abs(php_is_leap(gy,'G',1)-php_is_leap(gy-621,'J',1));
		if(php_is_leap(gy,'G')&&gm>2)jdoy++;
		jy=(int)(jdoy/365)+1;
		jd=jdoy%365;
		jleap=php_is_leap(jy);
		if(gm<4&&jleap&&jy==gy-622)jd++;
		foreach(array(1=>31,31,31,31,31,31,30,30,30,30,30,(jleap+29)) as jm=>dims){
			if (jd<=dims)break;
			jd-=dims;
		}
		if(jd==0){jy--;jm=12;jd=php_is_leap(jy)+29;}
		return array(jy,jm,jd);
	}
	function jalali_gregorian(jy,jm,jd,julian=0){
		gdoy=((jy-1)*365+day_of_year(jm,jd,jy)+1)+(226745 /*621*365+80*\/)-abs(php_is_leap(jy+621,'G',1)-php_is_leap(jy,'J',1));
		gy=(int)(gdoy/365)+1;
		gd=gdoy%365;
		prev_gleap=php_is_leap(gy-1,'G');
		jleap=php_is_leap(jy);
		if((prev_gleap&&gy==jy+622)||(jleap&&prev_gleap&&jm>11))gd--;
		foreach(array(1=>31,(php_is_leap(gy,'G')+28),31,30,31,30,31,31,30,31,30,31) as gm=>dims){
			if (gd<=dims)break;
			gd-=dims;
		}
		if(gd==-1){gy--;gm=12;gd=30;}
		elseif(gd==0){gy--;gm=12;gd=31;}
		// if(julian&&(gy<=1581||(gy==1582&&gm<=10&&gd<15)))
			// list(gm,gd,gy)=explode('/', jdtojulian(gregoriantojd(gm,gd,gy)));
		return array((int)gy,(int)gm,(int)gd);
	}
	function php_is_leap(y,type='J',all=0){
		if(empty(type)||ord(strtoupper(type))==74)
			return empty(all)?(((int)((y+=1128)*365.2422)-(int)(--y*365.2422))-365):ceil(((y+=1127)*365.2422)-y*365)-274;
		return empty(all)?((y%4==0)&&!((y%100==0)&&(y%400!= 0))):ceil((int)((--y)/4)-(int)((y)/100)+(int)((y)/400))-150;
	} */
	
	return this
}();

