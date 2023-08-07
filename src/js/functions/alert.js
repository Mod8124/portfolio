//  check when the server-side free hosting is going to end
export const isServerOut = () => {
    const startDay = new Date(2023, 5, 15); // start it day on server-side services
    const currentDay = new Date();
    const initialState = 5.0;
    const currentSpendingRate = 0.104;

    if (currentSpendingRate === 5.0) return true;

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
    if (lastDay.getTime() > new Date(2023, 7, 30).getTime()) {
        return true;
    }

    return false;
};
