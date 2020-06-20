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

// Creating a LoadingPane object is not required because of its simplicity.
// Just manage the loading pane here directly.
export default class LoadingPaneManager {
  constructor() {
    this.isLoaded = false;
  }
  
  dismissLoadingPane() {
    if (this.isLoaded) return;
    document.body.classList.remove('loading');
    this.isLoaded = true;
  }
  
  init() {
    window.addEventListener('load', () => this.dismissLoadingPane());
    
    // Run loading pane
    document.body.classList.add('loading');
    setTimeout(this.dismissLoadingPane, 3000); // Max. time allowed
  }
}
