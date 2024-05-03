// import { Link } from "react-router-dom";
// import Header from "./Header";
// import { useState } from "react";
// import axios from "axios";
// import API_URL from "../constants";

// function Signup() {

//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');
//     const [email, setemail] = useState('');
//     const [mobile, setmobile] = useState('');


//     const handleApi = () => {
//         const url = API_URL + '/signup';
//         const data = { username, password, mobile, email };
//         axios.post(url, data)
//             .then((res) => {
//                 if (res.data.message) {
//                     alert(res.data.message);
//                 }
//             })
//             .catch((err) => {
//                 alert('SERVER ERR')
//             })
//     }
//     return (
//         <div>
//             <Header />
//             <div className="p-3 m-3">
//                 <h3> Welcome to Signup Page </h3>
//                 <br></br>
//                 USERNAME
//                 <input className="form-control" type="text" value={username}
//                     onChange={(e) => {
//                         setusername(e.target.value)
//                     }} />
//                 <br></br>
//                 MOBILE
//                 <input className="form-control" type="text" value={mobile}
//                     onChange={(e) => {
//                         setmobile(e.target.value)
//                     }} />
//                 <br></br>
//                 EMAIL
//                 <input className="form-control" type="text" value={email}
//                     onChange={(e) => {
//                         setemail(e.target.value)
//                     }} />
//                 <br></br>
//                 PASSWORD
//                 <input className="form-control" type="text" value={password}
//                     onChange={(e) => {
//                         setpassword(e.target.value)
//                     }} />
//                 <br></br>
//                 <button className="btn btn-primary mr-3" onClick={handleApi}> SIGNUP </button>
//                 <Link className="m-3" to="/login">  LOGIN </Link>
//             </div>
//         </div>
//     )
// }

// export default Signup;
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // const handleApi = () => {
    //     // Check if any field is empty
    //     if (!username || !password || !mobile || !email) {
    //         alert('Please fill in all the fields.');
    //         return;
    //     }

    //     // Check if email is in correct format
    //     if (!isValidEmail(email)) {
    //         alert('Please enter a valid email address.');
    //         return;
    //     }

    //     const url = API_URL + '/signup';
    //     const data = { username, password, mobile, email };
    //     axios.post(url, data)
    //         .then((res) => {
    //             if (res.data.message) {
    //                 alert(res.data.message);
    //             }
    //         })
    //         .catch((err) => {
    //             alert('SERVER ERR');
    //         });
    // };
    const handleApi = () => {
        // Check if any field is empty
        if (!username || !password || !mobile || !email) {
            alert('Please fill in all the fields.');
            return;
        }
    
        // Check if email is in correct format
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        const url = API_URL + '/signup';
        const data = { username, password, mobile, email };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert('SERVER ERR');
            });
    };
    

    return (
        <div>
            <Header />
            <div className="p-3 m-3">
                <h3> Welcome to Signup Page </h3>
                <br />
                USERNAME
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                MOBILE
                <input
                    className="form-control"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br />
                EMAIL
                <input
                    className="form-control"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                PASSWORD
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="btn btn-primary mr-3" onClick={handleApi}> SIGNUP </button>
                <Link className="m-3" to="/login">  LOGIN </Link>
            </div>
        </div>
    );
}

export default Signup;
