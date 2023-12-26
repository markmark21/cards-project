import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/'} variant={'primary'}>
        1
      </Button>
      <Button variant={'secondary'}>1</Button>
    </div>
  )
}
