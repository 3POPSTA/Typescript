//Generics

//Generic Functions

function createPair<S,N>(v1:S,v2:N): [S,N] {
    return [v1,v2];
}
console.log(createPair<string,number>("hello",23));


//Generic Classes