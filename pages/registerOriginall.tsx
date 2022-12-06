import React, { useState, useEffect, useContext } from "react";
import supabase from "./compunentConfig/supabase";
import { useRouter } from "next/router";

const testregister = () => {
  const [f_name1, setF_name] = useState("");
  const [l_name1, setL_name] = useState("");
  const [username1, setUsername] = useState("");
  const [pass1, setPass] = useState("");
  const [email1, setEmail] = useState("");
  const [level1, setLevel] = useState("");
  const [formError, setFromError] = useState<any>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!f_name1 || !l_name1 || !username1 || !pass1 || !email1 || !level1) {
      setFromError("กรอกข้อมูลให้ครบด้วยครับ");
      return;
    }
    console.log(f_name1, l_name1, username1, pass1, email1, level1);

    const { data, error } = await supabase.from("users").insert([
      {
        f_name: f_name1,
        l_name: l_name1,
        username: username1,
        pass: pass1,
        email: email1,
        level: level1,
      },
    ]);
    if (error) {
      console.log(error);
      setFromError("กรอกข้อมูลให้ครบด้วยครับ");
    }
    if (data) {
      console.log(data);
      setFromError(null);
      alert("Register Success");
      router.push("/draw");
    }
  };
  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  //ทำเช็ค useEffect ทำงานระหว่าง cliant กับ server **ต้องทำความเข้าใจ useEffect เพิ่มเติม

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Register</h1>
        <label>First Name</label>
        <input
          placeholder="First Name"
          name="f_name"
          id="f_name"
          value={f_name1}
          onChange={(event) => setF_name(event.target.value)}
        ></input>
        <br />
        <br />
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name="l_name"
          id="l_name"
          value={l_name1}
          onChange={(event) => setL_name(event.target.value)}
        ></input>
        <br />
        <br />
        <label>User Name</label>
        <input
          placeholder="User Name"
          name="username"
          id="username"
          value={username1}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <br />
        <br />
        <label>Password</label>
        <input
          placeholder="Password"
          name="pass"
          id="pass"
          value={pass1}
          onChange={(event) => setPass(event.target.value)}
        ></input>
        <br />
        <br />
        <label>email</label>
        <input
          placeholder="email"
          name="email"
          id="email"
          value={email1}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="level">Level : </label>

        <select
          name="level"
          id="level"
          value={level1}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="Operator">Operator</option>
          <option value="Leader">Leader</option>
          <option value="Manager">Manager</option>
        </select>
        <br />
        <br />
        <button type="submit" name="submit">
          Submit
        </button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};
export default testregister;
