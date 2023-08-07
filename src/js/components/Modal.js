import images from '../helpers/projectsInfo.js';
const imgLinks = images.frontImgLinks;

// set skills icons to modal
export function createSkills(index) {
    return imgLinks[index].icons
        .map((icon) => {
            let lowerICons = icon.toLowerCase();
            if (lowerICons === 'rtk query') lowerICons = 'redux';
            if (lowerICons === 'vue-router') lowerICons = 'vue';
            return `
      <span class="modalImg__skill">
      <img class="modalImg__skillImg" src="./assets/img/icons/icons__stack/icon-${lowerICons}.svg" alt="icons + ${lowerICons}">
      <h5>${icon}</h5>
      </span>
    `;
        })
        .join('');
}
