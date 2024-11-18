import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p>
        I am a software engineer with a passion for creating innovative
        solutions with Java, Spring Boot, React, Next JS, and Express with different
        databases and cloud technologies.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 px-6 py-2 rounded">
        <a
          href="https://www.linkedin.com/in/sagarkunwar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </button>
      <br />
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 px-6 py-2 rounded">
        <Link
          href="https://github.com/sagarkunwarc"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </button>
      <br />
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 px-6 py-2 rounded">
        <Link
          href="https://partner.cloudskillsboost.google/public_profiles/f0d3c4be-0bcb-43a5-8665-bbdaa63b022e"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Cloud Skills Boost
        </Link>
      </button>
    </div>
  );
}
