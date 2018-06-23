// prompting the inputted name
// activity 1 function
function myname() {
    var person = prompt("Please enter your name", "Blezel Tajor");

    if (person === "") {
    	document.getElementById("demo").innerHTML =
        "Sorry, you must input a name!! Just hit the refresh icon";
    }else if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hi " + "'" + person + "'" + " ! How are you today?";
    }else 
   		 document.getElementById("demo").innerHTML =
        "Sorry, I don't get your name!! Just hit the refresh icon";
}

//variables for number sort
var array = [];
var arrayasc = [];
var arraydsc = [];
function myFunction(){
	var newArray = parseInt(document.getElementById("number").value);
	array.push(newArray);
	arrayasc.push(newArray);
	arraydsc.push(newArray);
	
	//entered numbers dislay here
	document.getElementById("demo").innerHTML = array;
	console.log(array);
	
	//entered numbers in ascending order
	mySort_asc(arrayasc);
	document.getElementById("asc").innerHTML = array;
	console.log(mySort_asc(arrayasc));
	
	//entered numbers in descending order
	mySort_dsc(arraydsc);
	document.getElementById("dsc").innerHTML = array;
	console.log(mySort_dsc(arraydsc));
}
//function to sort numbers in ascending order
function mySort_asc(arr){
	for(var i = 0; i < array.length; i++) {
		var temp = array[i];
		var b = i - 1;
		while (b >= 0 && array[b] > temp) {
		  array[b + 1] = array[b];
		  b--;
		}
		array[b + 1] = temp;
	  }
	  return array;
}

//function to sort numbers in descending order
function mySort_dsc(arr){
	for(var i = 0; i < array.length; i++) {
		var temp = array[i];
		var b = i - 1;
		while (b >= 0 && array[b] < temp) {
		  array[b + 1] = array[b];
		  b--;
		}
		array[b + 1] = temp ;
	  }
	  return array;
}

//variables for string sort
var newArray = [];
function countStr() {
  var newString = (document.getElementById("number").value);
  newArray.push(newString);

  //count string length
  document.getElementById("demo0").innerHTML = newArray.length;
  document.getElementById("demo").innerHTML = newArray;

  var asc = countSort_asc(newArray);
  document.getElementById("demo1").innerHTML = asc;

  var desc = countSort_dsc(newArray);
  document.getElementById("demo2").innerHTML = desc;
}
//sort string to ascending
function countSort_asc(arr) {
  arr = arr.slice(0);
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1].length > arr[i].length) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}
//sort string to descending
function countSort_dsc(arr) {
  arr = arr.slice(0);
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i - 1].length < arr[i].length) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}