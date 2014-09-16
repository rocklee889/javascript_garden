var closeTop10 = {
	mergeSort: function(arr) {
		if (arr.length < 2) 
    		return arr;
    					    
	    var mid = Math.floor(arr.length /2),
	    	subLeft = closeTop10.mergeSort(arr.slice(0,mid)),
	    	subRight = closeTop10.mergeSort(arr.slice(mid));
	   
	    return closeTop10.merge(subLeft, subRight);
	},
	merge: function(a,b) {
		var result = [];
	    while (a.length >0 && b.length >0)
	        result.push(a[0] < b[0]? a.shift() : b.shift());
	    return result.concat(a.length? a : b);
	},
	test: function(s) {
		var ran_index = Math.floor(Math.random()*unsort.length),
			start = ran_index - 5,
			end = ran_index + 6;
			document.writeln("random index is: "+ran_index);
			document.writeln("random value is: "+s[ran_index]+"<br />");
		if(start < 0) {
			start = 0;
			end = 10;
		}
		else if(end >= s.length) {
			end = s.length-1;
			start = s.length-11;
		}

		for(var i = start;i < end; i++) {
			document.writeln(s[i]);
		}
	},
	run: function() {
		arr = unsort.slice(0),
		a = closeTop10.mergeSort(arr),
		sort = a.slice(0);
		closeTop10.test(sort);
	}
}

closeTop10.run();