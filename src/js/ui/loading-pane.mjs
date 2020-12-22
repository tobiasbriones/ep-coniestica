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
export class LoadingPane {
  constructor() {
    this.isLoaded = false;
    this.isWindowLoaded = false;
    this.isMinimumTimeOver = false;
  }

  init() {
    window.addEventListener('load', () => this.windowLoaded());
    runLoadingPane.call(this);
  }

  dismissLoadingPane() {
    document.body.classList.remove('loading');
  }

  loaded() {
    if (!this.isLoaded) {
      load.call(this);
    }
  }

  windowLoaded() {
    this.isWindowLoaded = true;

    if (this.isMinimumTimeOver) {
      this.loaded();
    }
  }

  minimumTimeOver() {
    this.isMinimumTimeOver = true;

    if (this.isWindowLoaded) {
      this.loaded();
    }
  }

  maximumTimeOver() {
    this.loaded();
  }
}

function runLoadingPane() {
  document.body.classList.add('loading');
  setTimeout(() => this.minimumTimeOver(), MINIMUM_TIME_MS);
  setTimeout(() => this.maximumTimeOver(), MAXIMUM_TIME_MS);
}

function load() {
  this.dismissLoadingPane();
  this.isLoaded = true;
}
