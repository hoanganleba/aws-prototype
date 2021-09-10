// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Enrolment, Course, Attendance, Student, User, Role, StudentAssignment, Assignment, Teacher } = initSchema(schema);

export {
  Enrolment,
  Course,
  Attendance,
  Student,
  User,
  Role,
  StudentAssignment,
  Assignment,
  Teacher
};