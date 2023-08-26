
import './styles/layout.scss';
import Layout from './components/Layout';

import Home from './pages/Home';
function App() {
  return (
    <div className="App">
    <Layout>
       <Home></Home>
    </Layout>
    </div>
  );
}

export default App;
