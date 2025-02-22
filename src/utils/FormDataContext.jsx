import { useState, useContext, createContext } from 'react';
import { removeCommas } from './utils';

const FormDataProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFormData() {
  return useContext(FormDataProvider);
}

// eslint-disable-next-line react/prop-types
export default function FormDataContext({ children }) {
  const [loanDetails, setLoanDetails] = useState({
    totalAmount: '',
    yearTerm: '',
    interestRate: '',
  });

  const [display, setDisplay] = useState({
    monthlyRepayments: null,
    totalRepayments: null,
  });

  const [errors, setError] = useState({
    totalAmountError: false,
    yearTermError: false,
    interestRateError: false,
    radioValueError: false,
  });

  const [radioValue, setRadioValue] = useState('');

  const [hasResult, setHasResult] = useState(false);

  const [onFocus, setOnFocus] = useState('');

  const handleFocus = (e) => {
    setOnFocus(e.target.name);
  };

  const handleBlur = () => {
    setOnFocus(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const cleanValue = removeCommas(value);

    if (!isNaN(cleanValue)) {
      setLoanDetails({
        ...loanDetails,
        [name]: cleanValue,
      });
    }
  };

  const handleRadioInputChange = (e) => {
    setRadioValue(e.target.value);
  };

  const validateInputs = () => {
    const { totalAmount, yearTerm, interestRate } = loanDetails;

    const newError = {
      totalAmountError: !totalAmount,
      yearTermError: !yearTerm,
      interestRateError: !interestRate,
      radioValueError: !radioValue,
    };

    setError(newError);

    return !Object.values(newError).some((error) => error);
  };

  const updateDisplay = () => {
    if (!validateInputs()) return;

    if (radioValue === 'interest') return;

    const { totalAmount, yearTerm, interestRate } = loanDetails;

    const amount = parseFloat(totalAmount);
    const years = parseFloat(yearTerm);
    const rate = parseFloat(interestRate) / 100;

    const months = years * 12;
    const monthlyRate = rate / 12;

    const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = amount * (numerator / denominator);
    const totalRepayment = monthlyPayment * months;

    setDisplay({
      monthlyRepayments: monthlyPayment.toFixed(2),
      totalRepayments: totalRepayment.toFixed(2),
    });

    setHasResult(true);
  };

  const clearAll = () => {
    setLoanDetails({
      totalAmount: '',
      yearTerm: '',
      interestRate: '',
    });
    setHasResult(false);
    setRadioValue('');
  };

  const forms = {
    loanDetails,
    display,
    errors,
    hasResult,
    radioValue,
    onFocus,
    handleInputChange,
    handleRadioInputChange,
    updateDisplay,
    clearAll,
    handleFocus,
    handleBlur,
  };

  return (
    <>
      <FormDataProvider.Provider value={forms}>
        {children}
      </FormDataProvider.Provider>
    </>
  );
}
