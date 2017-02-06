import Index from './components/Index';
import Async from './components/Async';

export default [
  {
    path: '/',
    label: 'Index',
    component: Index
  },
  {
    path: '/foo',
    label: 'Async',
    component: Async
  }
];
