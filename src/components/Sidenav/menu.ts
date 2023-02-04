import { 
  HomeIcon as HomeIcon,
  UsersIcon as FriendsIcon, 
  InboxIcon as MessagesIcon,
  BellIcon as NotificationIcon, 
  UserIcon as ProfileIcon,
} from '@heroicons/vue/24/solid'
import type { FunctionalComponent } from 'vue';

interface MenuItem {
  link: string;
  label: string;
  icon: FunctionalComponent
}

const menu: MenuItem[] = [
  { link: '/', label: 'Home', icon: HomeIcon },
  { link: '/', label: 'Friends', icon: FriendsIcon },
  { link: '/', label: 'Messages', icon: MessagesIcon },
  { link: '/', label: 'Notifications', icon: NotificationIcon },
  { link: '/', label: 'Profile', icon: ProfileIcon },
]

export default menu 
