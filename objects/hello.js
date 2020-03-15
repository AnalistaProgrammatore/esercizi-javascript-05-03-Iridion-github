/*
1. Scrivi nel file `hello.js` il codice javascript che esegue i seguenti step
  - crea un oggetto `user` vuoto
  - aggiunge una proprietà `name` con i flag di default e valore `Mario`
  - aggiunge una proprietà `surname` con i flag `writeable: false` e `configurable: false` con valore `Rossi`
  - modifica il valore della proprietà `name` al valore `Marco`
  - elimina la proprietà `name` dall'oggetto `user`
*/

const user = {}

console.log("crea un oggetto `user` vuoto -->", Object.getOwnPropertyDescriptors(user))

Object.defineProperties(user, {
  name: {
    value: "Mario",
    writable: true,
    enumerable: true,
    configurable: true
  }
})

console.log("aggiunge una proprietà `name` con i flag di default e valore `Mario` -->", Object.getOwnPropertyDescriptors(user))

Object.defineProperties(user, {
  surname: {
    value: "Rossi",
    enumerable: true
  }
})

console.log("aggiunge una proprietà `surname` con i flag `writeable: false` e `configurable: false` con valore `Rossi` -->", Object.getOwnPropertyDescriptors(user))

Object.defineProperties(user, {
  name: {
    value: "Marco"
  }
})

console.log("modifica il valore della proprietà `name` al valore `Marco` -->", Object.getOwnPropertyDescriptors(user))

delete user.name

console.log("elimina la proprietà `name` dall'oggetto `user` -->", Object.getOwnPropertyDescriptors(user))