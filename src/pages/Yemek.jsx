import React, { useState } from 'react'
import { menu } from '../mock.js'

export default function Yemek() {
  const [vejOnly, setVejOnly] = useState(false)
  const aktifGunler = menu.filter((m) => !m.tatil)
  const ortKalori = Math.round(aktifGunler.reduce((a, b) => a + b.kalori, 0) / aktifGunler.length)

  return (
    <>
      <div className="page-head">
        <h2>Yemek Menüsü</h2>
        <p>27–31 Ekim haftası · Kat 2 yemekhane · servis 12:00–14:00</p>
      </div>

      <div className="grid g3" style={{ marginBottom: 14 }}>
        <div className="card">
          <div className="stat-label">Ortalama kalori</div>
          <div className="stat-value">{ortKalori}</div>
          <div className="stat-hint" style={{ marginTop: 6 }}>öğün başına (kcal)</div>
        </div>
        <div className="card">
          <div className="stat-label">Haftalık rezervasyon</div>
          <div className="stat-value">742</div>
          <div className="stat-foot">
            <span className="delta up">▲ +58</span>
            <span className="stat-hint">geçen haftaya göre</span>
          </div>
        </div>
        <div className="card">
          <div className="between" style={{ height: '100%' }}>
            <div>
              <div className="stat-label">Vejetaryen filtresi</div>
              <div style={{ fontSize: 13, color: 'var(--ink-dim)' }}>
                {vejOnly ? 'Yalnızca vejetaryen seçenekler' : 'Tüm menü gösteriliyor'}
              </div>
            </div>
            <div className="seg">
              <button className={!vejOnly ? 'on' : ''} onClick={() => setVejOnly(false)}>Tümü</button>
              <button className={vejOnly ? 'on' : ''} onClick={() => setVejOnly(true)}>Vejetaryen</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid g3">
        {menu.map((g) => (
          <div className={`card menu-card${g.tatil ? ' tatil' : ''}`} key={g.gun}>
            <div className="between">
              <div>
                <h4>{g.gun}</h4>
                <div className="date">{g.tarih}</div>
              </div>
              {g.tatil ? (
                <span className="pill red">Tatil</span>
              ) : (
                <span className="pill green">{g.kalori} kcal</span>
              )}
            </div>

            {g.tatil ? (
              <div className="empty">🏛️<br />Resmî tatil — servis yok</div>
            ) : vejOnly ? (
              <ul className="menu-list">
                <li>{g.vejetaryen}</li>
              </ul>
            ) : (
              <>
                <ul className="menu-list">
                  {g.yemekler.map((y) => (
                    <li key={y}>{y}</li>
                  ))}
                </ul>
                <div className="veg">🌱 Vejetaryen: {g.vejetaryen}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
