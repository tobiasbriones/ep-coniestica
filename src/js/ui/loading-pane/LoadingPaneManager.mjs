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

// This Loading Pane should be specially implemented so that it's shown and able
// from the mere beginning because the element is shown blank from the mere
// beginning but the animation and script loads after that. I will leave this
// implementation this way for this project though.

const MINIMUM_TIME_MS = 800;
const MAXIMUM_TIME_MS = 3000;

/**
 * Defines a manager for showing the loading pane once when loading the web
 * page.
 */
export default class LoadingPaneManager {
  constructor() {
    this.isLoaded = false;
    this.isWindowLoaded = false;
    this.isMinimumTimeOver = false;
  }
  
  dismissLoadingPane() {
    document.body.classList.remove('loading');
  }
  
  loaded() {
    if (this.isLoaded) return;
    this.dismissLoadingPane();
    this.isLoaded = true;
  }
  
  windowLoaded() {
    this.isWindowLoaded = true;
    
    if (!this.isMinimumTimeOver) return;
    this.loaded();
  }
  
  minimumTimeOver() {
    this.isMinimumTimeOver = true;
    
    if (!this.isWindowLoaded) return;
    this.loaded();
  }
  
  maximumTimeOver() {
    this.loaded();
  }
  
  init() {
    window.addEventListener('load', () => this.windowLoaded());
    
    // Run loading pane
    document.body.classList.add('loading');
    setTimeout(() => this.minimumTimeOver(), MINIMUM_TIME_MS);
    setTimeout(() => this.maximumTimeOver(), MAXIMUM_TIME_MS);
  }
}
