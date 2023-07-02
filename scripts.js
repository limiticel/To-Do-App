const cxitens= document.querySelector("#caixa_de_itens")
const list=document.querySelector('#list')

const txtNomeTarefa=document.querySelector("#nomeTarefa")
const txtDescricao=document.querySelector("#descricao")
const dataPrev=document.querySelector("#dataPrev")


let arr={}
let data={}
console.log(list)
console.log(cxitens)

let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
let dataFormatada = `${dia}-${mes}-${ano}`;


function formulario(){
    const ndiv=document.createElement('div')
    const valorData = dataPrev.value; 


    const txt=txtNomeTarefa.value
    let divcheck=document.createElement("div")
    let tarefa= document.createElement("input")
    tarefa.type="checkbox"
    tarefa.setAttribute("Class","check")

    let titulo = document.createElement("label");
    titulo.classList.add("tituloTarefa");
    titulo.innerHTML = txt + "--" + valorData;
    let desc=txtDescricao.value
    arr[`${titulo.innerHTML}`]=desc+"\n--criação--"+dataFormatada
    console.log(arr[titulo.innerHTML])
    data[`${titulo.innerHTML}`]=dataPrev.value
    

    ndiv.appendChild(titulo)
    ndiv.appendChild(tarefa)
    ndiv.setAttribute('Class','tarefas')
    ndiv.addEventListener('mouseenter',mostrarCaxinha)
    ndiv.addEventListener('mouseleave', removerCaixinha)
    
    
    list.appendChild(ndiv)
   

    txtNomeTarefa.value=''
    txtDescricao.value=''
    dataPrev.value=''



}

function mostrarCaxinha() {
    let caixinha = document.createElement("div");
    
    caixinha.setAttribute('id', 'caixinha');
    caixinha.setAttribute('class', 'caixinha');

    const elementoSelecionado = this; 
    const ndiv = elementoSelecionado.parentNode;
    const nome=elementoSelecionado.querySelector('label')
    descricao=nome.textContent
    
    caixinha.innerHTML = arr[descricao];

    
    const espacamento = 10; 
    const deslocamentoVertical = -8; 

   
    const posicaoTopElemento = elementoSelecionado.getBoundingClientRect().top;

    
    const posicaoTopNdiv = ndiv.getBoundingClientRect().top;

    const posicaoTopCaixinha = posicaoTopElemento - posicaoTopNdiv + elementoSelecionado.offsetHeight + espacamento + deslocamentoVertical;

  
    ndiv.style.position = 'relative';

  
    caixinha.style.top = `${posicaoTopCaixinha}px`;
    caixinha.style.position = 'absolute';

    ndiv.appendChild(caixinha);
}

function removerCaixinha(){
    const elemento= document.getElementById("caixinha")
    elemento.remove()
}

function deletarcheckbox(){
    const checkbox=document.querySelectorAll(".check")

    checkbox.forEach((elemento)=>{
        if(elemento.checked){
            elemento.parentNode.remove()
        }
    })
}