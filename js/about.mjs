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

import { COMPANY_MISSION_CARD_HTML, COMPANY_VISION_CARD_HTML, COMPANY_OBJECTIVES_CARD_HTML } from './model.mjs';

var cardsParentEl;

const gotoMission = () => {
  history.pushState({}, 'Coniestica - Misión de la empresa', '/about.html?v=mission');
  cardsParentEl.innerHTML = COMPANY_MISSION_CARD_HTML;
}

const gotoVision = () => {
  history.pushState({}, 'Coniestica - Visión de la empresa', '/about.html?v=vision');
  cardsParentEl.innerHTML = COMPANY_VISION_CARD_HTML;
}

const gotoObjectives = () => {
  history.pushState({}, 'Coniestica - Objetivos de la empresa', '/about.html?v=objectives');
  cardsParentEl.innerHTML = COMPANY_OBJECTIVES_CARD_HTML;
}

document.addEventListener('DOMContentLoaded', () => {
  cardsParentEl = document.querySelector('#content > .cards');
  document.getElementById('missionButton').addEventListener('click', gotoMission);
  document.getElementById('visionButton').addEventListener('click', gotoVision);
  document.getElementById('objectivesButton').addEventListener('click', gotoObjectives);
});
