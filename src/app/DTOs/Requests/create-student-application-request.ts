export interface CreateStudentApplicationRequest {
    name: string
    email: string
    phoneNumber: string
    skillsUids: string[]
    nonProffesionalInterestsUids: string[]
    desiredStudyFieldUid: string
    locationUid: string
  }