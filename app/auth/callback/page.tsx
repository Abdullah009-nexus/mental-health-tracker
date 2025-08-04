'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const searchParams = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(() => {
        router.replace('/dashboard')
      })
    } else {
      console.error('No code found in URL')
    }
  }, [searchParams, supabase, router])

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
