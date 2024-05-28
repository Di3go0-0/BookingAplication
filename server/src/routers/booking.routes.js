import {Router} from 'express'
import {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking} from '../controllers/booking.controllers.js'
import{userToken} from '../middleware/validateUser.js'
import {validateSchema} from "../middleware/validateSchema.js";
import {createBookingSchema, updateBookingSchema} from "../schema/booking.schema.js";

const router = Router();

router.use(userToken); // Aplica el middleware a todas las rutas

router.get('/', getBookings)

router.get('/:id', getBooking)

router.post('/', validateSchema(createBookingSchema), createBooking)

router.put('/:id',validateSchema(updateBookingSchema), updateBooking)

router.delete('/:id', deleteBooking)

export default router