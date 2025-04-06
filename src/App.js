import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import { COLORS, PATHS } from './util/Constant';
import DashboardPage from './page/DashboardPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <div className="app" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      backgroundColor: COLORS.BACKGROUND
    }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={PATHS.LOGIN} element={<LoginPage />} />
            <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
            <Route 
              path={PATHS.DASHBOARD + PATHS.WILD_CARD} 
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
