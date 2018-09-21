

function palindrome (palabra) {
    let a = palabra.split("").reverse().join("");
    if (palabra === a){
        console.log("Es palindrome!");
    } else {
        console.log("No es palindrome");
    };
};