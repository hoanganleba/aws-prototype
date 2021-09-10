/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEnrolment = /* GraphQL */ `
  subscription OnCreateEnrolment {
    onCreateEnrolment {
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
export const onUpdateEnrolment = /* GraphQL */ `
  subscription OnUpdateEnrolment {
    onUpdateEnrolment {
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
export const onDeleteEnrolment = /* GraphQL */ `
  subscription OnDeleteEnrolment {
    onDeleteEnrolment {
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
export const onCreateAttendance = /* GraphQL */ `
  subscription OnCreateAttendance {
    onCreateAttendance {
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
export const onUpdateAttendance = /* GraphQL */ `
  subscription OnUpdateAttendance {
    onUpdateAttendance {
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
export const onDeleteAttendance = /* GraphQL */ `
  subscription OnDeleteAttendance {
    onDeleteAttendance {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment {
    onCreateAssignment {
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment {
    onUpdateAssignment {
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment {
    onDeleteAssignment {
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateStudentAssignment = /* GraphQL */ `
  subscription OnCreateStudentAssignment {
    onCreateStudentAssignment {
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
export const onUpdateStudentAssignment = /* GraphQL */ `
  subscription OnUpdateStudentAssignment {
    onUpdateStudentAssignment {
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
export const onDeleteStudentAssignment = /* GraphQL */ `
  subscription OnDeleteStudentAssignment {
    onDeleteStudentAssignment {
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
