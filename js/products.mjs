/*
 * This file is part of example.programming.web.coniestica = Coniestica.
 *
 * Coniestica is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Coniestica is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Coniestica.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 * Copyright (c) 2019 Tobias Briones
 */

import { NavigationManager } from './navigation.mjs';

const navigationManager = new NavigationManager();
const PRODUCTS = [
  {
    code: 'pd-apple01',
    name: 'iMac + Teclado y Mouse + iPad Air 32GB',
    desc: 'Combo especial iMac + Teclado y Mouse + iPad Air 32GB',
    price: '$2566.00',
    photo: 'img/products/apple-606761_1920.jpg'
  },
  {
    code: 'pd-bed01',
    name: 'Cama',
    desc: 'Cama matrimonial',
    price: '$850.00',
    photo: 'img/products/bed-575793_1280.png'
  },
  {
    code: 'pd-camera01',
    name: 'Cámara de video',
    desc: 'Cámara de video Sony profesional para estudios de televisión',
    price: '$1200.00',
    photo: 'img/products/camera-1598620_1920.jpg'
  },
  {
    code: 'pd-furniture01',
    name: 'Mesa',
    desc: 'Mesita de trabajo para cuarto',
    price: '$160.00',
    photo: 'img/products/furniture-731449_1920.jpg'
  },
  {
    code: 'pd-apple08',
    name: 'MacBook Air',
    desc: 'Laptop Apple MackBook Air, descuento Black Friday',
    price: '$649.99',
    photo: 'img/products/home-office-336373_1920.jpg'
  },
  {
    code: 'pd-apple02',
    name: 'Iphone 4S',
    desc: 'Apple Iphone 4S 16GB, negro, semi nuevo, desbloqueado',
    price: '$120.00',
    photo: 'img/products/iphone-410311_1280.jpg'
  },
  {
    code: 'pd-samsung01',
    name: 'Samsung Galaxy S7 Edge',
    desc: 'Teléfono Samsung Galaxy S7 Edge 32GB desbloqueado, seminuevo estado A',
    price: '$220.00',
    photo: 'img/products/mobile-1726138_1920.jpg'
  },
  {
    code: 'pd-apple87',
    name: 'Teclado y mouse inalámbrico',
    desc: 'Teclado y mouse marca Apple, inalámbricos',
    price: '$189.00',
    photo: 'img/products/workplace-2303849_1920.jpg'
  },
];

const getRowHTML = product => {
  return `
    <tr>
        <th scope="row">${product.code}</th>
        <td>${product.name}</td>
        <td>${product.desc}</td>
        <td>${product.price}</td>
        <td><img src="${product.photo}" alt="photo"></td>
    </tr>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  navigationManager.init();
  const tbodyEl = document.querySelector('#content > table > tbody');
  var tableHTML = '';

  PRODUCTS.forEach(p => tableHTML += getRowHTML(p));
  tbodyEl.innerHTML = tableHTML;
});
