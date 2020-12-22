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

import { NAV_ABOUT_ITEMS, NAV_ABOUT_ITEMS_URLS } from '../../../values/model.mjs';

const DROPDOWN_MENU_SEL = 'nav > div > .dropdown-menu';

/**
 * Defines a dropdown menu component shown in the web page navigation.
 */
export class DropdownMenu {
  constructor() {
    this.dropdownMenuEl = null;
    this.aboutDropdownItemsHtml = null;
    this.isMenuOpened = false;
  }

  init() {
    this.dropdownMenuEl = document.querySelector(DROPDOWN_MENU_SEL);
    this.aboutDropdownItemsHtml = getAboutItemsHtml.call(this);
    this.isMenuOpened = false;

    this.dropdownMenuEl.addEventListener('mouseout', e => {
      if (!this.isInBounds(e)) {
        this.close();
      }
    });
  }

  open(menu, x) {
    let menuHtml = '';

    switch (menu) {
      case 'about':
        menuHtml = this.aboutDropdownItemsHtml;
        break;
    }
    this.dropdownMenuEl.innerHTML = menuHtml;
    this.dropdownMenuEl.style.transform = `translateX(${ x }px)`;

    this.dropdownMenuEl.classList.remove('gone');
    this.isMenuOpened = true;
  }

  close() {
    this.dropdownMenuEl.classList.add('gone');
    this.isMenuOpened = false;
  }

  isInBounds(e) {
    let inBounds = false;

    if (this.isMenuOpened) {
      inBounds = isEventInDropdownMenuBounds.call(this, e);
    }
    return inBounds;
  }
}

function getAboutItemsHtml() {
  let html = '';

  NAV_ABOUT_ITEMS.forEach((item, i) => {
    html += `
          <a href="${ NAV_ABOUT_ITEMS_URLS[i] }">
            <span>${ item }</span>
          </a>
        `;
  });
  return html;
}

function isEventInDropdownMenuBounds(e) {
  const rect = this.dropdownMenuEl.getClientRects()[0];

  return (
    e.pageX >= rect.left &&
    e.pageX <= rect.right &&
    e.pageY >= rect.top &&
    e.pageY <= rect.bottom
  );
}
