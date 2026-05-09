import User from "../../models/SchemaUser.js";
import bcrypt from "bcrypt";
import generateToken from "../../token/jwt.js";

// .............................................. user register ..............................................

export const register = async (req, res) => {
  const { name, lastename, email, password, phone, image } = req.body;
  try {
    if (!name || !lastename || !email || !password || !phone || !image) {
      return res.status(400).json({ message: "user register not complete" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered please try to login" });
    }
    const passwordhase = await bcrypt.hash(password, 10);
    const user_create = await User.create({
      name,
      lastename,
      email,
      password: passwordhase,
      phone,
      role: "user",
      image,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: user_create });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al registrar el usuario", error: error.message });
  }
};

// ....................................  user login ............................

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    const token = generateToken(user._id);
    res.cookie("userToken", token, {
      httpOnly: true,
      secure: false, // true only in HTTPS
      sameSite: "strict",
    });
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

// ....................................Users all Profiler....................................

export const getUser = async (req, res) => {
  const userId = req.user.id;
  try {
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const user_profile = await User.find();
    const filter_user = user_profile.filter(
      (user) => user._id.toString() !== userId,
    );
    res.status(200).json({
      message: "User profile retrieved successfully",
      users: filter_user,
    });
  } catch (error) {
    res.status(500).json({ message: "userId not found", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.user.id;
  try {
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const user_profile = await User.findById(userId);

    if (!user_profile) {
      return res.status(404).json({ message: "user not found" });
    }
    res
      .status(200)
      .json({
        message: "User profile retrieved successfully",
        user: user_profile,
      });
  } catch (error) {
    res.status(500).json({ message: "user not found" });
  }
};
