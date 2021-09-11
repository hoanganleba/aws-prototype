// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chat, Student, User, Role, Course, Attendance, Enrolment, Teacher, Assignment } = initSchema(schema);

export {
  Chat,
  Student,
  User,
  Role,
  Course,
  Attendance,
  Enrolment,
  Teacher,
  Assignment
};