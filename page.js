import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>Innofix Technologies</h1>
            <p>Technology solutions for modern businesses.</p>
            <a className="button" href="/contact">Contact Us</a>
          </div>
        </section>
        <section className="container section">
          <h2>Welcome</h2>
          <p>
            This Next.js project contains the migrated Technix theme assets and
            styles. WordPress-specific PHP functionality is replaced by a
            Next.js App Router structure.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
