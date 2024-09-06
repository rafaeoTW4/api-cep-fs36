//1 - Objeto vazio que se chama moto

let moto = {};

//2 -Criando um objeto com as propriedades/keys/chave e seus valores

let pessoa = {
    nome: 'Breno',
    sobrenome: 'Frederico',
    idade: 30,
    cores_favoritas: ['branco', 'prata', 'vermelho'],
    valor_emprestimo: 120.500,
    estrangeiro: false,
    //endereco: 'Rua 01, Vila Pery, Fortaleza-Ce, 60879-954'
    endereco: {
        rua: 'Rua 01',
        cidade: 'Vila Pery',
        estado: 'Ceará',
        cep: '60879-954'
    }
}

//3 - acessando o valor de uma propriedade

console.log(pessoa.nome);







//9 - Verificar se a propriedade existe

console.log('nome' in pessoa); // true //
console.log('sobrenome' in pessoa); // true
console.log('telefone' in pessoa); // false


//10 - Listar propriedades do objeto
console.log(Object.keys(pessoa));


//11 - Listar valores das propriedades
console.log(Object.values(pessoa));


//12 - Desestruturação de objeto para criar um novo sem referência para o objeto de origem
const pessoa_teste = {...pessoa};
console.log(pessoa_teste);


//13 - Criar um array com a combinação chave valor
console.log(object.entries(pessoa));










