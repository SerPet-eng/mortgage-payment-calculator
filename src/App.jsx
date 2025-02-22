import Main from './components/Main';
import FormDataContext from './utils/FormDataContext';

function App() {
  return (
    <>
      <FormDataContext>
        <Main />
      </FormDataContext>
    </>
  );
}

export default App;
