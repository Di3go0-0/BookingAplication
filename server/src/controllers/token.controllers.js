import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config.js'
import User from '../models/user.model.js' 

export const comprobateToken = async (req, res) => {
    try {
        const token = req.body.token; // Get the token from the request body
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        const user = await User.findById(decoded._id.id); // Get the user associated with the token
        if (!user) throw new Error('No user found with this token.');
        req.user = user;
        res.json({ message: "Token correcto", user: req.user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}