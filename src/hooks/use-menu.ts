import { getMenuAPiCall } from "@/api/Menu";
import { EntityType, MenuItemType, MenuType, PopulateType } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface Props {
  position: string;
}
export function useMenu({ position }: Props) {
  const { data: menuData } = useQuery({
    queryKey: [getMenuAPiCall.name],
    queryFn: () => getMenuAPiCall(),
  });
  

  let MenuItems: null | PopulateType<MenuItemType> = null;
  if (menuData) {
    const findMenu = menuData.filter(
      (item: EntityType<MenuType>) => item.attributes?.position === position
    );
   

    if (findMenu.length > 0) {
      MenuItems = findMenu[0].attributes.menu_items;
      MenuItems?.data.sort(
        (a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
          if (a.attributes.rank < b.attributes.rank) return -1;
          if (a.attributes.rank > b.attributes.rank) return 1;
          return 0;
        }
      );
    }
  }
  return { data: MenuItems };
}
