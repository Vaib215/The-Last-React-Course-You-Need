import { useState } from 'react'
import './App.css'

const Accordion = (props) => {
  const icons = ['https://img.icons8.com/ios/64/ffffff/plus--v1.png', 'https://img.icons8.com/windows/64/ffffff/multiply-2.png']
  return (
    <div className='accordion'>
      <button onClick={props.onClick}><h3>{props.title}</h3><img src={props.show ? icons[1] : icons[0]} alt="" />
      </button>
      <p style={{
        display: props.show ? 'block' : 'none'
      }}>{props.content}</p>
    </div>
  )
}

function App() {
  const [active, setActive] = useState(-1)
  const titles = ['What is Netflix?', 'How much does Netflix cost?', 'Where can I watch?', 'How do I cancel?', 'What can I watch on Netflix?', 'Is Netflix good for kids?']
  const contents = ['Netflix is a streaming service that offers a wide …and new TV shows and movies are added every week!', 'Watch Netflix on your smartphone, tablet, Smart TV…9 to ₹ 649 a month. No extra costs, no contracts.', 'Watch anywhere, anytime. Sign in with your Netflix…ernet connection. Take Netflix with you anywhere.', 'Netflix is flexible. There are no annoying contrac…lation fees – start or stop your account anytime.', 'Netflix has an extensive library of feature films,…ore. Watch as much as you want, anytime you want.', 'The Netflix Kids experience is included in your me…block specific titles you don’t want kids to see.']

  const result = []
  for (let i = 0; i < titles.length; i++) {
    result.push({
      title: titles[i],
      content: contents[i]
    })
  }
  return (
    <>
      <h3>Project 2: Netflix Accordion Component</h3>
      {
        result.map((accordion, index) => {
          return <Accordion title={accordion.title} content={accordion.content} onClick={() => { active === index ? setActive(-1) : setActive(index) }} show={active === index} />
        })
      }
      <code>Made by Vaib for The Last React Course You Need</code>
    </>
  )
}

export default App
