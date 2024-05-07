import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="flex w-full max-w-md flex-col gap-4 shadow-xl p-5 rounded-md border ">
        <h2 className="text-center text-3xl font-semibold">Sign up</h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="John doe"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            placeholder="********"
            required
            shadow
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>

        <div className="flex items-center gap-5">
          <Label className="flex">
            Have an account?
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500 ml-2"
            >
              <Link to="/login">Login</Link>
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Register;
