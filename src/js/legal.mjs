/*
 * Copyright (c) 2019-2020 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * This file is part of Example Project: Coniestica.
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

import '../legal.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/legal.css';
import NavigationManager from './ui/menu/NavigationManager.mjs';
import { LEGAL_PRIVACY, LEGAL_TERMS_AND_CONDITIONS } from './values/model.mjs';

class LegalPage {
  constructor() {
    this.navigationManager = new NavigationManager();
    this.titleEl = null;
    this.textEl = null;
  }

  init() {
    this.titleEl = document.querySelector('section > h1');
    this.textEl = document.querySelector('section > div.content');

    this.navigationManager.init();
    this.updateContent();
  }

  updateContent() {
    const param = getURLParam('v');

    switch (param) {
      case 'privacy':
        this.gotoPrivacy();
        break;

      case 'terms-and-conditions':
        this.gotoTerms();
        break;

      default:
        this.gotoPrivacy();
        break;
    }
  }

  gotoPrivacy() {
    history.pushState(
      {},
      'Coniestica - Misión de la empresa',
      getPathName() + '?v=privacy'
    );
    this.titleEl.innerHTML = 'Términos de privacidad';
    this.textEl.innerHTML = LEGAL_PRIVACY;
  }

  gotoTerms() {
    history.pushState(
      {},
      'Coniestica - Visión de la empresa',
      getPathName() + '?v=terms-and-conditions'
    );
    this.titleEl.innerHTML = 'Términos y Condiciones de Uso';
    this.textEl.innerHTML = LEGAL_TERMS_AND_CONDITIONS;
  }
}

function getURLParam(paramName) {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
}

function getPathName() {
  return document.location.pathname;
}

// --------------------------------  SCRIPT  -------------------------------- //

const legalPage = new LegalPage();

legalPage.init();
