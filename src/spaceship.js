class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = 'uncharged'){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    this.crewCheck()
  }

  crewCheck() {

    if(this.crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
      this.crew.forEach(crew => {
        crew.currentShip = this
      })
    }
  }
}


