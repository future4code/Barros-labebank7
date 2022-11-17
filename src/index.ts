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

    if(!userName || !userCpf || !userDateBirth || !userBalance){
        errorCode = 422
        throw new Error("Falta passar parametros , nome, CPF, Data de Nascimento, ");
    }
   
  let ageUser = userDateBirth.split('/')
  let actual = new Date()
  let stringDate = ageUser[1] + '-' + ageUser[0] + '-' + ageUser[2];
  let age = new Date(stringDate);
  let ofAge = age.setFullYear(age.getFullYear()+18)
  console.log('Data formatada 2: ' + age);
  console.log('Data de hoje: ' + actual);
  
    if(age > actual){
        errorCode = 401
        throw new Error("Menor de 18 anos. Usuário não autorizado!");
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

// Pegar todos os usuários
app.get('/users',(req:Request,res:Response)=>{
    res.send(users) 
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
