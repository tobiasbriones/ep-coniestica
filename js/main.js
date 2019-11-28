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


class NavigationManager {

  aboutEl;
  dropDownMenu;
  aboutDropDownItemsHTML;

  constructor() {}

  getAboutItemsHTML() {
    const items = [
      'Misión',
      'Visión',
      'Objetivos',
      'Contacto'
    ];
    const urls = [
      'about/mission',
      'about/vision',
      'about/objectives',
      'about/contact'
    ];
    let html = '';

    items.forEach((item, i) => html += `
      <a href="${urls[i]}">
        <span>${item}</span>
      </a>
    `);
    return html;
  }

  init() {
    this.aboutEl = document.querySelector('nav > div > ul > .about');
    this.dropDownMenu = document.querySelector('nav > div > ul > .dropdown-menu');
    this.aboutDropDownItemsHTML = this.getAboutItemsHTML();
    const aboutEl = document.getElementById('actionAboutUs');

    aboutEl.addEventListener('mouseover', this.onAboutHover);
    aboutEl.addEventListener('mouseout', this.onAboutHoverOut);
    this.dropDownMenu.addEventListener('mouseout', this.onAboutHoverOut);
  }

  onAboutHover = () => {
    const x = this.aboutEl.getClientRects()[0].x;
    this.dropDownMenu.innerHTML = this.aboutDropDownItemsHTML;
    this.dropDownMenu.style.transform = `translateX(${x}px)`;
    this.dropDownMenu.classList.remove('gone');
  }

  onAboutHoverOut = (e) => {
    const isInBounds = () => {
      const rect = this.dropDownMenu.getClientRects()[0];
      
      if(!rect) {
        return false;
      }
      return e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom;
    }
    if(!isInBounds()) {
      this.dropDownMenu.classList.add('gone');
    }
  }

}

const navigationManager = new NavigationManager();

document.addEventListener('DOMContentLoaded', () => {
  navigationManager.init();
});
