import User from "../../models/SchemaUser.js ";
import Project from "../../models/SchemaProject.js";


export const createProject = async (req, res) => {
const { customer_name, user_name, customer_phone, product, customer_place, day, price, sticky } = req.body;
const userId = req.user.id;
try {
    if(!userId){
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
        sticky
    });
    res.status(201).json({ message: "Project created successfully", project });
} catch (error) {
  res.status(500).json({ message: "Error creating project", error: error.message });  
}
}