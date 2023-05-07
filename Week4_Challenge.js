function LongestWord(sen) { 

    // code goes here
      var words = sen.replace(/[^\w\s]/gi, '').split(' ');
    
    // Find the longest word and return it
    var longest_word = '';
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest_word.length) {
        longest_word = words[i];
      }
    }
    return sen; 
  
  }
  
  // keep this function call here 
  console.log(LongestWord(readline()));