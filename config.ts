export class config{
    static getCypressConfiguration = require('./cypress.json')
    static getCurrentEnv=config.getCypressConfiguration['currentEnvironment'] 
    static getEnvironment = config.getCypressConfiguration['env'][config.getCypressConfiguration['currentEnvironment']]
    static getFixturesConfiguration = config.getCypressConfiguration['fixtures']

}