const { users } = require("../data/users")

function renderUsers(request, response) {

    response.render("userList", {listUsers: users} )

}


function renderUserByID(request, response) {
    const idUser = Number(request.params.id)

    if(isNaN(idUser)){
        return response.status(400).json( {message: "El ID debe ser un numero entero"} )
    }

    const user = users.find(user => { return user.id === idUser })

    if(!user){
        response.status(404)
        response.json({message: `No existe el usuario con ese ${idUser}`})
        return
    }

    response.render("userProfile", { user:user } )

}

function renderUserCreate(request, response) {
    const {name, email, age} = request.body

    if(!name || !email || !age) {
        return response.status(400).json({error: "Faltan datos"})   
    }

    if(isNaN(age) || age <= 0) {
        return response.status(400).json({error: "La edad debe ser un numero positivo"})
    }

    const newUser = {
        id: users.length + 1,
        name: name.trim(),
        email: email.trim(),
        age: Number(age)
    }

    users.push(newUser)
    
    response.render("createUser", {newUser: newUser} )
}

module.exports = {renderUsers, renderUserCreate, renderUserByID}