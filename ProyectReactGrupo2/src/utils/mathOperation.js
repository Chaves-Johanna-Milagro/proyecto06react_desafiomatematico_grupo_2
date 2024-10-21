export const generateMathOperation = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operationType = Math.random() > 0.5 ? 'sumar' : 'restar';

  if (operationType === 'restar' && num1 < num2) {
    return {
      text: `Restar: ${num2} - ${num1}`,
      result: num2 - num1,
    };
  } else if (operationType === 'restar') {
    return {
      text: `Restar: ${num1} - ${num2}`,
      result: num1 - num2,
    };
  } else {
    return {
      text: `Sumar: ${num1} + ${num2}`,
      result: num1 + num2,
    };
  }
};
