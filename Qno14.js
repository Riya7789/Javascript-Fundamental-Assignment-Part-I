
// Create a function which takes a word as a parameter. And do:
// Create two variables vowels = [] and consonants = [] 
// Insert the character into vowels array if it is vowel and consonant if character is consonant
// Arrange the elements of array in ascending array

  function vowel_count(str)
        {
            var vowel_list = 'aeiouAEIOU';
            var vcount = 0;
  
            for(var x = 0; x < str.length ; x++)
            {
                if (vowel_list.indexOf(str[x]) !== -1)
                {
                    vcount += 1;
                }
  
            }
            return vcount;
        }
        console.log(vowel_count("Career2Click Infodeveloper"));