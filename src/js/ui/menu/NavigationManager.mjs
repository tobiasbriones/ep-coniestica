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

import DropdownMenu from './action/DropdownMenu.mjs';

const NAV_ABOUT_SEL = 'nav > div > ul > .about';

export default class NavigationManager {
  constructor() {
    this.dropdownMenu = new DropdownMenu();
    this.aboutEl = null;
  }
  
  init() {
    this.dropdownMenu.init();
    this.aboutEl = document.querySelector(NAV_ABOUT_SEL);
    
    this.aboutEl.addEventListener('mouseover', () => this.onAboutHover());
    this.aboutEl.addEventListener('mouseout', e => this.onAboutHoverOut(e));
  }
  
  onAboutHover() {
    let x = this.aboutEl.getClientRects()[0].x;
    
    // Fix for legacy browsers
    if(!x) {
      x = document.body.offsetWidth - this.aboutEl.offsetWidth;
    }
    this.dropdownMenu.open('about', x);
  }
  
  onAboutHoverOut(e) {
    if (!this.dropdownMenu.isInBounds(e)) {
      this.dropdownMenu.close();
    }
  }
}
