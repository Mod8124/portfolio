import { particleOPtions } from '../helpers/particleOptions.js';

export function setParticle(color) {
    particleOPtions['particles']['color'].value = color;
    // eslint-disable-next-line no-undef
    particlesJS('particles-js', particleOPtions);
}
