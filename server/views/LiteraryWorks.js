renderLiterary = async (app, literary) => {

    let author = await app.db('authors')
        .select('name')
        .where({ id: literary.author_id })
        .first()
        .then(author => author)
        .catch(ee => ee)

    let locality = await app.db('localities')
        .select('*')
        .where({ id: literary.locality_id })
        .first()
        .then(locality => locality)
        .catch(err => err)

    return {        
        id: literary.id,
        title: literary.title,
        edition: literary.edition,
        editionYear: literary.editionYear,
        numberPage: literary.numberPage,
        publishingComp: literary.publishingComp,
        publication: literary.publication,
        ISBN: literary.ISBN,
        CDD: literary.CDD,
        CDU: literary.CDU,
        translator: literary.translator,
        borrowed: literary.borrowed,
        file: `http://localhost:3000/uploads/${literary.file}`,
        author_id: author.name,
        locality_id: locality
    }
},

renderAllLiterary = (app, literaries, res) => {
    const array = []
    let total = literaries.length
    literaries.map(literary => {
        renderLiterary(app, literary)
            .then(j => {
                array.push(j)
                if (array.length >= total) res.json(array)
            })
    })
}

module.exports = { renderLiterary, renderAllLiterary }