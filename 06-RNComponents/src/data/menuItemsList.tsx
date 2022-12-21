import { menuItem } from "../interfaces/appInterfaces";

export const menuItems: menuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animations101Screen'
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animations102Screen'
    },
    {
      name: 'Switch',
      icon: 'cog-outline',
      component: 'SwitchScreen'
    },
    {
      name: 'Alert',
      icon: 'alert-circle-outline',
      component: 'AlertScreen'
    },
    {
      name: 'Text Input Screen',
      icon: 'document-text-outline',
      component: 'TextInputScreen'
    },
    {
      name: 'Pull to refresh Screen',
      icon: 'refresh-circle-outline',
      component: 'PulltoRefreshScreen'
    },
    {
      name: 'Section List',
      icon: 'list-outline',
      component: 'SectionListScreen'
    },
    {
      name: 'Modal Screen',
      icon: 'copy-outline',
      component: 'ModalScreen'
    },
    {
      name: 'Infinite Screen',
      icon: 'infinite-outline',
      component: 'InfiniteScrollScreen'
    },
    {
      name: 'Slides Screen',
      icon: 'albums-outline',
      component: 'SlidesScreen'
    },
    {
      name: 'Theme Screen',
      icon: 'brush-outline',
      component: 'ChangeThemeScreen'
    },
  ]