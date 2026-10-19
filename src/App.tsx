import { Assistant } from './sections/Assistant'
import { Automation } from './sections/Automation'
import { FaqCta } from './sections/FaqCta'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Insights } from './sections/Insights'
import { Integrations } from './sections/Integrations'
import { Pipeline } from './sections/Pipeline'
import { Solutions } from './sections/Solutions'
import { Stories } from './sections/Stories'
import { TrustBar } from './sections/TrustBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Automation />
        <Pipeline />
        <Assistant />
        <Integrations />
        <Solutions />
        <Insights />
        <Stories />
        <FaqCta />
      </main>
      <Footer />
    </>
  )
}
