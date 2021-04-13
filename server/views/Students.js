renderStudent = async (app, students) => {

    let employee = await app.db('employees')
        .select('name')
        .where({ id: students.employees_id })
        .first()
        .then(employee => employee)
        .catch(ee => ee)

    return {        
        id: students.id,
        name: students.name,
        phone: students.phone,
        street: students.street,
        district: students.district,
        city: students.city,
        state: students.state,
        cpf: students.cpf,
        pass: students.pass,
        birthDate: students.birthDate,
        regDate: students.regDate,
        employees_id: employee.name
    }
},

renderAllStudent = (app, students, res) => { 
    const array = []
    let total = students.length
    students.map(stud => {
        renderStudent(app, stud)
            .then(j => {
                array.push(j)
                if(array.length >= total) res.json(array)
            })
    })
}

module.exports = { renderStudent, renderAllStudent }
