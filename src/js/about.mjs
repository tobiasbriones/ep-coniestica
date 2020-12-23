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

import '../about.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/about.css';
import { NavigationManager } from './ui/navigation.mjs';
import {
  COMPANY_MISSION_CARD_HTML,
  COMPANY_OBJECTIVES_CARD_HTML,
  COMPANY_VISION_CARD_HTML
} from './values/model.mjs';

class AboutPage {
  constructor() {
    this.navigationManager = new NavigationManager();
    this.cardsParentEl = null;
  }

  init() {
    this.cardsParentEl = document.querySelector('#content > .page > .cards');
    this.navigationManager.init();

    this.bindEvents();
    this.updateContent();
  }

  bindEvents() {
    this.on('#missionButton', 'click').call(this.gotoMission);
    this.on('#visionButton', 'click').call(this.gotoVision);
    this.on('#objectivesButton', 'click').call(this.gotoObjectives);
  }

  updateContent() {
    const param = getURLParam('v');

    switch (param) {
      case 'vision':
        this.gotoVision();
        break;

      case 'objectives':
        this.gotoObjectives();
        break;

      default:
        this.gotoMission();
        break;
    }
  }

  gotoMission() {
    history.pushState(
      {},
      'Coniestica - Misión de la empresa',
      getPathName() + '?v=mission'
    );
    this.cardsParentEl.innerHTML = COMPANY_MISSION_CARD_HTML;
  }

  gotoVision() {
    history.pushState(
      {},
      'Coniestica - Visión de la empresa',
      getPathName() + '?v=vision'
    );
    this.cardsParentEl.innerHTML = COMPANY_VISION_CARD_HTML;
  };

  gotoObjectives() {
    history.pushState(
      {},
      'Coniestica - Objetivos de la empresa',
      getPathName() + '?v=objectives'
    );
    this.cardsParentEl.innerHTML = COMPANY_OBJECTIVES_CARD_HTML;
  }

  on(selector, event) {
    const context = this;
    const el = document.querySelector(selector);
    return {
      call(fn) {
        el.addEventListener(event, e => fn.call(context, e));
      }
    };
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

const aboutPage = new AboutPage();

aboutPage.init();
