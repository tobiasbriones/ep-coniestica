/*
 * This file is part of example.programming.web.coniestica = Coniestica
 * Copyright (C) 2019-2020 Tobias Briones
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import '../index.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/loading-pane.css';
import '../css/main.css';
import properties from './config/properties.mjs';
import LoadingPaneManager from './ui/loading-pane/LoadingPaneManager.mjs';
import NavigationManager from './ui/menu/NavigationManager.mjs';
import { stringLoader } from './values/model';

const loadingPaneManager = new LoadingPaneManager();
const navigationManager = new NavigationManager();
let str = null;

const changeLanguage = async newLangCode => {
  properties.putLanguageCode(newLangCode);
  await start();
};

const onSubscribeKeyup = e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('subscribeButton').click();
  }
};

const onSubscribeClick = () => {
  const inputEl = document.querySelector('aside.subscribe input');
  const email = inputEl.value;
  const simpleEmailRegex = new RegExp('[^@]+@[^.]+..+');

  if (!simpleEmailRegex.test(email)) {
    alert(str.ENTER_CORRECT_EMAIL_MSG);
    return;
  }
  inputEl.value = '';
  // ...
  alert(str.SUCCESSFULLY_SUBSCRIBE_MSG);
};

const init = async () => {
  // Init Components
  loadingPaneManager.init();
  navigationManager.init();

  // Add events to the page elements
  document.querySelector('aside.subscribe input')
          .addEventListener('keyup', onSubscribeKeyup);
  document.getElementById('subscribeButton')
          .addEventListener('click', onSubscribeClick);
  document.getElementById('lang-es-button')
          .addEventListener('click', () =>
            changeLanguage(properties.LANG_CODES.SPANISH)
          );
  document.getElementById('lang-en-button')
          .addEventListener('click', () =>
            changeLanguage(properties.LANG_CODES.ENGLISH)
          );

  // Continue the lifecycle
  await start();
};

const callInit = () => {
  init().then(() => 0)
        .catch(reason => console.error(reason));
};

const start = async () => {
  str = await stringLoader.loadStrings();

  document.querySelectorAll('[data-str]').forEach(el => {
    el.innerHTML = str[el.dataset['str']];
  });
};

// --------------------------------  SCRIPT  -------------------------------- //

callInit();
