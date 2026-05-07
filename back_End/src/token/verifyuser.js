import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyUser = (req, res, next) => {

  const authHeader = req.headers.authorization;

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : req.cookies?.userToken;

  if (!token) {
    return res.status(401).json({
      message: "Token missing"
    });
  }

  jwt.verify(
    token,
    process.env.SECRET_KEY,
    (err, decoded) => {

      if (err) {
        return res.status(403).json({
          message: "Invalid or expired token"
        });
      }

      req.user = decoded;

      next();
    }
  );
};

export default verifyUser;