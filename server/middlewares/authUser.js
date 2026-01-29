import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode.id) {
      req.user = token_decode.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
