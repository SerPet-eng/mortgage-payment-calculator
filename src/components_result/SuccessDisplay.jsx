import { formatNumberWithCommas } from '../utils/utils';
import { useFormData } from '../utils/FormDataContext';

export default function SuccessDisplay() {
  const { display } = useFormData();

  return (
    <>
      <div className="success-display">
        <div className="success-display-group">
          <p className="success-display-group-title">Your results</p>
          <p className="success-display-group-text">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>

        <div className="border-top"></div>
        <div className="success-display-group-result">
          <div className="success-display-group-result-repayments">
            <p className="repayment-title">Monthly Repayment</p>
            <p className="repayment-hero">
              ${formatNumberWithCommas(display.monthlyRepayments)}
            </p>
          </div>

          <div className="horizontal-line" />

          <div className="success-display-group-result-total">
            <p className="total-title">Total you&apos;ll repay over the term</p>
            <p className="total-hero">
              ${formatNumberWithCommas(display.totalRepayments)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
