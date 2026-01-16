import React, { useState } from "react";

const Getin = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [desc, setdesc] = useState("");
  const [notif, setNotif] = useState("");

  const formsub = (e) => {
    e.preventDefault();

    setname("");
    setemail("");
    setsubject("");
    setdesc("");

    setNotif("go");
    setTimeout(() => setNotif(""), 6000);
  };

  return (
    <section className="px-4 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Get in <span className="text-[#2463EB]">Touch</span>
        </h1>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* ===== LEFT : Contact Info ===== */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <h2 className="font-semibold text-xl lg:text-2xl">
              Contact Information
            </h2>

            {/* Item */}
            {[
              {
                icon: "ri-map-pin-line",
                title: "Location",
                value: "Kota, Rajasthan",
              },
              {
                icon: "ri-mail-send-line",
                title: "Email",
                value: (
                  <a
                    href="mailto:rahejachayan@gmail.com"
                    className="text-[#2463EB] hover:underline"
                  >
                    rahejachayan@gmail.com
                  </a>
                ),
              },
              {
                icon: "ri-linkedin-fill",
                title: "LinkedIn",
                value: (
                  <a
                    href="https://linkedin.com/in/chayan-raheja"
                    className="text-[#2463EB] hover:underline"
                  >
                    linkedin.com/in/chayan-raheja
                  </a>
                ),
              },
              {
                icon: "ri-github-line",
                title: "GitHub",
                value: (
                  <a
                    href="https://github.com/chayan-raheja"
                    className="text-[#2463EB] hover:underline"
                  >
                    github.com/chayan-raheja
                  </a>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-[#2463EB]/10 p-3 rounded-full text-[#2463EB] text-lg">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="text-black/70 font-medium">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== RIGHT : Form ===== */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <h2 className="font-semibold text-xl lg:text-2xl">
              Send Me a Message
            </h2>

            <form
              onSubmit={formsub}
              className="flex flex-col gap-4"
            >
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="border rounded-md py-2 px-3 focus:outline-none focus:border-[#2463EB]"
                required
                type="text"
                placeholder="Your Name"
              />

              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="border rounded-md py-2 px-3 focus:outline-none focus:border-[#2463EB]"
                required
                type="email"
                placeholder="Your Email"
              />

              <input
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                className="border rounded-md py-2 px-3 focus:outline-none focus:border-[#2463EB]"
                required
                type="text"
                placeholder="Subject"
              />

              <textarea
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                className="border rounded-md py-2 px-3 min-h-[120px] focus:outline-none focus:border-[#2463EB]"
                required
                placeholder="Your Message"
              ></textarea>

              <button className="bg-[#2463EB] hover:bg-[#1e4fd8] transition active:scale-95 text-white rounded-lg py-2 font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notif && (
        <div className="fixed bottom-4 right-4 max-w-sm bg-red-500 text-white px-5 py-4 rounded-lg shadow-lg">
          <h1 className="font-semibold text-base">
            Error sending message
          </h1>
          <p className="text-sm mt-1">
            Please try again later or contact me directly via email.
          </p>
        </div>
      )}
    </section>
  );
};

export default Getin;
