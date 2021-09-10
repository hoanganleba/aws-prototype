/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEnrolmentInput = {
  id?: string | null,
  studentID?: string | null,
  _version?: number | null,
  enrolmentCourseId?: string | null,
};

export type ModelEnrolmentConditionInput = {
  studentID?: ModelIDInput | null,
  and?: Array< ModelEnrolmentConditionInput | null > | null,
  or?: Array< ModelEnrolmentConditionInput | null > | null,
  not?: ModelEnrolmentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Enrolment = {
  __typename: "Enrolment",
  id: string,
  studentID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  course?: Course | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name?: string | null,
  userID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  attendances?: ModelAttendanceConnection | null,
};

export type ModelAttendanceConnection = {
  __typename: "ModelAttendanceConnection",
  items?:  Array<Attendance | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Attendance = {
  __typename: "Attendance",
  id: string,
  attendDate?: string | null,
  teacherID?: string | null,
  courseID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  students?: ModelStudentConnection | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items?:  Array<Student | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  attendanceID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  enrolments?: ModelEnrolmentConnection | null,
  user?: User | null,
  assignments?: ModelStudentAssignmentConnection | null,
};

export type ModelEnrolmentConnection = {
  __typename: "ModelEnrolmentConnection",
  items?:  Array<Enrolment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email?: string | null,
  phoneNum?: string | null,
  password?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  role?: Role | null,
  teachers?: ModelCourseConnection | null,
};

export type Role = {
  __typename: "Role",
  id: string,
  name?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items?:  Array<Course | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStudentAssignmentConnection = {
  __typename: "ModelStudentAssignmentConnection",
  items?:  Array<StudentAssignment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type StudentAssignment = {
  __typename: "StudentAssignment",
  id: string,
  studentID: string,
  assignmentID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  student?: Student | null,
  assignment?: Assignment | null,
};

export type Assignment = {
  __typename: "Assignment",
  id: string,
  name?: string | null,
  teacherID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  course?: Course | null,
};

export type UpdateEnrolmentInput = {
  id: string,
  studentID?: string | null,
  _version?: number | null,
  enrolmentCourseId?: string | null,
};

export type DeleteEnrolmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateAttendanceInput = {
  id?: string | null,
  attendDate?: string | null,
  teacherID?: string | null,
  courseID?: string | null,
  _version?: number | null,
};

export type ModelAttendanceConditionInput = {
  attendDate?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelAttendanceConditionInput | null > | null,
  or?: Array< ModelAttendanceConditionInput | null > | null,
  not?: ModelAttendanceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAttendanceInput = {
  id: string,
  attendDate?: string | null,
  teacherID?: string | null,
  courseID?: string | null,
  _version?: number | null,
};

export type DeleteAttendanceInput = {
  id: string,
  _version?: number | null,
};

export type CreateTeacherInput = {
  id?: string | null,
  _version?: number | null,
  teacherUserId?: string | null,
};

export type ModelTeacherConditionInput = {
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  attendances?: ModelAttendanceConnection | null,
  assignments?: ModelAssignmentConnection | null,
  user?: User | null,
};

export type ModelAssignmentConnection = {
  __typename: "ModelAssignmentConnection",
  items?:  Array<Assignment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateTeacherInput = {
  id: string,
  _version?: number | null,
  teacherUserId?: string | null,
};

export type DeleteTeacherInput = {
  id: string,
  _version?: number | null,
};

export type CreateStudentInput = {
  id?: string | null,
  attendanceID?: string | null,
  _version?: number | null,
  studentUserId?: string | null,
};

export type ModelStudentConditionInput = {
  attendanceID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type UpdateStudentInput = {
  id: string,
  attendanceID?: string | null,
  _version?: number | null,
  studentUserId?: string | null,
};

export type DeleteStudentInput = {
  id: string,
  _version?: number | null,
};

export type CreateAssignmentInput = {
  id?: string | null,
  name?: string | null,
  teacherID?: string | null,
  _version?: number | null,
  assignmentCourseId?: string | null,
};

export type ModelAssignmentConditionInput = {
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelAssignmentConditionInput | null > | null,
  or?: Array< ModelAssignmentConditionInput | null > | null,
  not?: ModelAssignmentConditionInput | null,
};

export type UpdateAssignmentInput = {
  id: string,
  name?: string | null,
  teacherID?: string | null,
  _version?: number | null,
  assignmentCourseId?: string | null,
};

export type DeleteAssignmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateRoleInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelRoleConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  not?: ModelRoleConditionInput | null,
};

export type UpdateRoleInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteRoleInput = {
  id: string,
  _version?: number | null,
};

export type CreateCourseInput = {
  id?: string | null,
  name?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteCourseInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  phoneNum?: string | null,
  password?: string | null,
  _version?: number | null,
  userRoleId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phoneNum?: string | null,
  password?: string | null,
  _version?: number | null,
  userRoleId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateStudentAssignmentInput = {
  id?: string | null,
  studentID: string,
  assignmentID: string,
  _version?: number | null,
};

export type ModelStudentAssignmentConditionInput = {
  studentID?: ModelIDInput | null,
  assignmentID?: ModelIDInput | null,
  and?: Array< ModelStudentAssignmentConditionInput | null > | null,
  or?: Array< ModelStudentAssignmentConditionInput | null > | null,
  not?: ModelStudentAssignmentConditionInput | null,
};

export type UpdateStudentAssignmentInput = {
  id: string,
  studentID?: string | null,
  assignmentID?: string | null,
  _version?: number | null,
};

export type DeleteStudentAssignmentInput = {
  id: string,
  _version?: number | null,
};

export type ModelEnrolmentFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  and?: Array< ModelEnrolmentFilterInput | null > | null,
  or?: Array< ModelEnrolmentFilterInput | null > | null,
  not?: ModelEnrolmentFilterInput | null,
};

export type ModelAttendanceFilterInput = {
  id?: ModelIDInput | null,
  attendDate?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  and?: Array< ModelAttendanceFilterInput | null > | null,
  or?: Array< ModelAttendanceFilterInput | null > | null,
  not?: ModelAttendanceFilterInput | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items?:  Array<Teacher | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  attendanceID?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelAssignmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelAssignmentFilterInput | null > | null,
  or?: Array< ModelAssignmentFilterInput | null > | null,
  not?: ModelAssignmentFilterInput | null,
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  not?: ModelRoleFilterInput | null,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items?:  Array<Role | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStudentAssignmentFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  assignmentID?: ModelIDInput | null,
  and?: Array< ModelStudentAssignmentFilterInput | null > | null,
  or?: Array< ModelStudentAssignmentFilterInput | null > | null,
  not?: ModelStudentAssignmentFilterInput | null,
};

export type CreateEnrolmentMutationVariables = {
  input: CreateEnrolmentInput,
  condition?: ModelEnrolmentConditionInput | null,
};

export type CreateEnrolmentMutation = {
  createEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateEnrolmentMutationVariables = {
  input: UpdateEnrolmentInput,
  condition?: ModelEnrolmentConditionInput | null,
};

export type UpdateEnrolmentMutation = {
  updateEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteEnrolmentMutationVariables = {
  input: DeleteEnrolmentInput,
  condition?: ModelEnrolmentConditionInput | null,
};

export type DeleteEnrolmentMutation = {
  deleteEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type CreateAttendanceMutationVariables = {
  input: CreateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type CreateAttendanceMutation = {
  createAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateAttendanceMutationVariables = {
  input: UpdateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type UpdateAttendanceMutation = {
  updateAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteAttendanceMutationVariables = {
  input: DeleteAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type DeleteAttendanceMutation = {
  deleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateAssignmentMutationVariables = {
  input: CreateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type CreateAssignmentMutation = {
  createAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAssignmentMutationVariables = {
  input: UpdateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type UpdateAssignmentMutation = {
  updateAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAssignmentMutationVariables = {
  input: DeleteAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type DeleteAssignmentMutation = {
  deleteAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type CreateRoleMutationVariables = {
  input: CreateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoleMutationVariables = {
  input: DeleteRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateStudentAssignmentMutationVariables = {
  input: CreateStudentAssignmentInput,
  condition?: ModelStudentAssignmentConditionInput | null,
};

export type CreateStudentAssignmentMutation = {
  createStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateStudentAssignmentMutationVariables = {
  input: UpdateStudentAssignmentInput,
  condition?: ModelStudentAssignmentConditionInput | null,
};

export type UpdateStudentAssignmentMutation = {
  updateStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteStudentAssignmentMutationVariables = {
  input: DeleteStudentAssignmentInput,
  condition?: ModelStudentAssignmentConditionInput | null,
};

export type DeleteStudentAssignmentMutation = {
  deleteStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type GetEnrolmentQueryVariables = {
  id: string,
};

export type GetEnrolmentQuery = {
  getEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListEnrolmentsQueryVariables = {
  filter?: ModelEnrolmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrolmentsQuery = {
  listEnrolments?:  {
    __typename: "ModelEnrolmentConnection",
    items?:  Array< {
      __typename: "Enrolment",
      id: string,
      studentID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEnrolmentsQueryVariables = {
  filter?: ModelEnrolmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEnrolmentsQuery = {
  syncEnrolments?:  {
    __typename: "ModelEnrolmentConnection",
    items?:  Array< {
      __typename: "Enrolment",
      id: string,
      studentID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAttendanceQueryVariables = {
  id: string,
};

export type GetAttendanceQuery = {
  getAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListAttendancesQueryVariables = {
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendancesQuery = {
  listAttendances?:  {
    __typename: "ModelAttendanceConnection",
    items?:  Array< {
      __typename: "Attendance",
      id: string,
      attendDate?: string | null,
      teacherID?: string | null,
      courseID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAttendancesQueryVariables = {
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAttendancesQuery = {
  syncAttendances?:  {
    __typename: "ModelAttendanceConnection",
    items?:  Array< {
      __typename: "Attendance",
      id: string,
      attendDate?: string | null,
      teacherID?: string | null,
      courseID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items?:  Array< {
      __typename: "Teacher",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeachersQuery = {
  syncTeachers?:  {
    __typename: "ModelTeacherConnection",
    items?:  Array< {
      __typename: "Teacher",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items?:  Array< {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStudentsQuery = {
  syncStudents?:  {
    __typename: "ModelStudentConnection",
    items?:  Array< {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAssignmentQueryVariables = {
  id: string,
};

export type GetAssignmentQuery = {
  getAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentsQuery = {
  listAssignments?:  {
    __typename: "ModelAssignmentConnection",
    items?:  Array< {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAssignmentsQueryVariables = {
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAssignmentsQuery = {
  syncAssignments?:  {
    __typename: "ModelAssignmentConnection",
    items?:  Array< {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRoleQueryVariables = {
  id: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items?:  Array< {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRolesQuery = {
  syncRoles?:  {
    __typename: "ModelRoleConnection",
    items?:  Array< {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCoursesQuery = {
  syncCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStudentAssignmentsQueryVariables = {
  filter?: ModelStudentAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStudentAssignmentsQuery = {
  syncStudentAssignments?:  {
    __typename: "ModelStudentAssignmentConnection",
    items?:  Array< {
      __typename: "StudentAssignment",
      id: string,
      studentID: string,
      assignmentID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      student?:  {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignment?:  {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEnrolmentSubscription = {
  onCreateEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateEnrolmentSubscription = {
  onUpdateEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteEnrolmentSubscription = {
  onDeleteEnrolment?:  {
    __typename: "Enrolment",
    id: string,
    studentID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateAttendanceSubscription = {
  onCreateAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateAttendanceSubscription = {
  onUpdateAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteAttendanceSubscription = {
  onDeleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    attendDate?: string | null,
    teacherID?: string | null,
    courseID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    students?:  {
      __typename: "ModelStudentConnection",
      items?:  Array< {
        __typename: "Student",
        id: string,
        attendanceID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        name?: string | null,
        teacherID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    attendanceID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    enrolments?:  {
      __typename: "ModelEnrolmentConnection",
      items?:  Array< {
        __typename: "Enrolment",
        id: string,
        studentID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      phoneNum?: string | null,
      password?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      role?:  {
        __typename: "Role",
        id: string,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      teachers?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignments?:  {
      __typename: "ModelStudentAssignmentConnection",
      items?:  Array< {
        __typename: "StudentAssignment",
        id: string,
        studentID: string,
        assignmentID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateAssignmentSubscription = {
  onCreateAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAssignmentSubscription = {
  onUpdateAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAssignmentSubscription = {
  onDeleteAssignment?:  {
    __typename: "Assignment",
    id: string,
    name?: string | null,
    teacherID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    course?:  {
      __typename: "Course",
      id: string,
      name?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      attendances?:  {
        __typename: "ModelAttendanceConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      items?:  Array< {
        __typename: "Attendance",
        id: string,
        attendDate?: string | null,
        teacherID?: string | null,
        courseID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    phoneNum?: string | null,
    password?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    role?:  {
      __typename: "Role",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    teachers?:  {
      __typename: "ModelCourseConnection",
      items?:  Array< {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateStudentAssignmentSubscription = {
  onCreateStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateStudentAssignmentSubscription = {
  onUpdateStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteStudentAssignmentSubscription = {
  onDeleteStudentAssignment?:  {
    __typename: "StudentAssignment",
    id: string,
    studentID: string,
    assignmentID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    student?:  {
      __typename: "Student",
      id: string,
      attendanceID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      enrolments?:  {
        __typename: "ModelEnrolmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        phoneNum?: string | null,
        password?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assignments?:  {
        __typename: "ModelStudentAssignmentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    assignment?:  {
      __typename: "Assignment",
      id: string,
      name?: string | null,
      teacherID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      course?:  {
        __typename: "Course",
        id: string,
        name?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};
