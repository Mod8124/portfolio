const doc = document,
    msgLanguage = {
        ES: '😋 No funciona, pagos pendientes del servidor',
        EN: '😝 Not working due to unpaid server fees'
    },
    englishBtn = document.querySelector('.btn__language');

//  check when the server-side free hosting is going to end
export const isServerOut = () => {
    const startDay = new Date(2023, 5, 15); // start it day on server-side services
    const currentDay = new Date();
    const initialState = 5.0;
    const currentSpendingRate = 0.104;
    let spendingState = 1.25; // in 10 days I spend this cost
    let daysBetween = Math.ceil(
        (currentDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)
    ); // 12 days

    while (spendingState < initialState) {
        daysBetween++;
        spendingState += currentSpendingRate;
    }

    // last day the hosting server is available in date
    const lastDay = new Date();
    lastDay.setDate(lastDay.getDate() + daysBetween);

    // check if the current day is more than lessDay
    if (new Date(2023, 7, 30).getTime() > lastDay.getTime()) {
        return true;
    }

    return false;
};

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
