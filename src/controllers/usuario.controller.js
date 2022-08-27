import { getConnection } from "./../database/database";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const loguin = async (req, res) => {
    try {

        const { usuario, contrasena } = req.body;
        console.log(req.body);
        if (usuario === null === undefined || contrasena === undefined) {
            res.status(400).json({ message: "Debe llenar los campos." });
        }
        
        const connection = await getConnection();
        console.log(usuario, contrasena, connection);    
        const result = await connection.query("SELECT * FROM Usuarios WHERE usuario = ? AND contrasena = ? ", [req.body.usuario,req.body.contrasena]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;
        
        if (usuario === null === undefined || contrasena === undefined) {
            res.status(400).json({ message: "Debe llenar los campos." });
        }

        const Usuario = { usuario, contrasena };
        const connection = await getConnection();
        await connection.query("INSERT INTO Usuarios SET ?", Usuario);
        res.json({ message: "Usuario added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, contrasena } = req.body;
        
        if (usuario === null === undefined || contrasena === undefined) {
            res.status(400).json({ message: "Debe llenar los campos." });
        }

        const Usuario = { usuario, contrasena };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Usuarios SET ? WHERE id = ?", [Usuario, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Usuarios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getUsuarios,
    loguin,
    addUsuario,
    updateUsuario,
    deleteUsuario
};
