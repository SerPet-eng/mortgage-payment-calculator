export const formatNumberWithCommas = (num) => {
  if (!num) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeCommas = (str) => str.replace(/,/g, '');

export const minLoan = 50000;
export const maxLoan = 2000000;
export const minTerm = 1; // Loan term in years
export const maxTerm = 30;
export const minRate = 1;
export const maxRate = 10;
