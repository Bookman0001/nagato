import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const ua = String(req.ua) || ''
  const isIe = ua.match('msie') || ua.match('trident')
  if (isIe) {
    return new Response('Are you using Internet Explorer? Not Supported!')
  }
  return NextResponse.next()
}
