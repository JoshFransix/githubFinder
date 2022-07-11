export default class Github {
  constructor() {
    this.client_id = '21652307124d82a89318'
    this.client_secret = '04eb9bea1d66324d103954fc0e82a6f721c5af01'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }

  }
}

