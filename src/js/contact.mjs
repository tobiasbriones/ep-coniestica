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

import '../contact.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/contact.css';
import NavigationManager from './ui/menu/NavigationManager.mjs';

const navigationManager = new NavigationManager();

const onContactSubmit = (e) => {
  e.preventDefault();
  const simpleEmailRegex = new RegExp('[^@]+@[^.]+..+');
  const nameEl = document.getElementById('contact-name');
  const emailEl = document.getElementById('contact-email');
  const messageEl = document.getElementById('contact-message');
  const name = nameEl.value;
  const email = emailEl.value;
  const message = messageEl.value;
  let isValidInput = true;
  
  // Validate
  isValidInput &= name.trim().length > 0;
  isValidInput &= email.trim().length > 0;
  isValidInput &= message.trim().length > 0;
  
  if (!isValidInput) {
    // This would be better done with a css framework to show the message below
    // the corresponding input
    alert('Please fill all the fields');
    return;
  }
  isValidInput &=simpleEmailRegex.test(email)
  
  if (!isValidInput) {
    alert('Enter a valid email address');
    return;
  }
  
  // ...
  alert('Great! We\'ll be in touch  with you soon');
  
  // Clean
  nameEl.value = '';
  emailEl.value = '';
  messageEl.value = '';
};

const init = () => {
  navigationManager.init();
  document.getElementById('contact-form')
          .addEventListener('submit', onContactSubmit);
};

init();
