module.exports = {

    getDateNow: (i) => {
        const data = new Date()
        const day =( data.getDate() < 10) ? `0${data.getDate()}` : data.getDate()
        const month = (data.getMonth()+1 < 10) ? `0${data.getMonth()+1}` : data.getMonth()+1
        const year = data.getFullYear()

        if (i) return `${year}-${month}-${day}`
        else return `${day}-${month}-${year}`
    },

    devolver: () => {
        const date = new Date() 

        let totalDeDias = 0
        let DiasDeEmprestimo = 7
        let dia = date.getDate()
        let mes = date.getMonth() + 1
        let ano = date.getFullYear()

        // ver se compensa fazer com if
        switch (mes) {
            case 1:
                totalDeDias = 31
                break
            case 2:
                // fevereiro => cria algo que pega ano bissexto
                totalDeDias = 28
                break
            case 3:
                totalDeDias = 31
                break
            case 4:
                totalDeDias = 30
                break
            case 5:
                totalDeDias = 31
            case 6:
                totalDeDias = 30
                break
            case 7:
                totalDeDias = 31
                break
            case 8:
                totalDeDias = 31
                break
            case 9:
                totalDeDias = 30
                break
            case 10:
                totalDeDias = 31
                break
            case 11:
                totalDeDias = 30
                break
            case 12:
                totalDeDias = 31
                break
            default:
                console.log('Algo errado')
        }

        let diaEntregar = (DiasDeEmprestimo + dia)
        let mesEntregar = mes

        if (diaEntregar > totalDeDias) {
            mesEntregar = mes + 1
            diaEntregar = totalDeDias - (DiasDeEmprestimo + dia)
        }

        if (diaEntregar < 0) {
            diaEntregar = diaEntregar * -1
        }
        
        return `${ano}-${mesEntregar}-${diaEntregar}`
    }

    // return { getDateNow, devolver }
}
