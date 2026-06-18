'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { getSession, onAuthStateChange, signOut } from '@/services/auth'
import { IconGrid, IconUsers, IconUser, IconChat, IconEdit, IconLogout } from '@/components/ui/icons'

const navItems = [
  { href: '/admin/dashboard',     label: 'Dashboard',  icon: <IconGrid /> },
  { href: '/admin/registrations', label: 'Pendaftar',  icon: <IconUsers /> },
  { href: '/admin/tutors',        label: 'Tutor',      icon: <IconUser /> },
  { href: '/admin/testimonials',  label: 'Testimoni',  icon: <IconChat /> },
  { href: '/admin/content',       label: 'Konten',     icon: <IconEdit /> },
]

export default function AdminLayout({ children }) {
  const router   = useRouter()
  const pathname = usePathname()
  const isLogin  = pathname === '/admin'
  const [user, setUser]     = useState(null)
  const [ready, setReady]   = useState(false)

  useEffect(() => {
    getSession().then(session => {
      if (!session && !isLogin) {
        router.replace('/admin')
      } else {
        setUser(session?.user ?? null)
        setReady(true)
      }
    })

    const subscription = onAuthStateChange((session) => {
      if (!session && !isLogin) router.replace('/admin')
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [pathname, isLogin, router])

  // Login page — bersih tanpa sidebar
  if (isLogin) {
    return (
      <div style={{ minHeight: '100vh', background: '#08152a' }}>
        <meta name="robots" content="noindex,nofollow" />
        {children}
      </div>
    )
  }

  if (!ready) {
    return (
      <div style={{ minHeight: '100vh', background: '#08152a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,.4)', fontSize: '.9rem' }}>Memuat...</span>
      </div>
    )
  }

  async function logout() {
    await signOut()
    router.push('/admin')
  }

  return (
    <>
      <meta name="robots" content="noindex,nofollow" />
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafd', fontFamily: 'var(--font-inter),sans-serif' }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: 228, flexShrink: 0,
        background: '#08152a',
        display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 0, left: 0, bottom: 0,
        zIndex: 50,
        borderRight: '1px solid rgba(255,255,255,.06)',
      }}>

        {/* Logo */}
        <div style={{ padding: '22px 18px 18px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <Link href="/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="9" fill="#1a56c4"/>
              <path d="M17 6L20.5 13.5H27.5L22 18L24.5 26L17 21.5L9.5 26L12 18L6.5 13.5H13.5L17 6Z" fill="#c9920a"/>
            </svg>
            <div>
              <div style={{ fontFamily: 'var(--font-montserrat),sans-serif', fontSize: '.92rem', color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                Trinity <em style={{ color: '#f59e0b', fontStyle: 'italic' }}>Academy</em>
              </div>
              <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.35)', marginTop: 1, letterSpacing: '.04em' }}>Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 3, overflowY: 'auto' }}>
          {navItems.map(({ href, label, icon }) => {
            const active = pathname.startsWith(href)
            return (
              <Link key={href} href={href} style={{
                display: 'flex', alignItems: 'center', gap: 11,
                padding: '10px 14px', borderRadius: 10, textDecoration: 'none',
                background: active ? 'rgba(26,86,196,.3)' : 'transparent',
                border: `1px solid ${active ? 'rgba(26,86,196,.45)' : 'transparent'}`,
                color: active ? 'white' : 'rgba(255,255,255,.5)',
                fontSize: '.87rem', fontWeight: active ? 600 : 400,
                transition: 'all .15s',
              }}>
                <span style={{ flexShrink: 0, opacity: active ? 1 : .65 }}>{icon}</span>
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom: email + logout */}
        <div style={{ padding: '12px 10px 16px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          {user?.email && (
            <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.28)', padding: '0 6px', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {user.email}
            </div>
          )}
          <button onClick={logout} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 9,
            padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(239,68,68,.2)',
            background: 'rgba(239,68,68,.08)', color: 'rgba(239,68,68,.75)',
            fontSize: '.85rem', fontWeight: 600, cursor: 'pointer',
            fontFamily: 'inherit', transition: 'all .15s',
          }}>
            <IconLogout /> Keluar
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div style={{ marginLeft: 228, flex: 1, minHeight: '100vh', background: '#f8fafd' }}>
        {/* Top bar */}
        <div style={{
          height: 56, background: 'white',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex', alignItems: 'center',
          padding: '0 32px',
          position: 'sticky', top: 0, zIndex: 40,
        }}>
          <span style={{ fontSize: '.82rem', color: '#94a3b8' }}>
            {navItems.find(n => pathname.startsWith(n.href))?.label ?? 'Admin'}
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '.8rem', color: '#1a56c4', fontWeight: 600, textDecoration: 'none', padding: '6px 14px', border: '1.5px solid #1a56c4', borderRadius: 50 }}>
              Lihat Website →
            </Link>
          </div>
        </div>

        {/* Page content */}
          <div style={{ padding: 32, maxWidth: 1200, margin: '0 auto' }}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
