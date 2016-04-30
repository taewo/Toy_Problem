/* Your task is to add a new property usersAnswer to every object in the array questions. 
 * The value of usersAnswer should be set to null. 
 * The solution should work for array of any length.
 *
 * For example:
 * var questions = [{
 *     question: "What's the currency of the USA?",
 *     choices: ["US dollar", "Ruble", "Horses", "Gold"],
 *     corAnswer: 0
 * }, {
 *     question: "Where was the American Declaration of Independence signed?",
 *     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
 *     corAnswer: 0
 * }];
 *
 * After adding the property the result should be:
 * var questions = [{
 *     question: "What's the currency of the USA?",
 *     choices: ["US dollar", "Ruble", "Horses", "Gold"],
 *     corAnswer: 0,
 *     usersAnswer: null
   }, {
 *     question: "Where was the American Declaration of Independence signed?",
 *     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
 *     corAnswer: 0,
 *     usersAnswer: null
 * }];
*/



var questions = [{
      question: "What's the currency of the USA?",
      choices: ["US dollar", "Ruble", "Horses", "Gold"],
      corAnswer: 0
  }, {
      question: "Where was the American Declaration of Independence signed?",
      choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
      corAnswer: 0
 }];

function addAnswers (){
	for(var i = 0; i < questions.length; i++){
		questions[i].usersAnswer = null	;
	}
}

addAnswers()
console.log(questions)




/* 
 * Check to see if a string has the same amount of 'x's and 'o's. 
 * The method must return a boolean and be case insensitive. 
 * The string can contains any char.
 *
 * Examples input/output:
 * 
 * xo("ooxx") => true
 * xo("xooxx") => false
 * xo("ooxXm") => true
 * xo("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * xo("zzoo") => false
*/



var xo = function(str) {

	var o = [];
	var x = [];
	var random = [];
	var upperStr = str.toUpperCase();
	var upperStrSplit = upperStr.split('');

	for(var i=0; i<upperStrSplit.length; i++){
		if(upperStrSplit[i] === 'O'){
			o.push('o');
		}
		else if(upperStrSplit[i] === 'X'){
			x.push('x');
		}
		else{
			random.push('z')
		}
	}

	if(o.length === x.length){
		return true;
	} 
	else {
		return false;
	}
};

console.log(xo('ooxxxx'));
console.log(xo('ooxx'));
console.log(xo('zzoo'))



var xo = function(str){
  var obj ={};
  var strToLowerCase = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if(!obj[strToLowerCase[i]]) {
      console.log(obj[strToLowerCase]);
      obj[strToLowerCase[i]] = 1;
    } else {
      obj[strToLowerCase[i]] += 1;
    }
  }
  if(obj['x'] === obj['o']){
    return true;
  }else{
    return false;
  }
}





var xo1 = function(str){
  var oCounter = 0;
  var xCounter = 0;
  var strToLowerCase = str.toLowerCase();
  for(var i=0; i<str.length; i++){
    if(strToLowerCase[i] === 'o'){
      oCounter += 1;
    } else if (strToLowerCase[i] === 'x'){
      xCounter += 1;
    }
  }
  if(oCounter === xCounter){
    return true;
  }else{
    return false;
  }
};
console.log(xo1('ooxxxx'));



var xo = function(str){
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}



/** 
 * Using the JavaScript language, have the function FirstReverse(str) 
 * take the str parameter being passed and return the string in reversed order.
 * example 1: firstReverse("codestates"); => "setatsedoc"
 * example 2: firstReverse("I love codestates"); => "setatsedoc evol I"
 */


var firstReverse = function(str) { 
	
	var result =[];
	var strSplit = str.split("");
	for(var i=strSplit.length ;i>=0 ;i--){
		result.push(strSplit[i]);
	}
	result = result.join('')
	return result;
};

console.log(firstReverse("hello"));
console.log(firstReverse("I love codestates"));
console.log(firstReverse("taewoong moon zzang"));





var firstReverse = function(str){
  return str.split("").reverse().join("");
}




var firstReverse = function(str){

  var result = "";

  for(var i = str.length -1 ; i >= 0 ; i--){
    result += str[i];
  }

  return result;
}



/**
 * Using the JavaScript language, have the function LetterCapitalize(str) 
 * take the str parameter being passed and capitalize the first letter of each word. 
 * Words will be separated by only one space. 
 * example 1: letterCapitalize("hello world"); => "Hello World"
 * example 2: letterCapitalize("javascript is sexy") => "Javascript Is Sexy"
 */



var letterCapitalize = function(str){

	var result = "";
	
	var isBeforeSpace = true;
	for(var i=0; i<str.length; i++){		
		//result[0] += str[0].toUpperCase();
		console.log("now char:"+str[i]);
		console.log(result);
		if(str[i] === " "){//지금이 공백인경우
			console.log("now space, next should be capital!!");
			isBeforeSpace = true;
			result += str[i];							
		}
		else{//지금이 공백이 아닌경우
			if (isBeforeSpace){//이전이 공백이 아닌경우
				console.log("before iteration we take space so now we process character to captial!!!");
				result += str[i].toUpperCase();
				isBeforeSpace=false;
			}else{//이전이 공백인경우
				console.log("normal");
				result += str[i];				
			}

		}
	}
	return result;
}

console.log(letterCapitalize('hello world'));




var letterCapitalize = function(str){

	var result = "";

	var isBeforeSpace = true;
	
	for(var i=0; i<str.length; i++){	

		if(str[i] === " "){
			isBeforeSpace = true;
			result += str[i];							
		}
		else{
			if (isBeforeSpace){
				result += str[i].toUpperCase();
				isBeforeSpace = false;
			}else{
				result += str[i];				
			}			
		}
	}
	return result;
};

console.log(letterCapitalize('hello world'));



/*
Suppose we could access yesterday's stock prices 
as an array, where:

The indices are the time in minutes past trade opening time, 
which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and 
returns the best profit I could have made from 1 purchase and 
1 sale of 1 Apple stock yesterday.

For example:

 int[] stockPricesYesterday = new int[]{10, 7, 5, 8, 11, 9};

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. 
You may not buy and sell in the same time step (at least 1 minute must pass).
*/




var stock = [2,4,7,9,0,6];

function getMaxProfit (money){

	var save = [];
	var result;

	for(var i=0; i<money.length; i++){
		var pivotNumber = money[i];
		for(var j=i+1; j<money.length; j++){
			save.push(pivotNumber - money[j]);
		}
	}
	console.log(save);
	console.log(save.length)



}
getMaxProfit(stock);





// Task:

// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

//apple=[["A","A","A","A","A"],
//		["A","A","A","A","A"],
//		["A","A","A","A","A"],
//		["A","A","A","B","A"],
//		["A","A","A","A","A"]];

//[3,3]



apple = [["A","A","A","A","A"],
		["A","A","A","A","A"],
		["A","A","A","A","A"],
		["A","A","A","B","A"],
		["A","A","A","A","A"]];

function sc(apple){

	var result = [];

	for(var i=0; i<apple.length; i++){
		for(var j=0; j<apple[i].length; j++){
			if(apple[i][j] === 'B'){

				result = [i,j];

			}
		}
	}
	return result;
}


console.log(sc(apple))




/**
* Given an arbitrary input string, return the first nonrepeated character in
* the string. For example:
*
*   firstNonRepeatedCharacter('ABA'); // => 'B'
*   firstNonRepeatedCharacter('AACBDB'); // => 'C'
*/

var firstNonRepeatedCharacter = function(string) {
 
	var firstLetter = string[0];
	var result;

	for(var i=0; i<string.length; i++){
		if(firstLetter !== string[i]){
			result = string[i];
			break;
		}
	}
	return result;
};

console.log(firstNonRepeatedCharacter('AAAAPDDPP'));
console.log(firstNonRepeatedCharacter('DDDRRRVV'));
console.log(firstNonRepeatedCharacter('DFHTH'));


/*
+// Using the JavaScript language, have the function ABCheck(str) 
 +// take the str parameter being passed and 
 +// return the string true if the characters a and b are separated by exactly 3 places anywhere 
 +// in the string at least once (ie. "lane borrowed" would result in true 
 +// because there is exactly three characters between a and b). 
 +// Otherwise return the string false. 
 +
 +function ABCheck(str) { 
 +
 +  // code goes here           
 +}
*/




function ABCheck(str){

	var result = false;	//기본값은 false로 지정
	var aCheck = str.split('a');	
	var bCheck = str.split('b');

	if(aCheck.length == 2 && bCheck.length == 2){
		result = true;
	}
	return result;
}






+/** 
 + * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 + * Implement a function that determines whether a string that contains only letters is an isogram. 
 + * Assume the empty string is an isogram. Ignore letter case.
 + * example 1: isIsogram("Dermatoglyphics"); => true
 + * example 2: isIsogram("aba"); => false
 + * example 3: isIsogram("moOse"); => false // -- ignore letter case
 + 
 +
 +var isIsogram = function(str) {
 +  //Your code here
 +};
*/


 var isIsogram = function(str){

 	var result = false;
	var strCount = 0;
	var lowerLetter = str.toLowerCase();
	var splitStr = lowerLetter.split("")

	for(var i=0; i<splitStr.length; i++){
	  for(var j=0; j<splitStr.length; j++){
	    if(splitStr[i] == splitStr[j]){
	      strCount += 1;
	   	   };
	    };
	}

	  if(strCount === splitStr.length){
	    result = true;
	  }

	  return result;

};







+/**
 + * In this exercise, you are required to, given a string, 
 + * replace every letter with its position in the alphabet. 
 + * If anything in the text isn't a letter, ignore it 
 + * and don't return it. a being 1, b being 2, etc.
 + * example 1: alphabetPosition("The sunset sets at twelve o' clock."); => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 + 
 +
 +var alphabetPosition = function(text) {
 +  // Your code here
 +  return text;
 +};
*/



var alphabetPosition = function(text){

  var result = [];
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var textLower = text.toLowerCase();
  var makeText = textLower.split(" ").join('');
  
  for(var i=0; i<makeText.length; i++){
    for(var j=0; j<abc.length; j++){
      if(makeText[i] == abc[j]){
        result.push(j);
      }
    }
  }
  return result.join(" ");
};







/*
Using the JavaScript language, have the function RunLength(str) take the str parameter 
 +// being passed and return a compressed version of the string 
 +// using the Run-length encoding algorithm. 
 +// This algorithm works by taking the occurrence of each repeating character 
 +// and outputting that number along with a single character of the repeating sequence. 
 +// For example: "wwwggopp" would return 3w2g1o2p. 
 +// The string will not contain any numbers, punctuation, or symbols. 
 +
 +function RunLength(str) { 
 +
 +  // code goes here  
 +  return str; 
 +         
 +}
*/

function RunLength(str){

  var strCount = 1;
  var result = "";

  for(var i=0; i<str.length; i++){
    if(str[i] === str[i+1]){
      strCount += 1;
    }
    else{
      result += strCount;
      result += str[i];
      strCount = 1;
    }
  }
  return result;
}






/*
+// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter 
 +// being passed which will be an integer and return the string true 
 +// if it's a power of two. If it's not return the string false. 
 +// For example if the input is 16 then your program should return the string true 
 +// but if the input is 22 then the output should be the string false.
 +
 +function PowersofTwo(num) { 
 +
 +  // code goes here  
 +  return num; 
 +         
 +}
*/

function PowersofTwo(num){

  var result = false;

  do{
    num/=2;
    if(2>num>=1){
      if(num === 1){
        return true;
      }else{
        return false;
      }
    }
  }while(num > 1);
}







/*
+// Using the JavaScript language, have the function ThreeFiveMultiples(num) 
 +// return the sum of all the multiples of 3 and 5 that are below num. 
 +// For example: if num is 10, the multiples of 3 and 5 
 +// that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, 
 +// so your program should return 23. The integer being passed will be between 1 and 100. 
 +
 +function ThreeFiveMultiples(num) { 
 +
 +  // code goes here  
 +  return num; 
 +         
 +}
 */







