import express, { Request, Response } from "express";
import multer from "multer";
import path from "path"
const router = express.Router();

router.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

router.use(
  express.json({
    limit: "50mb",
  })
);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "public")); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
export const upload = multer({
  storage: storage,
  fileFilter: (req: Response, file: any, cb: any) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, true);
  },
} as any);
