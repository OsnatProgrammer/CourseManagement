import { Request, Response, Router } from 'express';
import { UserModel } from '../../models/userModel';
import { CourseModel } from '../../models/courseModel';
const router: Router = Router();

router.get('/details/:tz', async (req: Request, res: Response) => {

    let tzP: number = parseInt(req.params.tz, 10);
    console.log(tzP);

    try {
        let temp_ar = await UserModel.find({ tz: tzP });
        console.log(temp_ar);

        res.json(temp_ar)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "There is an error, please try again later", err });
    }
})


router.get("/getCourseByStatus/:tz/:status", async (req: Request, res: Response) => {
    console.log(req.params.status);
    console.log(req.params.tz);

    let tzP: string = req.params.tz;
    let statusP: number = parseInt(req.params.status, 10);

    console.log(statusP);
    console.log(tzP);

    try {
        let user = await UserModel.findOne({ tz: tzP });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        console.log(user);
        
        const temp_ar = user.courses.filter(course => course.status === statusP); 
        console.log(temp_ar);

        res.json(temp_ar)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "There is an error, please try again later", err });
    }
})


router.post("/addCourse", async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        const newCourse = new CourseModel(req.body);
        await newCourse.save();
        res.status(201).json(newCourse);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "err", err });
    }
});


//not update in mongo
//http:localhost:3001/course/updateCourseStatus
router.post("/updateCourseStatus", async (req: Request, res: Response) => {
    console.log(req.body);

    try {
        const { userId, courseId, newStatus } = req.body;
        let user = await UserModel.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const courseToUpdate = user.courses.find(course => course.id === courseId);

        if (!courseToUpdate) {
            return res.status(404).json({ msg: "Course not found for user" });
        }

        courseToUpdate.status = newStatus;
        console.log(user);
        await user.save();
        res.json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error updating course status", err });
    }
});

export default router;
