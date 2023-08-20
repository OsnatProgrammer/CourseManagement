import mongoose, { Model } from 'mongoose';

interface Course extends Document {
    courseName: string;
    courseDate:string;
    courseDescription:string;
}

const courseSchema = new mongoose.Schema<Course>({
    courseName: String,
    courseDate:String,
    courseDescription:String,

});

const CourseModel: Model<Course> = mongoose.model<Course>('Course', courseSchema,'courses');

export { CourseModel };



