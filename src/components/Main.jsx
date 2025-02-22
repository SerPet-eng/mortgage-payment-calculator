import { useFormData } from '../utils/FormDataContext';
import Form from './Form';
import Result from './Result';

export default function Main() {
  const { error } = useFormData();

  return (
    <>
      <div className="app">
        <Form />
        <Result />
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}
