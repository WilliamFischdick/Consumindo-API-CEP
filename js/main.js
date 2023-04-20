
async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}

