import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'

import s from './App.module.scss'

export function App() {
  return (
    <div>
      <Header />
      <div className={s.layout}>
        <Card />
      </div>
    </div>
  )
}
