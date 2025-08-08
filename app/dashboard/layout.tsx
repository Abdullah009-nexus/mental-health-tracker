'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { User } from '@supabase/auth-helpers-nextjs'
import DashboardNavbar from '@/components/ui/Navbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser(session.user)
      }
    }
    getUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
      } else {
        setUser(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase.auth])

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <DashboardNavbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
