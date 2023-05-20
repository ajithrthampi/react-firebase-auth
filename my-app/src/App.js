import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  // const {user} = UserAuth()

//   const ProtectedRoute =  ({children}) => {
//     if(!user){
//         return <Navigate to="/" />
//     } 
//     return children
// }


  return (
    
   <Router>
    <Routes>
        <Route path="/"  element={<Login />}/> 
        <Route path="/signup"  element={<Signup />}/> 
        <Route path="/home"  element={<ProtectedRoute> <Home/></ProtectedRoute>} /> 
    </Routes>
   
   </Router>
  //  </AuthContextProvider>
  );
}

export default App;
