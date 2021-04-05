module.exports = {
    render: async (app, students) => {

        const employee = await app.db('employees')
                .select('name')
                .where({ id: students.employees_id })
                .first()
                .then( employee => employee)
                .catch(ee => ee)

        return {
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
            employees_id: employee
        }
    },

    renderAll: (app, students) => {
        // console.log( typeof(students))
        const array = []
        students.map(async student => {
            // console.log('render => ', this.render(app, student).then( g => g ) )
            await this.render(app, student).then(  user =>  array.push(user))
            
        })
        return array
    }
}