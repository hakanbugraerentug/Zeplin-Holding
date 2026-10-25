import React, { useState } from 'react'
import { hava } from '../mock.js'

export default function HavaDurumu() {
  const [gorunum, setGorunum] = useState('saatlik')
  const s = hava.simdi
  const maxD = Math.max(...hava.saatlik.map((h) => h.d))

  return (
    <>
      <div className="page-head">
        <h2>Hava Durumu</h2>
        <p>{hava.sehir} kampüsü — istasyon verisi 10 dakikada bir yenilenir.</p>
      </div>

      <div className="grid g-2-1" style={{ marginBottom: 14 }}>
        <div className="now-card">
          <div className="between" style={{ alignItems: 'flex-start' }}>
            <div>
              <div className="stat-label">{hava.sehir} · şu an</div>
              <div className="row" style={{ gap: 14 }}>
                <div className="now-temp">{s.derece}°</div>
                <div>
                  <div style={{ fontWeight: 600 }}>{s.durum}</div>
                  <div className="stat-hint">Hissedilen {s.hissedilen}°</div>
                </div>
              </div>
            </div>
            <div className="now-icon">{s.ikon}</div>
          </div>

          <div className="metrics">
            <div className="metric"><b>%{s.nem}</b><span>Nem</span></div>
            <div className="metric"><b>{s.ruzgar} km/s</b><span>Rüzgar (KB)</span></div>
            <div className="metric"><b>{s.basinc} hPa</b><span>Basınç</span></div>
            <div className="metric"><b>{s.gorus} km</b><span>Görüş</span></div>
            <div className="metric"><b>{s.uv}</b><span>UV indeksi</span></div>
            <div className="metric"><b>18:42</b><span>Gün batımı</span></div>
          </div>
        </div>

        <div className="card">
          <p className="card-title">Diğer şehirler</p>
          <ul className="list">
            {hava.diger.map((c) => (
              <li key={c.sehir} className="between">
                <span className="row">
                  <span style={{ fontSize: 18 }}>{c.ikon}</span>
                  <span>{c.sehir}</span>
                </span>
                <b>{c.d}°</b>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="between" style={{ marginBottom: 14 }}>
          <p className="card-title" style={{ marginBottom: 0 }}>Tahmin</p>
          <div className="seg">
            <button className={gorunum === 'saatlik' ? 'on' : ''} onClick={() => setGorunum('saatlik')}>Saatlik</button>
            <button className={gorunum === 'haftalik' ? 'on' : ''} onClick={() => setGorunum('haftalik')}>7 Gün</button>
          </div>
        </div>

        {gorunum === 'saatlik' ? (
          <div className="hours">
            {hava.saatlik.map((h) => (
              <div className="hour" key={h.saat}>
                <div className="h">{h.saat}</div>
                <div className="i">{h.ikon}</div>
                <div className="t">{h.d}°</div>
                <div className="bar" style={{ marginTop: 7 }}>
                  <i style={{ width: `${(h.d / maxD) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Gün</th>
                <th></th>
                <th>En yüksek</th>
                <th>En düşük</th>
                <th>Yağış olasılığı</th>
              </tr>
            </thead>
            <tbody>
              {hava.haftalik.map((g) => (
                <tr key={g.gun}>
                  <td style={{ fontWeight: 500 }}>{g.gun}</td>
                  <td style={{ fontSize: 18 }}>{g.ikon}</td>
                  <td><b>{g.max}°</b></td>
                  <td style={{ color: 'var(--ink-dim)' }}>{g.min}°</td>
                  <td>
                    <div className="row">
                      <div className="bar" style={{ width: 90 }}><i style={{ width: `${g.yagis}%` }} /></div>
                      <span className="stat-hint">%{g.yagis}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}
