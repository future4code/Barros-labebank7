import express,{Request, Response} from "express"
import cors from 'cors'
import { AccountUser } from "./types"
import { users } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

// Teste de requisição no Postman
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

// Cadastrar usuário
app.post('/users/addUser',(req:Request,res:Response)=>{
    let errorCode = 400

    try {
    const {userName, userCpf, userDateBirth, userBalance} = req.body

    console.log(userName, userCpf, userDateBirth, userBalance)
 
    if(!userName || !userCpf || !userDateBirth || !userBalance){
        errorCode = 422
        throw new Error("Falta passar parametros , nome, CPF, Data de Nascimento, ");
    }

         const newUser : AccountUser ={
            name : userName,
            cpf: userCpf,
            birthDate: userDateBirth,
            balanceAccount : userBalance,
            extract : []
         }

          users.push(newUser)

          res.status(201).send(users)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
