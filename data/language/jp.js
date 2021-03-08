/* exported language */
var language = [
	{ id: "settingsheader", string: "設定" },
	{ id: "savesettings", string: "設定を保存" },
	{ id: "deletesettings", string: "Delete Settings" },
	{ id: "applytoallelements", string: "Apply default font to all elements" },
	{ id: "generaloptions", string: "一般設定" },
	{ id: "exportsettings", string: "Export Settings" },
	{ id: "importsettings", string: "Import Settings" },
	// COMPONENTS
	{ id: "healthbar", string: "HPバー" },
	{ id: "manabar", string: "MPバー" },
	{ id: "mpticker", string: "MP Ticker" },
	{ id: "pulltimers", string: "戦闘開始カウント" },
	{ id: "bufftimers", string: "バフタイマー" },
	{ id: "dottimers", string: "DoTタイマー" },
	{ id: "stacksbar", string: "スタックバー" },
	{ id: "raidbuffs", string: "レイドバフ" },
	{ id: "party", string: "Party Cooldowns" },
	{ id: "skin", string: "スキン" },
	{ id: "language", string: "言語" },
	{ id: "mitigations", string: "軽減バフ" },
	{ id: "customcooldowns", string: "Custom Cooldowns" },
	{ id: "editcustomcooldowns", string: "Edit Custom Cooldowns" },
	{ id: "overrideoptions", string: "Override Options" },
	{ id: "importexport", string: "Import / Export" },
	{ id: "debug", string: "Debug" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "ZeffUIの全般に関する設定をすることが出来ます。" },
	{ id: "healthbardescription", string: "HPバーの設定をすることが出来ます。" },
	{ id: "manabardescription", string: "MPバーの設定をすることが出来ます。" },
	{ id: "mptickerdescription", string: "Here you can set your options for your MP Ticker" },
	{ id: "bufftimersdescription", string: "自己バフの設定をすることが出来ます。" },
	{ id: "dottimersdescription", string: "自分のデバフについて設定することが出来ます。" },
	{ id: "pulltimersdescription", string: "戦闘開始カウントについて設定することが出来ます。" },
	{ id: "stacksbardescription", string: "スタックバーについて設定することが出来ます。" },
	{ id: "raidbuffdescription", string: "レイドバフについて設定することが出来ます。(シナジーのみ)" },
	{ id: "mitigationdescription", string: "軽減バフについて設定することが出来ます。" },
	{ id: "customcooldownsdescription", string: "Here you can set your options for your custom cooldowns." },
	{ id: "editcustomcooldownsdescription", string: "Here you can edit custom cooldown abilities." },
	{ id: "partydescription", string: "Here you can set your options for your party cooldowns." },
	{ id: "overridedescription", string: "Here you can change specific default settings for all abilities." },
	{ id: "importexportdescription", string: "Here you can import or export your settings." },
	{ id: "debugdescription", string: "Here you can find debug options for ZeffUI." },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "ポジション X" },
	{ id: "posy", string: "ポジション Y" },
	{ id: "scale", string: "大きさ" },
	{ id: "rotation", string: "Rotation" },
	{ id: "padding", string: "余白" },
	{ id: "color", string: "色" },
	{ id: "image", string: "画像" },
	{ id: "example", string: "例" },
	{ id: "growleft", string: "アイコンを左揃え" },
	{ id: "growdirection", string: "アイコンを並べる方向" },
	{ id: "down", string: "下" },
	{ id: "up", string: "上" },
	{ id: "left", string: "左" },
	{ id: "right", string: "右" },
	{ id: "columns", string: "行間アイコン数" },
	{ id: "hideoutofcombat", string: "非戦闘状態時に隠す" },
	{ id: "hidesolo", string: "非パーティ時に隠す" },
	{ id: "droppedoff", string: "切れた時に隠す" },
	{ id: "alwaysshow", string: "全アビリティを表示(クールダウン中ではない物も)" },
	{ id: "textformat", string: "テキストフォーマット" },
	{ id: "font", string: "Font" },
	{ id: "healthtext", string: "HPテキスト" },
	{ id: "manatext", string: "MPテキスト" },
	{ id: "pulltimertext", string: "戦闘開始カウントテキスト" },
	{ id: "bufftext", string: "バフテキスト" },
	{ id: "dottext", string: "DoTテキスト" },
	{ id: "multidot", string: "マルチDoT (完全ではない)" },
	{ id: "ability", string: "Ability" },
	{ id: "abilityenabled", string: "Ability Enabled" },
	{ id: "duration", string: "Duration" },
	{ id: "cooldown", string: "Cooldown" },
	{ id: "overridedefaults", string: "Override Defaults" },
	{ id: "ttsenabled", string: "TTS Enabled" },
	{ id: "ttstype", string: "TTS Type" },
	{ id: "abilitycooldown", string: "Ability Cooldown" },
	{ id: "abilityduration", string: "Ability Duration" },
	{ id: "oncast", string: "On Cast" },
	{ id: "durationcolor", string: "Duration Color" },
	{ id: "cooldowncolor", string: "Cooldown Color" },
	{ id: "durationoutlinecolor", string: "Duration Outline Color" },
	{ id: "cooldownoutlinecolor", string: "Cooldown Outline Color" },
	{ id: "durationbold", string: "Duration Bold Text" },
	{ id: "cooldownbold", string: "Cooldown Bold Text" },
	{ id: "durationoutline", string: "Duration Outline" },
	{ id: "cooldownoutline", string: "Cooldown Outline" },
	{ id: "includealliance", string: "Include Alliance in Party Members" },
	{ id: "orderbypartymember", string: "Order by Party Member" },
	{ id: "order", string: "Order" },
	{ id: "partyorder", string: "Party Order (drag and drop)" },
	{ id: "mode", string: "Mode" },
	{ id: "add", string: "Add" },
	{ id: "edit", string: "Edit" },
	{ id: "delete", string: "Delete" },
	{ id: "save", string: "Save" },
	{ id: "noabilitiesfound", string: "No abilities found..." },
	{ id: "search", string: "Search" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "Job / Role" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "Use Google/Baidu TTS" },
	{ id: "jobthresholds", string: "Job Thresholds" },
	{ id: "lowcolor", string: "Low Color" },
	{ id: "medcolor", string: "Medium Color" },
	{ id: "specificjobsonly", string: "Specific Jobs Only" },
	{ id: "ttsearly", string: "TTS Seconds Early" },
	// SKINS
	{ id: "skindefault", string: "Default (by Square Enix)" },
	{ id: "skinmaterialdark", string: "Material Dark (by skotlex)" },
	{ id: "skinmaterialdiscord", string: "Material Discord (by skotlex)" },
	// COLORS
	{ id: "colordarkred", string: "Dark Red" },
	{ id: "colorbrightred", string: "Bright Red" },
	{ id: "colorbabyblue", string: "Baby Blue" },
	{ id: "colorgreenblue", string: "Green Blue" },
	{ id: "colortoxicgreen", string: "Toxic Green" },
	{ id: "colorlightblue", string: "Light Blue" },
	{ id: "colordarkblue", string: "Dark Blue" },
	{ id: "colordarkgreen", string: "Dark Green" },
	{ id: "colorjunglegreen", string: "Jungle Green" },
	{ id: "colorpurple", string: "Purple" },
	{ id: "colorfuchsia", string: "Fuchsia" },
	{ id: "colorlightpink", string: "Light Pink" },
	{ id: "colorlightgold",	string: "Light Gold"  },
	{ id: "colordarkgold", string: "Dark Gold" },
	{ id: "colororange", string: "Orange" },
	{ id: "colorgrey", string: "Grey" },
	// JOBS	
	{ id: "pld", string: "Paladin" },
	{ id: "gla", string: "Gladiator" },
	{ id: "war", string: "Warrior" },
	{ id: "mrd", string: "Marauder" },
	{ id: "drk", string: "Dark Knight" },
	{ id: "gnb", string: "Gunblade" },
	{ id: "whm", string: "White Mage" },
	{ id: "cnj", string: "Conjurer" },
	{ id: "sch", string: "Scholar" },
	{ id: "ast", string: "Astrologian" },
	{ id: "mnk", string: "Monk" },
	{ id: "pgl", string: "Pugilist" },
	{ id: "drg", string: "Dragoon" },
	{ id: "lnc", string: "Lancer" },
	{ id: "nin", string: "Ninja" },
	{ id: "rog", string: "Rogue" },
	{ id: "sam", string: "Samurai" },
	{ id: "brd", string: "Bard" },
	{ id: "arc", string: "Archer" },
	{ id: "mch", string: "Machinist" },
	{ id: "dnc", string: "Dancer" },
	{ id: "blm", string: "Black Mage" },
	{ id: "thm", string: "Thaumaturge" },
	{ id: "smn", string: "Summoner" },
	{ id: "acn", string: "Arcanist" },
	{ id: "rdm", string: "Red Mage" },
	{ id: "blu", string: "Blue Mage" },
	{ id: "tank", string: "Tank" },
	{ id: "healer", string: "Healer" },
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
	{ id: "lock", string: "ロックをON/OFF" },
	{ id: "grid", string: "グリッドをON/OFF" },
	{ id: "reload", string: "Reload" },
	{ id: "settings", string: "設定" },
	{ id: "close", string: "閉じる" }
];