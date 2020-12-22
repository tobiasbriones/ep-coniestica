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

const LANG_KEY = 'lang';
const LANG_CODES = {
  SPANISH: 'ES',
  ENGLISH: 'EN'
};

export default {
  LANG_CODES: LANG_CODES,
  putLanguageCode: langCode => {
    let succeeded = false;

    if (validateLangCode(langCode)) {
      succeeded = setLangCode(langCode);
    }
    return succeeded;
  },
  loadLanguageCode: () => {
    const lsLangCode = localStorage.getItem(LANG_KEY);
    return lsLangCode || LANG_CODES.SPANISH;
  }
};

function validateLangCode(langCode) {
  let isValidLangCode = true;

  if (!Object.values(LANG_CODES).includes(langCode)) {
    isValidLangCode = false;
    console.error('Invalid language code');
  }
  return isValidLangCode;
}

function setLangCode(langCode) {
  let succeeded = true;

  try {
    localStorage.setItem(LANG_KEY, langCode);
  }
  catch (e) {
    succeeded = false;
    console.error(`Error when saving language. ${ e }`);
  }
  return succeeded;
}
