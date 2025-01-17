import express from 'express';
const router = express.Router();
import uploadController from '../../controllers/upload.controller.js';
import { upload } from '../../auth/upload.js';

router.post('/upload', upload.single('picture'), uploadController.uploadFile);

export { router };
