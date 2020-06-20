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

import properties from '../config/properties';
import StringES from './strings_ES';

const NAV_ABOUT_ITEMS = ['Misión', 'Visión', 'Objetivos', 'Contacto'];

const NAV_ABOUT_ITEMS_URLS = [
  'about.html?v=mission',
  'about.html?v=vision',
  'about.html?v=objectives',
  'contact.html'
];

const COMPANY_MISSION_CARD_HTML = `
  <div class="center">
    <span>Misión</span>
    <p>
      Nuestra misión consiste en entregar la experiencia y calidad de
      servicio para la óptima administración de procesos logísticos para
      ya sea la importación o exportación de productos para organizaciones
      o personas individuales. Es trabajo nuestro facilitar las vidas de las
      personas y el trabajo de las organizaciones mediante nuestro servicio como
      intermediarios.
      En nuestra expectativa reside:

      <ul>
        <li><strong>Manejo y organización:</strong> Ser transparentes y brindar nuestras soluciones
            incorporadas para rastrear los problemas y permitir soluciones inmediatas.</li>
        <li><strong>Versatilidad:</strong> Manejamos cualquier inconveniente dado de forma rápida y
            segura para cumplir con las expectaciones de cualquiera de nuestros clientes.</li>
        <li><strong>Libertad:</strong> Nuestros clientes se sientes satisfechos con nuestros procesos así
            que no hay necesidad de imponer contratos, sino más bien, de servir con calidad y 
            transparencia para ser su consolidadora de carga de su propia elección.</li>
        <li><strong>Alcance:</strong> Nuestros servicios satisfacen y optimizan las necesidades de experiencia en exportación
            e importación desde personas individuales hasta grandes compañías.</li>
        <li><strong>Facilidad:</strong> El trabajo que ofrecemos permite a nuestros clientes dejar las complejidades
            a los expertos y enfocarse en sus actividades propiamente laborales.</li>
      </ul>
    </p>
  </div>
`;

const COMPANY_VISION_CARD_HTML = `
  <div class="center">
    <span>Visión</span>
    <p>
      Nuestro rumbo está dirigido hacia la creación de las soluciones de servicios de consolidadora de carga
      beneficiando a mejorar las vidas laborales de nuestros clientes o potenciales clientes en cualquier lugar
      del mundo.

      <ul>
        <li>Crecer mundialmente para alcanzar el liderazgo en servicios de consolidadora de cargas.</li>
        <li>Desarrollar las mejores estrategias para ser una compañía amigable y económica para la persona individual.</li>
        <li>Ofrecer a nuestros clientes el máximo valor agregado que necesitan con la mayor sencillez posible.</li>
      </ul>
    </p>
  </div>
`;

const COMPANY_OBJECTIVES_CARD_HTML = `
  <div class="center">
    <span>Objetivos</span>
    <p class="center">
      Objetivos generales
      <ul>
        <li>Expandirse por todo el mundo</li>
        <li>Ser una marca líder en el mercado</li>
        <li>Aumentar el número de activos</li>
        <li>Ser una marca reconocida en el mercado</li>
        <li>Crear 100 nuevos empleos en la zona norte de Honduras</li>
      </ul>
    </p>
    <p class="margin center">
      Objetivos específicos
      <ul>
        <li>Aumentar el número de trabajadores de 10 a 12 en un mes</li>
        <li>Aumentar la eficiencia de la comunicación con el cliente en un 20% para el próximo año</li>
        <li>Abrir 3 nuevos locales comerciales en España para el primer trimestre del próximo año</li>
      </ul>
    </p>
  </div>
`;

const LEGAL_PRIVACY = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh elit, lobortis et eleifend vel, lacinia at justo. Fusce vestibulum neque accumsan, vulputate odio vulputate, efficitur ligula. Mauris et dui ac velit fermentum dictum sed in libero. Curabitur diam nunc, porttitor sed suscipit et, tincidunt pulvinar magna. Aliquam ex justo, eleifend nec ligula malesuada, commodo sollicitudin ante. Fusce ullamcorper cursus odio, condimentum feugiat lorem interdum nec. Nam vel lorem nec mauris sollicitudin feugiat vitae ut ligula. Etiam a velit tristique, hendrerit ipsum eget, facilisis purus. Ut sit amet imperdiet purus. Integer fringilla vel odio vitae pretium. Curabitur dui metus, vulputate a vehicula a, rutrum et augue. Cras non ligula at nulla facilisis tincidunt id a lacus. Aenean et dolor libero.</p>

  <p>Nulla facilisi. Donec luctus, nisl a hendrerit scelerisque, nibh ex feugiat nisl, id sagittis sem mi ac ante. In rhoncus vel nulla scelerisque congue. Quisque id imperdiet elit, et pellentesque massa. Vestibulum in pretium nulla. Pellentesque ut sapien lacus. Sed posuere interdum nunc sed lobortis. Fusce pretium lacus at mi bibendum convallis. Vivamus velit nibh, faucibus sed libero dapibus, tincidunt rutrum dui. Sed egestas sed libero non laoreet. Phasellus vitae imperdiet nunc, at faucibus leo.</p>

  <p>Nam vehicula sapien mauris, eget feugiat metus congue in. In facilisis dapibus orci, vel sodales ipsum. Sed ullamcorper justo eget finibus tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras id tincidunt erat, quis venenatis nulla. Nulla in laoreet libero. Etiam diam nisi, efficitur vitae pulvinar vitae, sagittis id risus. Phasellus varius libero non sollicitudin venenatis. Quisque laoreet, libero mattis gravida mollis, nunc diam luctus mauris, vitae pharetra nunc nisl ac neque. Maecenas augue ipsum, condimentum ut consectetur a, vestibulum quis odio. Nulla vulputate nunc vel tortor pulvinar, sed congue lorem consequat. Nulla non odio at elit maximus pellentesque at ut dolor. Cras ultrices neque pellentesque nibh euismod, in volutpat augue vestibulum. Mauris tempus tincidunt elit ac dictum.</p>

  <p>Pellentesque blandit est in orci porttitor rhoncus. Sed eleifend, velit in scelerisque commodo, diam urna ultricies dui, quis commodo nunc magna sit amet neque. Morbi in venenatis risus. Vivamus tincidunt mattis nisl, ut egestas nulla fermentum pellentesque. Praesent sed sapien elementum, iaculis magna in, varius diam. Curabitur id elit eu augue suscipit suscipit vitae quis sem. Duis at dui sit amet lorem blandit accumsan. Ut in placerat sem. Curabitur ornare nec lectus nec condimentum. Nunc egestas mi id ex laoreet vestibulum. Aenean quis ipsum nec velit semper euismod sed condimentum diam. Nulla et nunc tempor, lacinia mi et, commodo ligula. Curabitur ut lacus malesuada purus sagittis ultricies ullamcorper ut sem. Mauris a scelerisque urna. Suspendisse urna felis, aliquam vel erat ac, euismod dapibus dui. Pellentesque suscipit nulla ipsum, id maximus ipsum porta in.</p>

  <p>In faucibus varius augue eu vestibulum. Proin aliquet viverra velit, in ultrices mauris venenatis sit amet. Aenean semper tempor quam et tristique. Morbi a bibendum elit. Nunc in arcu a tellus blandit euismod. Etiam aliquet euismod est non sollicitudin. Sed a cursus dolor, in molestie turpis. Phasellus porttitor mauris non enim pharetra, malesuada rhoncus ante tincidunt. Nunc quam eros, tristique in finibus sit amet, consectetur quis lorem.</p>

  <ul>
    <li>Aliquam et nunc laoreet, molestie orci eu, varius purus.</li>
    <li>Cras id dolor mollis, dapibus justo eu, rutrum nisi.</li>
    <li>Maecenas ullamcorper neque non ipsum sagittis, et malesuada turpis aliquam.</li>
    <li>Ut placerat dolor eu lacinia mattis.</li>
    <li>Vestibulum et risus ornare, rhoncus ipsum sed, feugiat enim.</li>
    <li>Sed nec risus suscipit, tincidunt nisl eu, congue ex.</li>
  </ul>

  <p>Ut quis turpis cursus, pellentesque mi vitae, dignissim massa. Nam sapien erat, vestibulum at magna a, volutpat ultricies velit. Praesent porta viverra eros nec dignissim. Duis sed eros consectetur, congue velit ut, bibendum mauris. Aenean dignissim libero cursus, imperdiet mauris ac, luctus dui. Aliquam erat volutpat. Etiam elementum nisi augue, nec commodo arcu dapibus sit amet. Duis sollicitudin diam maximus tincidunt tristique. Sed risus risus, placerat et euismod ut, dignissim quis odio. Nulla efficitur nibh nec sapien faucibus euismod. Pellentesque tincidunt nunc sapien, at imperdiet eros dignissim nec. Vestibulum convallis auctor magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mollis ut dolor a vulputate. Quisque nulla diam, iaculis sed neque a, sollicitudin mollis sapien.</p>

  <p>Duis tristique felis vel diam luctus tempus. Sed eget luctus felis. Praesent vel semper leo, ac tempus nulla. Donec faucibus eros in libero fermentum, in iaculis nisl auctor. Aliquam laoreet mattis tortor, non commodo justo lobortis eu. Praesent rutrum eu nisi ac laoreet. Etiam at justo vel urna rutrum ullamcorper.</p>

  <p>Donec aliquet enim sit amet magna fermentum ornare. Etiam egestas odio ut tincidunt sagittis. Integer dictum urna vitae vestibulum cursus. Phasellus enim est, blandit non porta nec, tristique euismod erat. Sed ex felis, blandit ut rhoncus id, varius sollicitudin nisl. Sed lobortis augue eget metus mollis pretium. Etiam a rhoncus magna. Vestibulum pharetra diam nec lacinia sagittis. Phasellus sed ipsum ut ante tristique ultricies id id enim. Donec egestas mauris id eros pellentesque gravida. Aliquam erat volutpat. Nam sed rutrum odio. Morbi gravida dolor in dui congue tristique. Aenean elementum ornare mi sit amet egestas. Suspendisse facilisis nisl vitae est gravida semper. Nunc eu enim porta, laoreet magna sed, iaculis est.</p>
`;

const LEGAL_TERMS_AND_CONDITIONS = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis lacus sit amet orci eleifend varius. Donec laoreet tellus nec porttitor tristique. Cras vulputate, ex rutrum malesuada facilisis, augue nibh rutrum elit, non facilisis mi sem ut nisl. Vivamus vitae nunc diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In et lorem vel enim finibus accumsan. Fusce convallis efficitur velit tempus rhoncus. Sed tempus interdum mauris et sagittis. Maecenas placerat interdum velit ac pretium.</p>

  <p>In neque nisl, iaculis ac nunc vitae, eleifend egestas odio. Integer finibus scelerisque turpis, auctor tempus quam suscipit at. Vivamus ac ligula arcu. Nunc pharetra tellus eu nunc mattis placerat. Nam posuere leo nec nisl condimentum, et tincidunt orci bibendum. Nullam sit amet leo ullamcorper, iaculis lorem ut, sodales urna. Phasellus pulvinar fermentum nulla sit amet pulvinar. Etiam aliquet, nisi sit amet maximus malesuada, leo dui sagittis massa, non consequat metus erat sed turpis. Vestibulum pharetra sapien eget faucibus rhoncus. Fusce accumsan aliquet augue sed tristique. Donec convallis risus facilisis nisl efficitur, posuere laoreet diam lobortis. Nullam consequat commodo mi, a consectetur augue fringilla ut. Sed sagittis enim massa, at eleifend elit tempus eget. Donec a luctus ipsum. Nunc purus sem, tempor aliquet neque non, lobortis malesuada nisl. Nunc mattis tortor in orci finibus, auctor imperdiet dui volutpat.</p>

  <p>Mauris aliquet neque et ligula pellentesque, vel placerat erat faucibus. Proin dignissim mauris a est rutrum iaculis. Duis mollis tellus ut nisi porta fermentum. Nam sit amet purus vestibulum dolor vestibulum efficitur. Vestibulum in dui placerat, posuere arcu ac, vehicula metus. Nulla vehicula nunc nec lectus efficitur, sit amet sollicitudin urna ullamcorper. Suspendisse nec magna arcu. Vivamus purus lacus, viverra id felis et, tristique pharetra lorem.</p>
`;

const stringLoader = (() => {
  const loadStrings = async () => {
    const langCode = properties.loadLanguageCode();
    
    try {
      const module = await import(`./strings_${ langCode }.mjs`);
      return module.default;
    }
    catch (e) {
      console.error(`Couldn't load strings. ${ e }`);
    }
    return StringES;
  };
  return {
    loadStrings: loadStrings
  };
})();

export {
  NAV_ABOUT_ITEMS,
  NAV_ABOUT_ITEMS_URLS,
  COMPANY_MISSION_CARD_HTML,
  COMPANY_VISION_CARD_HTML,
  COMPANY_OBJECTIVES_CARD_HTML,
  LEGAL_PRIVACY,
  LEGAL_TERMS_AND_CONDITIONS,
  stringLoader
};
