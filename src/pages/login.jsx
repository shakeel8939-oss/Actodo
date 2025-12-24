import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [ruser, setRuser] = useState(true);
  const users = props.users;

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {  
    var userfound = false;
    users.forEach(function(item) {
        if (item.username === eusername && item.password === epassword) {
            console.log("login successful");
            userfound = true;
            navigate('/Landing',{ state:{users:eusername }});
        } 
    });
    if(userfound===false ){
      console.log("login failed");
      setRuser(false);
    }
  }
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="font-medium text-3xl">Hey Hi</h1>
        {ruser? <p>I help you manage your activites after you login:)</p>:<p className="text-red-500">please Sign up Before login </p>}
        
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="username"
            onChange={handleUInput}
          />

          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="password"
            onChange={handlePInput}
          />

          <button className="bg-[#8272DA] w-24 p-1 rounded-md hover:cursor-pointer" onClick={checkUser}>Login</button>
          <p>
            Don't have an account?{" "}
            <Link to={"/Signup"} className="underline ">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
