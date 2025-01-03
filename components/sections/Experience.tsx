const workExperience = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    duration: "Jan 2020 - Dec 2021",
    description:
      "Developed and maintained web applications using React and Redux. Collaborated with designers to create user-friendly interfaces.",
  },
  {
    company: "Innovative Apps LLC",
    role: "Fullstack Developer",
    duration: "Jan 2022 - Present",
    description:
      "Worked on both frontend and backend development using Next.js and Node.js. Implemented RESTful APIs and integrated third-party services.",
  },
  {
    company: "Creative Minds Studio",
    role: "UI/UX Designer",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Designed user interfaces and experiences for mobile and web applications. Conducted user research and usability testing.",
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Work Experience</h2>
      <p>I&apos;ve had the privilege of working with the following companies</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {workExperience.map((experience, index) => (
          <div key={index} className="flex flex-col bg-secondary p-4 shadow-md">
            <h3 className="text-xl font-semibold">{experience.company}</h3>
            <p className="text-textSecondary">{experience.role}</p>
            <p className="text-textSecondary">{experience.duration}</p>
            <hr className="text-textSecondary opacity-45 my-2" />
            <p className="text-textSecondary">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
