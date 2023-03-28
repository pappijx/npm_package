const arrayFormatter = (arrayInput: any[]) => {
  if (arrayInput.length < 1) {
    return [];
  }

  return arrayInput.length;
};

export default arrayFormatter;
