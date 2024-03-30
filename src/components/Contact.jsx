import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) {
      return;
    }
    if (form.message.trim().length == 0) {
      alert("Message cannot be empty")
      return;
    }
    setLoading(true)
    let res
    let svcId
    let templId
    let toEmail
    let publicKey

    try {
      res = await fetch('https://env-var-api.onrender.com/env/var', {
        method: 'POST',
        body: JSON.stringify({
          "keys": [
            'EMAILJS_SERVICE_ID',
            'EMAILJS_TEMPLATE_ID',
            'EMAILJS_TO_EMAIL',
            'EMAILJS_PUBLIC_KEY'
          ]
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'application/json'
        }
      })
    } catch (e) {
      alert('Something went wrong')
      console.error(e)
      setLoading(false)
      return;
    }

    let resp = await res.json()

    svcId = resp['EMAILJS_SERVICE_ID']
    templId = resp['EMAILJS_TEMPLATE_ID']
    toEmail = resp['EMAILJS_TO_EMAIL']
    publicKey = resp['EMAILJS_PUBLIC_KEY']
    try {
      res = await emailjs.send(
        svcId,
        templId,
        {
          from_name: form.name,
          to_name: 'Gagan',
          from_email: form.email,
          to_email: toEmail,
          message: form.message
        },
        publicKey
      )
      alert('Thank you, I will get back to you asap!')
    } catch (e) {
      alert('Something went wrong')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap[10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Name'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              required={true}
              pattern=".*\w+,*"
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              required={true}
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')