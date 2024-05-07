import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full sm:max-w-sm shadow-lg">
        <h2 className="text-center text-3xl font-semibold">Log in</h2>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="flex items-center gap-5">
            <Label className="flex">
              New here? 
              <a
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500 ml-2"
              >
                <Link to="/register">Sign up</Link>
              </a>
            </Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
