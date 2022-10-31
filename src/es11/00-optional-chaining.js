const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
// el ? hace que la aplicacion no se rompa y devuelve el undefined
console.log(users?.gndx?.country);
console.log(users?.bebeloper?.country);