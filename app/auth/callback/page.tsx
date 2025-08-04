'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleRedirect = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href)

      if (error) {
        console.error('Login error:', error.message)
        router.replace('/login')
      } else {
        router.replace('/dashboard')
      }
    }

    handleRedirect()
  }, [router])

  return (
    <div className="flex justify-center items-center h-screen">
      <p>🔐 Signing you in...</p>
    </div>
  )
}
