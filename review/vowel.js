var word = process.argv[2];
var count = 0;
var neighbor = 0;

var arr = word.split('');
var consonants = [];

for(var i = 0; i < word.length; i++){
  var z = word.charAt(i);
  var znext = word.charAt(i + 1);
  if ((z === "a") || (z ==="e") || (z ==="i") || (z ==="o") || (z ==="u")) {
    count++;
  }
  if (((z === "a") || (z ==="e") || (z ==="i") || (z ==="o") || (z ==="u")) && ((znext === "a") || (znext ==="e") || (znext ==="i") || (znext ==="o"))){
    neighbor++;
  }

  if ((arr[i] != 'a') && (arr[i] != 'e') && (arr[i] != 'i') && (arr[i] != 'o') && (arr[i] !='u')){
		consonants.push(arr[i]);
	}
};

console.log(consonants);
// //bonus 1
// if ((count > 1) && (neighbor < 1)){
//   console.log("it checks uut");
// }
// else {
//   console.log("it aint workin");
// }

// //part1
// if (count === 1){
//   console.log("yes");
// }
// else {
//   console.log("nope");
// }


// var check = process.argv[2];

// var count = 0;
// var adjacent = 0;

// var arr = check.split('');

// var consonants = [];

// for (i=0 ; i < check.length; i++){
// 	var letter = check.charAt(i);
// 	var nextLetter = check.charAt(i+1);

// 	if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')){
// 		count++;
// 	};

// 	if (((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter ==='u')) && ((nextLetter === 'a') || (nextLetter === 'e') || (nextLetter === 'i') || (nextLetter === 'o') || (nextLetter ==='u'))){
// 		adjacent++;
// 	};

// 	if ((arr[i] != 'a') && (arr[i] != 'e') && (arr[i] != 'i') && (arr[i] != 'o') && (arr[i] !='u')){
// 		consonants.push(arr[i]);
// 	}
// };

// if ((count > 1) && (adjacent < 1)){
// 	console.log('It checks out');
// } else if ((count > 1) && (adjacent >= 1)){
// 	console.log('nope');
// } else {
// 	console.log('the vowels you seek are not here');
// }

// console.log(consonants);
