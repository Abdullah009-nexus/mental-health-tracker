'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// ⬇️ This is the key to fix the build error
export const dynamic = 'force-dynamic'

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
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg"> Signing you in... </p>
        <p className="text-sm text-gray-400 mt-2">Please wait while we authenticate you</p>
      </div>
    </div>
  )
}
