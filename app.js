var tab = [18, 24, 12 , -1, 13];
var somme = 0;
for (let i=0; i<tab.length; i++){
    somme += tab[i];
}
console.log("La somme du tableau est " + somme);

var moyenne = somme / tab.length;
console.log("La moyenne du tableau est " + moyenne);

var max = tab[0];
var temp;
for(let i=0; i<tab.length; i++){
    if (max < tab[i]){
        max = tab[i];
        temp = i;
    }
}
console.log("Le maximum est " + max);
console.log("La position du maximum est " + temp);

var min = tab[0];
for(let i=0; i<tab.length; i++){
    if (min > tab[i]){
        min = tab[i];
        temp = i;
    }
}
console.log("Le minimum est " + min);
console.log("La position du minimum est " + temp);

for( let i=0; i<tab.length; i++){
    tab[i] = tab[i]*tab[i];
    console.log(tab[i]);
}

var tab = [18, 24, 12 , -1, 13];

for (let i=0; i<tab.length; i++){
    for(let j=0; j<tab.length; j++){
        if(tab[i]<tab[j]){
            temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
        }
    }
}
console.log("Apres le tri croissant:")
for (let i=0; i<tab.length; i++){
    console.log(tab[i]);

}

for (let i=0; i<tab.length; i++){
    for(let j=0; j<tab.length; j++){
        if(tab[i]>tab[j]){
            temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
        }
    }
}
console.log("Apres le tri decroissant:")
for (let i=0; i<tab.length; i++){
    console.log(tab[i]);

}