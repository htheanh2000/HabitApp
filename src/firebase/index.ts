import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

const database = firebase
    .app()
    .database('https://habitapp-31c85-default-rtdb.asia-southeast1.firebasedatabase.app/')

const signUp = async (email: string, password: string, username: string) => {
    console.log(email, password);
    return auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
            console.log('User account created & signed in!');
            const newUser = {
                email,
                username
            }
            if (auth().currentUser) {
                const userId = auth().currentUser?.uid
                console.log("userId", userId);
                if (userId) {
                    await database
                        .ref('users/' + userId).set(newUser)
                    return {
                        success: true,
                        message: 'User account created & signed in!'
                    }
                }
            }
            return {
                success: false,
                message: 'Server error!'
            }
            //  AsyncStorage.setItem("user", JSON.stringify(newUser))

        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                return {
                    success: false,
                    message: 'That email address is already in use!'
                }
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                return {
                    success: false,
                    message: 'That email address is invalid!'
                }
            }

            return {
                success: false,
                message: error.code
            }
            // console.error(error);
        });
}

const getUser = () => {
    if (auth().currentUser) {
        const userId = auth().currentUser?.uid
        if (userId) {
            return database
                .ref('users/' + userId)
                .once('value')
                .then(snapshot => {
                    return snapshot.val()
                });
        }
        else return null
    }
    else return null
}

const addHabit = async (habit: any) => {
    if (auth().currentUser) {
        const userId = auth().currentUser?.uid
        if (userId) {
            database
                .ref('users/' + userId + '/habits')
                .push(habit)

            return {
                success: true,
                message: 'Add habit successfully !'
            }

        }
        else return {
            success: false,
            message: 'Add habit failed !'
        }
    }
    else return {
        success: false,
        message: 'Add habit failed !'
    }
}

const getHabit = async () => {
    let res = {}
    if (auth().currentUser) {
        const userId = auth().currentUser?.uid
        if (userId) {
            return database
                .ref('users/' + userId + '/habits')
                .on('value', (snapshot) => {
                    return snapshot.val()
                })

        }
    }
}

export {
    signUp,
    getUser,
    addHabit,
    getHabit
}