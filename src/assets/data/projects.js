import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker-1.png';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'GOCI App',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'MonJob',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'eShop App',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Prizen',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'The Queen',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Rafak Holding',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    img: ProjectImg,
  },
];

export default projects;
