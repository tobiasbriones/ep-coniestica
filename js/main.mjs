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

const onSubscribeClick = () => {
  const inputEl = document.querySelector('aside.subscribe input');
  const email = inputEl.value;
  const simpleEmailRegex = new RegExp('[^@]+@[^\.]+\..+');

  if(!simpleEmailRegex.test(email)) {
    alert('Porfavor ingrese correctamente su correo');
    return;
  }
  inputEl.value = '';
  // ...
  alert('Se ha suscrito a nosotros!');
}

document.addEventListener('DOMContentLoaded', () => {
  navigationManager.init();
  document.getElementById('subscribeButton').addEventListener('click', onSubscribeClick);
});
