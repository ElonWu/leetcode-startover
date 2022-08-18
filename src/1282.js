/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
  const result = [], notFullTeam = {}

  for(let i = 0; i < groupSizes.length; i++) {
      const size = groupSizes[i], team = [...(notFullTeam[size] || []), i];

      // 当前分组满员
      if(team.length === size) {
          result.push(team);
          notFullTeam[size] = null;
      } else {
          notFullTeam[size] = team;
      }
  }

  return result;
};