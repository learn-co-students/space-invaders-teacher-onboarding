// import CrewMember from './crewMem/ber'

class Spaceship {
  constructor(name, crew, x, y) {
    this.crew = crew
    this.name = name
    this.phasers = x
    this.shields = y
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = this.docked()
    this.phasersCharge = "uncharged"
    if (crew.length !== 0){
      crew.forEach(i => i.currentShip = this)
    }
  }

  docked(){
    return !this.crew.length
  }
}
