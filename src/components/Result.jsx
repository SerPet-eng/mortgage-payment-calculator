import SuccessDisplay from '../components_result/SuccessDisplay';
import EmptyDisplay from '../components_result/EmptyDisplay';
import { useFormData } from '../utils/FormDataContext';

export default function Result() {
  const { hasResult } = useFormData();

  return (
    <>
      <div className="result">
        {hasResult ? <SuccessDisplay /> : <EmptyDisplay />}
      </div>
    </>
  );
}
