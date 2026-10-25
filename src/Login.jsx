import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [u, setU] = useState('')
  const [p, setP] = useState('')
  const [err, setErr] = useState('')

  function submit(e) {
    e.preventDefault()
    if (u.trim() === 'admin' && p === 'admin') {
      setErr('')
      onLogin()
    } else {
      setErr('Kullanıcı adı veya şifre hatalı.')
    }
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <div className="brand">
          <div className="brand-mark">Z</div>
          <div>
            <div className="brand-name">Zeplin Holding</div>
            <div className="brand-sub">İç Portal v2.4</div>
          </div>
        </div>

        <h1>Oturum açın</h1>
        <p className="muted">Kurumsal hesabınızla devam edin.</p>

        {err && <div className="error">{err}</div>}

        <div className="field">
          <label htmlFor="u">Kullanıcı adı</label>
          <input id="u" value={u} onChange={(e) => setU(e.target.value)} autoComplete="username" placeholder="admin" />
        </div>

        <div className="field">
          <label htmlFor="p">Şifre</label>
          <input id="p" type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete="current-password" placeholder="••••••" />
        </div>

        <button className="btn" type="submit">Giriş yap</button>

        <div className="hint">
          Demo erişimi — <code>admin</code> / <code>admin</code>
        </div>
      </form>
    </div>
  )
}
