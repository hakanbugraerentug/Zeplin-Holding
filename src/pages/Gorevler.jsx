import React, { useState } from 'react'
import { gorevler as baslangic } from '../mock.js'

const durumRenk = {
  'Devam Ediyor': 'blue',
  'İncelemede': 'violet',
  'Beklemede': 'amber',
  'Tamamlandı': 'green',
}
const oncelikRenk = { Yüksek: 'red', Orta: 'amber', Düşük: 'gray' }
const durumlar = ['Tümü', 'Devam Ediyor', 'İncelemede', 'Beklemede', 'Tamamlandı']

export default function Gorevler() {
  const [liste, setListe] = useState(baslangic)
  const [filtre, setFiltre] = useState('Tümü')

  const gorunen = filtre === 'Tümü' ? liste : liste.filter((g) => g.durum === filtre)
  const tamam = liste.filter((g) => g.durum === 'Tamamlandı').length
  const yuzde = Math.round((tamam / liste.length) * 100)

  function tamamla(id) {
    setListe((l) =>
      l.map((g) =>
        g.id === id
          ? { ...g, durum: g.durum === 'Tamamlandı' ? 'Devam Ediyor' : 'Tamamlandı' }
          : g
      )
    )
  }

  return (
    <>
      <div className="page-head">
        <h2>Görevler</h2>
        <p>Sprint 42 · {liste.length} kayıt · {tamam} tamamlandı</p>
      </div>

      <div className="grid g3" style={{ marginBottom: 14 }}>
        <div className="card">
          <div className="stat-label">Sprint ilerlemesi</div>
          <div className="stat-value">%{yuzde}</div>
          <div className="bar" style={{ marginTop: 10 }}><i style={{ width: `${yuzde}%` }} /></div>
        </div>
        <div className="card">
          <div className="stat-label">Yüksek öncelikli</div>
          <div className="stat-value">{liste.filter((g) => g.oncelik === 'Yüksek' && g.durum !== 'Tamamlandı').length}</div>
          <div className="stat-hint" style={{ marginTop: 6 }}>açık kayıt</div>
        </div>
        <div className="card">
          <div className="stat-label">Ortalama kapanış</div>
          <div className="stat-value">4,2 gün</div>
          <div className="stat-foot">
            <span className="delta down">▼ -0,8</span>
            <span className="stat-hint">son sprint</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="between" style={{ marginBottom: 14 }}>
          <p className="card-title" style={{ marginBottom: 0 }}>Kayıt listesi</p>
          <div className="seg" style={{ flexWrap: 'wrap' }}>
            {durumlar.map((d) => (
              <button key={d} className={filtre === d ? 'on' : ''} onClick={() => setFiltre(d)}>
                {d}
              </button>
            ))}
          </div>
        </div>

        {gorunen.length === 0 ? (
          <div className="empty">Bu durumda kayıt yok.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Kod</th>
                <th>Başlık</th>
                <th>Sahip</th>
                <th>Öncelik</th>
                <th>Durum</th>
                <th>Bitiş</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {gorunen.map((g) => (
                <tr key={g.id}>
                  <td className="mono">{g.id}</td>
                  <td style={{ textDecoration: g.durum === 'Tamamlandı' ? 'line-through' : 'none', color: g.durum === 'Tamamlandı' ? 'var(--ink-faint)' : 'inherit' }}>
                    {g.baslik}
                  </td>
                  <td><div className="avatar">{g.sahip}</div></td>
                  <td><span className={`pill ${oncelikRenk[g.oncelik]}`}>{g.oncelik}</span></td>
                  <td><span className={`pill ${durumRenk[g.durum]}`}>{g.durum}</span></td>
                  <td style={{ color: 'var(--ink-dim)' }}>{g.bitis}</td>
                  <td>
                    <button className="logout" onClick={() => tamamla(g.id)}>
                      {g.durum === 'Tamamlandı' ? 'Geri al' : 'Bitir'}
                    </button>
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
