import React, { useState } from 'react'

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  const [firstName, setFirstName] = useState('')
  const [instagram, setInstagram] = useState('')
  const [allfieldsdiv, setAllfieldsdiv] = useState(false)

  let input
  const submit = () => {
    if(firstName === ''  || instagram === '' || input.value === '' ){
        setAllfieldsdiv(true)
    }else{
        setAllfieldsdiv(false)
    input &&
    input.value.indexOf('@') > -1 &&
    onSubmitted({
      EMAIL: input.value,
      MERGE1: firstName,
      MERGE6: instagram
    })
    }
}
  return (
    <div className={className} style={style}>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {allfieldsdiv && (
        <div style={{color:'red'}}>All fields required</div>
      )}
      <div className='form-group'>
      <input
        ref={node => (input = node)}
        type='email'
        placeholder='Your Email'
      />
      </div>
      <div className='form-group'>
        <input
          onChange={e => setFirstName(e.target.value)}
          type='text'
          placeholder='Your Name'
          required
        />
      </div>
      <div className='form-group'>
        <input
          onChange={e => setInstagram(e.target.value)}
          type='text'
          placeholder='Your Instagram'
          required
        />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default SimpleForm
