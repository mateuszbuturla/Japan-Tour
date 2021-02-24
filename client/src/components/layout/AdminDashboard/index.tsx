import React from 'react';
import { AdminHeader, AdminTiles, LatestChanges } from 'components/common';

import CityIcon from 'assets/icons/city.svg';
import AttractionIcon from 'assets/icons/attraction.svg';
import KitchenIcon from 'assets/icons/kitchen.svg';
import CultureIcon from 'assets/icons/culture.svg';

function AdminDashboard() {
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
            count: 5,
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
            count: 5,
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
            count: 5,
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
            count: 5,
            color: {
              color1: '#E56C91',
              color2: '#AF2634',
            },
          },
        ]}
      />
      <AdminHeader text="Ostatnie zmiany" />
      <LatestChanges
        data={[
          {
            elementType: 'attraction',
            name: 'Tokyo skytree',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Dodanie',
          },
          {
            elementType: 'city',
            name: 'Tokyo',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Dodanie',
          },
          {
            elementType: 'region',
            name: 'Hokkaido',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'culture',
            name: 'Hanami',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
          {
            elementType: 'kitchen',
            name: 'Sushi',
            author: 'Admin',
            date: '01.01.2020',
            action: 'Edycja',
          },
        ]}
      />
    </>
  );
}

export default AdminDashboard;
