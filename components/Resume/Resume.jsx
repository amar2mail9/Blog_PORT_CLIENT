import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700">Amar Kumar</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">
          MERN Stack Developer
        </p>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
          <div>📞 9608553167</div>
          <div>📍 Dallupura, Noida, 110096</div>
          <div>
            🌐{" "}
            <a
              href="https://polytechub.vercel.app"
              className="text-blue-600 hover:underline"
            >
              polytechub.vercel.app
            </a>
          </div>
          <div>
            📧{" "}
            <a
              href="mailto:amar47kumar47@gmail.com"
              className="text-blue-600 hover:underline"
            >
              amar47kumar47@gmail.com
            </a>
          </div>
          <div>
            GitHub:{" "}
            <a
              href="https://github.com/amar2mail9"
              className="text-blue-600 hover:underline"
            >
              github.com/amar2mail9
            </a>
          </div>
        </div>

        {/* About Me */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">About Me</h2>
          <p className="text-gray-700">
            I’m Amar Kumar, a passionate MERN Stack Developer and BCA student. I
            have hands-on experience in building responsive web applications
            using MongoDB, Express.js, React.js, and Node.js. I’m a quick
            learner, team player, and always eager to grow by solving real-world
            development challenges.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Bachelor of Computer Applications (BCA)</strong> – Indira
              Gandhi National Open University (IGNOU) (2024–2027)
            </li>
            <li>
              <strong>Diploma in Civil Engineering</strong> – State Board of
              Technical Education (SBTE) (2020–2023)
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
            <div>HTML5 / CSS3</div>
            <div>JavaScript / React JS</div>
            <div>Node JS / Express JS</div>
            <div>Next JS / MongoDB</div>
            <div>Tailwind CSS / Bootstrap</div>
            <div>Git / Postman / Canva</div>
            <div>MS Office</div>
            <div>Swiper JS / Satrapi JS</div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Work Experience
          </h2>
          <p className="text-gray-700">
            <strong>Customer Support Executive</strong>
            <br />
            NSB BPO Services Pvt. Ltd., Noida <br />
            <em>March 2025 – Present</em>
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Projects</h2>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">E-Commerce Website</h3>
            <p className="text-gray-600">
              Tech Stack: React JS, JavaScript, Tailwind CSS, Swiper JS <br />
              <a
                href="https://a-storeamar.netlify.app/"
                className="text-blue-600 hover:underline"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/amar2mail9/A-Store"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Blog Website</h3>
            <p className="text-gray-600">
              Tech Stack: React JS, JavaScript, Tailwind CSS, Swiper JS, Fake
              API <br />
              <a
                href="https://amartsblog.netlify.app/"
                className="text-blue-600 hover:underline"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/amar2mail9/TS_Blog01"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">
              Portfolio & Blog Platform
            </h3>
            <p className="text-gray-600">
              Tech Stack: React JS, Express JS, MongoDB, Tailwind CSS, Material
              UI, JWT Auth
              <br />
              Client:{" "}
              <a
                href="https://polytechub.vercel.app/"
                className="text-blue-600 hover:underline"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/amar2mail9/Blog_PORT_CLIENT"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <br />
              Admin Panel:{" "}
              <a
                href="https://adminpanalport.netlify.app/"
                className="text-blue-600 hover:underline"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/amar2mail9/portadminblog"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
