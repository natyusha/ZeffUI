/* prettier-ignore */
/* exported language */
var language = [
	{ id: "settingsheader", string: "Einstellungen" },
	{ id: "savesettings", string: "Einstellungen speichern" },
	{ id: "deletesettings", string: "Einstellungen zurücksetzen" },
	{ id: "applytoallelements", string: "Schriftart auf alle Elemente anwenden" },
	{ id: "generaloptions", string: "Allgemeine Optionen" },
	{ id: "exportsettings", string: "Einstellungen exportieren" },
	{ id: "importsettings", string: "Einstellungen importieren" },
	{ id: "exportsettingsjson", string: "JSON exportieren" },
	{ id: "importsettingsjson", string: "JSON importieren" },
	// NAV MENU	
	{ id: "healthmana", string: "Leben / Mana" },
	{ id: "tickers", string: "Ticker" },
	{ id: "timers", string: "Timer" },
	{ id: "cooldowns", string: "Cooldowns" },
	// COMPONENTS
	{ id: "healthbar", string: "Lebensbalken" },
	{ id: "manabar", string: "Manabalken" },
	{ id: "mpticker", string: "MP Ticker" },
	{ id: "dotticker", string: "DoT Ticker" },
	{ id: "hotticker", string: "HoT Ticker" },
	{ id: "pulltimers", string: "Pulltimer" },
	{ id: "bufftimers", string: "Buff Timer" },
	{ id: "dottimers", string: "DoT Timer" },
	{ id: "stacksbar", string: "Stacks Bar" },
	{ id: "raidbuffs", string: "Raid Buffs" },
	{ id: "party", string: "Gruppen Cooldowns" },
	{ id: "skin", string: "Skin" },
	{ id: "language", string: "Sprache" },
	{ id: "mitigations", string: "Defensive CDs" },
	{ id: "customcooldowns", string: "Benutzerdefinierte Cooldowns" },
	{ id: "editcustomcooldowns", string: "Benutzerdefinierte Cooldowns anpassen" },
	{ id: "overrideoptions", string: "Optionen überschreiben" },
	{ id: "importexport", string: "Import / Export" },
	{ id: "debug", string: "Debug" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "Hier findest du allgemeine Einstellungen für ZeffUI." },
	{ id: "healthbardescription", string: "Hier kannst du die Optionen für deinen Lebensbalken anpassen." },
	{ id: "manabardescription", string: "Hier kannst du die Optionen für deinen Manabalken anpassen." },
	{ id: "mptickerdescription", string: "Hier kannst du die Optionen für deinen MP-Ticker anpassen." },
	{ id: "dottickerdescription", string: "Hier kannst du die Optionen für deinen DoT-Ticker anpassen." },
	{ id: "hottickerdescription", string: "Hier kannst du die Optionen für deinen HoT-Ticker anpassen." },
	{ id: "bufftimersdescription", string: "Hier kannst du die Optionen für deine eigenen Buffs anpassen." },
	{ id: "dottimersdescription", string: "Hier kannst du die Optionen für deine eigenen Debuffs anpassen." },
	{ id: "pulltimersdescription", string: "Hier kannst du deinen Pulltimer einstellen." },
	{ id: "stacksbardescription", string: "Hier kannst du die Optionen für deine eigenen Stacks anpassen." },
	{ id: "raidbuffdescription", string: "Hier kannst du die Optionen für Raidbuffs anpassen. (nur DPS Buffs/Debuffs)." },
	{ id: "mitigationdescription", string: "Hier kannst du die Optionen für deine defensiven CDs anpassen." },
	{ id: "customcooldownsdescription", string: "Hier kannst du die Optionen für deine benutzerdefinierte Cooldowns anpassen." },
	{ id: "editcustomcooldownsdescription", string: "Hier kannst du eigene Cooldowns hinzufügen" },
	{ id: "partydescription", string: "Hier kannst du die Optionen für deine Gruppen-Cooldowns anpassen." },
	{ id: "overridedescription", string: "Hier kannst du Standard-Einstellungen von bestimmten Fähigkeiten überschreiben." },
	{ id: "importexportdescription", string: "Hier kannst du Einstellungen Exportieren oder Importieren." },
	{ id: "debugdescription", string: "Hier findest du die Debug-Optionen für ZeffUI." },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "Position X" },
	{ id: "posy", string: "Position Y" },
	{ id: "scale", string: "Skalierung" },
	{ id: "rotation", string: "Rotation" },
	{ id: "padding", string: "Rahmen" },
	{ id: "color", string: "Farbe" },
	{ id: "image", string: "Bild" },
	{ id: "example", string: "Beispiel" },
	{ id: "growleft", string: "Bilder nach links wachsend hinzufügen" },
	{ id: "growdirection", string: "Grow Direction" },
	{ id: "down", string: "Unten" },
	{ id: "up", string: "Oben" },
	{ id: "left", string: "Links" },
	{ id: "right", string: "Rechts" },
	{ id: "columns", string: "Spalten pro Zeile" },
	{ id: "hideoutofcombat", string: "Außerhalb des Kampfes verbergen" },
	{ id: "hidesolo", string: "Außerhalb einer Gruppe verbergen" },
	{ id: "droppedoff", string: "Hide when dropped off" },
	{ id: "alwaysshow", string: "Fähigkeiten immer anzeigen (wenn sie nicht auf Cooldown sind)" },
	{ id: "textformat", string: "Text-Format" },
	{ id: "font", string: "Schriftart" },
	{ id: "healthtext", string: "Lebens-Text" },
	{ id: "manatext", string: "Mana-Text" },
	{ id: "pulltimertext", string: "Pulltimer-Text" },
	{ id: "bufftext", string: "Buff-Text" },
	{ id: "dottext", string: "DoT-Text" },
	{ id: "multidot", string: "MultiDoT (noch nicht implementiert)" },
	{ id: "ability", string: "Fähigkeit" },
	{ id: "abilityenabled", string: "Fähigkeit aktiviert" },
	{ id: "duration", string: "Dauer" },
	{ id: "cooldown", string: "Cooldown" },
	{ id: "overridedefaults", string: "Standards überschreiben" },
	{ id: "ttsenabled", string: "TTS aktiviert" },
	{ id: "ttstype", string: "TTS-Typ" },
	{ id: "abilitycooldown", string: "Fähigkeits-Cooldown" },
	{ id: "abilityduration", string: "Fähigkeits-Dauer" },
	{ id: "oncast", string: "On Cast" },
	{ id: "durationcolor", string: "Dauer Farbe" },
	{ id: "cooldowncolor", string: "Cooldown Farbe" },
	{ id: "durationoutlinecolor", string: "Dauer Rahmen-Farbe" },
	{ id: "cooldownoutlinecolor", string: "Cooldown Rahmen-Farbe" },
	{ id: "durationbold", string: "Dauer fetter Text" },
	{ id: "cooldownbold", string: "Cooldown fetter Text" },
	{ id: "durationoutline", string: "Dauer Rahmen" },
	{ id: "cooldownoutline", string: "Cooldown Rahmen" },
	{ id: "includealliance", string: "Allianz-Mitglieder zu Partymitgliedern hinzuzählen" },
	{ id: "orderbypartymember", string: "Nach Party-Mitglied ordnen" },
	{ id: "order", string: "Reihenfolge" },
	{ id: "partyorder", string: "Party-Reihenfolge (drag and drop)" },
	{ id: "mode", string: "Modus" },
	{ id: "add", string: "Hinzufügen" },
	{ id: "edit", string: "Bearbeiten" },
	{ id: "delete", string: "Löschen" },
	{ id: "save", string: "Speichern" },
	{ id: "noabilitiesfound", string: "Keine Fähigkeiten gefunden..." },
	{ id: "search", string: "Suche" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "Job / Rolle" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "Baidu TTS benutzen" },
	{ id: "jobthresholds", string: "Job Thresholds" },
	{ id: "lowcolor", string: "Low Color" },
	{ id: "medcolor", string: "Medium Color" },
	{ id: "specificjobsonly", string: "Nur für spezifische Jobs" },
	{ id: "ttsearly", string: "TTS x Sekunden früher" },
	{ id: "charges", string: "Aufladungen" },
	{ id: "warning", string: "Warnung!" },
	{ id: "textalign", string: "Text Align" },
	{ id: "center", string: "Center" },
	{ id: "alwaystick", string: "Always Tick" },
	{ id: "usehdicons", string: "HD Icons benutzen" },
	{ id: "type", string: "Typ" },
	{ id: "staticfontsizeenabled", string: "Statische Schriftgröße aktiviert" },
	{ id: "staticfontsize", string: "Statische Schriftgröße" },
	{ id: "fontxoffset", string: "SChriftart X Offset" },
	{ id: "fontyoffset", string: "Schriftart Y Offset" },
	{ id: "setjob", string: "SET JOB" },
	// SKINS
	{ id: "skindefault", string: "Standard (by Square Enix)" },
	{ id: "skinmaterialdark", string: "Material Dark (by skotlex)" },
	{ id: "skinmaterialdiscord", string: "Material Discord (by skotlex)" },
	{ id: "skinhydaelyn", string: "Hydaelyn UI (by Vec7rex)" },
	// COLORS
	{ id: "colordarkred", string: "dunkelrot" },
	{ id: "colorbrightred", string: "hellrot" },
	{ id: "colorbabyblue", string: "babyblau" },
	{ id: "colorgreenblue", string: "grünblau" },
	{ id: "colortoxicgreen", string: "Toxic Grün" },
	{ id: "colorlightblue", string: "hellblau" },
	{ id: "colordarkblue", string: "dunkelblau" },
	{ id: "colordarkgreen", string: "dunkelgrün" },
	{ id: "colorjunglegreen", string: "dschungelgrün" },
	{ id: "colorpurple", string: "lila" },
	{ id: "colorfuchsia", string: "Magenta" },
	{ id: "colorlightpink", string: "hellpink" },
	{ id: "colorlightgold",	string: "hellgold"  },
	{ id: "colordarkgold", string: "dunkelgold" },
	{ id: "colororange", string: "orange" },
	{ id: "colorgrey", string: "grau" },
	// JOBS	
	{ id: "pld", string: "Paladin" },
	{ id: "gla", string: "Gladiator" },
	{ id: "war", string: "Krieger" },
	{ id: "mrd", string: "Marodeur" },
	{ id: "drk", string: "Dunkelritter" },
	{ id: "gnb", string: "Revolverklinge" },
	{ id: "whm", string: "Weißmagier" },
	{ id: "cnj", string: "Hermetiker" },
	{ id: "sch", string: "Gelehrter" },
	{ id: "ast", string: "Astrologe" },
	{ id: "mnk", string: "Mönch" },
	{ id: "pgl", string: "Faustkämpfer" },
	{ id: "drg", string: "Dragoon" },
	{ id: "lnc", string: "Pikenier" },
	{ id: "nin", string: "Ninja" },
	{ id: "rog", string: "Schurke" },
	{ id: "sam", string: "Samurai" },
	{ id: "brd", string: "Barde" },
	{ id: "arc", string: "Waldläufer" },
	{ id: "mch", string: "Machinist" },
	{ id: "dnc", string: "Tänzer" },
	{ id: "blm", string: "Schwarzmagier" },
	{ id: "thm", string: "Thaumaturg" },
	{ id: "smn", string: "Beschwörer" },
	{ id: "acn", string: "Hermetiker" },
	{ id: "rdm", string: "Rotmagier" },
	{ id: "blu", string: "Blaumagier" },
	{ id: "tank", string: "Tank" },
	{ id: "healer", string: "Heiler" },
	{ id: "meleedps", string: "Melee DPS" },
	{ id: "rangeddps", string: "Physical Ranged DPS" },
	{ id: "casterdps", string: "Magic Ranged DPS" },
	{ id: "melee", string: "Melee" },
	{ id: "ranged", string: "Ranged" },
	{ id: "caster", string: "Caster" },
	// UI TEXT
	{ id: "dot-anchor", string: "DoT Anchor" },
	{ id: "buff-anchor", string: "Buff Anchor" },
	{ id: "raidbuffs-anchor", string: "Raidbuffs Anchor" },
	{ id: "mitigation-anchor", string: "Mitigations Anchor" },
	{ id: "party-anchor", string: "Party Anchor" },
	{ id: "customcd-anchor", string: "CustomCD Anchor" },
	{ id: "pulltimer", string: "Pulltimer" },
	// CONTEXT MENU
	{ id: "lock", string: "Lock/Unlock Bars" },
	{ id: "grid", string: "Toggle Grid" },
	{ id: "reload", string: "Reload" },
	{ id: "settings", string: "Settings" },
	{ id: "close", string: "Close" },
	// MESSAGES
	{ id: "jsonwarning", string: "Exportiere/importiere nur als JSON wenn du weißt was du tust!" },
	{ id: "reloadoverlay", string: "Bitte reloade das Overlay um das Zurücksetzen der Einstellungen abzuschließen." },
	{ id: "saveandclosewindow", string: "Willst du deine Einstellungen speichern und dieses Fenster schließen?" },
	{ id: "deleteallsettings", string: "Bist du sicher, dass du alle Einstellungen löschen willst?" },
	{ id: "activesettingswindow", string: "Es ist bereits ein anderes Einstellungs-Fenster geöffnet, möchtest du dieses schließen und ein neues öffnen?" },
	{ id: "currentsettingscopied", string: "Deine aktuellen Einstellungen wurden in deine Zwischenablage kopiert." },
	{ id: "importsettingsoverwrite", string: "Bist du sicher, dass du diese Einstellungen importieren möchtest? Dies wird alle deine vorherigen Einstellungen überschreiben" },
	{ id: "invalidsettingsstring", string: "Fehlerhafter settings string, bitte überprüfe deine Eingabe." },
	{ id: "lockoverlay", string: "PLEASE LOCK THE OVERLAY IN ACT TO BE ABLE TO MOVE THE ANCHORS!" },	
];
