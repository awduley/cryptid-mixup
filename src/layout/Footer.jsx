import React from 'react'

function Footer() {

  let year = new Date().getFullYear();

  return(
    <footer id="footer" className="">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="sasquatch"></div>
      <div className="footer-columns p-lg grid">
        <section className="column-f column-f-1">
          <h3>Cryptid Quest</h3>
          <p>Documenting the unexplained with respect and curiosity.</p>
          <a href="#page" aria-label="Back to top">Return to Campfire &uarr;</a>
        </section>
        <section className="column-f column-f-2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Latest Articles</a></li>
            <li><a href="#">Creature of the Week</a></li>
            <li><a href="#">Tools (EMF, audio log)</a></li>
            <li><a href="#">Privacy/Terms</a></li>
          </ul>
        </section>
        <section className="column-f column-f-3">
          <h3>Participate</h3>
          <ul>
          <li><a href="#">Submit a Sighting</a></li>
          <li><a href="#">How to Report</a></li>
          <li><a href="#">Community Rules</a></li>
          <li><a href="#">FAQ</a></li>
          </ul>
        </section>
      </div> 
      <section className="copy p-xl">
        <small>&copy; {year} <strong>Cryptid Quest</strong>. All rights reserved.</small>
      </section>
    </footer>
  );
}

export default Footer;