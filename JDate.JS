
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
		tis = this,
		this.date = date = date || new Date
		this.jdate = gregorian_jalali(date.getFullYear(),date.getMonth()+1,date.getDate())
		this.time = {'H':date.getHours(),'M':date.getMinutes(),'S':date.getSeconds(),'MS':date.getMilliseconds(),'TS':date.getTime(),'TZ':date.getTimezoneOffset(),
			concat : function(arg){
				for(i in arg)
					tis.time[i] = arg[i]
			}
		}
	}
	
	JDate.prototype = {
		getFullYear: function() {
			return this.jdate.Y;
		},
		getMonth: function(){
			return this.jdate.M;
		},
		getDate: function() {
			return this.jdate.D;
		},
		getHours: function() {
			return this.time.H;
		},
		getMinutes: function() {
			return this.time.M;
		},
		getSeconds: function() {
			return this.time.S;
		},
		getMilliseconds: function() {
			return this.time.MS;
		},
		getTime: function() {
			return this.time.TS;
		},
	 	setFullYear: function(jy, jm, jd) {
			jm && (this.jdate.Y = jy),
			jm && (this.jdate.M = jm),
			jd && (this.jdate.D = jd);
			return this.getTime();
		},
		setMonth: function(jm, jd){
			jm && (this.jdate.M = jm),
			jd && (this.jdate.D = jd);
			return this.getTime();
		},
		setDate: function(jd) {
			jd && (this.jdate.D = jd);
			return this.getTime();
		}, 
		setHours: function(H, M, S, MS) {
			this.date.setHours(H, (M?M:this.date.getMinutes()), (S?S:this.date.getSeconds()), (MS?MS:this.date.getMilliseconds())),
			this.time.concat({'H':this.date.getHours(),'M':this.date.getMinutes(),'S':this.date.getSeconds(),'MS':this.date.getMilliseconds()})
			return this.getTime();
		},
		setMinutes: function(M, S, MS) {
			this.date.setMinutes(M, (S?S:this.date.getSeconds()), (MS?MS:this.date.getMilliseconds())),
			this.time.concat({'M':this.date.getMinutes(),'S':this.date.getSeconds(),'MS':this.date.getMilliseconds()})
			return this.getTime();
		},
		setSeconds: function(S, MS) {
			this.date.setSeconds(S, (MS?MS:this.date.getMilliseconds())),
			this.time.concat({'S':this.date.getSeconds(),'MS':this.date.getMilliseconds()})
			return this.getTime();
		},
		setMilliseconds: function(MS) {
			this.date.setMilliseconds(MS),
			this.time.concat({'MS':this.date.getMilliseconds()})
			return this.getTime();
		},
		setTime: function(TS) {
			this.date.setTime(TS),
			this.time.concat({'TS':this.date.getTime()})
			return this.getTime();
		}, 
		getTimezoneOffset: function() {
			return this.time.TZ;
		},
		getDay: function() {
			return day_of_week(this.jdate.Y, this.jdate.M, this.jdate.D);
		},
		valueOf: function() {
			return this.getTime();
		}
		/* // get timestamp in linux format
		toString: function(format, convertDigit) {
			var ret = (!!format && format !== null) ? jdate._format(format + '', this.jdate) : jdate._format('yyyy-MM-dd HH:mm:ss.l Z', this.jdate);
			return (!!convertDigit && convertDigit !== null) ? ret.toFaDigit() : ret;
		} */
	};
	
	 function gregorian_jalali(gy,gm,gd,julian){
		// if(julian&&(gy<=1581||(gy==1582&&gm<=10&&gd<15)))
			// list(gm,gd,gy)=explode('/', jdtogregorian(juliantojd(gm,gd,gy)));
		jdoy=((gy-1)*365+([0,0,31,59,90,120,151,181,212,243,273,304,334][gm]+gd))-(226745 /*621*365+80*/)+Math.abs(is_leap(gy,'G',1)-is_leap(gy-621,'J',1));
		if(is_leap(gy,'G')&&gm>2)jdoy++;
		jy=parseInt(jdoy/365)+1;
		jd=jdoy%365;
		jleap=is_leap(jy);
		if(gm<4&&jleap&&jy==gy-622)jd++;
		jmn = [0,31,31,31,31,31,31,30,30,30,30,30,(jleap+29)];
		for(i in jmn){
			jm = i,
			dims=jmn[i]
			if (jd<=dims)break;
			jd-=dims;
		}
		if(jd==0){jy--;jm=12;jd=is_leap(jy)+29;}
		return {'Y':jy,'M':jm,'D':jd};
	}
	function jalali_gregorian(jy,jm,jd,julian){
		gdoy=((jy-1)*365+day_of_year(jm,jd,jy)+1)+(226745 /*621*365+80*/)-Math.abs(is_leap(jy+621,'G',1)-is_leap(jy,'J',1));
		gy=parseInt(gdoy/365)+1;
		gd=gdoy%365;
		prev_gleap=is_leap(gy-1,'G');
		jleap=is_leap(jy);
		if((prev_gleap&&gy==jy+622)||(jleap&&prev_gleap&&jm>11))gd--;
		gmn = [0,31,(is_leap(gy,'G')+28),31,30,31,30,31,31,30,31,30,31];
		for(i in gmn){
			gm = i,
			dims=gmn[i]
			if (gd<=dims)break;
			gd-=dims;
		}
		if(gd==-1){gy--;gm=12;gd=30;}
		else if(gd==0){gy--;gm=12;gd=31;}
		// if(julian&&(gy<=1581||(gy==1582&&gm<=10&&gd<15)))
			// list(gm,gd,gy)=explode('/', jdtojulian(gregoriantojd(gm,gd,gy)));
		return [parseInt(gy),parseInt(gm),parseInt(gd)];
	}
	function is_leap(y,type,all){
		//if(empty(type)||ord(strtoupper(type))==74)
		if( type == 'G' )
			return all ? ((y%4==0)&&!((y%100==0)&&(y%400!= 0))) : Math.ceil(parseInt((--y)/4)-parseInt((y)/100)+parseInt((y)/400))-150;
		return all ? ((parseInt((y+=1128)*365.2422)-parseInt(--y*365.2422))-365) : Math.ceil(((y+=1127)*365.2422)-y*365)-274;
	}
	
	
	 function day_of_week(jy,jm,jd){
		return ((1127+jy)*365.2422+day_of_year(jm,jd,jy)-3)%7;
	}
	
	
	 function day_of_year(jm,jd,jy){
		return ((jm<7?(jm-1)*31:(jm-7)*30+186)+--jd)%(days_in_year(jy)-1);
	}
	
	 function week_of_year(jy,jm,jd){
		var iw,iy
		/* Find if Y M D falls in YearNumber --Y, WeekNumber 52 or 53 */
		if(((doy=day_of_year(jm,jd,jy)+1)<=8-(far1weekday=day_of_week(jy,1,1)+1)) && far1weekday>4)
			return [(iw=(far1weekday==5||(far1weekday==6&&is_leap(iy=--jy)))?53:52),iy];
		/* Find if Y M D falls in YearNumber ++Y, WeekNumber 1 */
		if(365-doy+is_leap(jy)<4-(weekday=day_of_week(jy,jm,jd)+1)) {
			iy=++jy;
			return [iw=1,iy];
		}
		/* Find if Y M D falls in YearNumber Y, WeekNumber 1 through 52|53 */
		iy=jy;
		iw=(doy+6-weekday+far1weekday)/7;
		if(far1weekday>4)
			return [--iw,iy];
		return [iw,iy];
	}
	
	function days_in_month(jy,jm){
		return jm<7?31:(jm<12?30:is_leap(jy)+29);
	}
	
	 function days_in_year(jy){
		return is_leap(jy?jy:parseInt(jdate('Y')))+365;
	}
	function checkdate(jy,jm,jd){
		return !(jy<1||jy>1500 /*3500000  3,500,000 */||jm<1||jm>12||jd<1||jd>days_in_month(jy,jm));
	}
	
	 function checktime(h,i,s){
		return !(h<0||h>23||i<0||i>59||s<0||s>59);
	}
	 function nums(str,con,dec){
		dec= dec || ',';
		EN=array('0','1','2','3','4','5','6','7','8','9','.');
		FA=array('۰','۱','۲','۳','۴','۵','۶','۷','۸','۹',dec);
		FA2=array('٠','١','٢','٣','٤','٥','٦','٧','٨','٩',dec);
		con= con || 'FA';
		for(lang in ['EN','FA','FA2']){
			if(con==lang)continue;
			str=str_replace(lang, con,str);
		}
		return str;
	}
	
	return JDate
}();

