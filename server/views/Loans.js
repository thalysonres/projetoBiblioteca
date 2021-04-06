renderLoan = async (app, loans) => {

    let employee = await app.db('employees')
        .select('name')
        .where({ id: loans.employees_id })
        .first()
        .then(employee => employee)
        .catch(ee => ee)

    let literaryWork = await app.db('literaryWorks')
        .select('title')
        .where({ id: loans.literaryWorks_id })
        .first()
        .then(literaryWorks => literaryWorks)
        .catch(err => err)

    let student = await app.db('students')
        .select('name')
        .where({ id: loans.student_id })
        .first()
        .then(student => student)
        .catch(err => err)

    return {
        loanDate: loans.loanDate,
        returnDate: loans.returnDate,
        student_id: student.name,
        employees_id: employee.name,
        literaryWorks_id: literaryWork.title,
    }
},

renderAllLoan = (app, loans, res) => {
    const array = []
    let total = loans.length
    loans.map(loan => {
        renderLoan(app, loan)
            .then(j => {
                array.push(j)
                if (array.length >= total) res.json(array)
            })
    })
}

module.exports = { renderLoan, renderAllLoan }