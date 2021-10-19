// if-else
const checkGrade = (course) => {
  if (course.toLowerCase() === 'calculus') {
    return 'B';
  } else if (course.toLowerCase() === 'physics') {
    return 'D+';
  } else if (course.toLowerCase() === 'exp eng') {
    return 'A';
  } else {
    return 'Invalid course name';
  }
};

// switch-case
const checkGrade2 = (course) => {
  switch (course.toLowerCase()) {
    case 'calculus':
      return 'B';
    case 'physics':
      return 'D+';
    case 'exp eng':
      return 'A';
    default:
      return 'Invalid course name';
  }
};

// object literals
const checkGrade3 = (course) => {
  const condition = {
    calculus: 'B',
    physics: 'D+',
    'exp eng': 'A',
  };
  return condition[course.toLowerCase()] ?? 'Invalid course name';
};

// object literals with functions
const calculate = (num1, num2, operator) => {
  const actions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
  };
  return actions[operator]?.(num1, num2) ?? 'Invalid input';
};
