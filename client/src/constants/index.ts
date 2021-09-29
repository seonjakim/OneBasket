export const emailRegex = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
);

export const toKorean = {
  identity: '등록 포지션',
  reason: '지원이 필요한 이유',
  plan: '지원기간동안의 계획',
  duration: '지원기간',
  name: '이름',
  gender: '성별',
  birthday: '생년월일',
  address: '주소',
  email: '이메일',
  phoneNumber: '전화번호',
} as const;

export const identityItems = [
  {
    value: 'GodChild',
    label: '장바구니가 필요해요',
  },
  {
    value: 'GodParent',
    label: '장바구니를 지원하고 싶어요',
  },
];

export const durationItems = [
  {
    value: '3m',
    label: '3개월',
  },
  {
    value: '6m',
    label: '6개월',
  },
  {
    value: '9m',
    label: '9개월',
  },
  {
    value: '12m',
    label: '12개월',
  },
];

export const genderItems = [
  {
    value: 'female',
    label: '여성',
  },
  {
    value: 'male',
    label: '남성',
  },
];