import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const database = firebase
    .app()
    .database('https://habitapp-31c85-default-rtdb.asia-southeast1.firebasedatabase.app/')

// GoogleSignin.configure({
//     webClientId: '1039867201405-m84803nds48hlp5ejb3e4nv5rj7ehp29.apps.googleusercontent.com',
// });

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

const signIn = async (email: string, password: string) => {
    return auth()
        .signInWithEmailAndPassword(email, password)
        .then(async () => {
            console.log('User account created & signed in!');
            return {
                success: true,
                message: 'Server error!'
            }
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

const logout = () => {
    auth()
        .signOut()
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

const resetPassword = async (email: string) => {
    auth().sendPasswordResetEmail(email)
        .then(function () {
            // Email sent.
            console.log('Email send!');

        })
        .catch(function (error) {
            console.log('Error!', error);
            // An error happened.
        });
}

const signInWithEmail = async () => {
    // const { idToken } = await GoogleSignin.signIn();

    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
}

export {
    signUp,
    getUser,
    addHabit,
    getHabit,
    logout,
    signIn,
    resetPassword,
    signInWithEmail
}