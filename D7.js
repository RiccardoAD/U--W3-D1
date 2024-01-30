/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatStringa(stringa1,stringa2) { 
  const firstPart= stringa1.substring(0,2);// seleziono i primi 2 caratteri della seconda stringa 
  const secondPart= stringa2.slice(-3);// seleziona gli ultimi 3 caratteri della seconda stringa 
  const resultString = firstPart +secondPart ;
  const uppercaseResult= resultString.toUpperCase();// convero il risultato in maiuscolo 
   

console.log("Esercizio 1: ",uppercaseResult);// mostro le due parole
}
  concatStringa("buongiorno","buonanotte")
  

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function addRandomElement() {
  
  const myArray=[];
  for (let i = 0; i < 10; i++) {
    const randomNum= Math.floor(Math.random()*101); // inserisco 101 percè arroondando per diffetto arriverebe fino a 99
    myArray.push(randomNum);
    
  }
return myArray;
}
console.log("esecizio 2:"+ addRandomElement());


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

 const numeri=[1,2,3,4,5,6,7,8,9,10];
 const numeriFiltrati =numeri.filter((numero)=>numero %2===0);

 console.log("eserciizio 3:",numeriFiltrati);
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const randomArr = [1,2,3,43,5,6,75,8,9,10];
 let sum=0;
 randomArr.forEach((num)=> (sum+=num));

 console.log("esercizio 4 ",sum);
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const numeri3=[1,2,3,4,5,6,7,8,9,10];

  const sum1 =numeri3.reduce((
    accumulator,currentValue)=> accumulator+currentValue,0); //  L'accumulator è 
                                                            //il valore parziale della somma, mentre currentValue è l'elemento corrente dell'array durante l'iterazione.
                                                             //Inizialmente, l'accumulator è impostato su 0 come specificato alla fine della chiamata di reduce (..., 0)). 
                                                //Questo è il valore iniziale da cui inizia la somma.
console.log("Esercizio 5:",sum1);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const number3=[2,5,6,7,8,1,4]
const multiplyNumbers=function (n) {
  return number3.map((numbers)=> numbers*n)

  
}

console.log("eserzizi 6",multiplyNumbers(7));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arrayEs7=["buongiorno", "a", "tutti"]
const lenght=arrayEs7.map( (word) =>word.length);

console.log("Esercizio 7 ",lenght);
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const array8=[]
for (let i = 1; i < 100; i+=2) { 
  const oddNumbers = array8.push(i);
  
}
console.log("esercizo 8 :" ,array8);

  

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function esercizio9(array) {
  let oldestFilm =array[0].Year;
  array.forEach((obj)=>{
    if(obj.Year<oldestFilm){
      oldestFilm= obj.Year;
    }

  })
  return oldestFilm;
}
console.log("eSERCIZIO 9 ",esercizio9(movies));
// oppure cosi 
// const oldestMovie=function (array) {
//   let result= array[0]
//  if (array.isArray(array)) {      // verifico se l'array rcevuto è efetivamente u array
  
//   // for (let i = 1; i < array.length; i++) {        // prendo il primo oggetto e lo confronto con il secondo
//   //   const movies=array[i]
//   //   const currentYear=parsint(movies.Year)   // uso parsint per straformale la stringa in numero , cosi so trovando l'anno dei film

//   //   if(currentYear<result){            // salco in result lhanno piu piccolo ogni ciclo di confronto
//   //     result=currentYear
//   //   }
//   // }
// // return result;
// // }
// // console.log(oldestMovie(movies));
//     array.forEach((movies)=> {
//       const currentYear=parseInt(movies.Year)
//       if (currentYear<result.Year) {
//         result=movies;
        
//       }
    //   });
    // }
//       return result;
//     } ;
//     console.log(oldestMovie(movies));
  
 
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
 const numeroFilm=(array)=>array.length;
 console.log("esercizio 10 ",numeroFilm(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const esercizio11=(array)=> array.map((obj)=>obj.Title);
const titoloFilm=esercizio11(movies)
console.log("Esercizio 11 ",titoloFilm);

// o cosi 
// const onlyTitles=(arr)=> {
//   const newArr=[]
//   for (let i = 0; i < arr.length; i++) {
//     const emovie = arr[i];
//     newArr.push(movies.Title)
    
//   }
//   return newArr
// };
// o cosi 

const onlyTitles=(arr)=> {                   // = function onlyTitles(arr){  const onlyTiles= arr=> arr.map(movie=>movie.Title)}
  const newArr=arr.map(movie=> movie.Title)  // map copia un novo array 
  return newArr;
}
 console.log(onlyTitles(movies)); 

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
// const esercizio12=(array)=> array.filter((obj)=>obj.Year>=2000)
// console.log("eserzizio 12 ",esercizio12(movies));
//  // o cosi 

function onlyMillenium(arr){
  const filterMovie=arr.filter(movie=>parseInt(movie.Year) >=2000)
  return filterMovie;
}
console.log(onlyMillenium(movies));
//o cosi 

// const onlyMillenium2=arr=>arr.filter(movie=>parseInt(movie.Year)>2000)


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const esercizio13 =(array)=> 
array.reduce((accumulator,currentValue)=>accumulator+parseInt(currentValue.Year),0); // accumolator valore inziale estraggo lanno dal primo ogeeto traformandolo da stringa a numeo
console.log("esercizio 13 ",esercizio13(movies));
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const esercizio14=(imdbID)=>movies.find((obj)=>obj.imdbID===imdbID); // find ci torna lelemento 
console.log("esercizio 14 ",esercizio14("ir6325365"));

const getMovieId= (arr,id)=>{
 return  arr.find(movie=> movie.imdbID===id)          // oppure cosi im una linea =  const getMovieId= (arr,id)=>arr.find(movies=> movie.imdbID===id)          //
 
 }

getMovieId(movies,"tt0087365")
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
// const eserzizio15=(array,anno) =>
// array.findIndex((obj)=>parseInt(obj.Year)===anno);
// console.log("Esercizio 15 ",eserzizio15(movies, 2002));

const getmovieYaer=(arr,year)=>{
  if (typeof year==="number"&& !isNaN(year)) {
    return arr.findIndex(movie=> parseInt(movie.Year)===year)
    
  } else {
    return -1;
  }
}
const indexFound=getmovieYaer(movies,2005)
console.log(indexFound!== -1 ? movies [indexFound]:"non abbiamo trovato il film di quell'anno");
