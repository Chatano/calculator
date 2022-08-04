import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { Global } from './styles/global';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Global />
    <Home />
  </>
);
