import { useState, useEffect } from 'react'
import { supabase } from '../backend/supabaseClient'
import Auth from './Auth'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {session ? <Auth key={session.user.id} session={session} /> : null}
    </div>
  )
}
export default App;