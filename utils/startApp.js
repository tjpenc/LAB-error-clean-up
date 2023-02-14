/* eslint-disable import/named */
import { htmlStructure, header } from '../components/introStructure';
import startSortingBtn from '../components/startSortingButton';
import events from './events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
