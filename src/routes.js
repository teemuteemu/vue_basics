import Index from './components/Index';
import Sync from './components/Sync';
import Async from './components/Async';

export default {
  routes: [
    {
      path: '/',
      label: 'Index',
      component: Index
    },
    {
      path: '/sync',
      label: 'Store - Sync',
      component: Sync
    },
    {
      path: '/async',
      label: 'Store - Async',
      component: Async
    }
  ]
};
