const express = require('express')
const routes = express.Router()


let db = [
    {'1': {cpf: '11111112', Nome: 'Lucas', data_nascimento: '22/03/1999'}},
    {'2': {cpf: '11111113', Nome: 'Jorge', data_nascimento: '13/07/2000'}},
    {'3': {cpf: '11111114', Nome: 'Amintas', Idade: '11/10/1998'}},
]

routes.get('/', (req,res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)
})

module.exports = routes