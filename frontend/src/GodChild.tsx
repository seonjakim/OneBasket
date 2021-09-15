import React from 'react';
import { Button, TextField} from "gestalt";


const GodChild = () => {
  const [identity, setIdentity] = React.useState('')
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [duration, setDuration] = React.useState('')

  
  const submit = () => {
      const settings = {
        method:'POST',
        headers: {"Content-Type":'application/json; charset=utf-8'},
        body: JSON.stringify({
          identity,
          name,
          address,
          email,
          duration
        })
      }
      console.log(settings)
     fetch('http://localhost:3000/', settings)
  }

  return (
    <div style={{width:'40vw', margin:'auto'}}>
        <TextField label='Identity' value={identity} onChange={({value}) => setIdentity(value)} id='identity' />
        <TextField label='이름' value={name} onChange={({value}) => setName(value)} id='name' />
        <TextField label='주소' value={address} onChange={({value}) => setAddress(value)} id='address' />
        <TextField label='이메일' value={email} onChange={({value}) => setEmail(value)} id='email' />
        <TextField label='기간' value={duration} onChange={({value}) => setDuration(value)} id='duration' />
        {/* <TextField label='본인인증' value={value} onChange={({value}) => setValue(value)} id='identification' /> */}
          <Button onClick={() => submit()} color='blue' text='등록하기' />
    </div>
  );
};

export default GodChild;