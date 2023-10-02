let str1 = "hi"
let str2 = 'bro'
let str3 = "welcome to javascript"


console.log(str1+ str2) //string concatination

console.log(str1.concat(str2)) // string concation by method

console.log(str2.slice(2))

console.log(str2.substring(2))//start,end

console.log(str3.substr(3,6))//start,length

console.log(str3.replace("welcome","hi"))

console.log(str2.length)


let credit = "Rs.10"

console.log(credit.padEnd(8,'0'))

console.log(str3[1])

console.log(str3.charAt(1))

console.log(str3.charCodeAt(1)) // this gives uniquecode of characters

console.log(str3.indexOf('j'))

console.log(str3.search("script"))

console.log(str3.includes("welcome"))

console.log(str3.startsWith("w"))
