import './App.css';
import Header from './components/Header';
import ModelsInfoPage from './components/ModelsInfoPage';
import ModelsPage from './components/ModelsPage';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
    
      <div className='app-wrapper-content'>
        <Route path='/modelsinfo'
          render={() => <ModelsInfoPage />} />
        <Route path='/models'
          render={() => <ModelsPage />} />
      </div>
    </div>

  );
}

export default App;
