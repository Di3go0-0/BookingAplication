import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config.js'
import User from '../models/user.model.js' // Asegúrate de importar tu modelo de Usuario

export const userToken = async (req, res, next) => {
    const { token } = req.cookies; // obtenemos el token de las cookies
    
    if (!token) return res.status(401).json({ message: "No logueado" }) // si no hay token, devolvemos un error

    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
        if (err) return res.status(401).json({ message: "No autorizado" }) // si el token no es válido, devolvemos un error

        
        // Buscamos el usuario en la base de datos
        const user = await User.findById(decodedToken._id.id);

        // Si el usuario no existe, devolvemos un error
        if (!user) return res.status(401).json({ message: "No autorizado" });

        // Si el usuario existe, lo añadimos al objeto req y llamamos a next()
        req.user = user;
        next();
    })
}