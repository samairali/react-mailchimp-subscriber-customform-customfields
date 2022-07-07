import React,{useState} from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import SimpleForm from './SimpleForm'

const url =
  'https://curationmusic.us11.list-manage.com/subscribe/post?u=a0aa8808d58f40b141935518f&amp;id=dfbbb939fe'



// use the render prop and your custom form


const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className='join-community'>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)




export default CustomForm
