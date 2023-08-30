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

const totalPoints = (matches: IMatch[]) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals > awayTeamGoals) {
      return victory(homeTeamGoals, awayTeamGoals);
    }
    if (homeTeamGoals < awayTeamGoals) {
      return defeat(homeTeamGoals, awayTeamGoals);
    }
    if (homeTeamGoals === awayTeamGoals) {
      return draw(homeTeamGoals, awayTeamGoals);
    }
  });
};

const joins = (match: IMatch[], name: string) => {
  team.name = name;
  totalPoints(match);

  return team;
};

export default joins;
