import { ImageResponse } from 'next/og'
/* eslint-disable @next/next/no-img-element */

export const size = {
  width: 1200,
  height: 580,
}
export const contentType = 'image/png'


export default async function Image() {

  return new ImageResponse(
    <div style={{ display: 'flex', justifyContent: 'center', background: '#000000', width: '100%', height: '100%' }}>
      <img width={1200} height={580} style={{ objectFit: 'contain' }} src={`${process.env.NEXT_PUBLIC_BASE_URL}/imgs/afordin-sponsor.png`} alt={`Continental`} />
    </div>
    , { ...size })

}
