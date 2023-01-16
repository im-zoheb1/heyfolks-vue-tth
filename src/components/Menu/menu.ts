import { 
  Square2StackIcon, 
  UserIcon, 
  InboxIcon, 
  BellIcon, 
  BoltIcon,
} from '@heroicons/vue/24/solid'
import type { FunctionalComponent } from 'vue';

interface MenuItem {
  link: string;
  label: string;
  icon: FunctionalComponent
}

const menu: MenuItem[] = [
  { link: '/', label: 'Feed', icon: Square2StackIcon },
  { link: '/', label: 'Friends', icon: UserIcon },
  { link: '/', label: 'Messages', icon: InboxIcon },
  { link: '/', label: 'Notifications', icon: BellIcon },
  { link: '/', label: 'Profile', icon: BoltIcon },
]

export default menu 
