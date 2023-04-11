//Teste de manipulação de banco de dados


const db = [{
    name: "Denis",
    email: "denis@usuario.com",
}]


export class UserService{
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email

        }
        db.push(user)
        console.log('DB atualizado', db)
        
    }

    getAllUsers = () => {
        return db
    }


}