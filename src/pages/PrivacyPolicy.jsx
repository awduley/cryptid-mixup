import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  return (
    <main className="page page--bg-dark privacy" aria-labelledby="privacy-title">
      <div className="container prose">
        <header className="section" id="top">
          <h1 id="privacy-title" className="section__title">Privacy Policy</h1>
          <p className="section__subheading">
            This page explains what information Cryptid Quest collects and how it's used.
          </p>
          <p><em>Last updated: January 4, 2026</em></p>
        </header>

        <section className="section" aria-labelledby="privacy-summary">
          <h2 id="privacy-summary" className="section__heading">Summary</h2>
          <ul>
            <li>We don't use Google Analytics (GA4) or advertising trackers right now.</li>
            <li>If you contact us, we receive the information you send (like name, email, and message).</li>
            <li>Our hosting provider may process basic technical data (like IP address) to deliver the site.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="privacy-collect">
          <h2 id="privacy-collect" className="section__heading">Information we collect</h2>

          <h3>Information you provide</h3>
          <p>
            If you contact us (for example, by email or a contact form), we may receive information
            such as your name, email address, and the contents of your message.
          </p>

          <h3 style={{'margin-top': '4rem'}}>Basic technical data</h3>
          <p>
            Like most websites, our hosting and infrastructure may process technical data to deliver
            the site and keep it secure. This can include things like your IP address, browser type,
            device information, pages requested, and timestamps (often called “server logs”).
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-cookies">
          <h2 id="privacy-cookies" className="section__heading">Cookies and local storage</h2>
          <p>
            Cryptid Quest does not intentionally use advertising or analytics tracking cookies at
            this time.
          </p>
          <p>
            Some site features (or your browser) may store limited data locally (for example, basic
            preferences or cached files) to improve performance. You can typically control cookies
            and site storage through your browser settings.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-use">
          <h2 id="privacy-use" className="section__heading">How we use information</h2>
          <ul>
            <li>To respond to messages and support requests</li>
            <li>To maintain site security and prevent abuse</li>
            <li>To improve site content, games, and usability</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="privacy-share">
          <h2 id="privacy-share" className="section__heading">How information is shared</h2>
          <p>
            We don't sell your personal information. We may share limited information with service
            providers that help us operate the site (for example, web hosting and infrastructure),
            only as needed to provide and secure the service.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-retention">
          <h2 id="privacy-retention" className="section__heading">Data retention</h2>
          <p>
            We keep personal information only as long as necessary for the purposes described above
            (for example, responding to your message), unless we need to retain it longer for
            legitimate operational or legal reasons.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-security">
          <h2 id="privacy-security" className="section__heading">Security</h2>
          <p>
            We take reasonable steps to protect information, but no method of transmission or
            storage is 100% secure.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-children">
          <h2 id="privacy-children" className="section__heading">Children's privacy</h2>
          <p>
            Cryptid Quest is not intended for children under 13, and we don't knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-links">
          <h2 id="privacy-links" className="section__heading">Links to other sites</h2>
          <p>
            Our site may link to third-party websites. We're not responsible for their content or
            privacy practices, and we recommend reviewing their policies.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-changes">
          <h2 id="privacy-changes" className="section__heading">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we'll update the
            “Last updated” date at the top of this page.
          </p>
        </section>

        <section className="section" aria-labelledby="privacy-contact">
          <h2 id="privacy-contact" className="section__heading">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, email{" "}
            <a href="mailto:feedback@cryptid.quest">feedback@cryptid.quest</a>.
          </p>
        </section>

        <footer className="section">
          <a href="#top">&uarr; Back to top</a>
          <span aria-hidden="true"> | </span>
          <Link to="/">&larr; Back to home</Link>
        </footer>
      </div>
    </main>
  );
}
