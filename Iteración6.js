const falseNames = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla',
 'Ronalguiño']

 function swap(array, a, b){
    let temp = array[a];

    array[a] = array[b];
    array[b] = temp;
 }

swap (falseNames, 0, 3);
console.log(falseNames)
