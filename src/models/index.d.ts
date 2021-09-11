import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ChatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttendanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnrolmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssignmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Chat {
  readonly id: string;
  readonly message?: string;
  readonly student?: Student;
  readonly teacher?: Teacher;
  readonly sender?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chat, ChatMetaData>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat, ChatMetaData>) => MutableModel<Chat, ChatMetaData> | void): Chat;
}

export declare class Student {
  readonly id: string;
  readonly user?: User;
  readonly attendanceID?: string;
  readonly enrolments?: (Enrolment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly phoneNum?: string;
  readonly password?: string;
  readonly role?: Role;
  readonly teachers?: (Course | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Role {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Role, RoleMetaData>);
  static copyOf(source: Role, mutator: (draft: MutableModel<Role, RoleMetaData>) => MutableModel<Role, RoleMetaData> | void): Role;
}

export declare class Course {
  readonly id: string;
  readonly name?: string;
  readonly userID?: string;
  readonly attendances?: (Attendance | null)[];
  readonly code?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}

export declare class Attendance {
  readonly id: string;
  readonly students?: (Student | null)[];
  readonly attendDate?: string;
  readonly teacherID?: string;
  readonly courseID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Attendance, AttendanceMetaData>);
  static copyOf(source: Attendance, mutator: (draft: MutableModel<Attendance, AttendanceMetaData>) => MutableModel<Attendance, AttendanceMetaData> | void): Attendance;
}

export declare class Enrolment {
  readonly id: string;
  readonly studentID?: string;
  readonly course?: Course;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Enrolment, EnrolmentMetaData>);
  static copyOf(source: Enrolment, mutator: (draft: MutableModel<Enrolment, EnrolmentMetaData>) => MutableModel<Enrolment, EnrolmentMetaData> | void): Enrolment;
}

export declare class Teacher {
  readonly id: string;
  readonly user?: User;
  readonly assignments?: (Assignment | null)[];
  readonly attendances?: (Attendance | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}

export declare class Assignment {
  readonly id: string;
  readonly name?: string;
  readonly teacherID?: string;
  readonly course?: Course;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Assignment, AssignmentMetaData>);
  static copyOf(source: Assignment, mutator: (draft: MutableModel<Assignment, AssignmentMetaData>) => MutableModel<Assignment, AssignmentMetaData> | void): Assignment;
}