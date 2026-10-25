import React, { useState } from 'react'
import Login from './Login.jsx'
import Panel from './pages/Panel.jsx'
import HavaDurumu from './pages/HavaDurumu.jsx'
import Yemek from './pages/Yemek.jsx'
import Ekip from './pages/Ekip.jsx'
import Gorevler from './pages/Gorevler.jsx'
import { user } from './mock.js'

const sekmeler = [
  { id: 'panel', ad: 'Panel', ikon: '◳', C: Panel },
  { id: 'hava', ad: 'Hava Durumu', ikon: '⛅', C: HavaDurumu },
  { id: 'yemek', ad: 'Yemek Menüsü', ikon: '🍽️', C: Yemek },
  { id: 'ekip', ad: 'Ekip', ikon: '👥', C: Ekip },
  { id: 'gorevler', ad: 'Görevler', ikon: '✓', C: Gorevler },
]

export default function App() {
  const [girdi, setGirdi] = useState(false)
  const [aktif, setAktif] = useState('panel')

  if (!girdi) return <Login onLogin={() => setGirdi(true)} />

  const Sayfa = sekmeler.find((s) => s.id === aktif).C

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">Z</div>
          <div>
            <div className="brand-name">Zeplin Holding</div>
            <div className="brand-sub">İç Portal v2.4</div>
          </div>
        </div>

        <div className="spacer" />

        <input className="search" placeholder="Portalda ara…" />

        <div className="who">
          <div className="avatar">{user.initials}</div>
          <div>
            <div className="who-name">{user.name}</div>
            <div className="who-role">{user.title} · {user.unit}</div>
          </div>
        </div>

        <button className="logout" onClick={() => { setGirdi(false); setAktif('panel') }}>
          Çıkış
        </button>
      </header>

      <nav className="tabs">
        {sekmeler.map((s) => (
          <button
            key={s.id}
            className={`tab${aktif === s.id ? ' active' : ''}`}
            onClick={() => setAktif(s.id)}
          >
            <span>{s.ikon}</span> {s.ad}
          </button>
        ))}
      </nav>

      <main>
        <Sayfa />
      </main>

      <footer>
        Zeplin Holding A.Ş. · Bu portal tamamen kurgusal demo verisi kullanır · © 2026
      </footer>
    </div>
  )
}
