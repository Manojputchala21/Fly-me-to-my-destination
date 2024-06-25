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
        // find the maximum distance the plane can cover
        let distanceCanBeCovered = currentPlane + fuel;
        // Store the longest of the distance the planes covered
        maxDistanceCanBeCovered = Math.max(maxDistanceCanBeCovered, distanceCanBeCovered);

        //Point to the latest airport if the planes record is broken
        if (currentPlane >= currentPosition) {
            if (currentPosition >= planes.length - 1) {
                return numberOfPlanesTaken;
            }
            // increment the numbers of planes taken
            numberOfPlanesTaken++;
            currentPosition = maxDistanceCanBeCovered;
            // return -1 if the plane cannot travel further
            if (currentPosition <= currentPlane) {
                return -1;
            }
        }
    }
    return numberOfPlanesTaken;
}

let planes = [2,1,2,3,1];
console.log( "Least number of planes required to change : "+ findLeastPlanesToBeTaken(planes));
