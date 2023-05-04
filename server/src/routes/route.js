import express from "express";
const router = express.Router();

import Admin from "../controllers/admin.js";
import Contact from "../controllers/contact.js";
// import { authentication, authorisation } from "../middlewares/auth.js";

//............................Admin............................//

router.post("/register", Admin.register);
router.post("/login", Admin.login);

//..........................Contact...............................//

router.post("/contact", Contact.createContact);
router.get("/contact", Contact.getContacts);

export default router;
