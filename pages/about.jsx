import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Inventive Entry-Level Web Developer creates novel site designs and
              innovative user interfaces. Known for architecting customer-facing
              products that deliver unique experiences while complying with
              internal coding standards and technical requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
