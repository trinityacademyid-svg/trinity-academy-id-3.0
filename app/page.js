/*
=== HALAMAN HOME / BERANDA ===
Halaman ini menyusun urutan section di beranda:
1. Hero (section utama dengan maskot)
2. PreviewAbout (Siapa Trinity)
3. Keunggulan
4. PreviewProgram (Paket Basic & Exclusive)
5. PreviewTutor (carousel tutor)
6. Testimoni
7. Footer + Kotak Saran
*/
import Hero from '../components/sections/Hero'
import PreviewAbout from '../components/sections/PreviewAbout'
import Keunggulan from '../components/sections/Keunggulan'
import PreviewProgram from '../components/sections/PreviewProgram'
import PreviewTutor from '../components/sections/PreviewTutor'
import Testimoni from '../components/sections/Testimoni'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal><PreviewAbout /></ScrollReveal>
      <ScrollReveal><Keunggulan /></ScrollReveal>
      <ScrollReveal><PreviewProgram /></ScrollReveal>
      <ScrollReveal><PreviewTutor /></ScrollReveal>
      <ScrollReveal><Testimoni /></ScrollReveal>
    </>
  )
}
