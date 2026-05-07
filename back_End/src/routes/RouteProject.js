import { Router } from "express";
import { createProject } from "../components/project/project.js";
import verifyUser from "../token/verifyuser.js";

const router = Router();
// ....................................all project routes..............................................

router.post("/v1/project/create",verifyUser, createProject);

export default router;