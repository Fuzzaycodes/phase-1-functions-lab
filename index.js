function distanceFromHqInBlocks(someValue) {
    const hqBlock = 42;
    return Math.abs(someValue - hqBlock);
  }
  
  // Function to calculate distance from HQ in feet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // 1 block = 264 feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  