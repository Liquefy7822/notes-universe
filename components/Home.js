// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NoteMingle - Collaborative Exam Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Welcome to NoteMingle!" />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Collaborate on Exam Notes</h1>
            <p>
              NoteMingle is your platform for sharing and collaborating on exam notes with fellow students.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="/illustration.png" alt="Illustration of students studying" />
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Easy Note Creation</h2>
            <p>Create, organize, and share your study notes effortlessly.</p>
          </div>
          <div className="feature">
            <h2>Interactive Collaboration</h2>
            <p>Interact with others through likes, comments, and more.</p>
          </div>
          <div className="feature">
            <h2>Personalized Profile</h2>
            <p>Customize your user profile and connect with peers.</p>
          </div>
        </section>
      </main>

      <Footer />
      
      <style jsx>{`
        /* Add your custom CSS styles here */
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 0;
        }

        .hero-content {
          flex: 1;
          padding: 2rem;
        }

        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-button {
          background-color: #0070f3;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }

        .cta-button:hover {
          background-color: #0055b3;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .hero-image img {
          max-width: 100%;
          height: auto;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 2rem 0;
        }

        .feature {
          flex-basis: calc(33.333% - 1rem);
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .feature h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .feature p {
          font-size: 1rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
