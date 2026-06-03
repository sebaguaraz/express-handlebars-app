function renderView(request, response) {
    console.log(request.url)
    console.log(request.path)
    console.log(request.query)
    const user = {
        name: "sebastian",
        age: 23
    }

    response.render("perfil", user)
}





function sendFile(request, response) {

    response.send("Archivo subido correctamente", console.log(request.file))

}






module.exports = { renderView, sendFile }