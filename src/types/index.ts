export type firebaseAuthUser = {
    uid: string | null
    email: string | null
    displayName: string | null
    phoneNumber: string | null
    photoURL: string | null
    emailVerified: boolean
    isAnonymous: boolean
    lastLoginAt: string
    createdAt: string
    multiFactor: any
}
