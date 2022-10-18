import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlinedFlag,
} from 'react-icons/md';
import {
  AiOutlineFire,
  AiOutlinePlaySquare,
  AiOutlineClockCircle,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import {
  BsCollectionPlay,
  BsTrophy,
  BsExclamationSquare,
} from 'react-icons/bs';
import { GrHistory } from 'react-icons/gr';
import { RiThumbUpLine } from 'react-icons/ri';
import { SiYoutubegaming } from 'react-icons/si';
import { ImFeed } from 'react-icons/im';

const sidebarCategories = [
  [
    { name: 'Home', icon: <MdHomeFilled /> },
    { name: 'Explore', icon: <MdOutlineExplore /> },
    { name: 'Shorts', icon: <AiOutlineFire /> },
    { name: 'Subscriptions', icon: <BsCollectionPlay /> },
  ],
  [
    { name: 'Library', icon: <MdOutlineVideoLibrary /> },
    { name: 'History', icon: <GrHistory /> },
    { name: 'Your videos', icon: <AiOutlinePlaySquare /> },
    { name: 'Watch later', icon: <AiOutlineClockCircle /> },
    { name: 'Liked videos', icon: <RiThumbUpLine /> },
  ],
  [
    { name: 'Gaming', icon: <SiYoutubegaming /> },
    { name: 'Live', icon: <ImFeed /> },
    { name: 'Sports', icon: <BsTrophy /> },
  ],
  [
    { name: 'Settings', icon: <AiOutlineSetting /> },
    { name: 'Report history', icon: <MdOutlinedFlag /> },
    { name: 'Help', icon: <AiOutlineQuestionCircle /> },
    { name: 'Send feedback', icon: <BsExclamationSquare /> },
  ],
];
