import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/types',
    name: 'Types',
    description: 'Find data types.',
  },
  {
    href: '/casting',
    name: 'Casting',
    description: 'Interchange data with casting.',
  },
  {
    href: '/join-split',
    name: 'Join and split',
    description: 'Helpers for joining arrays and splitting strings.',
  },
  {
    href: '/generators',
    name: 'Generators',
    description: 'Generators to create various random data.',
  },
  {
    href: '/colors',
    name: 'Colors',
    description: 'Colors and gradient.',
  },
  {
    href: '/timestamps',
    name: 'Timestamps',
    description: 'Timestamp breakdowns.',
  },
  {
    href: '/printer',
    name: 'Printer',
    description: 'A comprehensive printer object.',
  },
  {
    href: '/style',
    name: 'Style',
    description: 'Customizing the printer object.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-6 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-6">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
