const recovery = confirmed => {
    let num = 0;

    if (confirmed > 1000000) {
        num = Math.round(Math.random() * 1000000);
        if (num > 100000) {
            return num;
        }
        else {
            return recovery(confirmed);
        }
    }
    else if (confirmed > 100000) {
        num = Math.round(Math.random() * 100000);
        if (num > 10000) {
            return num;
        }
        else {
            return recovery(confirmed);
        }
    }
    else if (confirmed > 10000) {
        num = Math.round(Math.random() * 10000);
        if (num > 1000) {
            return num;
        }
        else {
            return recovery(confirmed);
        }
    }
    else {
        num = Math.round(Math.random() * 1000);
        return num;
    }
}

export { recovery };