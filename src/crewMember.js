class CrewMember {
    constructor(position) {
      this.position = position
      this.currentShip = "Looking for a rig"
    }

    engageWarpDrive() {
      if (typeof(this.currentShip) == "object" && this.position == "Pilot") {
        this.currentShip.warpDrive = "engaged";
      } else {
        return "had no effect"
      }
    }

    setsInvisibility() {
      return typeof(this.currentShip) == "object" && this.position == "Defender")
      ? this.currentShip.cloaked = true;
      : return "had no effect"
    }

    chargePhasers() {
      return typeof(this.currentShip) == "object" && this.position == "Gunner" 
      ? this.currentShip.phasersCharge = "charged";
      : return "had no effect"
      }
    }
}

// export default CrewMember;
