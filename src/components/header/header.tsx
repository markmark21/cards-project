import { useState } from 'react'

import ava from '@/components/icons/Ellipse 54.svg'
import logo from '@/components/icons/Logo.svg'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'

export const Header = () => {
  const [isLoggedIn] = useState<boolean>(false)

  return (
    <header className={s.header}>
      <img alt={'logo'} src={logo} />
      <div className={s.button}>
        {isLoggedIn ? (
          <img alt={'ava'} src={ava} />
        ) : (
          <Button variant={'primary'}>{'Sign In'}</Button>
        )}
      </div>
    </header>
  )
}
