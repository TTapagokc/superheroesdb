import './App.css';
import Header from './components/Header';
import { Route } from "react-router-dom";
import ModelProfileContainer from './components/ModelProfileContainer';
import ModelsPageContainer from './components/ModelsPageContainer';
import CreatePage from './components/Create';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <div className='app-wrapper-content'>
        <Route path='/modelsinfo/:modelId?'
          render={() => <ModelProfileContainer />} />
        <Route path='/models'
          render={() => <ModelsPageContainer />} />
        <Route path='/create'
          render={() => <CreatePage />} />

      </div>
    </div>

  );
}

export default App;
