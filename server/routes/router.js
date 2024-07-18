import express from 'express';
import { uplodeImage,downloadImage } from '../controller/image-controller.js';
import upload from '../utlis/uplod.js';
const router=express.Router();
router.post('/uplode',upload.single('file'),uplodeImage);
router.get('/file/:fileId',downloadImage);
export default router;