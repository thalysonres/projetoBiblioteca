module.exports = {
    render: async (app, students) => {

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
            employees_id: await app.db('employees')
                .select('name')
                .where({ id: students.employees_id })
                .first()
                .then( employee => employee)
                .catch(ee => ee)
        }
    },

    renderAll: async (app, students) => {
        await students.map( async student => {
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
                employees_id: await app.db('employees')
                    .select('name')
                    .where({ id: students.employees_id })
                    .first()
                    .then( employee => employee)
                    .catch(ee => ee)
            }
        })
    }
}