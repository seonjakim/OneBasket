import React from 'react';
import {useHistory} from 'react-router-dom'
import {Button} from 'gestalt'

const Apply = () => {
 let history = useHistory()

 const setHistory = (endPoint: string) => {
   history.push(endPoint)
 }
  return (
    <div>
      <Button onClick={() => setHistory('/godchild')} color='blue' text="GodChild" />
      <Button onClick={() => setHistory('/godparent')} color='blue' text="GodParent" />
      </div>
  );
};

export default Apply;