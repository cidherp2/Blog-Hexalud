const router = require('express').Router()
const db = require('../../config/connection')

router.post('/entrada' , async (req,res) => {
try {
 const { titulo, autor, contenido } = req.body;
 const sqlQuery = 'CALL CrearEntrada(?, ?, ?)';

 const [rows] = await db.execute(sqlQuery,[titulo, autor, contenido])
 res.status(201).json({message: 'Se creo la entrada de forma correcta!'})
}
catch(err) {
    console.log(err)
    res.status(500).json({error:'Error al crear la entrada'}, err)
}
})

router.get('/entrada',async(req,res) =>{
    try {
        const sqlQuery = 'CALL leerEntradas()'
        const [posts] = await db.execute (sqlQuery)
        if (posts?.length === 0 ){
            res.status(404).json({error: 'No se encontró publicación'})
        }
        else {
            console.log(posts)
            res.status(200).json(posts[0])
        }

    }
    catch(err){
        res.status(500).json({error: "Error al buscar la publicación"})
    }
})
router.get('/healthy',async(req,res) =>{
    try {
       
     res.send("<h1>Hola</h1>")

    }
    catch(err){
        res.status(500).json({error: "Error al buscar la publicación"})
    }
})

router.get('/acortadas', async (req, res) => {

    try {
        const sqlQuery = 'CALL getEntradasCortas()'
        const [posts] = await db.execute(sqlQuery)
        if(posts?.length === 0 ){
            res.status(404).json({error: "No se encontró publicación"})
        } else  {
            res.status(200).json(posts[0])
        }
    } catch (err) {
         console.log(err)
        res.status(500).json({error: "Error al buscar la publicación", err})
    }
})

router.get('/filtrar', async (req,res) => {
    try{

        const {autor = null ,titulo = null,contenido= null} = req.query 
        console.log(req.query)
        const sqlQuery = 'CALL leerEntradasFiltradas(?, ?, ?)';

        const [posts] = await db.execute(sqlQuery,[autor,titulo,contenido])

        if (posts?.length === 0){
            res.status(404).json({error:"No se encontro publicación"})
        } else {
            res.status(200).json(posts[0])
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "Error al filtrar publicaciones"})
    }
}) 

module.exports = router

