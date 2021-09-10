/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnrolment = /* GraphQL */ `
  mutation CreateEnrolment(
    $input: CreateEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    createEnrolment(input: $input, condition: $condition) {
      id
      studentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateEnrolment = /* GraphQL */ `
  mutation UpdateEnrolment(
    $input: UpdateEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    updateEnrolment(input: $input, condition: $condition) {
      id
      studentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteEnrolment = /* GraphQL */ `
  mutation DeleteEnrolment(
    $input: DeleteEnrolmentInput!
    $condition: ModelEnrolmentConditionInput
  ) {
    deleteEnrolment(input: $input, condition: $condition) {
      id
      studentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createAttendance = /* GraphQL */ `
  mutation CreateAttendance(
    $input: CreateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    createAttendance(input: $input, condition: $condition) {
      id
      attendDate
      teacherID
      courseID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      students {
        items {
          id
          attendanceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAttendance = /* GraphQL */ `
  mutation UpdateAttendance(
    $input: UpdateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    updateAttendance(input: $input, condition: $condition) {
      id
      attendDate
      teacherID
      courseID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      students {
        items {
          id
          attendanceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAttendance = /* GraphQL */ `
  mutation DeleteAttendance(
    $input: DeleteAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    deleteAttendance(input: $input, condition: $condition) {
      id
      attendDate
      teacherID
      courseID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      students {
        items {
          id
          attendanceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignments {
        items {
          id
          name
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignments {
        items {
          id
          name
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignments {
        items {
          id
          name
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      attendanceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrolments {
        items {
          id
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
      assignments {
        items {
          id
          studentID
          assignmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      attendanceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrolments {
        items {
          id
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
      assignments {
        items {
          id
          studentID
          assignmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      attendanceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrolments {
        items {
          id
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        id
        name
        email
        phoneNum
        password
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        role {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teachers {
          nextToken
          startedAt
        }
      }
      assignments {
        items {
          id
          studentID
          assignmentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
      id
      name
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateAssignment = /* GraphQL */ `
  mutation UpdateAssignment(
    $input: UpdateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    updateAssignment(input: $input, condition: $condition) {
      id
      name
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteAssignment = /* GraphQL */ `
  mutation DeleteAssignment(
    $input: DeleteAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    deleteAssignment(input: $input, condition: $condition) {
      id
      name
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        name
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attendances {
        items {
          id
          attendDate
          teacherID
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNum
      password
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      teachers {
        items {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNum
      password
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      teachers {
        items {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      phoneNum
      password
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      role {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      teachers {
        items {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createStudentAssignment = /* GraphQL */ `
  mutation CreateStudentAssignment(
    $input: CreateStudentAssignmentInput!
    $condition: ModelStudentAssignmentConditionInput
  ) {
    createStudentAssignment(input: $input, condition: $condition) {
      id
      studentID
      assignmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        attendanceID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        enrolments {
          nextToken
          startedAt
        }
        user {
          id
          name
          email
          phoneNum
          password
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assignments {
          nextToken
          startedAt
        }
      }
      assignment {
        id
        name
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        course {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateStudentAssignment = /* GraphQL */ `
  mutation UpdateStudentAssignment(
    $input: UpdateStudentAssignmentInput!
    $condition: ModelStudentAssignmentConditionInput
  ) {
    updateStudentAssignment(input: $input, condition: $condition) {
      id
      studentID
      assignmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        attendanceID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        enrolments {
          nextToken
          startedAt
        }
        user {
          id
          name
          email
          phoneNum
          password
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assignments {
          nextToken
          startedAt
        }
      }
      assignment {
        id
        name
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        course {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteStudentAssignment = /* GraphQL */ `
  mutation DeleteStudentAssignment(
    $input: DeleteStudentAssignmentInput!
    $condition: ModelStudentAssignmentConditionInput
  ) {
    deleteStudentAssignment(input: $input, condition: $condition) {
      id
      studentID
      assignmentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        attendanceID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        enrolments {
          nextToken
          startedAt
        }
        user {
          id
          name
          email
          phoneNum
          password
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assignments {
          nextToken
          startedAt
        }
      }
      assignment {
        id
        name
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        course {
          id
          name
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
