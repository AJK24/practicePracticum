//andrew klump
//populate an array and print every other one
//print increase gap by 1 each time.
//feb 13 2015


var array= [1,2,3,4,5,6,7,8,9,10];

	//fills out the array
//	for(var i = 1; i <+ 10; i++){
//		array[i-1] = i; //starts at zero but fills 1-10;
//	}


function printeveryother(array){
	for(var i = 0; i < array.length; i+=2){
		console.log(array[i]);
	}

}

function increasegap(array){
gap = 2;
	for(var i = 0; i < array.length; i+= gap, gap++){
		console.log(array[i]);
	//	i++;

	}

}

printeveryother(array);
increasegap(array);
