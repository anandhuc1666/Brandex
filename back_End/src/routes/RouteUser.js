import Router from "express";
import { getUser, getUserById, login, register } from "../components/auth/auth.js";
import verifyUser from "../token/verifyuser.js";


const router = Router();
// ................................................user register and login routes..............................................
router.post("/v1/user/register", register);
router.post("/v1/user/login", login);
router.get("/v1/user/getUser",verifyUser, getUser);
router.get("/v1/user/login", verifyUser, getUserById)

export default router;
