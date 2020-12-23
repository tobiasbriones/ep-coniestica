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

import '../index.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/loading-pane.css';
import '../css/main.css';
import properties from './config/properties.mjs';
import { LoadingPane } from './ui/loading-pane.mjs';
import { NavigationManager } from './ui/navigation.mjs';
import { stringLoader } from './values/model';

class MainPage {
  constructor() {
    this.loadingPaneManager = new LoadingPane();
    this.navigationManager = new NavigationManager();
    this.str = null;
  }

  async init() {
    this.initComponents();
    this.bindEvents();
    await this.start();
  }

  async start() {
    this.str = await stringLoader.loadStrings();

    document.querySelectorAll('[data-str]').forEach(el => {
      el.innerText = this.str[el.dataset['str']];
    });
  }

  initComponents() {
    this.loadingPaneManager.init();
    this.navigationManager.init();
  }

  bindEvents() {
    const changeLanguage = async newLangCode => {
      properties.putLanguageCode(newLangCode);
      await this.start();
    };

    this.on('aside.subscribe input', 'keyup').call(this.onSubscribeKeyup);
    this.on('#subscribeButton', 'click').call(this.onSubscribeClick);

    document.getElementById('lang-es-button')
            .addEventListener('click', () =>
              changeLanguage(properties.LANG_CODES.SPANISH)
            );
    document.getElementById('lang-en-button')
            .addEventListener('click', () =>
              changeLanguage(properties.LANG_CODES.ENGLISH)
            );
  }

  onSubscribeKeyup(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('subscribeButton').click();
    }
  }

  onSubscribeClick() {
    const inputEl = document.querySelector('aside.subscribe input');
    const email = inputEl.value;
    const simpleEmailRegex = new RegExp('[^@]+@[^.]+..+');

    if (!simpleEmailRegex.test(email)) {
      alert(this.str.ENTER_CORRECT_EMAIL_MSG);
      return;
    }
    inputEl.value = '';

    // ...

    alert(this.str.SUCCESSFULLY_SUBSCRIBE_MSG);
  }

  on(selector, event) {
    const context = this;
    const el = document.querySelector(selector);
    return {
      call(fn) {
        el.addEventListener(event, e => fn.call(context, e));
      }
    }
  }
}

// --------------------------------  SCRIPT  -------------------------------- //

const mainPage = new MainPage();

callInit(mainPage);

function callInit(mainPage) {
  mainPage.init().then(() => 0).catch(reason => console.error(reason));
}
