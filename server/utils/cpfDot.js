module.exports = {
    removeDots: (cpf) => {
        console.log( cpf.replace('.', '-1-').replace('-', '-2-')  , ' cpf')
        return cpf.replace('.', '').replace('.', '').replace('-', '')
    }
}
