import { Request, Response, Router } from 'express';
import { CourseModel } from '../../models/courseModel';
const router: Router = Router();

router.get('/getAllCourses', async (req: Request, res: Response) => {
    try {
        let courseModel_ar = await CourseModel.find({});

        res.json(courseModel_ar);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error fetching data", err });
    }
});



export default router;
