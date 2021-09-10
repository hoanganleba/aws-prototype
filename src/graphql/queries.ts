/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnrolment = /* GraphQL */ `
  query GetEnrolment($id: ID!) {
    getEnrolment(id: $id) {
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
export const listEnrolments = /* GraphQL */ `
  query ListEnrolments(
    $filter: ModelEnrolmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrolments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEnrolments = /* GraphQL */ `
  query SyncEnrolments(
    $filter: ModelEnrolmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnrolments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAttendance = /* GraphQL */ `
  query GetAttendance($id: ID!) {
    getAttendance(id: $id) {
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
export const listAttendances = /* GraphQL */ `
  query ListAttendances(
    $filter: ModelAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        students {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAttendances = /* GraphQL */ `
  query SyncAttendances(
    $filter: ModelAttendanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttendances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        students {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
        assignments {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeachers = /* GraphQL */ `
  query SyncTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        attendances {
          nextToken
          startedAt
        }
        assignments {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAssignments = /* GraphQL */ `
  query SyncAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
`;
export const syncRoles = /* GraphQL */ `
  query SyncRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStudentAssignments = /* GraphQL */ `
  query SyncStudentAssignments(
    $filter: ModelStudentAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
