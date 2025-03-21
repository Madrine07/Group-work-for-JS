function countVowels(str) {
    const vowels = 'aeiouAEIOU'; // All vowels, both lowercase and uppercase
    let count = 0; // Variable to count the number of vowels

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            count++; // Increment the count if it's a vowel
        }
    }

    return count; // Return the total number of vowels
}
console.log(countVowels("they are going to school"))
console.log(countVowels("sky"))