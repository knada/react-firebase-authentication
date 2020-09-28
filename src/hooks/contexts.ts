import { useContext } from 'react'

import { FirebaseContext } from '../Firebase'

export const useFirebase = () => useContext(FirebaseContext)
