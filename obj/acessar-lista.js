const cliente = {
  nome:"Bruno",
  idade:27,
  cpf:"12543652266",
  email:"bruno@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])