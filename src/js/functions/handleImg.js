import { mainImg, acebi, logoImg, restart,} from "../helpers/Imgs"
import resume from '../../img/resume_Denis_p.pdf'
const work_imgs = document.querySelectorAll('.work_img')
const acce_img = document.querySelector('.accesibility__img')
const logo_img = document.querySelectorAll('.logo__logoImg');
const colorSelect__img = document.querySelectorAll('.colorSelect__img')
const mainButton = document.querySelector('.mainButton')

const handleImg = () => {

    work_imgs.forEach((img, index)=> {
        img.src = mainImg[index]
    })

     logo_img.forEach(img => img.src = logoImg)
     colorSelect__img.forEach(img => img.src = restart)
    acce_img.src = acebi
    mainButton.href = resume
}

export default handleImg;

