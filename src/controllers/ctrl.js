const pool = require("../database")
const ctrl = {}


ctrl.modules = async (req, res) => {
    try {
        const rows = await pool.query('SELECT * FROM modulos')
        res.json({ rows })
    } catch (e) {
        res.json({error: e.code, msg:'error'})
    }
}

ctrl.moduleById = async (req, res) => {
    const { id } = req.params
    try {
        const rows = await pool.query('SELECT * FROM modulos WHERE id = ?', [id])
        if(rows[0]) {
            res.json(rows[0])
        } else {
            res.json({ msg: `no exite ningun registro con el id: ${id} ` })
        }
    } catch (e) {
        res.json({error: e.message, msg:'error'})
    }
}

ctrl.postModules = async (req, res) => {
    const { module, icon } = req.body
    const data = {
        module,
        icon
    }
    try {
        await pool.query('INSERT INTO modulos SET ?', [data])
        res.status(200).json({msg: 'Module saved'});
    } catch (e) {
        res.json({error: e.code, msg: 'error'})
    } 
}

module.exports = ctrl