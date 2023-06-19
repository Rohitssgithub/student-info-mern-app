import express from "express";
const router = express.Router();

import { addeds, getdata, editdata, getdataid, deletedata } from "../controller/user.controller"

router.post("/user/add", addeds)
router.get("/users/get", getdata)
router.get("/user/data/:id", getdataid)
router.put("/user/edit/:id", editdata)
router.delete("/user/delete/:id", deletedata)



export default router

