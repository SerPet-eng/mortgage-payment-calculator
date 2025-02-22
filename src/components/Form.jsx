import { useFormData } from '../utils/FormDataContext';
import {
  formatNumberWithCommas,
  minLoan,
  maxLoan,
  minRate,
  maxRate,
  minTerm,
  maxTerm,
} from '../utils/utils';
import IconCalculator from '../../assets/images/icon-calculator.svg';

export default function Form() {
  const {
    errors,
    loanDetails,
    handleInputChange,
    updateDisplay,
    clearAll,
    radioValue,
    handleRadioInputChange,
    handleFocus,
    handleBlur,
    onFocus,
  } = useFormData();

  return (
    <>
      <form className="form">
        <div className="form-hero">
          <p className="form-hero-title">Mortgage Calculator</p>
          <p className="form-hero-clear" onClick={clearAll}>
            Clear All
          </p>
        </div>

        <label className="form-input">
          Mortgage Amount
          <div
            className={
              errors.totalAmountError
                ? 'form-input-icon-error'
                : onFocus === 'totalAmount'
                ? 'form-input-icon-active'
                : 'form-input-icon'
            }
          >
            <input
              className={
                errors.totalAmountError
                  ? 'form-input-style-error'
                  : onFocus === 'totalAmount'
                  ? 'form-input-style-active'
                  : 'form-input-style'
              }
              name="totalAmount"
              value={formatNumberWithCommas(loanDetails.totalAmount)}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              min={minLoan}
              max={maxLoan}
              type="text"
              placeholder={`Min: ${minLoan}, Max: ${maxLoan}`}
            />
          </div>
          <div className={'error-style'}>
            {errors.totalAmountError ? (
              <p className="error-style-text">This field is required</p>
            ) : (
              <p> </p>
            )}
          </div>
        </label>

        <div className="form-group">
          <label className="form-group-input">
            Mortgage Term (Years)
            <div
              className={
                errors.yearTermError
                  ? 'form-group-input-icon-term-error'
                  : onFocus === 'yearTerm'
                  ? 'form-group-input-icon-term-active'
                  : 'form-group-input-icon-term'
              }
            >
              <input
                className={
                  errors.yearTermError
                    ? 'form-group-input-style-term-error'
                    : onFocus === 'yearTerm'
                    ? 'form-group-input-style-term-active'
                    : 'form-group-input-style-term'
                }
                name="yearTerm"
                value={loanDetails.yearTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={minTerm}
                max={maxTerm}
                type="text"
                placeholder={`Min: ${minTerm}, Max: ${maxTerm}`}
              />
            </div>
            <div className="error-style">
              {errors.yearTermError ? (
                <p className="error-style-text">This field is required</p>
              ) : (
                <p> </p>
              )}
            </div>
          </label>
          <label className="form-group-input">
            Interest Rate (%)
            <div
              className={
                errors.interestRateError
                  ? 'form-group-input-icon-rate-error'
                  : onFocus === 'interestRate'
                  ? 'form-group-input-icon-rate-active'
                  : 'form-group-input-icon-rate'
              }
            >
              <input
                className={
                  errors.interestRateError
                    ? 'form-group-input-style-rate-error'
                    : onFocus === 'interestRate'
                    ? 'form-group-input-style-rate-active'
                    : 'form-group-input-style-rate'
                }
                name="interestRate"
                value={loanDetails.interestRate}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={minRate}
                max={maxRate}
                type="text"
                placeholder={`Min: ${minRate}, Max: ${maxRate}`}
              />
            </div>
            <div className="error-style">
              {errors.interestRateError ? (
                <p className="error-style-text">This field is required</p>
              ) : (
                <p> </p>
              )}
            </div>
          </label>
        </div>

        <div className="radio-group">
          <p>Mortgage Type</p>
          <label
            className={
              errors.radioValueError
                ? 'radio-group-style-error'
                : radioValue === 'repayment'
                ? 'radio-group-style-active'
                : 'radio-group-style'
            }
          >
            <input
              value="repayment"
              name="mortgage-type"
              type="radio"
              checked={radioValue === 'repayment'}
              onChange={handleRadioInputChange}
            />
            <span>Repayment</span>
          </label>
          <label
            className={
              errors.radioValueError
                ? 'radio-group-style-error'
                : radioValue === 'interest'
                ? 'radio-group-style-active'
                : 'radio-group-style'
            }
          >
            <input
              className="radio"
              value="interest"
              name="mortgage-type"
              type="radio"
              checked={radioValue === 'interest'}
              onChange={handleRadioInputChange}
            />
            <span>Interest Only</span>
          </label>
          <div className="error-style">
            {errors.radioValueError ? (
              <p className="error-style-text">This field is required</p>
            ) : (
              <p> </p>
            )}
          </div>
        </div>

        <button className="form-btn" type="button" onClick={updateDisplay}>
          <img src={IconCalculator} alt="Icon of Calculator" />
          Calculate Payments
        </button>
      </form>
    </>
  );
}
