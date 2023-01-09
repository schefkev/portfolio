import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you curious to get to know me a little better, you can contact
              me!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: kev.toth@icloud.com</li>
              <li className="contact-item">Phone: +436607978691</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
