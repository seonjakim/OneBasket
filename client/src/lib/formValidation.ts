export const emptyValue = (obj: any) => {
  return Object.keys(obj).filter((key) => obj[key] === null || obj[key] === '');
};

export const isMessagePopUp = (arr: any, callback: (key) => void) => {
  if (arr.length) {
    callback(arr[0]);
    return true;
  }
  return false;
};

export const fetchData = async (url: string, options?: any) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    alert(
      '죄송합니다. 서버에 문제가 있는 것 같아요. 잠시 후 다시 시도해주세요.',
    );
    throw new Error(`An error has occured: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
