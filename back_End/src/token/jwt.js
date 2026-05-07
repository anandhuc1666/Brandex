import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

 const Jwt_token = (user) => {
  const token = jwt.sign(
    { id: user._id },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );
  return token;
};
export default Jwt_token;