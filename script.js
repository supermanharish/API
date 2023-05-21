// async function FreeDict(){
//     try {
//         let enter=prompt("Enter the word to be searched:  (Ex: hello)");
//     let res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${enter}`);
//     let res1=await res.json();
//     let dataapi=res1.data;
//     console.log(dataapi);
//     for(var i=0;i<dataapi.length;i++)
//     {
//         row.innerHTML=`
//        <p>${dataapi[0].meanings[0].definitions[0].definition}</p>
//         <p>${dataapi[0].origin}</p>
//         <p>${news[0].phonetic}</p>`;
//     }        
//     } 
//     catch (error) {
//      console.log("Error");
//     }   
// }
// FreeDict();


const searchWord = document.querySelector('#searchWord');
const searchButton = document.querySelector('#searchButton');
const definition = document.querySelector('#definition');

searchButton.addEventListener('click', () => {
  // Get the word entered by the user
  const word = searchWord.value;

  // Clear the definition area
  definition.innerHTML = '';

  // Fetch the definition from the API
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
      // Display the definition
      if (data[0] && data[0].meanings[0]) 
      {
        const meaning = data[0].meanings[0].definitions[0].definition;
        definition.innerHTML = meaning;
      } 
      else 
      {
        definition.innerHTML = 'No definition found';
      }
    })
    .catch(error => {
      console.error(error);
      definition.innerHTML = 'Error fetching definition';
    });
});







