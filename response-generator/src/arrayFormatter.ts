const arrayFormatter = (arrayInput: any[], requiredFields: string[]) => {
  if (arrayInput.length < 1) {
    return [];
  }

  const formatterArray = [...arrayInput].map((item) => {
    let obj: any = {};
    for (let i = 0; i < requiredFields.length; i++) {
      if (item[requiredFields[i]]) {
        obj[requiredFields[i]] = item[requiredFields[i]];
      }
    }
    return obj;
  });

  return formatterArray;
};

export default arrayFormatter;
