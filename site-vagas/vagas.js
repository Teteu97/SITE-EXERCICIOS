const vagas = []
 
const VagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
 textoFinal += indice + ". "
 textoFinal += vaga.nome
 textoFinal += " (" + vaga.candidatos.length + "candidatos)\n"
 return textoFinal
}, "")


function criarVaga(){
      const nome = prompt("VOCÊ SELECIONOU A OPÇÃO DE CRIAR UMA NOVA VAGA!! \n\nQual o nome dessa vaga? ")
      const descricao = prompt("Descreva essa vaga")
      const dataL = prompt("Qual seria a data limite para essa vaga? DD/MM/AAAA")

      const confirmação = confirm("Você deseja confirmar essa vaga? " + "\nNome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataL) 
       if (confirmação){
        const novaVaga = {nome:nome, descricao:descricao, dataLimite:dataL, candidatos: []}
        vagas.push(novaVaga)
        alert("Salvando vaga...")
       }else {
          alert("Vaga descartada!")
       }
       }


function exibirVaga(){
  const  indice = prompt("Qual o indice da vaga que você deseja exibir?")
  const vaga = vaga[indice]
  
  const candidatosEmTexto = vaga.candidato.reduce(function(textofinal, candidato){
      return textofinal + "\n - " + candidato
  }, "")
      alert(
        "Vaga n " + indice + 
        "\nNome: " + vaga.nome +
        "\nData limite: " + vagas.dataL +
        "\nQuantidade de candidatos: " + vagas.candidatos.length + 
        "\nCanditados inscrito: " + candidatosEmTexto
      )
}
 
function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) canditado: ")
    const indice = prompt("informe o indice da vaga que você deseja inscrever esse canditato")
    const vaga = vagas[indice]

    const confirmação = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: "  + vaga.nome +
      "\nDescrição: " + vagas.descricao +
      "\nData limite: " + vagas.dataL
    )
    
    if(confirmação){
      vaga.candidatos.push(candidato)
      alert("Inscrição feita.")
    }
}

function excluirVaga(){
  const indice = prompt("informe a vaga que você deseja excluir")
  const vaga = vaga[indice]

  const confirmação = confirm("Tem certeza que deseja escluir a vaga: " + indice + "?" +
      "\nNome: "  + vaga.nome +
      "\nDescrição: " + vagas.descricao +
      "\nData limite: " + vagas.dataL
  )
  if (confirmação){
    vagas.splice(indice, 1)
    alert("Vaga excluida. ")
  }
}

function exibirMenu(){
  const opção = prompt()
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )

  return opcao}

 
  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
