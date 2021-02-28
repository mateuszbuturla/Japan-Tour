import React, { useEffect, useState } from 'react';
import { AdminHeader, AdminTiles, LatestChanges } from 'components/common';

import CityIcon from 'assets/icons/city.svg';
import AttractionIcon from 'assets/icons/attraction.svg';
import KitchenIcon from 'assets/icons/kitchen.svg';
import CultureIcon from 'assets/icons/culture.svg';
import { useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import Api from 'utils/Api';
import TypesActionHistory from 'types/TypesActionHistory';

function AdminDashboard() {
  const { attractions, cities, cultures, dishes } = useSelector(
    (state: TypesApplicationState) => state.admin,
  );

  const [actionsHistory, setActionsHistory] = useState<TypesActionHistory[]>([]);

  const getActionsHistory = async () => {
    const res = await Api.get('/edithistory');
    setActionsHistory(res.data);
  };

  useEffect(() => {
    getActionsHistory();
  }, []);

  return (
    <>
      <AdminHeader text="Witaj Admin" main />
      <AdminTiles
        data={[
          {
            title: 'Miasta',
            icon: CityIcon,
            description: 'Ilość wpisów o miastach',
            url: '/admin/cities',
            count: cities.length,
            color: {
              color1: '#6CA4E5',
              color2: '#2666AF',
            },
          },
          {
            title: 'Atrakcje',
            icon: AttractionIcon,
            description: 'Ilość wpisów o atrakcjach',
            url: '/admin/attractions',
            count: attractions.length,
            color: {
              color1: '#67FC9E',
              color2: '#26AF6F',
            },
          },
          {
            title: 'Kultura',
            icon: KitchenIcon,
            description: 'Ilość wpisów o kulturze',
            url: '/admin/culture',
            count: cultures.length,
            color: {
              color1: '#D257D2',
              color2: '#6C40AE',
            },
          },
          {
            title: 'Kuchnia',
            icon: CultureIcon,
            description: 'Ilość wpisów o kuchni',
            url: '/admin/kitchen',
            count: dishes.length,
            color: {
              color1: '#E56C91',
              color2: '#AF2634',
            },
          },
        ]}
      />
      <AdminHeader text="Ostatnie zmiany" />
      <LatestChanges data={actionsHistory} />
    </>
  );
}

export default AdminDashboard;
