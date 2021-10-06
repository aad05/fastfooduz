import { ReactComponent as buyurtmalar } from '../assets/icons/buyurtmalar.svg';
import { ReactComponent as mahsulotlar } from '../assets/icons/mahsulotlar.svg';
import { ReactComponent as kategoriya } from '../assets/icons/kategoriya.svg';
import { ReactComponent as filial } from '../assets/icons/filial.svg';
import { ReactComponent as mijozlar } from '../assets/icons/mijozlar.svg';
import { ReactComponent as hisobot } from '../assets/icons/hisobot.svg';
import { ReactComponent as hodimlar } from '../assets/icons/settings.svg';
import { ReactComponent as katalog } from '../assets/icons/settings.svg';

import Generic from '../pages/Generic';
import Katalog from '../pages/Katalog';

import Buyurtmalar from '../pages/Buyurtmalar';

export const sidebar = [
  {
    id: 1,
    title: 'Buyurtmalar',
    path: '/buyurtmalar',
    Icon: buyurtmalar,
    Component: Buyurtmalar,
    hidden: false,
  },
  {
    id: 2,
    title: 'Mahsulotlar',
    path: '/mahsulotlar',
    Icon: mahsulotlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 3,
    title: 'Kategoriya',
    path: '/kategoriya',
    Icon: kategoriya,
    Component: Generic,
    hidden: false,
  },
  {
    id: 4,
    title: 'Filiallar',
    path: '/filiallar',
    Icon: filial,
    Component: Generic,
    hidden: false,
  },
  {
    id: 5,
    title: 'Mijozlar',
    path: '/mijozlar',
    Icon: mijozlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: 'Hisobot',
    path: '/hisobot',
    Icon: hisobot,
    Component: Generic,
    hidden: false,
  },
  {
    id: 7,
    title: 'Hodimlar',
    path: '/hodimlar',
    Icon: hodimlar,
    Component: Generic,
    hidden: false,
  },
  {
    id: 8,
    title: 'Katalog',
    path: '/katalog',
    Icon: katalog,
    Component: Katalog,
    hidden: false,
  },
];
