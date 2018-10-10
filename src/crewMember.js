class CrewMember {
  constructor(position, currentShip = "Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
  }

  check() {
   return this.currentShip === "Looking for a Rig"
  }

  engageWarpDrive() {
    return (this.check() || this.position !== 'Pilot' ? "had no effect" :
      this.currentShip.warpDrive = "engaged")
  }

  setsInvisibility() {
    return (this.check() || this.position !== 'Defender' ? "had no effect" :
      this.currentShip.cloaked = true)
  }

  chargePhasers() {
    return (this.check() || this.position !== 'Gunner' ? "had no effect" :
     this.currentShip.phasersCharge = "charged")
  }

}
