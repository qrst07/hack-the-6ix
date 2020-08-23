import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { to: '/dashboard' },
  },
  {
    title: 'Channels',
    icon: { name: 'home' },
    link: { to: '/rooms' },
  },
  {
    title: 'Create Channel',
    icon: { name: 'home' },
    link: { to: '/roomCreate' },
  },
  {
    title: 'My Notes',
    icon: { name: 'home' },
    link: { to: '/notesHome' },
  },
  {
    title: 'SETTINGS',
    group: true,
  },

  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { to: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Authentication',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { to: '/auth/login' },
      },
      {
        title: 'Register',
        link: { to: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { to: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { to: '/auth/reset-password' },
      },
    ],
  },
];

export default items;
