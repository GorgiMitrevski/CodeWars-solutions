//What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.

function anagrams(word, words) {
     return words.filter((el) =>{ // filter every element
        return el.split('').sort().join('') === word.split('').sort().join('');
      }); // element split into array and  sort and again join in array
          // word split in to array, sort, back to string if equal = return that array
}
