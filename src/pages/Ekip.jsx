import React, { useState } from 'react'
import { ekip } from '../mock.js'

const durumRenk = { Ofiste: 'green', Uzaktan: 'blue', Nöbette: 'violet', İzinli: 'amber' }

export default function Ekip() {
  const [q, setQ] = useState('')
  const [birim, setBirim] = useState('Tümü')

  const birimler = ['Tümü', ...new Set(ekip.map((e) => e.birim))]
  const liste = ekip.filter(
    (e) =>
      (birim === 'Tümü' || e.birim === birim) &&
      (e.ad.toLowerCase().includes(q.toLowerCase()) || e.rol.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <>
      <div className="page-head">
        <h2>Ekip Rehberi</h2>
        <p>{ekip.length} kayıt · dahili telefon ve anlık durum bilgisi</p>
      </div>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="row" style={{ flexWrap: 'wrap' }}>
          <input
            className="search"
            style={{ width: 240 }}
            placeholder="İsim veya ünvan ara…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div className="seg" style={{ flexWrap: 'wrap' }}>
            {birimler.map((b) => (
              <button key={b} className={birim === b ? 'on' : ''} onClick={() => setBirim(b)}>
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        {liste.length === 0 ? (
          <div className="empty">Eşleşen kayıt bulunamadı.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Kişi</th>
                <th>Birim</th>
                <th>Durum</th>
                <th>Dahili</th>
              </tr>
            </thead>
            <tbody>
              {liste.map((e) => (
                <tr key={e.ad}>
                  <td>
                    <div className="row">
                      <div className="avatar">{e.avatar}</div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{e.ad}</div>
                        <div className="stat-hint">{e.rol}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: 'var(--ink-dim)' }}>{e.birim}</td>
                  <td><span className={`pill ${durumRenk[e.durum]}`}>{e.durum}</span></td>
                  <td className="mono">#{e.tel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}
