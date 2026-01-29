import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
} from "../controllers/order.controller.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.get("/user", authUser, getUserOrders);
router.get("/admin", authAdmin, getAllOrders);

export default router;
