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

import { NAV_ABOUT_ITEMS, NAV_ABOUT_ITEMS_URLS } from '../../../values/model.mjs';

const DROPDOWN_MENU_SEL = 'nav > div > .dropdown-menu';

export default class DropdownMenu {
  constructor() {
    this.dropdownMenuEl = null;
    this.aboutDropdownItemsHTML = null;
    this.isMenuOpened = false;
  }
  
  init() {
    const getAboutItemsHTML = () => {
      let html = '';
      
      NAV_ABOUT_ITEMS.forEach((item, i) => html += `
        <a href="${ NAV_ABOUT_ITEMS_URLS[i] }">
          <span>${ item }</span>
        </a>
      `);
      return html;
    };
    this.dropdownMenuEl = document.querySelector(DROPDOWN_MENU_SEL);
    this.aboutDropdownItemsHTML = getAboutItemsHTML();
    this.isMenuOpened = false;
    
    this.dropdownMenuEl.addEventListener('mouseout', e => {
      if (!this.isInBounds(e)) {
        this.close();
      }
    });
  }
  
  open(menu, x) {
    let menuHTML = '';
    
    switch (menu) {
      case 'about':
        menuHTML = this.aboutDropdownItemsHTML;
        break;
    }
    this.dropdownMenuEl.innerHTML = menuHTML;
    this.dropdownMenuEl.style.transform = `translateX(${ x }px)`;
    
    this.dropdownMenuEl.classList.remove('gone');
    this.isMenuOpened = true;
  }
  
  close() {
    this.dropdownMenuEl.classList.add('gone');
    this.isMenuOpened = false;
  }
  
  isInBounds(e) {
    if (!this.isMenuOpened) return false;
    const rect = this.dropdownMenuEl.getClientRects()[0];
    
    return (
      e.pageX >= rect.left &&
      e.pageX <= rect.right &&
      e.pageY >= rect.top &&
      e.pageY <= rect.bottom
    );
  }
}
