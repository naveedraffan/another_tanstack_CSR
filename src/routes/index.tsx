import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TanStack CSR Mini</h1>
      <p>Client-side rendered only. No server, no build step beyond Vite.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  )
}
