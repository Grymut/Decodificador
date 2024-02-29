function Criptografa() {
    // Verifica se há caracteres ou letras maiúsculas no texto do <textarea>
    let textareaValue = document.getElementById("texto_conteudo").value;
    let regex = /[A-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
    let alertaCaracteres = document.querySelector(".mensagem__alerta");
    
    if (regex.test(textareaValue)) {
        // Caracteres ou letras maiúsculas encontrados, exibe mensagem de alerta
        alertaCaracteres.style.display = "block";
        alert("Apenas letras minúsculas letras maiúsculas e caracteres especiais não são permitidos!");
        return; // Sai da função se caracteres inválidos forem encontrados
    } else {
        // Nenhum caractere ou letra maiúscula, oculta mensagem de alerta
        alertaCaracteres.style.display = "none";
    }

    let inputText = textareaValue;
    console.log(inputText);
    
    let criptografado = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    
    document.querySelector("p").innerText = criptografado;
    document.getElementById("texto_conteudo").value = '';
   
    // Limpa o conteúdo do h1 quando o usuário começa a digitar no textarea
    document.getElementById("texto_conteudo").addEventListener("input", function() {
        var outputHeading = document.getElementById("output-heading");
        outputHeading.textContent = '';
    });
}

function Descriptografa() {
    let inputText = document.querySelector("p").innerText;
    console.log(inputText);
    
    let descriptografado = inputText.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
    
    document.getElementById("texto_conteudo").value = descriptografado;
    document.querySelector("p").innerText = '';
}

function copiarTexto() {
    // Seleciona o elemento de texto
    var texto = document.getElementById("output-heading").textContent || document.getElementById("output-heading").innerText;

    // Tenta copiar o texto para a área de transferência
    navigator.clipboard.writeText(texto)
        .then(() => {
            // Se a cópia for bem-sucedida, alerta o usuário
            alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
            // Se houver algum erro, alerta o usuário
            console.error('Erro ao copiar texto: ', err);
            alert("Erro ao copiar o texto. Por favor, tente novamente.");
        });
}



