import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { ReposProvider } from './context';

function App() {
  return (
    <Router>
      <ReposProvider>
        <Layout />
      </ReposProvider>
    </Router>
  );
}

export default App;
