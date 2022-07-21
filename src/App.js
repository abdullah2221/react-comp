import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import CustomRoutes from './pages/Routes';
import CountContextProvider from './context/CountContext';
import AuthContextProvider from './context/AuthContext';
function App() {
  return (
    <>
    <AuthContextProvider>

    <CountContextProvider>
    <CustomRoutes/>


    </CountContextProvider>
    </AuthContextProvider>

    </>
  );
}

export default App;
