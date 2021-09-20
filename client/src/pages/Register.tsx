import React from 'react';
import { Button, TextField, Divider, Box, TextArea } from 'gestalt';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../config';
import DropdownGroup from './components/DropdownGroup';
import { dropdownItems, durationItems, genderItems } from '../data/list';

const Register = () => {
  const [identity, setIdentity] = React.useState(null);
  const selectIdentity = ({ item }: any) => setIdentity(item);
  const [gender, setGender] = React.useState(null);
  const [duration, setDuration] = React.useState(null);
  const selectDuration = ({ item }: any) => setDuration(item);
  const [reason, setReason] = React.useState('');
  const [plan, setPlan] = React.useState('');

  const [name, setName] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');

  const toKorean = [
    '등록 포지션',
    '지원이 필요한 이유',
    '지원기간동안의 계획',
    '지원기간',
    '이름',
    '성별',
    '생년월일',
    '주소',
    '이메일',
  ];
  /** send info to email and server */
  const submit = () => {
    /** validation */
    if (identity === null) {
      alert('등록 포지션을 선택해주세요.');
      return;
    } else if (duration === null) {
      alert('지원기간을 선택해주세요.');
      return;
    } else if (gender === null) {
      alert('성별을 선택해주세요.');
      return;
    } else if (birthday.length !== 8) {
      alert('생년월일을 YYYYMMDD형식으로 입력해주세요.');
      return;
    }
    // please add email regex!!
    const form = {
      type: identity.value,
      reason,
      plan,
      duration: duration.value,
      name,
      gender: gender.value,
      birthday,
      address,
      email,
    };
    console.log(form);
    const personalData = Object.values(form);
    for (let i = 0; i < personalData.length; i++) {
      if (personalData[0] === 'GodParent' && i > 2) {
        if (personalData[i].length === 0) {
          alert(`${toKorean[i]}를 작성해주세요.`);
          return;
        }
      } else if (personalData[0] === 'GodChild') {
        if (personalData[i].length === 0) {
          alert(`${toKorean[i]}를 작성해주세요.`);
          return;
        }
      }
    }
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(form),
    };

    // emailjs.send(SERVICE_ID, TEMPLATE_ID, toJson, USER_ID).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   },
    // );

    //   console.log(settings)
    // fetch('http://localhost:3000/', settings);
  };

  const infoList = [
    {
      type: 'textfield',
      label: '이름',
      id: 'name',
      value: name,
      onClick: ({ value }: any) => setName(value),
    },
    {
      type: 'dropdown',
      text: '성별',
      items: genderItems,
      selected: gender,
      onSelect: ({ item }: any) => setGender(item),
    },
    {
      type: 'textfield',
      label: '생년월일',
      id: 'dob',
      value: birthday,
      onClick: ({ value }: any) => setBirthday(value),
    },
    {
      type: 'textfield',
      label: '이메일',
      id: `email`,
      value: email,
      onClick: ({ value }: any) => setEmail(value),
    },
    {
      type: 'textfield',
      label: '전화번호',
      id: `phoneNum`,
      value: phoneNumber,
      onClick: ({ value }: any) => setPhoneNumber(value),
    },
    {
      type: 'textfield',
      label: '주소',
      id: 'address',
      value: address,
      onClick: ({ value }: any) => setAddress(value),
    },
  ];

  const personalInfoField = infoList.map((el, idx) =>
    el.type === 'textfield' ? (
      <Box key={idx} padding={2}>
        <TextField
          label={el.label}
          value={el.value}
          onChange={el.onClick}
          id={el.id}
        />
      </Box>
    ) : (
      <Box key={idx} padding={2}>
        <DropdownGroup
          text={el.text}
          items={el.items}
          selected={el.selected}
          onSelect={el.onSelect}
        />
      </Box>
    ),
  );

  return (
    <div className="register-container">
      <h1>등록 페이지</h1>
      <h5>모든 항목은 필수 작성 항목입니다.</h5>
      <DropdownGroup
        items={dropdownItems}
        text="저는"
        selected={identity}
        onSelect={selectIdentity}
      />
      {identity !== null && identity.value === 'GodChild' && (
        <>
          <h3>계획</h3>
          <h5>
            장바구니를 받는 동안 앞으로 나아가기 위한 나만의 계획을
            공유해주세요.
          </h5>
          <Box padding={2}>
            <TextArea
              id="reason"
              value={reason}
              onChange={({ value }) => setReason(value)}
              label="지원이 필요한 이유"
            />
          </Box>
          <Box padding={2}>
            <TextArea
              id="plan"
              value={plan}
              onChange={({ value }) => setPlan(value)}
              label="지원 기간 동안의 계획"
            />
          </Box>
          <Divider />
        </>
      )}
      <h3>개인정보</h3>
      <Box padding={2}>
        <DropdownGroup
          text="지원기간"
          items={durationItems}
          selected={duration}
          onSelect={selectDuration}
        />
      </Box>
      {personalInfoField}
      <Box padding={2} marginBottom={10}>
        <Button onClick={() => submit()} color="blue" text="등록하기" />
      </Box>
    </div>
  );
};

export default Register;
