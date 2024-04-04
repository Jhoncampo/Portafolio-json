import Section from '@/components/Section'
import {basics} from "@cv"

const About = () => {
  const {summary} = basics
  return (
    <Section title='About'>
      <p className='text-[#666] text-sm text-wrap m-0'>{summary}</p>
    </Section>
  )
}

export default About