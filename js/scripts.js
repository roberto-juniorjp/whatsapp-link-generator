//VARIABLES
const container = document.querySelector(".container");
const whatsGenBtnGenerate = document.querySelector("#whatsgen-form button");
const whatsGenBtnCopy = document.querySelector("#whatsgen-copy-link button");
const whatsGenInput = document.querySelector("#whatsgen-form input");
const whatsGenResult = document.querySelector("#whatsgen-result h4");
let whatsGenInputValue = "";
// FUNCTIONS

//Gerador de Link de Whatsapp
function generateWhatsLink(whatsGenInputValue) {
    whatsGenInputValue = whatsGenInput.value;
    if(!whatsGenInputValue) return;
    whatsGenBtnGenerate.innerText = "Gerando o Link...";
    
    //Limpando os Caracteres Que Não São Números
    whatsGenInputValue = whatsGenInputValue.replace(/\D/g,'');
    
    //Gerando o Link de Whatsapp
    whatsGenResult.innerText = `https://api.whatsapp.com/send/?phone=${whatsGenInputValue}`;
    container.classList.add("active");
    whatsGenBtnGenerate.innerText = "Get Your Link Below";
}
function copyWhatsLinkClipboard(whatsGenInputValue) {
    whatsGenInputValue = whatsGenInput.value;
    if(!whatsGenInputValue) return;
    
    //Limpando os Caracteres Que Não São Números
    whatsGenInputValue = whatsGenInputValue.replace(/\D/g,'');
    
    //Copiando Whatsapp para o Clipboard
    navigator.clipboard.writeText(`https://api.whatsapp.com/send/?phone=${whatsGenInputValue}`);
    
    //Alerta Avisando que Copiou o Whatsapp
    alert(`O Número de Whatsapp foi Copiado +${whatsGenInputValue}`);
}

// EVENTS

// Escutar Clique do Botão de Gerar Link
whatsGenBtnGenerate.addEventListener("click", () => {
    generateWhatsLink();
})

// Escutar Enter para Gerar Link
whatsGenInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter")
    generateWhatsLink();
})

// Escutar Clique do Botão de Copiar Link
    whatsGenBtnCopy.addEventListener("click", () => {
        copyWhatsLinkClipboard();
    })

// Limpar Link
whatsGenInput.addEventListener("keyup", () => {
    if(!whatsGenInputValue) return; {
        container.classList.remove("active");
        whatsGenBtnGenerate.innerText = "Generate Link";
        whatsGenInputValue = "";
    }
})