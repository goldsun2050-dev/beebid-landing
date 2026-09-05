import { ImageResponse } from 'next/og'
import { SITE_TAGLINE } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#020617',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(79,70,229,0.55), transparent 45%), radial-gradient(circle at 85% 85%, rgba(245,158,11,0.35), transparent 45%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              width: 76,
              height: 76,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            🐝
          </div>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, color: 'white' }}>BeeBid</div>
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 40, fontWeight: 700, color: 'white', maxWidth: 900 }}>
          {SITE_TAGLINE}
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 24, color: '#94a3b8' }}>beebid.vip</div>
      </div>
    ),
    { ...size },
  )
}
