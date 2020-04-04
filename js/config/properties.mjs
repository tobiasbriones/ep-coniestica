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

const LANG_KEY = 'lang';

export class Properties {
  static LANG_CODES = {
    SPANISH: 'ES',
    ENGLISH: 'EN'
  };
  
  static putLanguageCode = (langCode) => {
    if (!Object.values(Properties.LANG_CODES).includes(langCode)) {
      console.error('Invalid language code');
      return false;
    }
    try {
      localStorage.setItem(LANG_KEY, langCode);
      return true;
    }
    catch (e) {
      console.error(`Error when saving language. ${ e }`);
    }
    return false;
  };
  
  static loadLanguageCode = () => {
    const lsLangCode = localStorage.getItem(LANG_KEY);
    return lsLangCode || Properties.LANG_CODES.SPANISH;
  };
}
