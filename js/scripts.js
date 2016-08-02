/**
 * Created by oliver.binns on 01/08/2016.
 */
$(document).ready(function(){
	$('.carousel').carousel({full_width: true});
	
	$('.countdown').each(function(index, item){
		var freshersWeek = new Date('Sat Sep 24 2016 00:00:00 GMT+0100 (BST)');
		var countdown = setInterval(function(){
			var days = DateDiff.inDays(freshersWeek);
			var hours = DateDiff.inHours(freshersWeek);
			var minutes = DateDiff.inMinutes(freshersWeek);
			var seconds = DateDiff.inSeconds(freshersWeek);
			
			if(days < 0 || hours < 0 || minutes < 0 || seconds < 0){
				clearInterval(countdown);
				item.innerHTML = "";
			}
			
			var countdownString = "";
			
			//Echo Counts of Days
			if(days > 1){
				countdownString += days + ' days';
			}else if(days == 1){
				countdownString += days + ' day';
			}

			
			if(days > 0 && hours > 0 && minutes > 0){
				countdownString += ", ";
			}else if(days > 0 && hours > 0){
				countdownString += " & ";
			}
			
			//Echo Count of Hours
			if(hours > 1){
				countdownString += hours + ' hours';
			}else if(hours == 1){
				countdownString += hours + ' hours';
			}
			
			if(days > 0){
				countdownString += " & "
			}else if(days == 0 && hours > 0){
				countdownString += ", "
			}
			
			//Echo Count of Minutes
			if(minutes > 1){
				countdownString += minutes + ' minutes';
			}else if(minutes == 1){
				countdownString += minutes + ' minute';
			}else if(days > 1 || hours > 1){
                countdownString += " 0 minutes";
            }
            
            if(days == 0){
            	//Show seconds in place of days...
	            if(hours > 0 || minutes > 0){
		            countdownString += " & "
	            }
	            
	            if(seconds == 1){
	            	countdownString += "1 second";
	            }else{
	            	countdownString += seconds + " seconds";
	            }
            }

			item.innerHTML = countdownString;
		}.bind(item, freshersWeek), 1000);
	});
});

var DateDiff = {

	inDays: function(d1) {
		var t1 = (new Date).getTime();
		var t2 = d1.getTime();

		return parseInt((t2-t1)/(24*3600*1000));
	},

	inHours: function(d1) {
		var t1 = (new Date).getTime();
		var t2 = d1.getTime();

		return parseInt((t2-t1)/(3600*1000)%24);
	},

	inMinutes: function(d1) {
		var t1 = (new Date).getTime();
		var t2 = d1.getTime();

		return parseInt((t2-t1)/(60*1000)%60);
	},
	
	inSeconds: function(d1) {
		var t1 = (new Date).getTime();
		var t2 = d1.getTime();

		return parseInt((t2-t1)/(1000)%60);
	}
};