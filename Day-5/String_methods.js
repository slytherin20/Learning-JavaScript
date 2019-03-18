//String.charAt()
var str='Slytherin_House';
console.log(str.charAt(10));

//String.concat()
var x="Java";
var y="Script";
var u=x.concat(y); //String is immutable in Js
console.log(u);

//String.includes()
console.log(str.includes());
console.log(str.includes(""));
console.log(str.includes(" "));
console.log(str.includes("_"));
console.log(str.includes("slytherin"));


//String.endWith()-returns a boolean indicating whether the string ends with passed argument or not.
console.log(str.endsWith("se"));
console.log(str.endsWith());
console.log(str.endsWith(""));
console.log(str.endsWith(" "));


//String.indexOf()
console.log(str.indexOf("_"));

//String.lastIndexOf()
console.log(str.lastIndexOf("e"));

//String.match()
// matches the string with a regular expression and searches for answer ,it returns the substring,index,initial string.
console.log(str.match("[a-z]+"));


//String.repeat()- If 0 or no argument is passed then returns an empty string
console.log(str.repeat(3));


//String.replace()
console.log(str.replace());
console.log(str.replace("_"," "));


//String.search()- returns index of first occurence found, search takes place between string ans regular exp. also.
console.log(str.search());
console.log(str.search("y"));
console.log(str.search("[a-z]"));


//String.slice-extracts a section of the string and returns it as a new string.
console.log(str.slice(2,7));


//string.split
console.log(str.split("_"));

//string.startsWith()
console.log(str.startsWith("Slytherin"));
console.log(str.startsWith("slytherin"));



//String.substr() and String.substring()

//substr()- returns a string from the index specified int the method.Second argument here represents the length of the returned string.
console.log(str.substr(2,10));
//substring() - returns a string in the range given in the method.
console.log(str.substring(2,10));


//String.toLowerCase() and String.toUpperCase()
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//String.trim(),String.trimLeft(),String.trimRight()
//Trim removes whitespaces from the string
var a="            abc               ";
console.log(a.trim());
//TrimLeft removes whitespaces from left side
console.log(a.trimLeft());
//trimRight removes right side whitespaces
console.log(a.trimRight());
