import  Express  from "express";
import { getUsers,Register, Login } from "../controller/Users.js";

const router = Express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);

export default router;