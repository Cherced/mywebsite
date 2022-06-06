import DataBase from './database/db'


const allProjects = async (req, res) => {
    try {
        const db = new DataBase()
        const projects = await db.getAll()
        const status = res.statusCode;
        if (status === 200) {
            res.json(projects)
        } else {
            res.json({
                status: status,
                message: 'something went wrong'
            })
        }

    } catch (error) {
        res.json({
            status: 500,
            message: 'something went wrong'
        })
    }

}

export default allProjects;