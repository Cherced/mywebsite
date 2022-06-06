import DataBase from './database/db'


const allProjectsById = async (req, res) =>{
    const db = new DataBase()
    const id = req.query.id 
    const project = await db.getById(id)
    res.json(project)
}

export default allProjectsById;