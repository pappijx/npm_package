const generateResponse = (props: any, requiredFields: string[]) => {
  let resultantArray: any = {};
  for (const key in props) {
    if (typeof props[key] !== 'object') {
      if (requiredFields.indexOf(key) !== -1) {
        resultantArray[key] = props[key];
      }
    } else {
      if (Array.isArray(props[key])) {
        resultantArray[key] = props[key];
      } else {
        resultantArray = {
          ...resultantArray,
          ...generateResponse(props[key], requiredFields),
        };
      }
    }
  }
  return resultantArray;
};

export default generateResponse;
