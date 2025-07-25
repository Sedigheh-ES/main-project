import { PopulateType } from '@/types';
import { MenuItemType } from './MenuItems';

export interface MenuType {
  title: string
  position: string
  menu_items: PopulateType<MenuItemType>
}