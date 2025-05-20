import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl shadow-lg p-8 max-w-xl w-full text-center">
        <img
          src="https://avatars.githubusercontent.com/u/6021939?v=4"
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full border-4 border-purple-500 mb-6"
        />
        <h1 className="text-4xl font-extrabold text-white mb-2">Hi, I'm Luthfi</h1>
        <p className="text-lg text-purple-200 mb-4">Software Engineer & Web Enthusiast</p>
        <p className="text-gray-200 mb-6">
          I specialize in building robust backend systems, and I'm also skilled in frontend development.
          Passionate about scalable architectures, modern web technologies, and sharing knowledge with the community.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/jennndol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="mailto:jkt.luthfi@gmail.com"
            className="text-purple-400 hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jkt-luthfi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
