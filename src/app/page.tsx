import Link from "next/link";
import SectionHeading from "./components/SectionHeading";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Developer Portfolio</p>
        <h1>
          Building useful, creative applications with style and innovation as
          the drive.
        </h1>
        <p className="hero-text">
          I’m Chase Meadows, a front-end focused developer creating applications
          that blend function, atmosphere, and real-world usefulness.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="primary-btn">
            View Projects
          </Link>
          <Link href="https://github.com/Cameadows99" className="secondary-btn">
            Github
          </Link>
          <a href="#about" className="secondary-btn">
            About Me
          </a>
        </div>
      </section>

      <section id="about" className="content-panel">
        <SectionHeading title="About Me" />
        <p>
          My proclaimed skills/passions are writing, pattern
          recognition/decoding, finding intricies in seemingly simple things. I
          enjoy finding something rather complicated and breaking it down to
          simplicity either through disecting small pieces and then
          construnction each piece into a whole or through relatability with
          another structure/idea. I find joy in diving deep into systems and
          finding how each piece relates or affects one another. What pulled me
          toward programming is the ability to manufacture an idea into reality
          while also considering all types of people's experience beyond my own.
          When I began programming I started with the idea of diving deep into
          the back-end but through experience I found satisfaction in design and
          the small details of user experiences. This is because I believe on of
          my strengths is considering multiple perceptions at once and finding a
          solution that satisfies the majority rather than the individual.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="Experience" />
        <p>
          My work history is mostly one of hands-on contruction. I have spent
          many years as a commercial carpenter. Although it may seem unrelated
          (and in many ways it is), I have found similarities in focusing on
          individual pieces and using them to create a whole. One must think of
          the end design when working on the bones of a building to fulfill the
          necessary functionality and stylistic expressinon. I began teaching
          myself to program in small steps. I first began with freecodecamp.com
          and taking what I learned to create something of my own to challenge
          myself and retain the information learned. Later I began to dive into
          more diverse directions to explore all avenues and followed more
          fleshed out video tutorials to gain experience of larger projects. Not
          all of my applications are listed here due to the fact that I felt it
          unnecessary to include projects I followed more than learned. Finally,
          I used my learned skills to create an application for my previous
          company (Heatwave) that modernized the way the employees interacted
          with the employer. This was mostly due to the fact that the company
          still largely used paper filing.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="What I Like Building" />
        <p>
          I prefer to take things that are so commonly used that most people
          forget that improvements could be made or alternate ways of achieving
          these functionalities are overlooked. For instance, my ideas for
          future projects include redesigning web navigation using video game
          controls to allow users to have complete navigation control with one
          hand on the left side of the keyboard, freeing up the other hand to
          take notes, eat, or whatever is desired by the user with the usual
          mouse hand. I would also like to make a button that I coined as the
          "betty button". This is a button that gives the user full and easy
          access to define themselves. The use case came from an idea of a
          user-created calculator application that allows users to design
          calculators fit for their needs and save and share them. A
          self-employed contractor could creat one for roofing quoting, someone
          can use it for personalized budgets, or for taking stock. The name
          "betty button" comes from the idea that someone budgeting for
          themselves could create a button for the $200 they pay monthly to
          their grandma. They could design it to be called "Betty" and set the
          operation to subtract 200 rather than typing '-200' each time they
          budget. These are just a few ideas but the consistent pattern is that
          I enjoy to think about what is missing and fill in gaps that might
          often get overlooked or provide people with things they didn't know
          that they wanted.
        </p>
      </section>
    </div>
  );
}
