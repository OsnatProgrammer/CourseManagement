import mongoose, { Document, Model } from 'mongoose';

interface User extends Document {
  tz: string;
  firstName: string;
  lastName: string;
  gender: string;
  courses: Course[]; 
}

interface Course {
  id:string
  courseName: string;
  courseDate: string;
  courseDescription: string;
  status: number;
}

const userSchema = new mongoose.Schema<User>({
  tz: String,
  firstName:String,
  lastName:String,
  gender:String,
  courses: []
});

const UserModel: Model<User> = mongoose.model<User>('user', userSchema,'users');
export { UserModel };
