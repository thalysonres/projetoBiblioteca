const { getDateNow, devolver } = require('./../utils/getData')

module.exports = {
    setLoans: (app, req, res) => {
        app.db('literaryWorks')
            .select('borrowed')
            .where({ id: req.body.literaryWorks_id })
            .then(literary => {
                if (!literary[0].borrowed) {

                    app.db('loans')
                        .insert({
                            loanDate: getDateNow('i'),
                            returnDate: devolver(),
                            student_id: req.body.student_id,
                            employees_id: req.user.id, // id auto
                            literaryWorks_id: req.body.literaryWorks_id,
                        })
                        .then(_ => {
                            app.db('literaryWorks')
                                .where({ id: req.body.literaryWorks_id })
                                .update({ borrowed: true })
                                .then(inserido => res.json(inserido))
                        })
                        .catch(err => res.status(400).json({ message: err, status: "Erro" }))

                } else {
                    return res.send('Livro emprestado')
                }
            })
            .catch(err => err)
    }
}