import { world, system } from "@minecraft/server";

const skillRegistry = [
  { id: "01", name: "ECLIPSE RAY", cooldown: 5, radius: 12, damage: 18, color: "§6" },
  { id: "02", name: "EVENT HORIZON", cooldown: 7, radius: 14, damage: 22, color: "§8" },
  { id: "03", name: "BLACK HOLE", cooldown: 10, radius: 16, damage: 30, color: "§0" },
  { id: "04", name: "SPACETIME", cooldown: 8, radius: 15, damage: 25, color: "§d" },
  { id: "05", name: "CHRONO WHEEL", cooldown: 9, radius: 12, damage: 28, color: "§b" },
  { id: "06", name: "WHEEL OF FATE", cooldown: 11, radius: 16, damage: 34, color: "§e" },
  { id: "07", name: "ABSOLUTE VOID", cooldown: 12, radius: 18, damage: 39, color: "§7" },
  { id: "08", name: "THE END", cooldown: 13, radius: 18, damage: 42, color: "§5" },
  { id: "09", name: "ANNIHILATION OF ALL THINGS", cooldown: 18, radius: 20, damage: 52, color: "§c" },
  { id: "10", name: "SINGULARITY COLLAPSE", cooldown: 14, radius: 17, damage: 46, color: "§3" },
  { id: "11", name: "ORBITAL STRIKE", cooldown: 10, radius: 14, damage: 30, color: "§a" },
  { id: "12", name: "WHEEL OF NIRVANA", cooldown: 12, radius: 16, damage: 35, color: "§f" },
  { id: "13", name: "LUNAR IMPACT", cooldown: 9, radius: 13, damage: 33, color: "§9" },
  { id: "14", name: "METEOR RAIN", cooldown: 11, radius: 15, damage: 36, color: "§6" },
  { id: "15", name: "LUNAR SEVER", cooldown: 12, radius: 15, damage: 38, color: "§b" },
  { id: "16", name: "GILIERIUM NAVIEM", cooldown: 15, radius: 18, damage: 44, color: "§d" },
  { id: "17", name: "SOUL OF GOD", cooldown: 16, radius: 18, damage: 49, color: "§e" },
  { id: "18", name: "THE SHOOTING STAR", cooldown: 8, radius: 12, damage: 32, color: "§6" },
  { id: "19", name: "TON 618", cooldown: 14, radius: 17, damage: 42, color: "§8" },
  { id: "20", name: "TACTICAL NUKE", cooldown: 15, radius: 17, damage: 50, color: "§c" },
  { id: "21", name: "IMMORTAL CELESTIAL SWORD", cooldown: 9, radius: 12, damage: 29, color: "§7" },
  { id: "22", name: "SATELLITE LASER CANNON", cooldown: 12, radius: 15, damage: 39, color: "§7" },
  { id: "23", name: "SEVERED IMPACT FRAME", cooldown: 9, radius: 12, damage: 31, color: "§4" },
  { id: "24", name: "MIRROR CITADEL", cooldown: 11, radius: 14, damage: 35, color: "§f" },
  { id: "25", name: "STELLAR HEXAGRAM CONSTELLATION", cooldown: 13, radius: 16, damage: 41, color: "§b" },
  { id: "26", name: "RIP MY PC", cooldown: 17, radius: 18, damage: 55, color: "§c" },
  { id: "27", name: "GREATER TELEPORTATION", cooldown: 7, radius: 10, damage: 20, color: "§a" },
  { id: "28", name: "SOUL GLUTTONY", cooldown: 11, radius: 14, damage: 34, color: "§d" },
  { id: "29", name: "NIHILITY COLLAPSE", cooldown: 15, radius: 17, damage: 48, color: "§8" },
  { id: "30", name: "IMAGINARY SPACE", cooldown: 12, radius: 14, damage: 37, color: "§5" },
  { id: "31", name: "SPACETIME DOMINATION", cooldown: 16, radius: 19, damage: 51, color: "§b" },
  { id: "32", name: "MULTIDIMENSIONAL BARRIER", cooldown: 10, radius: 12, damage: 24, color: "§e" },
  { id: "33", name: "TRUE DRAGON RELEASE", cooldown: 12, radius: 15, damage: 40, color: "§3" },
  { id: "34", name: "TRUE DRAGON NUCLEATION", cooldown: 14, radius: 16, damage: 43, color: "§6" },
  { id: "35", name: "INSTANT DEATH", cooldown: 20, radius: 18, damage: 90, color: "§4" },
  { id: "36", name: "HEAVENLY DAO — WORLD ANNIHILATION", cooldown: 22, radius: 20, damage: 95, color: "§c" },
  { id: "37", name: "AZATHOTH", cooldown: 18, radius: 18, damage: 60, color: "§0" },
  { id: "38", name: "VENUZDONOA", cooldown: 13, radius: 15, damage: 44, color: "§4" },
  { id: "39", name: "GUNGNIR", cooldown: 9, radius: 12, damage: 30, color: "§6" },
  { id: "40", name: "LONGINUS", cooldown: 10, radius: 12, damage: 31, color: "§7" },
  { id: "41", name: "ABYSS", cooldown: 12, radius: 15, damage: 36, color: "§0" },
  { id: "42", name: "DUNGEON BREAK", cooldown: 15, radius: 17, damage: 46, color: "§c" },
  { id: "43", name: "DIVINE REALM", cooldown: 16, radius: 18, damage: 50, color: "§e" },
  { id: "44", name: "PRIMORDIAL REALM", cooldown: 17, radius: 17, damage: 54, color: "§d" },
  { id: "45", name: "EREN'S STREAM", cooldown: 11, radius: 14, damage: 35, color: "§b" },
  { id: "46", name: "CELESTIAL ANGEL", cooldown: 12, radius: 15, damage: 40, color: "§f" },
  { id: "47", name: "MULTIVERSE", cooldown: 15, radius: 18, damage: 47, color: "§9" },
  { id: "48", name: "OMNIVERSE", cooldown: 16, radius: 18, damage: 52, color: "§a" },
  { id: "49", name: "INFINITE POWER", cooldown: 18, radius: 20, damage: 60, color: "§e" },
  { id: "50", name: "DIMENSION BREAK", cooldown: 14, radius: 17, damage: 45, color: "§5" },
  { id: "51", name: "SUPERNOVA", cooldown: 18, radius: 18, damage: 58, color: "§6" },
  { id: "52", name: "DARK MATTER", cooldown: 14, radius: 17, damage: 47, color: "§8" },
  { id: "53", name: "HOLY GRAIL", cooldown: 12, radius: 15, damage: 38, color: "§f" },
  { id: "54", name: "THE FORGOTTEN GOD", cooldown: 19, radius: 18, damage: 64, color: "§c" },
  { id: "55", name: "SS-01 — THE SHOOTING STAR", cooldown: 13, radius: 15, damage: 41, color: "§6" },
  { id: "56", name: "SS-04 — SEVEN STARS", cooldown: 12, radius: 15, damage: 38, color: "§b" },
  { id: "57", name: "CRIMSON APOCALYPSE", cooldown: 18, radius: 18, damage: 61, color: "§4" },
  { id: "58", name: "PLANETARY GRAVEYARD", cooldown: 17, radius: 18, damage: 57, color: "§6" },
  { id: "59", name: "EYE OF PROVIDENCE", cooldown: 10, radius: 13, damage: 36, color: "§e" },
  { id: "60", name: "THRONE OF ETERNITY", cooldown: 17, radius: 18, damage: 59, color: "§a" },
  { id: "61", name: "FALLEN SERAPH", cooldown: 11, radius: 14, damage: 39, color: "§d" },
  { id: "62", name: "URANUS", cooldown: 12, radius: 15, damage: 40, color: "§7" },
  { id: "63", name: "COSMIC", cooldown: 15, radius: 17, damage: 49, color: "§b" },
  { id: "64", name: "ZERO", cooldown: 14, radius: 16, damage: 48, color: "§0" },
  { id: "65", name: "NEBULA", cooldown: 13, radius: 15, damage: 42, color: "§9" }
];

const skillCooldowns = new Map();

function getSkillById(id) {
  return skillRegistry.find((skill) => skill.id === id);
}

function canCast(player, skill) {
  const key = `${player.nameTag}:${skill.id}`;
  const now = Date.now();

  if (skillCooldowns.has(key)) {
    const last = skillCooldowns.get(key);
    const diff = now - last;
    const needed = skill.cooldown * 1000;

    if (diff < needed) {
      const left = Math.ceil((needed - diff) / 1000);
      player.runCommand(`title @s actionbar ${skill.color}Cooldown: ${left}s`);
      return false;
    }
  }

  skillCooldowns.set(key, now);
  return true;
}

function spawnAura(player, skill) {
  const x = player.location.x;
  const y = player.location.y + 1;
  const z = player.location.z;

  player.runCommand(`particle minecraft:totem_particle ${x} ${y} ${z} 1.2 1.2 1.2 0.25 35`);
  player.runCommand(`particle minecraft:dragon_breath_trail ${x} ${y} ${z} 1.0 1.0 1.0 0.15 30`);
  player.runCommand(`playsound random.orb @s ~ ~ ~ 0.8 1.0`);
  player.runCommand(`title @s actionbar ${skill.color}${skill.name} §7| §aCAST`);
}

function applyAoE(player, skill) {
  const dimension = player.dimension;
  const entities = dimension.getEntities({
    location: player.location,
    maxDistance: skill.radius
  });

  for (const entity of entities) {
    if (entity === player) continue;

    const type = entity.typeId;
    if (
      type === "minecraft:player" ||
      type === "minecraft:zombie" ||
      type === "minecraft:skeleton" ||
      type === "minecraft:creeper" ||
      type === "minecraft:spider" ||
      type === "minecraft:armor_stand"
    ) {
      entity.applyDamage(skill.damage);
    }
  }
}

function castSkill(player, skillId) {
  const skill = getSkillById(skillId);

  if (!skill) {
    player.runCommand("title @s actionbar §cUnknown Skill");
    return;
  }

  if (!canCast(player, skill)) return;

  spawnAura(player, skill);
  applyAoE(player, skill);
}

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const item = event.itemStack;

  if (!item) return;
  if (item.typeId !== "suo:galaxy_remote") return;

  castSkill(player, "63");
});

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const data = event.message;
  if (!data || typeof data !== "string" || !data.startsWith("{")) return;

  try {
    const obj = JSON.parse(data);
    if (!obj.skillId) return;

    const player = event.sourceEntity;
    if (player) castSkill(player, obj.skillId);
  } catch (error) {
    // ignore invalid JSON
  }
});

system.beforeEvents.chatSend.subscribe((event) => {
  const msg = event.message.trim();

  if (msg.startsWith("/suo cast ")) {
    const skillId = msg.replace("/suo cast ", "").trim();
    const player = event.sender;

    if (skillId) {
      castSkill(player, skillId);
    }

    event.cancel = true;
  }

  if (msg === "/suo menu") {
    const player = event.sender;
    player.runCommand("function suo:skill_menu");
    event.cancel = true;
  }
});
