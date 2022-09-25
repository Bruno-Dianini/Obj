const cliente = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [{
    nome: 'Sara Silva',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
  }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

cliente.dependentes.push({
  nome:"Bruno Dianini",
  parentesco:"filho",
  dataNasc: "02/01/1995"
})
// console.log(cliente)

const filhoMaisvelho = cliente.dependentes.filter(dependente => dependente.dataNasc==="02/01/1995")

console.log(filhoMaisvelho)
console.log(filhoMaisvelho[0].nome)