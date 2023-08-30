import { IMatch } from '../Interfaces/matches/IMatch';
// import { ITeam } from '../Interfaces/teams/ITeam';

const team = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
};

const resetTeam = () => {
  team.totalPoints = 0;
  team.totalGames = 0;
  team.totalVictories = 0;
  team.totalDraws = 0;
  team.totalLosses = 0;
  team.goalsFavor = 0;
  team.goalsOwn = 0;
};

const victory = (homeTeamGoals: number, awayTeamGoals: number) => {
  team.totalPoints += 3;
  team.totalVictories += 1;
  team.goalsFavor += homeTeamGoals;
  team.goalsOwn += awayTeamGoals;
};

const defeat = (homeTeamGoals: number, awayTeamGoals: number) => {
  team.totalLosses += 1;
  team.goalsFavor += homeTeamGoals;
  team.goalsOwn += awayTeamGoals;
};

const draw = (homeTeamGoals: number, awayTeamGoals: number) => {
  team.totalPoints += 1;
  team.totalDraws += 1;
  team.goalsFavor += homeTeamGoals;
  team.goalsOwn += awayTeamGoals;
};

const home = (homeTeamGoals: number, awayTeamGoals: number) => {
  if (homeTeamGoals > awayTeamGoals) {
    return victory(homeTeamGoals, awayTeamGoals);
  }
  if (homeTeamGoals < awayTeamGoals) {
    return defeat(homeTeamGoals, awayTeamGoals);
  }
  if (homeTeamGoals === awayTeamGoals) {
    return draw(homeTeamGoals, awayTeamGoals);
  }
};

const away = (homeTeamGoals: number, awayTeamGoals: number) => {
  if (awayTeamGoals > homeTeamGoals) {
    return victory(awayTeamGoals, homeTeamGoals);
  }
  if (awayTeamGoals < homeTeamGoals) {
    return defeat(awayTeamGoals, homeTeamGoals);
  }
  if (homeTeamGoals === awayTeamGoals) {
    return draw(awayTeamGoals, homeTeamGoals);
  }
};

const totalPoints = (matches: IMatch[], side: string, name: string) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (name === team.name) {
      resetTeam();
    }
    const s = side === 'home'
      ? home(homeTeamGoals, awayTeamGoals)
      : away(homeTeamGoals, awayTeamGoals);
    return s;
  });
};

const joins = (match: IMatch[], name: string, side: string) => {
  team.name = name;
  totalPoints(match, side, name);

  return team;
};

export default joins;
