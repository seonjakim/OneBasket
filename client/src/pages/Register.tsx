import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Divider, Box, TextArea } from 'gestalt';
import emailjs from 'emailjs-com';
import DropdownGroup from './components/DropdownGroup';
import {
  identityItems,
  durationItems,
  genderItems,
  toKorean,
} from '../data/list';

interface Person {
  goal: {
    reason: string;
    plan: string;
  };
  detail: {
    name: string;
    birthday: string;
    email: string;
    phoneNumber: string;
    address: string;
  };
}

const Register = () => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  const history = useHistory();

  const [aidType, setAidType] = useState({
    identity: null,
    duration: null,
    gender: null,
  });
  const [goal, setGoal] = useState<Person['goal']>({
    reason: '',
    plan: '',
  });
  const [personalInfo, setPersonalInfo] = useState<Person['detail']>({
    name: '',
    birthday: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const onGoalChangeEvent = (e) => {
    const { event, value } = e;
    setGoal({
      ...goal,
      [event.target.id]: value,
    });
  };
  const onPersonalInfoChangeEvent = (e) => {
    const { event, value } = e;
    setPersonalInfo({
      ...personalInfo,
      [event.target.id]: value,
    });
  };

  /** send info to email and server */
  const submit = async () => {
    /** validation */
    for (const key in aidType) {
      if (aidType[key] === null) {
        alert(`${toKorean[key]}을 선택해주세요.`);
        return;
      }
    }
    for (const key in personalInfo) {
      if (!personalInfo[key].length) {
        alert(`${toKorean[key]}를 작성해주세요.`);
        return;
      }
      if (!pattern.test(personalInfo.email)) {
        alert(`올바른 이메일 주소를 입력해주세요.`);
        return;
      }
    }
    let applicant = '장바구니가 필요한 분';
    if (aidType.identity.value === 'GodChild') {
      applicant = '장바구니를 지원해주실 분';
      for (const key in goal) {
        if (!goal[key].length) {
          alert(`${toKorean[key]}를 작성해주세요.`);
          return;
        }
      }
    }

    const personalDetails = {
      type: aidType.identity.value,
      duration: aidType.duration.value,
      gender: aidType.gender.value,
      ...goal,
      ...personalInfo,
    };

    // emailjs
    //   .send(
    //     process.env.REACT_APP_SERVICE_ID,
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     personalDetails,
    //     process.env.REACT_APP_USER_ID,
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     },
    //   );

    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(personalDetails),
    };
    const response = await fetch('/api/', settings);
    if (!response.ok) {
      return new Error('personal data fail to send to server');
    }
    await alert(
      `성공적으로 등록되었습니다. 주변에 ${applicant}이 계시면 이메일로 알려드리겠습니다.`,
    );
    await history.push('/');
  };

  const infoList = [
    {
      type: 'dropdown',
      text: '지원기간',
      items: durationItems,
      selected: aidType.duration,
      onSelect: ({ item }) =>
        setAidType({
          ...aidType,
          duration: item,
        }),
    },
    {
      type: 'textfield',
      label: '이름',
      id: 'name',
      value: personalInfo.name,
      onChange: onPersonalInfoChangeEvent,
    },
    {
      type: 'dropdown',
      text: '성별',
      items: genderItems,
      selected: aidType.gender,
      onSelect: ({ item }) =>
        setAidType({
          ...aidType,
          gender: item,
        }),
    },
    {
      type: 'textfield',
      label: '생년월일',
      id: 'birthday',
      placeholder: 'YYYYMMDD형식으로 입력해주세요.',
      value: personalInfo.birthday,
      onChange: onPersonalInfoChangeEvent,
    },
    {
      type: 'textfield',
      label: '이메일',
      id: `email`,
      errorMessage:
        personalInfo.email.length && pattern.test(personalInfo.email) === false
          ? '올바른 이메일 주소를 입력해주세요.'
          : null,
      value: personalInfo.email,
      onChange: onPersonalInfoChangeEvent,
    },
    {
      type: 'textfield',
      label: '전화번호',
      id: `phoneNumber`,
      value: personalInfo.phoneNumber,
      onChange: onPersonalInfoChangeEvent,
    },
    {
      type: 'textfield',
      label: '주소',
      id: 'address',
      value: personalInfo.address,
      onChange: onPersonalInfoChangeEvent,
    },
  ];

  const personalInfoField = infoList.map((el, idx) => (
    <Box key={idx} padding={2}>
      {el.type === 'textfield' ? (
        <TextField
          label={el.label}
          value={el.value}
          placeholder={el.placeholder}
          onChange={el.onChange}
          id={el.id}
          errorMessage={el.errorMessage}
        />
      ) : (
        <DropdownGroup
          text={el.text}
          items={el.items}
          selected={el.selected}
          onSelect={el.onSelect}
        />
      )}
    </Box>
  ));

  return (
    <div className="register-container">
      <h1>등록 페이지</h1>
      <h5>모든 항목은 필수 작성 항목입니다.</h5>
      <DropdownGroup
        items={identityItems}
        text="저는"
        selected={aidType.identity}
        onSelect={({ item }) =>
          setAidType({
            ...aidType,
            identity: item,
          })
        }
      />
      {aidType.identity !== null && aidType.identity.value === 'GodChild' && (
        <>
          <h3>계획</h3>
          <h5>
            장바구니를 받는 동안 앞으로 나아가기 위한 나만의 계획을
            공유해주세요.
          </h5>
          <Box padding={2}>
            <TextArea
              id="reason"
              value={goal.reason}
              onChange={onGoalChangeEvent}
              label="지원이 필요한 이유"
            />
          </Box>
          <Box padding={2}>
            <TextArea
              id="plan"
              value={goal.plan}
              onChange={onGoalChangeEvent}
              label="지원 기간 동안의 계획"
            />
          </Box>
          <Divider />
        </>
      )}
      <h3>개인정보</h3>
      {personalInfoField}
      <Box padding={2} marginBottom={10}>
        <Button onClick={() => submit()} color="blue" text="등록하기" />
      </Box>
    </div>
  );
};

export default Register;
