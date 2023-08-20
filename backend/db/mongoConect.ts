import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USER_DB=process.env.USER_DB
const PASS_DB=process.env.PASS_DB



async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.auqwmqm.mongodb.net/courses`);
    // /
    console.log("mongo connected");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.error(error);
  }
}

main().catch(err => console.log(err));


