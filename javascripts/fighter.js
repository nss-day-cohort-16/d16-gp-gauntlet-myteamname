"use strict";

var fighter = function(pc, npc){
  let modPc = pc;
  let modNpc = npc;

  // magic ? pcWeapDam = sphere.damage
  let calcMagic = (char) => {
    return char.magical ? char.spell.damage : char.weapon.damage;
  };

  // calc strMod || intMod
  let statMod = (char) => {
    if (char.magical){
      return (char.intelligence / 100) + 1;
    } else {
      return (char.strength / 100) + 1;
    }
  };

  // critMod is ddative to the final damage
    // generate crit ? critmod 
  let critCalc = (char) => {
    return Math.random() < char.critChance ? char.critDamage : 0;
  };

  // get a hit location
    // calc damage modifier
  //  determine hit location
    // calc locMod
  let locMod = 1;
  let hitLoc = (char) => {
    let randLoc = Math.floor(Math.random() * char.limbs.length);
    char.hitLocation = "torso";
    switch (randLoc) {
      case 0:
        char.hitLocation = char.limbs[0];
        locMod = 2;
        break;
      case 1:
        char.hitLocation = char.limbs[1];
        locMod = 1.5;
        break;
      case 2:
        char.hitLocation = char.limbs[2];
        locMod = 0.75;
        break;
      case 3:
        char.hitLocation = char.limbs[3];
        locMod = 0.75;
        break;
      case 4:
        char.hitLocation = char.limbs[4];
        locMod = 1;
        break;
    }
  };

  let pcDamage = Math.floor(calcMagic(pc) * statMod(pc) * locMod + critCalc(pc));
  modNpc.health -= pcDamage;
  if (modNpc.health < 1){
    modNpc.health = 0;
    return [modPc, modNpc];
  }

  let npcDamage = Math.floor(calcMagic(npc) * statMod(npc) * locMod + critCalc(npc));
  modPc.health -= npcDamage;
  if (modPc.health < 1){
    modPc.health = 0;
    return [modPc, modNpc];
  }

  return [modPc, modNpc];
};


module.exports = fighter;