/*
 * This file is part of example.programming.web.coniestica = Coniestica
 * Copyright (C) 2019 Tobias Briones
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

import { NavigationManager } from './navigation.mjs';
import { LEGAL_PRIVACY, LEGAL_TERMS_AND_CONDITIONS } from './model.mjs';

const navigationManager = new NavigationManager();
var titleEl;
var textEl;

const getURLParam = paramName => {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
};

const getPathName = () => {
  return document.location.pathname;
};

const gotoPrivacy = () => {
  history.pushState(
    {},
    'Coniestica - Misión de la empresa',
    getPathName() + '?v=privacy'
  );
  titleEl.innerHTML = 'Términos de privacidad';
  textEl.innerHTML = LEGAL_PRIVACY;
};

const gotoTerms = () => {
  history.pushState(
    {},
    'Coniestica - Visión de la empresa',
    getPathName() + '?v=terms_and_conditions'
  );
  titleEl.innerHTML = 'Términos y Condiciones de Uso';
  textEl.innerHTML = LEGAL_TERMS_AND_CONDITIONS;
};

document.addEventListener('DOMContentLoaded', () => {
  const param = getURLParam('v');
  titleEl = document.querySelector('section > h1');
  textEl = document.querySelector('section > div.content');

  navigationManager.init();
  switch (param) {
    case 'privacy':
      gotoPrivacy();
      break;

    case 'terms_and_conditions':
      gotoTerms();
      break;

    default:
      gotoPrivacy();
      break;
  }
});
