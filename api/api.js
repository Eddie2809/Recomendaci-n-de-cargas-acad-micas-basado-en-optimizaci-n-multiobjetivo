const express = require('express')
const cors = require('cors')
const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'sistema-de-recomendacion-de-cargas-academicas.cpw7yjb5gz2w.us-east-2.rds.amazonaws.com',
        port: 5432,
        user: 'eddie',
        password: '190300377',
        database: 'validacion'
    }
})

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    db('resultadosdeinstancias').select('*').then(resp => {
        res.json(resp)
    })
    .catch(err => {
        res.json(err)
    })
})

app.post('/registrar',(req,res) => {
    let { n_matricula,
        tiempoEjecucion1,mejorGeneracion1,solucion1,desempeno1,desempenoPoblacionNoCero1,desempenoMinimo1,
        tiempoEjecucion2,mejorGeneracion2,solucion2,desempeno2,desempenoPoblacionNoCero2,desempenoMinimo2,
        tiempoEjecucion3,mejorGeneracion3,solucion3,desempeno3,desempenoPoblacionNoCero3,desempenoMinimo3,
        tiempoEjecucion4,mejorGeneracion4,solucion4,desempeno4,desempenoPoblacionNoCero4,desempenoMinimo4,
        tiempoEjecucion5,mejorGeneracion5,solucion5,desempeno5,desempenoPoblacionNoCero5,desempenoMinimo5,
        tiempoEjecucion6,mejorGeneracion6,solucion6,desempeno6,desempenoPoblacionNoCero6,desempenoMinimo6,
    } = req.body

    let hora = new Date()
    hora = hora.toISOString()

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion1,
        mejorgeneracion: mejorGeneracion1,
        numeroinstancia: 1,
        solucion: solucion1,
        desempeno: desempeno1,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero1,
        desempenominimo: desempenoMinimo1
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion2,
        mejorgeneracion: mejorGeneracion2,
        numeroinstancia: 2,
        solucion: solucion2,
        desempeno: desempeno2,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero2,
        desempenominimo: desempenoMinimo2
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion3,
        mejorgeneracion: mejorGeneracion3,
        numeroinstancia: 3,
        solucion: solucion3,
        desempeno: desempeno3,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero3,
        desempenominimo: desempenoMinimo3
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion4,
        mejorgeneracion: mejorGeneracion4,
        numeroinstancia: 4,
        solucion: solucion4,
        desempeno: desempeno4,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero4,
        desempenominimo: desempenoMinimo4
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion5,
        mejorgeneracion: mejorGeneracion5,
        numeroinstancia: 5,
        solucion: solucion5,
        desempeno: desempeno5,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero5,
        desempenominimo: desempenoMinimo5
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))

    db('resultadosdeinstancias').insert({
        hora: hora,
        tiempodeejecucion: tiempoEjecucion6,
        mejorgeneracion: mejorGeneracion6,
        numeroinstancia: 6,
        solucion: solucion6,
        desempeno: desempeno6,
        matricula: n_matricula,
        desempenopoblacionnocero: desempenoPoblacionNoCero6,
        desempenominimo: desempenoMinimo6
    })
    .then(() => res.send('Listo'))
    .catch(err => res.status(400))
})

let port = process.env.PORT
app.listen(port,() => {
    console.log(`Escuchando el puerto ${port}`)
})