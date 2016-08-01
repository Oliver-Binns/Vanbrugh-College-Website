/**
 * Created by oliver.binns on 01/08/2016.
 */
$(document).ready(function(){
	$('.carousel').carousel({full_width: true});
	
	$('.countdown').each(function(index, item){
		var freshersWeek = new Date('Sat Sep 24 2016 00:00:00 GMT+0100 (BST)');
		setInterval(function(){
			var countdownString = "";
			var days = DateDiff.inDays(freshersWeek);
			if(days > 1){
				countdownString += days + ' days';
			}else if(days == 1){
				countdownString += days + ' day';
			}

			if(countdownString != ""){
				countdownString += ", "
			}

			var hours = DateDiff.inHours(freshersWeek);
			if(hours > 1){
				countdownString += hours + ' hours';
			}else if(hours == 1){
				countdownString += hours + ' hours';
			}

			if(hours > 1){
				if(countdownString != ""){
					countdownString += " & "
				}
			}else{
				if(countdownString != ""){
					countdownString += ", "
				}
			}

			var minutes = DateDiff.inMinutes(freshersWeek);
			if(minutes > 1){
				countdownString += minutes + ' minutes.';
			}else if(hours == 1){
				countdownString += minutes + ' minutes.';
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
	}
};