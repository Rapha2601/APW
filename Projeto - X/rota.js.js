import express from 'express'
import path from 'path'
import Crud from 'Crud.js'

const app = express()
const port = 3000


app.get('/selecionar', (req,res) => {

	//Inst�ncia
	const cd = Crud()

	//chamar o m�todo
	cd.inserir()



})

app.Listen(port, () => {
   console.log(`http://localhost:${port}`)
})
  