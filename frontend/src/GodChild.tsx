import React from 'react';
import { Box, Button, CompositeZIndex, FixedZIndex, Flex, Layer, Modal, Text, TextField, Dropdown } from "gestalt";


const GodChild = () => {
  const [value, setValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(undefined)
  const anchorRef = React.useRef(null)
  const onSelect = ({item}:any) => setSelected(item)

  return (
    <div style={{width:'40vw', margin:'auto'}}>
        <TextField label='Identity' value={value} onChange={({value}) => setValue(value)} id='identity' />
        <TextField label='이름' value={value} onChange={({value}) => setValue(value)} id='name' />
        <TextField label='주소' value={value} onChange={({value}) => setValue(value)} id='address' />
        <TextField label='이메일' value={value} onChange={({value}) => setValue(value)} id='email' />
        <TextField label='기간' value={value} onChange={({value}) => setValue(value)} id='duration' />
          {/* <Flex>
            <Button accessibilityControls='duration-dropdown' ref={anchorRef} accessibilityExpanded={open} text='기간' iconEnd='arrow-down' selected={open} size='md' onClick={() => setOpen(prevVal => !prevVal)} />
        {open && (
          <Dropdown anchor={anchorRef.current} id='duration-dropdown' onDismiss={() => setOpen(false)}>
            <Dropdown.Item onSelect={onSelect} option={{value:'3m', label:'3개월'}} selected={selected} />
            <Dropdown.Item onSelect={onSelect} option={{value:'6m', label:'6개월'}} selected={selected} />
            <Dropdown.Item onSelect={onSelect} option={{value:'9m', label:'9개월'}} selected={selected} />
            <Dropdown.Item onSelect={onSelect} option={{value:'12m', label:'12개월'}} selected={selected} />
          </Dropdown>
        )}
          </Flex> */}
        <TextField label='본인인증' value={value} onChange={({value}) => setValue(value)} id='identification' />
          <Button color='red' text='hello' />
    </div>
  );
};

export default GodChild;