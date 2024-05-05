export interface CreateUserRequest {
    name: string
    email: string
    phoneNumber: string
    skillsUids: string[]
    nonProffesionalInterestsUids: string[]
    desiredStudyFieldUid: string
    locationUid: string
    description: string
    dateOfBirth: string
  }