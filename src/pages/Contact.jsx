import { useState } from "react";
import Sub from "../components/subscribe";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="grid grid-cols-2 items-start w-[80%] m-auto max-md:grid-cols-1 px-10 py-25 my-15  gap-7">
        {/* content */}
        <div className=" flex text-start   flex-col gap-5">
          <h1 className="text-4xl   ml-5 max-w-[500px]  font-black">
            Let's talk about everything!
          </h1>
          <p className="text-start ml-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            debitis, fugit natus?
          </p>
          <img
            src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
            alt="..."
          />
        </div>
        <div className="  ">
          <form action="" className="grid gap-8 ">
            <input
              className="bg-[#f3f3f3] p-4 focus:outline-[#6c63ff]"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <input
              className="bg-[#f3f3f3] p-4 focus:outline-[#6c63ff]"
              type="text"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="bg-[#f3f3f3] p-4 focus:outline-[#6c63ff]"
              type="text"
              id="name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
            <textarea
              className="bg-[#f3f3f3] p-4 focus:outline-[#6c63ff]"
              name="message"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your comments here..."
              cols="30"
              rows="5"
            ></textarea>
            <button className="text-white bg-black p-3 w-[200px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Sub />
    </div>
  );
}
