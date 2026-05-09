import User from "../../models/SchemaUser.js ";
import Project from "../../models/SchemaProject.js";

// ...................................................New project ......................................................

export const createProject = async (req, res) => {
  const {
    customer_name,
    user_name,
    customer_phone,
    product,
    customer_place,
    day,
    price,
    sticky,
  } = req.body;
  const userId = req.user.id;
  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const project = await Project.create({
      userID: userId,
      customer_name,
      user_name,
      customer_phone,
      product,
      customer_place,
      day,
      price,
      sticky,
    });
    const user = await User.findById(userId)
    res.status(201).json({ message: "Project created successfully", project, user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
};

// ....................................................Get all project ......................................................

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res
      .status(200)
      .json({ message: "Projects fetched successfully", projects });
    console.log(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching projects", error: error.message });
  }
};

// ..................................................get by id project ......................................................

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project fetched successfully", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching project", error: error.message });
  }
};

// ....................................................update project ......................................................

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    customer_name,
    user_name,
    customer_phone,
    product,
    position,
    customer_place,
    day,
    price,
    sticky,
  } = req.body;

  try {
    const project = await Project.findOneAndUpdate(
      { _id: id },
      {
        customer_name,
        user_name,
        customer_phone,
        product,
        position,
        customer_place,
        day,
        price,
        sticky,
      },
      { new: true },
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating project", error: error.message });
  }
};

// ....................................................delete project ......................................................

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting project", error: error.message });
  }
};
