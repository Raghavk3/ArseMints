"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

//  Define options for the campus dropdown
//     const campusOptions = ['CET', 'IT', 'TC', 'EC', 'CP', 'IMS'];
  
//     // Define options for the year dropdown
//     const yearOptions = ['1st', '2nd', '3rd', '4th'];
  
//     return (
//       <div className={styles.formContainer}>
//         <h2>Register</h2>
//         {/* Register form */}
//         <form>
//           <div className={styles.formRow}>
//             <div className={styles.formField}>
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" />
//             </div>
//             <div className={styles.formField}>
//               <label htmlFor="rollNumber">Roll Number</label>
//               <input type="text" id="rollNumber" />
//             </div>
//           </div>
//           <div className={styles.formRow}>
//             <div className={styles.formField}>
//               <label htmlFor="username">Username</label>
//               <input type="text" id="username" />
//             </div>
//             <div className={styles.formField}>
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" />
//             </div>
//           </div>
//           <div className={styles.formField}>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <div className={styles.formField}>
//             <label htmlFor="campus">Campus</label>
//             <select id="campus">
//               {campusOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>
//           <div className={styles.formField}>
//             <label htmlFor="year">Year</label>
//             <select id="year">
//               {yearOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//           </div>
//           <div className={styles.formField}>
//             <label htmlFor="branch">Branch</label>
//             <input type="text" id="branch" />
//           </div>
//           <div className={styles.formField}>
//             <label htmlFor="section">Section</label>
//             <input type="text" id="section" />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//         <p onClick={toggleForm}>Already have an account? Login here</p>
//       </div>