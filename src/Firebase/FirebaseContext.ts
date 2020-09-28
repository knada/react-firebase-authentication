import { createContext } from 'react'
import Firebase from './firebase'

const FirebaseContext = createContext<Firebase>(new Firebase())

export default FirebaseContext
