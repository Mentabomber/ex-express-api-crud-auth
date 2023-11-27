const express = require("express");
const router = express.Router();
//controllers
const postsController = require("../controllers/posts");
//middlewares
const authRoleMiddleware = require("../middlewares/authRoleHandler");

router.post("/", postsController.store);

router.get("/:slug", postsController.show);

router.get("/", postsController.showAll);

router.put("/:slug", authRoleMiddleware, postsController.update);

router.delete("/:slug", authRoleMiddleware, postsController.destroy);


module.exports = router;