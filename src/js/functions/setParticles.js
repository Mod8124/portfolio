import { particleOPtions } from '../helpers/particleOptions.js';

export function setParticle(color) {
  particleOPtions['particles']['color'].value = color;
  particlesJS('particles-js', particleOPtions);
}
