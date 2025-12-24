import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
    const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const users = props.users;
  const setUsers = props.setUsers;

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }
  function addUser() {
    console.log(users);
    setUsers([...users, { username: eusername, password: epassword }]);
    navigate('/');
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="font-medium text-3xl">Hey Hi</h1>
        <p>Sign up here:)</p>
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

          <input
            type="text"
            className="w-52 border-black border rounded-md bg-transparent p-1"
            placeholder="confirm password"
          />

          <button
            className="bg-[#F8A000] w-24 p-1 rounded-md hover:cursor-pointer"
            onClick={addUser}
          >
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
