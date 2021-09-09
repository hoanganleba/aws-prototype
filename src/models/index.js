// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Role, Course, User } = initSchema(schema);

export {
  Role,
  Course,
  User
};