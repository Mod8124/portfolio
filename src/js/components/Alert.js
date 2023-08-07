const doc = document,
    msgLanguage = {
        ES: '😋 No funciona, pagos pendientes del servidor',
        EN: '😝 Not working due to unpaid server fees'
    },
    englishBtn = document.querySelector('.btn__language');

export const createAlert = () => {
    const alert = doc.createElement('article');
    const alertBar = doc.createElement('div');
    const alertContent = doc.createElement('div');

    alertContent.classList.add('alert__content');
    alertBar.classList.add('alert__bar');
    alert.classList.add('alert');

    alert.appendChild(alertContent);
    alert.appendChild(alertBar);

    // html content alert accordly to lng
    alertContent.innerHTML = msgLanguage.EN;

    if (!englishBtn.classList.contains('active'))
        alertContent.innerHTML = msgLanguage.ES;

    // appendChild to the body
    doc.body.appendChild(alert);

    // add the alert show class
    setTimeout(() => {
        alert.classList.add('show');
    }, 100);

    // remove the alert by class
    setTimeout(() => {
        alert.classList.remove('show');

        // remove the alert from the body
        setTimeout(() => doc.body.removeChild(alert), 100);
    }, 4120);
};
