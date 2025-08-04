'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        console.log('Processing auth callback...')
        
        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)

        if (error) {
          console.error('Login error:', error.message)
          router.replace('/login?error=' + encodeURIComponent(error.message))
        } else if (data?.user) {
          console.log('User authenticated successfully:', data.user.email)
          
          // Wait a moment for the session to be fully established
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Use window.location.href for a hard redirect to ensure auth state is proper
          window.location.href = '/dashboard'
        } else {
          console.log('No user data received')
          router.replace('/login')
        }
      } catch (err) {
        console.error('Unexpected error during auth callback:', err)
        router.replace('/login')
      }
    }

    handleRedirect()
  }, [router, supabase.auth])

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