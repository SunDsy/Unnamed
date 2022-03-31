const chooseOptimalDistance = (t, k, ls) => {
    let totalDistance = 0
    let longestDistance = 0

    for (let i = 0; i < ls.length; i++) {
        totalDistance = 0
        for (let j = 0; j < ls.length; j++) {
            totalDistance += ls[i]
            if (totalDistance > t) {
                totalDistance -= ls[j]
                if (totalDistance > longestDistance) {
                    longestDistance = totalDistance
                }
            }
        }
    }

    console.log(longestDistance)

    if (k <= ls.length) {
        return longestDistance
    } else {
        return null
    }
}

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null