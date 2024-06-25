function findLeastPlanesToBeTaken(planes) {
    let maxDistanceCanBeCovered = 0;
    let numberOfPlanesTaken = 0;
    let currentPosition = 0;
    
    // Check if the array is empty
    if (planes.length === 0) {
        return -1;
    }
    // Check if the number of airports is already 1
    if (planes.length === 1) {
        return 0;
    }

    for (let currentPlane = 0; currentPlane < planes.length; currentPlane++) {
        let fuel = planes[currentPlane];
        let distanceCanBeCovered = currentPlane + fuel;
        
        maxDistanceCanBeCovered = Math.max(maxDistanceCanBeCovered, distanceCanBeCovered);

        if (currentPlane >= currentPosition) {
            if (currentPosition >= planes.length - 1) {
                return numberOfPlanesTaken;
            }
            numberOfPlanesTaken++;
            currentPosition = maxDistanceCanBeCovered;
            if (currentPosition <= currentPlane) {
                return -1;
            }
        }
    }
    return numberOfPlanesTaken;
}

let planes = [2,1,2,3,1];
console.log(findLeastPlanesToBeTaken(planes));
