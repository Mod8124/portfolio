import { svgGithub, svgFigma } from '../helpers/SvgFiles.js';

export const createLinkProject = (url, type, small = false) => {
    return `
       <a href="${url}" class="${
        small && 'figma'
    } modalImg__linkSvg" target="_blank">
                            ${type === 'Github' ? 'Github' : 'Figma'}
                            ${type === 'Github' ? svgGithub : svgFigma}
      </a>
   `;
};
