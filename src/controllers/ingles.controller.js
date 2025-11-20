
import { pool } from "../db.js";

// get all 
export const getAllIngles = async(req, res)=>{
    const {rows} = await pool.query('SELECT * FROM ingles')
    res.json(rows)

}


//post
export const postIngles = async(req, res)=>{
    const {nombre, origen} = req.body

    await pool.query('INSERT INTO ingles (nombre, origen) values($1, $2)', [nombre, origen])
    res.json({"message": "Guardado!!"})


}


//get one 
export const getOneIngles = async(req, res)=>{

    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM ingles WHERE id=$1', [id])
    res.json(rows)


}


// delete 
export const deleteIngles = async(req, res)=>{

    const {id} = req.params
    pool.query('DELETE from ingles WHERE id=$1', [id])
    res.json({"message": "ELIMINADO"})


}


// update 
export const updateIngles = async(req, res)=>{

    const {id} = req.params
    const {nombre, origen} = req.body
    await pool.query('UPDATE ingles SET nombre=$1, origen=$2 where id=$3', [nombre, origen, id])
    res.json({"message": "ACTUALIZADO"})


}