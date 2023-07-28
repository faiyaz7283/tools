import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { BoltIcon } from '@/components/icons/BoltIcon'
import { DocumentIcon } from '@/components/icons/DocumentIcon'
import { CogIcon } from '@/components/icons/CogIcon'
import { CopyIcon } from '@/components/icons/CopyIcon'
import { FolderIcon } from '@/components/icons/FolderIcon'
import { CalendarIcon } from './icons/CalendarIcon'
import { PaperClipIcon } from './icons/PaperClipIcon'

const resources = [
  {
    href: '/type',
    name: 'Type',
    description:
      "Method for inspeting object types.",
    icon: FolderIcon,
  },
  {
    href: '/cast',
    name: 'Cast',
    description:
      "Methods for object casting.",
    icon: FolderIcon,
  },
  {
    href: '/join-splits',
    name: 'Join & split',
    description:
      "Methods for object casting.",
    icon: FolderIcon,
  },
  {
    href: '/string-generators',
    name: 'String generators',
    description:
      "Functions for generating string values.",
    icon: CopyIcon,
  },
  {
    href: '/float-generators',
    name: 'Float generators',
    description:
      "Functions for generating float numbers.",
    icon: CopyIcon,
  },
  {
    href: '/int-generators',
    name: 'Integer generators',
    description:
      "Functions for generating integer numbers.",
    icon: CopyIcon,
  },
  {
    href: '/bool-generators',
    name: 'Boolean generators',
    description:
      "Functions for generating boolean values.",
    icon: CopyIcon,
  },
  {
    href: '/color-generators',
    name: 'Color generators',
    description:
      "Functions for generating color values.",
    icon: CopyIcon,
  },
  {
    href: '/unix-timestamp-generators',
    name: 'Unix timestamp generators',
    description:
      "Functions for generating unix timestamps values.",
    icon: CopyIcon,
  },
  {
    href: '/_timestamp',
    name: 'Unix timestamp breakdown',
    description:
      "Methods for breaking down and comparing timestamps.",
    icon: CalendarIcon,
  },
  {
    href: '/color',
    name: 'Color methods',
    description:
      "Color methods",
    icon: PaperClipIcon,
  },
  {
    href: '/gradient',
    name: 'Gradient',
    description:
      "An expansion to the Pinescript's color.from_gradient() method.",
    icon: BoltIcon,
  },
  {
    href: '/styles',
    name: 'Styles',
    description: "All available style objects for printer.",
    icon: CogIcon,
  },
  {
    href: '/_printer',
    name: 'Printer',
    description:
      "The _printer object and all available methods.",
    icon: DocumentIcon,
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
