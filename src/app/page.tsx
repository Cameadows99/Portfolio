import Link from "next/link";
import SectionHeading from "./components/SectionHeading";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Developer Portfolio</p>

        <h1>
          Building useful, creative applications with style and innovation
        </h1>

        <p className="hero-text">
          Chase Meadows, a self-taught front-end focused developer with back-end
          experience, creating applications that blend functionality, usability,
          and overlooked desires.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="primary-btn">
            View Projects
          </Link>

          <a
            href="https://github.com/Cameadows99"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Github
          </a>

          <a href="#about" className="secondary-btn">
            About Me
          </a>
        </div>
      </section>

      <section id="about" className="content-panel">
        <SectionHeading title="About Me" />

        <p>
          I’m drawn to pattern recognition and breaking things down into their
          simple pieces that join to create a larger whole.
        </p>

        <p>
          I enjoy finding something rather complicated and breaking it down to
          simplicity either through dissecting small pieces and then
          constructing each piece into a whole or through relatability with
          another structure/idea.
        </p>

        <p className="highlight-line">
          I find joy in diving deep into systems and finding how each piece
          relates or affects one another.
        </p>

        <p>
          I enjoy diving into systems and seeing how everything connects, how
          one decision affects another, and how small details shape the overall
          system.
        </p>

        <p>
          What pulled me toward programming is the ability to manufacture an
          idea into reality while also considering all types of people's
          experience beyond my own.
        </p>

        <p>
          At first I started with the idea of diving deep into the back-end, but
          through experience I found satisfaction in design and the small
          details of user experiences.
        </p>

        <p>
          I think one of my strengths is being able to hold multiple
          perspectives at once and shape something that works for the collective
          rather than the individual.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="Experience" />

        <p>My work history is mostly one of many years of hands-on construction.</p>

        <p>
          Although it may seem unrelated (and in many ways it is), I have found
          similarities in focusing on individual pieces and using them to create
          a whole. One must think of the end design when working on the bones of
          a building to fulfill the necessary functionality and stylistic
          expression.
        </p>

        <p>
          I started learning to code in small steps, using platforms like
          freeCodeCamp, and gradually moved into building my own projects.
        </p>

        <p>
          Later I began to dive into more diverse directions to explore all
          avenues and followed more fleshed-out video tutorials to gain
          experience of larger projects.
        </p>

        <p>
          Finally, I used my learned skills to create an application for my
          previous company (Heatwave) that modernized the way the employees
          interacted with the employer. This was mostly due to the fact that the
          company still largely used paper filing.
        </p>
      </section>

      <section className="content-panel">
        <SectionHeading title="What I Like Building" />

        <p>
          I’m interested in improving things people use every day, especially
          the ones that are so commonly used that most people do not even think
          about innovating further.
        </p>

        <p>
          A lot of my ideas come from noticing small friction points and
          imagining better ways to interact with them.
        </p>

        <p>
          For example, I’ve thought about navigation systems that allow full
          control with one hand using keyboard gaming controls that allow the
          user to navigate a webpage using one hand and free up the mouse hand
          for taking notes or however they decide to use it.
        </p>

        <p>
          I also like to build easy-to-understand systems that allow users to
          have some sort of distinct way to interact with the interface without
          sacrificing simple standard interface interactivity.
        </p>

        <p>
          I would also like to make a button that I coined as the "Betty
          button". This is a button that gives the user full and easy access to
          define themselves. The use case came from an idea of a user-created
          calculator application that allows users to design calculators fit for
          their needs and save and share them. A self-employed contractor could
          create one for roofing quoting, someone can use it for personalized
          budgets, or for taking stock. The name "Betty button" comes from the
          idea that someone budgeting for themselves could create a button for
          the $200 they pay monthly to their grandma. They could design it to be
          called "Betty" and set the operation to subtract 200 rather than
          typing "-200" each time they budget.
        </p>

        <p className="highlight-line">
          The goal is to remove discomfort and confusion for as many users as
          possible while also giving the users a structured way to interact with
          the application.
        </p>

        <p>
          To tie all of this together: my goal is to find easily overlooked gaps
          and fill them in a subtly profound way.
        </p>
      </section>
    </div>
  );
}
