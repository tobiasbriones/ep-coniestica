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

const NAV_ABOUT_ITEMS = [
  'Misión',
  'Visión',
  'Objetivos',
  'Contacto'
];

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
          En nuestra espectativas reside:

          <ul>
              <li><strong>Manejo y organizacion:</strong> Ser transparentes y brindar nuestras soluciones
                  incorporadas para rastrear los problemas y permitir soluciones inmediatas.</li>
              <li><strong>Versatilidad:</strong> Manejamos cualquier incoveniente dado de forma rápida y
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
            <li>Desarrollar las mejores estrategias para ser una compañia amigable y económica para la persona individual.</li>
            <li>Ofrecer a nuestros clientes el máximo valor agregado que necesitan con la mayor sencillez posible.</li>
        </ul>
    </p>
</div>
`;

const COMPANY_OBJECTIVES_CARD_HTML = `
<div class="center">
    <span>Objetivos</span>
    <p class='center'>
        Objetivos generales
        <ul>
            <li>Expandirse por todo el mundo</li>
            <li>Ser una marca líder en el mercado</li>
            <li>Aumentar el número de activos</li>
            <li>Ser una marca reconocida en el mercado</li>
            <li>Crear 100 nuevos empleos en la zona norte de Honduras</li>
        </ul>
    </p>
    <p class='margin center'>
        Objetivos específicos
        <ul>
            <li>Aumentar el número de trabajadores de 10 a 12 en un mes</li>
            <li>Aumentar la eficiencia de la comunicación con el cliente en un 20% para el próximo año</li>
            <li>Abrir 3 nuevos locales comerciales en España para el primer trimestre del próximo año</li>
        </ul>
    </p>
</div>
`;

export { 
  NAV_ABOUT_ITEMS,
  NAV_ABOUT_ITEMS_URLS,
  COMPANY_MISSION_CARD_HTML,
  COMPANY_VISION_CARD_HTML,
  COMPANY_OBJECTIVES_CARD_HTML
}
