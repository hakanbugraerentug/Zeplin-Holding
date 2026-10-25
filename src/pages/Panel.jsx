import React from 'react'
import { stats, sparkline, duyurular, aktivite, gorevler } from '../mock.js'

const etiketRenk = { Teknik: 'blue', İdari: 'amber', Sosyal: 'violet' }

export default function Panel() {
  const max = Math.max(...sparkline)
  const acik = gorevler.filter((g) => g.durum !== 'Tamamlandı')

  return (
    <>
      <div className="page-head">
        <h2>Genel Panel</h2>
        <p>24 Ekim 2026, Cumartesi — son güncelleme 3 dakika önce.</p>
      </div>

      <div className="grid g4" style={{ marginBottom: 14 }}>
        {stats.map((s) => (
          <div className="card" key={s.label}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-foot">
              <span className={`delta ${s.trend}`}>
                {s.trend === 'up' ? '▲' : '▼'} {s.delta}
              </span>
              <span className="stat-hint">{s.hint}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid g-2-1" style={{ marginBottom: 14 }}>
        <div className="card">
          <div className="between">
            <p className="card-title" style={{ marginBottom: 0 }}>Portal oturum sayısı</p>
            <span className="pill blue">son 12 hafta</span>
          </div>
          <div className="spark">
            {sparkline.map((v, i) => (
              <i key={i} style={{ height: `${(v / max) * 100}%` }} title={`${v} oturum`} />
            ))}
          </div>
          <div className="stat-hint" style={{ marginTop: 8 }}>
            Ortalama {Math.round(sparkline.reduce((a, b) => a + b, 0) / sparkline.length)} oturum/hafta
          </div>
        </div>

        <div className="card">
          <p className="card-title">Son hareketler</p>
          <ul className="list">
            {aktivite.map((a, i) => (
              <li key={i}>
                <div style={{ fontSize: 13 }}>
                  <b style={{ fontWeight: 600 }}>{a.kim}</b> {a.ne}
                </div>
                <div className="stat-hint">{a.ne_zaman}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid g2">
        <div className="card">
          <p className="card-title">Duyurular</p>
          <ul className="list">
            {duyurular.map((d) => (
              <li key={d.id}>
                <div className="between" style={{ marginBottom: 3 }}>
                  <b style={{ fontWeight: 600, fontSize: 13 }}>{d.baslik}</b>
                  <span className={`pill ${etiketRenk[d.etiket] || 'gray'}`}>{d.etiket}</span>
                </div>
                <div style={{ color: 'var(--ink-dim)', fontSize: 12.5 }}>{d.ozet}</div>
                <div className="stat-hint" style={{ marginTop: 4 }}>{d.tarih}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <p className="card-title">Yaklaşan görevler ({acik.length})</p>
          <ul className="list">
            {acik.slice(0, 5).map((g) => (
              <li key={g.id}>
                <div className="between">
                  <div>
                    <span className="mono">{g.id}</span>
                    <div style={{ fontSize: 13 }}>{g.baslik}</div>
                  </div>
                  <span className="pill gray" style={{ flex: 'none' }}>{g.bitis}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
