import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import {  getAuth} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleIcon from '../../assets/logo/google.png';
import githubIcon from '../../assets/logo/github-logo.png';

const GoogLogin = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            
            .catch((error) => {
                console.error('Error signing in with Google:', error.message);
            });

    };

    const githubSignIn = ()=> {
        const githubProvider = new GithubAuthProvider();
        
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/');
        })
        
        .catch((error) => {
            console.error('Error signing in with github:', error.message);
        });
    }

    return (
        <div className="p-4">
            <div className="flex items-center justify-center">
                
                <span onClick={handleGoogleSignIn}>
                    <img className="w-10 cursor-pointer" src={googleIcon} alt="" />
                </span>
                <span onClick={githubSignIn} >
                    <img className="w-10 cursor-pointer" src={githubIcon} alt="" />
                </span>
            </div>
        </div>
    );
};

export default GoogLogin;









// import { FaGoogle } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// import { app } from "../../firebase/firebase.config";
// import {  getAuth} from "firebase/auth";


// const GoogLogin = () => {

//     const { googleSignIn } = getAuth(app);
//     // const navigate = useNavigate();

//     const handleGoogleSignIn = () =>{
//         googleSignIn()
//         .then(result => {
//             const user = result.user;
//             console.log(user)
//         })
//         .catch(error =>{
//             console.log('error', error.message)
//         })
//     }
//     return (
//         <div className="p-4">
            
//             <div>
//                 <button onClick={handleGoogleSignIn} className="btn">
//                     <FaGoogle className="mr-2"></FaGoogle>
//                     Google
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default GoogLogin;