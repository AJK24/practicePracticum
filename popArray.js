//andrew klump
//populate an array and print every other one
//print increase gap by 1 each time.
//feb 13 2015


var array= [];

	//fills out the array
	for(var i = 1; i <+ 10; i++){
		array[i-1] = i; //starts at zero but fills 1-10;
	}


function printeveryother(array){
	for(var i = 0; i < array.length; i+=2){
		console.log(array[i]);
	}

}

function increasegap(array){
	for(var i = 1; i <array.length; i+=i){
		console.log(array[i]);
	//	i++;

	}

}

printeveryother(array);
increasegap(array);
