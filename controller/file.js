function renderFormFile(request, response) {
    response.render("formFile")

}

function renderSendFile(request, response) {
    console.log(request.file)

    if(!request.file) {
        return response.status(400).json({message: "No se ha recibido ningún archivo"})
    }
    
    response.status(200).json({message: "Archivo recibido correctamente", file: request.file})
}



module.exports = { renderFormFile, renderSendFile }