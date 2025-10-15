import React, { useState, useCallback } from 'react';


 type Page = 'home' | 'privacy' | 'terms' | 'support' | 'safety';


interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const NavLink: React.FC<{ target: Page; label: string; hash?: string; onClick?: () => void }> = ({ target, label, hash, onClick }) => (
    <a
      href={hash || '#'}
      onClick={(e) => {
        e.preventDefault();
        setPage(target);
        if (onClick) onClick();
      }}
      className={`ml-3 sm:ml-4 text-gray-200 hover:text-cyan-300 transition ${currentPage === target ? 'font-bold' : ''}`}
      aria-current={currentPage === target ? 'page' : undefined}
    >
      {label}
    </a>
  );

  const handleDownloadClick = useCallback(() => {
    setPage('home');
    setTimeout(() => {
      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [setPage]);

  return (
    <header className="max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between gap-4">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); setPage('home'); }}
        className="flex items-center gap-2 font-extrabold text-xl text-gray-200"
      >
        <img src="/icon.png" alt="SquadLink icon" className="w-9 h-9 shadow-lg rounded-full" />
        SquadLink
      </a>
      <nav className="flex items-center text-sm sm:text-base">
        <NavLink target="home" label="Features" hash="#features" onClick={handleDownloadClick}/>
        <NavLink target="privacy" label="Privacy" />
        <NavLink target="terms" label="Terms" />
        <NavLink target="safety" label="Safety" />
        <a 
          href="#download" 
          onClick={(e) => { e.preventDefault(); handleDownloadClick(); }} 
          className="ml-4 px-3 py-2 text-sm rounded-xl font-bold text-gray-950 bg-gradient-to-br from-cyan-400 to-amber-500 shadow-md hover:shadow-lg transition-shadow"
        >
          Download
        </a>
      </nav>
    </header>
  );
};


const Footer: React.FC<HeaderProps> = ({ setPage }) => {
  const NavLink: React.FC<{ target: Page; label: string }> = ({ target, label }) => (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); setPage(target); }}
      className="hover:underline"
    >
      {label}
    </a>
  );

  return (
    <footer className="max-w-screen-xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center text-gray-400 border-t border-white/10 mt-10 text-sm">
      <p className="order-2 sm:order-1 mt-4 sm:mt-0">© 2025 SquadLink. All rights reserved.</p>
      <nav className="flex gap-4 order-1 sm:order-2">
        <NavLink target="privacy" label="Privacy" />
        <NavLink target="terms" label="Terms" />
        <NavLink target="safety" label="Safety" />
        <NavLink target="support" label="Support" />
      </nav>
    </footer>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-5 grid lg:grid-cols-1 grid-cols-[1.2fr_1fr] gap-10 items-center pt-10 pb-5">
        <div className="hero-text">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-0 mb-3">
            Stay Connected. Stay Safe.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="inline-block mr-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-amber-500 text-gray-950 font-extrabold text-xs">NEW</span> App for families, friends, and groups to see each other's status and make sure everyone gets home safe. Tap Find Me, send an Emergency alert, or start a timed Get Home Safe session.
          </p>
          <div id="download" className="flex gap-3 mt-4">
            <a className="inline-block px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-amber-500 text-gray-950 font-extrabold shadow-lg transition-transform hover:scale-[1.02]" href="#" aria-label="Get it on the App Store">
               App&nbsp;Store
            </a>
            <a className="inline-block px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-amber-500 text-gray-950 font-extrabold shadow-lg transition-transform hover:scale-[1.02]" href="#" aria-label="Get it on Google Play">
              Google&nbsp;Play
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-2">Soon in app stores</p>
        </div>
        <div className="flex justify-center">
          {/* Placeholder for logo-hero image */}
          <img src="/icon.png" alt="SquadLink Logo" className="w-56 h-56 rounded-full shadow-2xl shadow-cyan-500/30 " />
        </div>
      </main>

      <section id="features" className="max-w-screen-xl mx-auto px-5 mt-10">
        <h2 className="text-3xl font-extrabold mb-5">Built for every kind of group</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">24‑hour Group Expiry</h3>
            <p className="text-gray-300">Circles auto‑expire after 24 hours. Great for events, trips, and one‑off meetups.</p>
          </article>
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Private Circles</h3>
            <p className="text-gray-300">Create circles for family, roommates, classes, teams, trips, and more. You control who can join and what they see.</p>
          </article>
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Find Me</h3>
            <p className="text-gray-300">Send a one‑tap “Find Me” ping to your circle with your live location for a short, user‑selected time window.</p>
          </article>
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Emergency</h3>
            <p className="text-gray-300">Hold to trigger an emergency alert that notifies your circle and optionally your local emergency number.</p>
          </article>
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Get Home Safe</h3>
            <p className="text-gray-300">Start a safety timer when you head out. If you don’t check in by the time it ends, your circle gets notified automatically.</p>
          </article>
          <article className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Respectful Privacy</h3>
            <p className="text-gray-300">Granular controls for what you share and with whom. Location is only shared when you choose.</p>
          </article>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-5 mt-10">
        <h2 className="text-3xl font-extrabold mb-5">Store Metadata</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Short Description</h3>
            <p className="text-gray-300">SquadLink helps groups stay connected and get home safe with Find Me, Emergency, and timed check‑ins.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Full Description</h3>
            <p className="text-gray-300">SquadLink is a private group safety and coordination app for families, friends, clubs, and teams. Create circles, share status, and use tools like Find Me, Emergency, and Get Home Safe timers so the people who matter know you’re okay. Privacy is built‑in with strict consent controls, transparent data practices, and easy ways to pause or limit location sharing.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Invite‑only circles.</li>
              <li>One‑tap Find Me with temporary location sharing.</li>
              <li>Emergency alert with optional local emergency dialer shortcut.</li>
              <li>Get Home Safe timers with fail‑safe notifications.</li>
              <li>Status updates, check‑ins, and smart geofences.</li>
              <li>Works worldwide; supports metric/imperial units.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Data Safety (Summary)</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>**Shared:** *No personal data* sold. Data is only shared with your chosen circles and service providers (e.g., maps, notifications).</li>
              <li>**Encryption:** data in transit and at rest encrypted.</li>
              <li>**Deletion:** in‑app request deletes account and data within 30 days.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Permissions (Examples)</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Location: To enable Find Me, Emergency, geofenced check‑ins.</li>
              <li>Notifications: To deliver alerts and timer results.</li>
              <li>Contacts (optional): To help invite trusted people.</li>
              <li>Motion/Activity (optional): To reduce GPS usage and improve accuracy.</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Support & Contact</h3>
            <p className="text-gray-300">Email: <a href="mailto:jpandpadev@gmail.com" className="text-blue-300 hover:underline">jpandpadev@gmail.com</a></p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-5 mt-10 pb-10">
        <h2 className="text-3xl font-extrabold mb-5">FAQ</h2>
        <div className="space-y-3">
          <details className="p-4 bg-gray-900 rounded-xl border border-white/10">
            <summary className="font-semibold cursor-pointer">Do I have to share my live location?</summary>
            <p className="text-gray-300 mt-2">No. You decide when to share. Find Me and Emergency are opt‑in and time‑limited by design.</p>
          </details>
          <details className="p-4 bg-gray-900 rounded-xl border border-white/10">
            <summary className="font-semibold cursor-pointer">What happens if I miss a Get Home Safe check‑in?</summary>
            <p className="text-gray-300 mt-2">Your selected circle receives a notification.</p>
          </details>
          <details className="p-4 bg-gray-900 rounded-xl border border-white/10">
            <summary className="font-semibold cursor-pointer">Can children use SquadLink?</summary>
            <p className="text-gray-300 mt-2">There is no account, required age is 12 but with adult consent.</p>
          </details>
          <details className="p-4 bg-gray-900 rounded-xl border border-white/10">
            <summary className="font-semibold cursor-pointer">Do groups last forever?</summary>
            <p className="text-gray-300 mt-2">Groups expire after 24 hours to protect privacy.</p>
          </details>
        </div>
      </section>
    </>
  );
};


const PrivacyPage: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-5 py-8 legal">
      <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">Last updated: 2025-10-14</p>
      <p className="text-gray-300 mb-6">SquadLink (“we”, “us”, “our”) builds tools that help people stay connected and safe. Privacy is core to our product design. This policy explains what we collect, why we collect it, and how you can control your information.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Information We Collect</h2>
      <ul className="list-disc ml-5 text-gray-300 space-y-2">
        <li><strong>Account Information</strong>: name, email/phone for login and support.</li>
        <li><strong>Location</strong>: collected only when you opt‑in to share (e.g., Find Me, Emergency, geofences, timers).</li>
        <li><strong>Device & Diagnostics</strong>: device model, OS, app version, crash logs.</li>
        <li><strong>Usage</strong>: feature usage to improve reliability and safety.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">How We Use Information</h2>
      <ul className="list-disc ml-5 text-gray-300 space-y-2">
        <li>Provide and operate the service, including alerts and notifications.</li>
        <li>Secure the service and prevent abuse.</li>
        <li>Improve performance, features, and safety.</li>
        <li>Communicate with you about updates and support.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Sharing</h2>
      <p className="text-gray-300 mb-6">We do not sell your personal data. We share information with: (a) members of your chosen circles as you direct; (b) service providers that process data on our behalf (e.g., maps, notifications) under strict contracts; (c) law enforcement only in response to valid legal process.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Your Choices</h2>
      <ul className="list-disc ml-5 text-gray-300 space-y-2">
        <li>Control sharing per circle and feature. Pause or limit location at any time.</li>
        <li>Access, correct, or delete your data in the app or by emailing <a href="mailto:jpandpadev@gmail.com" className="text-blue-300 hover:underline">jpandpadev@gmail.com</a>.</li>
        <li>Opt‑out of non‑essential analytics.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Data Retention</h2>
      <p className="text-gray-300 mb-6">We retain personal data only as long as necessary for the purposes above. Location events are minimized and stored for short periods by default. For ephemeral groups, membership and message metadata are scheduled for deletion when the group expires (24 hours by default), subject to legal and security requirements.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Security</h2>
      <p className="text-gray-300 mb-6">Data is encrypted in transit and at rest. We employ access controls, monitoring, and regular reviews.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">International Transfers</h2>
      <p className="text-gray-300 mb-6">Data may be processed in regions where we or our providers operate with appropriate safeguards.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Children</h2>
      <p className="text-gray-300 mb-6">Accounts for minors must be created and managed by a parent/guardian as required by local law. We do not knowingly collect data from children without consent.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-3">Contact</h2>
      <p className="text-gray-300 mb-6">Questions? <a href="mailto:jpandpadev@gmail.com" className="text-blue-300 hover:underline">email</a>.</p>
    </main>
  );
};


const TermsPage: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-5 py-8 legal">
      <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-6">Last updated: 2025-10-14</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">1. Agreement</h2>
      <p className="text-gray-300 mb-6">Using SquadLink you agree to these Terms. If you do not agree, do not use the service.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">2. Eligibility</h2>
      <p className="text-gray-300 mb-6">You must be legally permitted to use the service in your region. For minors, a parent/guardian must manage the the group.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">3. Safety Tools</h2>
      <p className="text-gray-300 mb-3">Groups ("circles") are ephemeral by default and expire 24 hours Upon expiry, the group becomes inaccessible and related content may be deleted or archived per our Privacy Policy.</p>
      <p className="text-gray-300 mb-6">Features like Find Me, Emergency, and Get Home Safe are best‑effort tools and depend on device sensors, connectivity, and third‑party services. They are not a substitute for contacting emergency services directly.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">4. Your Responsibilities</h2>
      <ul className="list-disc ml-5 text-gray-300 space-y-2">
        <li>Provide accurate account information and keep your credentials secure.</li>
        <li>Use the app lawfully and respect others’ privacy and consent.</li>
        <li>Obtain consent before sharing someone else’s location.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">5. Subscriptions & Billing</h2>
      <p className="text-gray-300 mb-6">Some features may require a subscription handled by Apple or Google. Purchases are governed by the respective store policies.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">6. Data</h2>
      <p className="text-gray-300 mb-6">Our Privacy Policy explains how we handle your data and is incorporated by reference.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">7. Disclaimers</h2>
      <p className="text-gray-300 mb-6">THE SERVICE IS PROVIDED “AS IS”. WE DISCLAIM ALL WARRANTIES TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">8. Limitation of Liability</h2>
      <p className="text-gray-300 mb-6">To the fullest extent permitted by law, our liability shall not exceed the amount you paid to use the service in the 12 months prior to the claim.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">9. Changes</h2>
      <p className="text-gray-300 mb-6">We may update these Terms. We’ll notify you of material changes. Continued use means you accept the new Terms.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">10. Contact</h2>
      <p className="text-gray-300 mb-6">For questions <a href="mailto:jpandpadev@gmail.com" className="text-blue-300 hover:underline">email</a></p>
    </main>
  );
};


const SupportPage: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-5 py-8 legal min-h-[50vh]">
      <h1 className="text-4xl font-extrabold mb-4">Support</h1>
      <p className="text-gray-300">For help, <a href="mailto:jpandpadev@gmail.com" className="text-blue-300 hover:underline">email</a>. We aim to reply within 2 business days.</p>
    </main>
  );
};


const SafetyPage: React.FC = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-5 py-8 legal min-h-[50vh]">
      <h1 className="text-4xl font-extrabold mb-4">Safety Information</h1>
      <p className="text-gray-300 mb-4">SquadLink is designed to enhance safety, but it is not a replacement for emergency services. Please use 911 (or your local emergency number) for immediate help.</p>
      <h2 className="text-2xl font-bold mt-8 mb-3">Key Safety Reminders</h2>
      <ul className="list-disc ml-5 text-gray-300 space-y-2">
        <li>The **Emergency** feature is a *notification* tool, not a direct emergency line.</li>
        <li>Always ensure your device has sufficient battery and signal for location services to work.</li>
        <li>Respect the privacy and consent of all circle members.</li>
      </ul>
    </main>
  );
};



const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Helper function to render the correct page component
  const renderPage = useCallback(() => {
    window.scrollTo(0, 0); // Scroll to top on page change
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'support':
        return <SupportPage />;
      case 'safety':
        return <SafetyPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  }, [currentPage]);
  React.useEffect(() => {
    let title = 'SquadLink — Stay Connected. Stay Safe.';
    if (currentPage !== 'home') {
      const pageTitle = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      title = `${pageTitle} — SquadLink`;
    }
    document.title = title;
  }, [currentPage]);

  return (

    <div className="min-h-screen font-sans" style={{
      color: '#e5e7eb', // var(--text)
      background: 'radial-gradient(1200px 600px at 20% -10%, #1f2937, #0b1220)', // var(--bg) / radial-gradient
      lineHeight: 1.6
    }}>
      {/* Import Inter font (as used in original CSS) */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>

      <Header currentPage={currentPage} setPage={setCurrentPage} />
      
      {renderPage()}
      
      <Footer currentPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
};

export default App;