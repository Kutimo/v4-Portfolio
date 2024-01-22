import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='p-5'>
      <div className='flex'>
        <CiLinkedin size={30} />
        <FaGithub size={30} />
      </div>
    </footer>
  )
}
