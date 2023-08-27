
import './styles/layout.scss';
import Layout from './components/Layout';
// import Home from './pages/Home';
import ListPage from './pages/ListPage';
function App() {
  return (
    <div className="App">
    <Layout>
      <ListPage></ListPage>
    </Layout>
    </div>
  );
}

export default App;
