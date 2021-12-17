const express = require("express");
const router = express.Router();
const multer = require("multer");
const userController = require("../controller/user-controller");

const DIR = './public/images/user_profile/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});
let upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 5
    // },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/change_password", userController.changePassword);
router.post("/change_email", userController.changeEmail);
router.post("/change_phone", userController.changePhone);

module.exports = router;

