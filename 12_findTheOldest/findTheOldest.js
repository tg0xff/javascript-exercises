const findTheOldest = function (people) {
  return people.reduce(
    (oldest, person) => {
      const currentYear = new Date().getFullYear();
      let personKnownYear = person.yearOfDeath;
      let oldestKnownYear = oldest.yearOfDeath;
      if (personKnownYear === undefined) {
        personKnownYear = currentYear;
      }
      if (oldestKnownYear === undefined) {
        oldestKnownYear = currentYear;
      }
      const personAge = personKnownYear - person.yearOfBirth;
      const oldestAge = oldestKnownYear - oldest.yearOfBirth;
      return (personAge > oldestAge) ? person : oldest;
    },
    { yearOfDeath: 0, yearOfBirth: 0 },
  );
};

// Do not edit below this line
module.exports = findTheOldest;
