import { Button } from '@/components/ui/button'

import AppLayout from '../component/layout/AppLayout'

export default function Home() {
  return (
    <AppLayout>
      <div>
        <Button
          variant="test"
          className="mobile:bg-prime-blue tablet:bg-sky-500 laptop:bg-red-400 desktop:bg-emerald-600"
        >
          Click me
        </Button>
      </div>
    </AppLayout>
  )
}
