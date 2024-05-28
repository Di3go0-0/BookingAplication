export const validateSchema = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (e) {
        return res
        .status(400)
        .json({ error: e.errors.map((error) => error.message) }); //si no devolvemos el error
    }
}