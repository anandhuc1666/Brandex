import { Router } from "express";
import  {createMSG} from "../components/Message/Msg.js"

const router = Router()
router.post("/v1/user/email",createMSG)
export default router