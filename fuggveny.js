function fizzBuzz(szam) {
    if (szam === undefined) {
        return "Nincs paraméter";
    }
    if (arguments.length > 1) {
        return "Egynél több paraméter";
    }
    if (isNaN(szam)) {
        return "Nem szám a bemenet";
    }

    szam = parseInt(szam)
    if (szam <= 0) {
        return "Pozitív szám lehet csak a bemenet!";
    }
    if (szam % 3 === 0) {
        if (szam % 5 === 0) {
            return "fizzBuzz";
        }
        return "fizz";
    } else if (szam % 5 === 0) {
        return "Buzz";
    } else {
        return szam;
    }
}

function sorFizzBuzz(n) {
    const LISTA = [];
    /*
    let index = 1;
    while (index <= n) {
        LISTA.push(fizzBuzz(index));
        index++;
    } */
    for (let index = 1; index <= n; index++) {
        LISTA.push(fizzBuzz(index));
    }
    return LISTA.join(", ");
}