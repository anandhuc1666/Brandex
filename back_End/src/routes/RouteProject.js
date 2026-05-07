import { Router } from "express";
import {
    activity_update,
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from "../components/project/project.js";
import verifyUser from "../token/verifyuser.js";

const router = Router();
// ....................................all project routes..............................................

router.post("/v1/project/create", verifyUser, createProject);
router.get("/v1/project/getallprojects", getAllProjects);
router.get("/v1/project/getbyid/:id", getProjectById);
router.put("/v1/project/update/:id", verifyUser, updateProject);
router.delete("/v1/project/delete/:id", verifyUser, deleteProject);
router.patch("/v1/project/updateposition/:id", verifyUser, activity_update);

export default router;

