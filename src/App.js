import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import CustomRoutes from './pages/Routes';
import CountContextProvider from './context/CountContext';
import AuthContextProvider from './context/AuthContext';
import AuthContext1Provider from './context/AuthContext1';
function App() {
  return (
    <>
    <AuthContext1Provider>
    <AuthContextProvider>

    <CountContextProvider>
    <CustomRoutes/>


    </CountContextProvider>
    </AuthContextProvider>
    </AuthContext1Provider>

    </>
  );
}

export default App;
