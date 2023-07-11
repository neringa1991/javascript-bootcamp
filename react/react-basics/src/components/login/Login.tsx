import "./Login.css";

export const Login = () => {
  return (
    <div className="Login">
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="Password"></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};
