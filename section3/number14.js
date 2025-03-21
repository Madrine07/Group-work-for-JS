function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("javascript lecture 7"));



// Approach 2
// this is case insenstive
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) { 
            count++;
        }
    }

    return count;
}

console.log(countVowels("js lecture 7")); 
console.log(countVowels("JAVA SCRIPT LECTURE 7"));      
console.log(countVowels("JAVa scIpT LECTURE 7")); 


