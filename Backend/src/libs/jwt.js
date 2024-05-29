import jwt from "jsonwebtoken";

export function createAccessToken(_id) {
    return new Promise((resolve, reject) => {
        const payload = { _id };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
}