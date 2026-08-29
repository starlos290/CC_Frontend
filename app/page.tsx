import Hero from '@/components/hero'
import LogoBar from '@/components/logo-bar'
import Stats from '@/components/stats'
import About from '@/components/about'
import Services from '@/components/services'
import CaseStudies from '@/components/case-studies'
import Process from '@/components/process'
import Timeline from '@/components/timeline'
import Faq from '@/components/faq'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Stats />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Timeline />
      <Faq />
      <Cta />
    </>
  )
}
