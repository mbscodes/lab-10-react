import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { faculty } from './faculty.js'
import './styles.css'

function FacultyCard({ name, role, office, extension, email, photo, profile }) {
  const [showPhoto, setShowPhoto] = useState(Boolean(photo))
  const initials = name.replace(/^Dr\. /, '').split(' ').map(word => word[0]).slice(0, 2).join('')

  return (
    <article className="faculty-card">
      <div className="portrait" aria-hidden="true">
        {showPhoto
          ? <img src={photo} alt="" onError={() => setShowPhoto(false)} />
          : <span>{initials}</span>}
      </div>
      <div className="card-details">
        <h2><a href={profile}>{name}</a></h2>
        <p className="role">{role}</p>
        <ul className="contact">
          <li>Office {office}</li>
          <li><a href={`tel:+924299231581;ext=${extension}`}>Ext. {extension}</a></li>
          <li><a href={`mailto:${email}`}>{email}</a></li>
        </ul>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="shell">
          <p className="college">Forman Christian College</p>
          <a className="greeting-link" href="./greeting.html">Task 1 greeting <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <main className="shell">
        <div className="directory-heading">
          <h1>Computer Science Faculty</h1>
        </div>
        <div className="faculty-grid">
          {faculty.map(person => <FacultyCard key={person.profile} {...person} />)}
        </div>
      </main>
      <footer className="shell site-footer">
        <a href="https://www.fccollege.edu.pk/department-of-computer-science/">FCCU Department of Computer Science</a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
