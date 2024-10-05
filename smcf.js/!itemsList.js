const items = [
    "acacia_boat",
    "acacia_button",
    "acacia_chest_boat",
    "acacia_door",
    "acacia_fence",
    "acacia_fence_gate",
    "acacia_hanging_sign",
    "acacia_leaves",
    "acacia_log",
    "acacia_planks",
    "acacia_pressure_plate",
    "acacia_sapling",
    "acacia_sign",
    "acacia_slab",
    "acacia_stairs",
    "acacia_trapdoor",
    "acacia_wood",
    "activator_rail",
    "air",
    "allay_spawn_egg",
    "allium",
    "allow",
    "amethyst_block",
    "amethyst_cluster",
    "amethyst_shard",
    "ancient_debris",
    "andesite",
    "andesite_stairs",
    "angler_pottery_sherd",
    "anvil",
    "apple",
    "archer_pottery_sherd",
    "armadillo_scute",
    "armadillo_spawn_egg",
    "armor_stand",
    "arms_up_pottery_sherd",
    "arrow",
    "axolotl_bucket",
    "axolotl_spawn_egg",
    "azalea",
    "azalea_leaves",
    "azalea_leaves_flowered",
    "azure_bluet",
    "baked_potato",
    "bamboo",
    "bamboo_block",
    "bamboo_button",
    "bamboo_chest_raft",
    "bamboo_door",
    "bamboo_fence",
    "bamboo_fence_gate",
    "bamboo_hanging_sign",
    "bamboo_mosaic",
    "bamboo_mosaic_slab",
    "bamboo_mosaic_stairs",
    "bamboo_planks",
    "bamboo_pressure_plate",
    "bamboo_raft",
    "bamboo_sign",
    "bamboo_slab",
    "bamboo_stairs",
    "bamboo_trapdoor",
    "banner",
    "barrel",
    "barrier",
    "basalt",
    "bat_spawn_egg",
    "beacon",
    "bed",
    "bedrock",
    "bee_nest",
    "bee_spawn_egg",
    "beef",
    "beehive",
    "beetroot",
    "beetroot_seeds",
    "beetroot_soup",
    "bell",
    "big_dripleaf",
    "birch_boat",
    "birch_button",
    "birch_chest_boat",
    "birch_door",
    "birch_fence",
    "birch_fence_gate",
    "birch_hanging_sign",
    "birch_leaves",
    "birch_log",
    "birch_planks",
    "birch_pressure_plate",
    "birch_sapling",
    "birch_sign",
    "birch_slab",
    "birch_stairs",
    "birch_trapdoor",
    "birch_wood",
    "black_candle",
    "black_carpet",
    "black_concrete",
    "black_concrete_powder",
    "black_dye",
    "black_glazed_terracotta",
    "black_shulker_box",
    "black_stained_glass",
    "black_stained_glass_pane",
    "black_terracotta",
    "black_wool",
    "blackstone",
    "blackstone_slab",
    "blackstone_stairs",
    "blackstone_wall",
    "blade_pottery_sherd",
    "blast_furnace",
    "blaze_powder",
    "blaze_rod",
    "blaze_spawn_egg",
    "blue_candle",
    "blue_carpet",
    "blue_concrete",
    "blue_concrete_powder",
    "blue_dye",
    "blue_glazed_terracotta",
    "blue_ice",
    "blue_orchid",
    "blue_shulker_box",
    "blue_stained_glass",
    "blue_stained_glass_pane",
    "blue_terracotta",
    "blue_wool",
    "bone",
    "bone_block",
    "bone_meal",
    "book",
    "bookshelf",
    "border_block",
    "bordure_indented_banner_pattern",
    "bow",
    "bowl",
    "brain_coral",
    "brain_coral_fan",
    "bread",
    "brewer_pottery_sherd",
    "brewing_stand",
    "brick",
    "brick_block",
    "brick_stairs",
    "brown_candle",
    "brown_carpet",
    "brown_concrete",
    "brown_concrete_powder",
    "brown_dye",
    "brown_glazed_terracotta",
    "brown_mushroom",
    "brown_mushroom_block",
    "brown_shulker_box",
    "brown_stained_glass",
    "brown_stained_glass_pane",
    "brown_terracotta",
    "brown_wool",
    "brush",
    "bubble_coral",
    "bubble_coral_fan",
    "bucket",
    "budding_amethyst",
    "burn_pottery_sherd",
    "cactus",
    "cake",
    "calcite",
    "calibrated_sculk_sensor",
    "camel_spawn_egg",
    "campfire",
    "candle",
    "carrot",
    "carrot_on_a_stick",
    "cartography_table",
    "carved_pumpkin",
    "cat_spawn_egg",
    "cauldron",
    "cave_spider_spawn_egg",
    "chain",
    "chain_command_block",
    "chainmail_boots",
    "chainmail_chestplate",
    "chainmail_helmet",
    "chainmail_leggings",
    "charcoal",
    "cherry_boat",
    "cherry_button",
    "cherry_chest_boat",
    "cherry_door",
    "cherry_fence",
    "cherry_fence_gate",
    "cherry_hanging_sign",
    "cherry_leaves",
    "cherry_log",
    "cherry_planks",
    "cherry_pressure_plate",
    "cherry_sapling",
    "cherry_sign",
    "cherry_slab",
    "cherry_stairs",
    "cherry_trapdoor",
    "cherry_wood",
    "chest",
    "chest_minecart",
    "chicken",
    "chicken_spawn_egg",
    "chiseled_bookshelf",
    "chiseled_deepslate",
    "chiseled_nether_bricks",
    "chiseled_polished_blackstone",
    "chorus_flower",
    "chorus_fruit",
    "chorus_plant",
    "clay",
    "clay_ball",
    "clock",
    "coal",
    "coal_block",
    "coal_ore",
    "coast_armor_trim_smithing_template",
    "cobbled_deepslate",
    "cobbled_deepslate_slab",
    "cobbled_deepslate_stairs",
    "cobbled_deepslate_wall",
    "cobblestone",
    "cobblestone_wall",
    "cocoa_beans",
    "cod",
    "cod_bucket",
    "cod_spawn_egg",
    "command_block",
    "command_block_minecart",
    "comparator",
    "compass",
    "composter",
    "conduit",
    "cooked_beef",
    "cooked_chicken",
    "cooked_cod",
    "cooked_mutton",
    "cooked_porkchop",
    "cooked_rabbit",
    "cooked_salmon",
    "cookie",
    "copper_block",
    "copper_ingot",
    "copper_ore",
    "coral_block",
    "cornflower",
    "cow_spawn_egg",
    "cracked_deepslate_bricks",
    "cracked_deepslate_tiles",
    "cracked_nether_bricks",
    "cracked_polished_blackstone_bricks",
    "crafting_table",
    "creeper_banner_pattern",
    "creeper_spawn_egg",
    "crimson_button",
    "crimson_door",
    "crimson_fence",
    "crimson_fence_gate",
    "crimson_fungus",
    "crimson_hanging_sign",
    "crimson_hyphae",
    "crimson_nylium",
    "crimson_planks",
    "crimson_pressure_plate",
    "crimson_roots",
    "crimson_sign",
    "crimson_slab",
    "crimson_stairs",
    "crimson_stem",
    "crimson_trapdoor",
    "crossbow",
    "crying_obsidian",
    "cut_copper",
    "cut_copper_slab",
    "cut_copper_stairs",
    "cyan_candle",
    "cyan_carpet",
    "cyan_concrete",
    "cyan_concrete_powder",
    "cyan_dye",
    "cyan_glazed_terracotta",
    "cyan_shulker_box",
    "cyan_stained_glass",
    "cyan_stained_glass_pane",
    "cyan_terracotta",
    "cyan_wool",
    "danger_pottery_sherd",
    "dark_oak_boat",
    "dark_oak_button",
    "dark_oak_chest_boat",
    "dark_oak_door",
    "dark_oak_fence",
    "dark_oak_fence_gate",
    "dark_oak_hanging_sign",
    "dark_oak_leaves",
    "dark_oak_log",
    "dark_oak_planks",
    "dark_oak_pressure_plate",
    "dark_oak_sapling",
    "dark_oak_sign",
    "dark_oak_slab",
    "dark_oak_stairs",
    "dark_oak_trapdoor",
    "dark_oak_wood",
    "dark_prismarine_stairs",
    "daylight_detector",
    "dead_brain_coral",
    "dead_brain_coral_fan",
    "dead_bubble_coral",
    "dead_bubble_coral_fan",
    "dead_fire_coral",
    "dead_fire_coral_fan",
    "dead_horn_coral",
    "dead_horn_coral_fan",
    "dead_tube_coral",
    "dead_tube_coral_fan",
    "deadbush",
    "decorated_pot",
    "deepslate",
    "deepslate_brick_slab",
    "deepslate_brick_stairs",
    "deepslate_brick_wall",
    "deepslate_bricks",
    "deepslate_coal_ore",
    "deepslate_copper_ore",
    "deepslate_diamond_ore",
    "deepslate_emerald_ore",
    "deepslate_gold_ore",
    "deepslate_iron_ore",
    "deepslate_lapis_ore",
    "deepslate_redstone_ore",
    "deepslate_tile_slab",
    "deepslate_tile_stairs",
    "deepslate_tile_wall",
    "deepslate_tiles",
    "deny",
    "detector_rail",
    "diamond",
    "diamond_axe",
    "diamond_block",
    "diamond_boots",
    "diamond_chestplate",
    "diamond_helmet",
    "diamond_hoe",
    "diamond_horse_armor",
    "diamond_leggings",
    "diamond_ore",
    "diamond_pickaxe",
    "diamond_shovel",
    "diamond_sword",
    "diorite",
    "diorite_stairs",
    "dirt",
    "dirt_with_roots",
    "disc_fragment_5",
    "dispenser",
    "dolphin_spawn_egg",
    "donkey_spawn_egg",
    "double_plant",
    "dragon_breath",
    "dragon_egg",
    "dried_kelp",
    "dried_kelp_block",
    "dripstone_block",
    "dropper",
    "drowned_spawn_egg",
    "dune_armor_trim_smithing_template",
    "echo_shard",
    "egg",
    "elder_guardian_spawn_egg",
    "elytra",
    "emerald",
    "emerald_block",
    "emerald_ore",
    "empty_map",
    "enchanted_book",
    "enchanted_golden_apple",
    "enchanting_table",
    "end_brick_stairs",
    "end_bricks",
    "end_crystal",
    "end_portal_frame",
    "end_rod",
    "end_stone",
    "ender_chest",
    "ender_dragon_spawn_egg",
    "ender_eye",
    "ender_pearl",
    "enderman_spawn_egg",
    "endermite_spawn_egg",
    "evoker_spawn_egg",
    "experience_bottle",
    "explorer_pottery_sherd",
    "exposed_copper",
    "exposed_cut_copper",
    "exposed_cut_copper_slab",
    "exposed_cut_copper_stairs",
    "eye_armor_trim_smithing_template",
    "farmland",
    "feather",
    "fence_gate",
    "fermented_spider_eye",
    "field_masoned_banner_pattern",
    "filled_map",
    "fire_charge",
    "fire_coral",
    "fire_coral_fan",
    "firework_rocket",
    "firework_star",
    "fishing_rod",
    "fletching_table",
    "flint",
    "flint_and_steel",
    "flower_banner_pattern",
    "flower_pot",
    "flowering_azalea",
    "fox_spawn_egg",
    "frame",
    "friend_pottery_sherd",
    "frog_spawn",
    "frog_spawn_egg",
    "frosted_ice",
    "furnace",
    "ghast_spawn_egg",
    "ghast_tear",
    "gilded_blackstone",
    "glass",
    "glass_bottle",
    "glass_pane",
    "glistering_melon_slice",
    "globe_banner_pattern",
    "glow_berries",
    "glow_frame",
    "glow_ink_sac",
    "glow_lichen",
    "glow_squid_spawn_egg",
    "glowstone",
    "glowstone_dust",
    "goat_horn",
    "goat_spawn_egg",
    "gold_block",
    "gold_ingot",
    "gold_nugget",
    "gold_ore",
    "golden_apple",
    "golden_axe",
    "golden_boots",
    "golden_carrot",
    "golden_chestplate",
    "golden_helmet",
    "golden_hoe",
    "golden_horse_armor",
    "golden_leggings",
    "golden_pickaxe",
    "golden_rail",
    "golden_shovel",
    "golden_sword",
    "granite",
    "granite_stairs",
    "grass_block",
    "grass_path",
    "gravel",
    "gray_candle",
    "gray_carpet",
    "gray_concrete",
    "gray_concrete_powder",
    "gray_dye",
    "gray_glazed_terracotta",
    "gray_shulker_box",
    "gray_stained_glass",
    "gray_stained_glass_pane",
    "gray_terracotta",
    "gray_wool",
    "green_candle",
    "green_carpet",
    "green_concrete",
    "green_concrete_powder",
    "green_dye",
    "green_glazed_terracotta",
    "green_shulker_box",
    "green_stained_glass",
    "green_stained_glass_pane",
    "green_terracotta",
    "green_wool",
    "grindstone",
    "guardian_spawn_egg",
    "gunpowder",
    "hanging_roots",
    "hardened_clay",
    "hay_block",
    "heart_of_the_sea",
    "heart_pottery_sherd",
    "heartbreak_pottery_sherd",
    "heavy_weighted_pressure_plate",
    "hoglin_spawn_egg",
    "honey_block",
    "honey_bottle",
    "honeycomb",
    "honeycomb_block",
    "hopper",
    "hopper_minecart",
    "horn_coral",
    "horn_coral_fan",
    "horse_spawn_egg",
    "host_armor_trim_smithing_template",
    "howl_pottery_sherd",
    "husk_spawn_egg",
    "ice",
    "infested_deepslate",
    "ink_sac",
    "iron_axe",
    "iron_bars",
    "iron_block",
    "iron_boots",
    "iron_chestplate",
    "iron_door",
    "iron_golem_spawn_egg",
    "iron_helmet",
    "iron_hoe",
    "iron_horse_armor",
    "iron_ingot",
    "iron_leggings",
    "iron_nugget",
    "iron_ore",
    "iron_pickaxe",
    "iron_shovel",
    "iron_sword",
    "iron_trapdoor",
    "jigsaw",
    "jukebox",
    "jungle_boat",
    "jungle_button",
    "jungle_chest_boat",
    "jungle_door",
    "jungle_fence",
    "jungle_fence_gate",
    "jungle_hanging_sign",
    "jungle_leaves",
    "jungle_log",
    "jungle_planks",
    "jungle_pressure_plate",
    "jungle_sapling",
    "jungle_sign",
    "jungle_slab",
    "jungle_stairs",
    "jungle_trapdoor",
    "jungle_wood",
    "kelp",
    "ladder",
    "lantern",
    "lapis_block",
    "lapis_lazuli",
    "lapis_ore",
    "large_amethyst_bud",
    "lava_bucket",
    "lead",
    "leather",
    "leather_boots",
    "leather_chestplate",
    "leather_helmet",
    "leather_horse_armor",
    "leather_leggings",
    "lectern",
    "lever",
    "light_block",
    "light_blue_candle",
    "light_blue_carpet",
    "light_blue_concrete",
    "light_blue_concrete_powder",
    "light_blue_dye",
    "light_blue_glazed_terracotta",
    "light_blue_shulker_box",
    "light_blue_stained_glass",
    "light_blue_stained_glass_pane",
    "light_blue_terracotta",
    "light_blue_wool",
    "light_gray_candle",
    "light_gray_carpet",
    "light_gray_concrete",
    "light_gray_concrete_powder",
    "light_gray_dye",
    "light_gray_shulker_box",
    "light_gray_stained_glass",
    "light_gray_stained_glass_pane",
    "light_gray_terracotta",
    "light_gray_wool",
    "light_weighted_pressure_plate",
    "lightning_rod",
    "lily_of_the_valley",
    "lime_candle",
    "lime_carpet",
    "lime_concrete",
    "lime_concrete_powder",
    "lime_dye",
    "lime_glazed_terracotta",
    "lime_shulker_box",
    "lime_stained_glass",
    "lime_stained_glass_pane",
    "lime_terracotta",
    "lime_wool",
    "lingering_potion",
    "lit_pumpkin",
    "llama_spawn_egg",
    "lodestone",
    "lodestone_compass",
    "loom",
    "magenta_candle",
    "magenta_carpet",
    "magenta_concrete",
    "magenta_concrete_powder",
    "magenta_dye",
    "magenta_glazed_terracotta",
    "magenta_shulker_box",
    "magenta_stained_glass",
    "magenta_stained_glass_pane",
    "magenta_terracotta",
    "magenta_wool",
    "magma",
    "magma_cream",
    "magma_cube_spawn_egg",
    "mangrove_boat",
    "mangrove_button",
    "mangrove_chest_boat",
    "mangrove_door",
    "mangrove_fence",
    "mangrove_fence_gate",
    "mangrove_hanging_sign",
    "mangrove_leaves",
    "mangrove_log",
    "mangrove_planks",
    "mangrove_pressure_plate",
    "mangrove_propagule",
    "mangrove_roots",
    "mangrove_sign",
    "mangrove_slab",
    "mangrove_stairs",
    "mangrove_trapdoor",
    "mangrove_wood",
    "medium_amethyst_bud",
    "melon_block",
    "melon_seeds",
    "melon_slice",
    "milk_bucket",
    "minecart",
    "miner_pottery_sherd",
    "mob_spawner",
    "mojang_banner_pattern",
    "monster_egg",
    "mooshroom_spawn_egg",
    "moss_block",
    "moss_carpet",
    "mossy_cobblestone",
    "mossy_cobblestone_stairs",
    "mossy_stone_brick_stairs",
    "mourner_pottery_sherd",
    "mud",
    "mud_brick_slab",
    "mud_brick_stairs",
    "mud_brick_wall",
    "mud_bricks",
    "muddy_mangrove_roots",
    "mule_spawn_egg",
    "mushroom_stew",
    "music_disc_11",
    "music_disc_13",
    "music_disc_5",
    "music_disc_blocks",
    "music_disc_cat",
    "music_disc_chirp",
    "music_disc_far",
    "music_disc_mall",
    "music_disc_mellohi",
    "music_disc_otherside",
    "music_disc_pigstep",
    "music_disc_relic",
    "music_disc_stal",
    "music_disc_strad",
    "music_disc_wait",
    "music_disc_ward",
    "mutton",
    "mycelium",
    "name_tag",
    "nautilus_shell",
    "nether_brick",
    "nether_brick_fence",
    "nether_brick_stairs",
    "nether_gold_ore",
    "nether_sprouts",
    "nether_star",
    "nether_wart",
    "nether_wart_block",
    "netherbrick",
    "netherite_axe",
    "netherite_block",
    "netherite_boots",
    "netherite_chestplate",
    "netherite_helmet",
    "netherite_hoe",
    "netherite_ingot",
    "netherite_leggings",
    "netherite_pickaxe",
    "netherite_scrap",
    "netherite_shovel",
    "netherite_sword",
    "netherite_upgrade_smithing_template",
    "netherrack",
    "normal_stone_stairs",
    "noteblock",
    "oak_boat",
    "oak_chest_boat",
    "oak_fence",
    "oak_hanging_sign",
    "oak_leaves",
    "oak_log",
    "oak_planks",
    "oak_sapling",
    "oak_sign",
    "oak_slab",
    "oak_stairs",
    "oak_wood",
    "observer",
    "obsidian",
    "ocelot_spawn_egg",
    "ochre_froglight",
    "orange_candle",
    "orange_carpet",
    "orange_concrete",
    "orange_concrete_powder",
    "orange_dye",
    "orange_glazed_terracotta",
    "orange_shulker_box",
    "orange_stained_glass",
    "orange_stained_glass_pane",
    "orange_terracotta",
    "orange_tulip",
    "orange_wool",
    "oxeye_daisy",
    "oxidized_copper",
    "oxidized_cut_copper",
    "oxidized_cut_copper_slab",
    "oxidized_cut_copper_stairs",
    "packed_ice",
    "packed_mud",
    "painting",
    "panda_spawn_egg",
    "paper",
    "parrot_spawn_egg",
    "pearlescent_froglight",
    "phantom_membrane",
    "phantom_spawn_egg",
    "pig_spawn_egg",
    "piglin_banner_pattern",
    "piglin_brute_spawn_egg",
    "piglin_spawn_egg",
    "pillager_spawn_egg",
    "pink_candle",
    "pink_carpet",
    "pink_concrete",
    "pink_concrete_powder",
    "pink_dye",
    "pink_glazed_terracotta",
    "pink_petals",
    "pink_shulker_box",
    "pink_stained_glass",
    "pink_stained_glass_pane",
    "pink_terracotta",
    "pink_tulip",
    "pink_wool",
    "piston",
    "pitcher_plant",
    "pitcher_pod",
    "plenty_pottery_sherd",
    "podzol",
    "pointed_dripstone",
    "poisonous_potato",
    "polar_bear_spawn_egg",
    "polished_andesite",
    "polished_andesite_stairs",
    "polished_basalt",
    "polished_blackstone",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_stairs",
    "polished_blackstone_brick_wall",
    "polished_blackstone_bricks",
    "polished_blackstone_button",
    "polished_blackstone_pressure_plate",
    "polished_blackstone_slab",
    "polished_blackstone_stairs",
    "polished_blackstone_wall",
    "polished_deepslate",
    "polished_deepslate_slab",
    "polished_deepslate_stairs",
    "polished_deepslate_wall",
    "polished_diorite",
    "polished_diorite_stairs",
    "polished_granite",
    "polished_granite_stairs",
    "popped_chorus_fruit",
    "poppy",
    "porkchop",
    "potato",
    "potion",
    "powder_snow_bucket",
    "prismarine",
    "prismarine_bricks_stairs",
    "prismarine_crystals",
    "prismarine_shard",
    "prismarine_stairs",
    "prize_pottery_sherd",
    "pufferfish",
    "pufferfish_bucket",
    "pufferfish_spawn_egg",
    "pumpkin",
    "pumpkin_pie",
    "pumpkin_seeds",
    "purple_candle",
    "purple_carpet",
    "purple_concrete",
    "purple_concrete_powder",
    "purple_dye",
    "purple_glazed_terracotta",
    "purple_shulker_box",
    "purple_stained_glass",
    "purple_stained_glass_pane",
    "purple_terracotta",
    "purple_wool",
    "purpur_block",
    "purpur_stairs",
    "quartz",
    "quartz_block",
    "quartz_bricks",
    "quartz_ore",
    "quartz_stairs",
    "rabbit",
    "rabbit_foot",
    "rabbit_hide",
    "rabbit_spawn_egg",
    "rabbit_stew",
    "rail",
    "raiser_armor_trim_smithing_template",
    "ravager_spawn_egg",
    "raw_copper",
    "raw_copper_block",
    "raw_gold",
    "raw_gold_block",
    "raw_iron",
    "raw_iron_block",
    "recovery_compass",
    "red_candle",
    "red_carpet",
    "red_concrete",
    "red_concrete_powder",
    "red_dye",
    "red_glazed_terracotta",
    "red_mushroom",
    "red_mushroom_block",
    "red_nether_brick",
    "red_nether_brick_stairs",
    "red_sandstone",
    "red_sandstone_stairs",
    "red_shulker_box",
    "red_stained_glass",
    "red_stained_glass_pane",
    "red_terracotta",
    "red_tulip",
    "red_wool",
    "redstone",
    "redstone_block",
    "redstone_lamp",
    "redstone_ore",
    "redstone_torch",
    "reinforced_deepslate",
    "repeater",
    "repeating_command_block",
    "respawn_anchor",
    "rib_armor_trim_smithing_template",
    "rotten_flesh",
    "saddle",
    "salmon",
    "salmon_bucket",
    "salmon_spawn_egg",
    "sand",
    "sandstone",
    "sandstone_stairs",
    "scaffolding",
    "sculk",
    "sculk_catalyst",
    "sculk_sensor",
    "sculk_shrieker",
    "sculk_vein",
    "sea_lantern",
    "sea_pickle",
    "seagrass",
    "sentry_armor_trim_smithing_template",
    "shaper_armor_trim_smithing_template",
    "sheaf_pottery_sherd",
    "shears",
    "sheep_spawn_egg",
    "shelter_pottery_sherd",
    "shield",
    "shroomlight",
    "shulker_shell",
    "shulker_spawn_egg",
    "silence_armor_trim_smithing_template",
    "silver_glazed_terracotta",
    "silverfish_spawn_egg",
    "skeleton_horse_spawn_egg",
    "skeleton_spawn_egg",
    "skull",
    "skull_banner_pattern",
    "skull_pottery_sherd",
    "slime",
    "slime_ball",
    "slime_spawn_egg",
    "small_amethyst_bud",
    "small_dripleaf_block",
    "smithing_table",
    "smoker",
    "smooth_basalt",
    "smooth_quartz_stairs",
    "smooth_red_sandstone_stairs",
    "smooth_sandstone_stairs",
    "smooth_stone",
    "sniffer_egg",
    "sniffer_spawn_egg",
    "snort_pottery_sherd",
    "snout_armor_trim_smithing_template",
    "snow",
    "snow_golem_spawn_egg",
    "snow_layer",
    "snowball",
    "soul_campfire",
    "soul_lantern",
    "soul_sand",
    "soul_soil",
    "soul_torch",
    "spider_eye",
    "spider_spawn_egg",
    "spire_armor_trim_smithing_template",
    "splash_potion",
    "sponge",
    "spore_blossom",
    "spruce_boat",
    "spruce_button",
    "spruce_chest_boat",
    "spruce_door",
    "spruce_fence",
    "spruce_fence_gate",
    "spruce_hanging_sign",
    "spruce_leaves",
    "spruce_log",
    "spruce_planks",
    "spruce_pressure_plate",
    "spruce_sapling",
    "spruce_sign",
    "spruce_slab",
    "spruce_stairs",
    "spruce_trapdoor",
    "spruce_wood",
    "spyglass",
    "squid_spawn_egg",
    "stick",
    "sticky_piston",
    "stone",
    "stone_axe",
    "stone_block_slab",
    "stone_block_slab2",
    "stone_block_slab3",
    "stone_block_slab4",
    "stone_brick_stairs",
    "stone_button",
    "stone_hoe",
    "stone_pickaxe",
    "stone_pressure_plate",
    "stone_shovel",
    "stone_stairs",
    "stone_sword",
    "stonebrick",
    "stonecutter_block",
    "stray_spawn_egg",
    "strider_spawn_egg",
    "string",
    "stripped_acacia_log",
    "stripped_acacia_wood",
    "stripped_bamboo_block",
    "stripped_birch_log",
    "stripped_birch_wood",
    "stripped_cherry_log",
    "stripped_cherry_wood",
    "stripped_crimson_hyphae",
    "stripped_crimson_stem",
    "stripped_dark_oak_log",
    "stripped_dark_oak_wood",
    "stripped_jungle_log",
    "stripped_jungle_wood",
    "stripped_mangrove_log",
    "stripped_mangrove_wood",
    "stripped_oak_log",
    "stripped_oak_wood",
    "stripped_spruce_log",
    "stripped_spruce_wood",
    "stripped_warped_hyphae",
    "stripped_warped_stem",
    "structure_block",
    "structure_void",
    "sugar",
    "sugar_cane",
    "suspicious_gravel",
    "suspicious_sand",
    "suspicious_stew",
    "sweet_berries",
    "tadpole_bucket",
    "tadpole_spawn_egg",
    "tallgrass",
    "target",
    "tide_armor_trim_smithing_template",
    "tinted_glass",
    "tnt",
    "tnt_minecart",
    "torch",
    "torchflower",
    "torchflower_seeds",
    "totem_of_undying",
    "trader_llama_spawn_egg",
    "trapdoor",
    "trapped_chest",
    "trident",
    "tripwire_hook",
    "tropical_fish",
    "tropical_fish_bucket",
    "tropical_fish_spawn_egg",
    "tube_coral",
    "tube_coral_fan",
    "tuff",
    "turtle_egg",
    "turtle_helmet",
    "turtle_scute",
    "turtle_spawn_egg",
    "twisting_vines",
    "undyed_shulker_box",
    "verdant_froglight",
    "vex_armor_trim_smithing_template",
    "vex_spawn_egg",
    "villager_spawn_egg",
    "vindicator_spawn_egg",
    "vine",
    "wandering_trader_spawn_egg",
    "ward_armor_trim_smithing_template",
    "warden_spawn_egg",
    "warped_button",
    "warped_door",
    "warped_fence",
    "warped_fence_gate",
    "warped_fungus",
    "warped_fungus_on_a_stick",
    "warped_hanging_sign",
    "warped_hyphae",
    "warped_nylium",
    "warped_planks",
    "warped_pressure_plate",
    "warped_roots",
    "warped_sign",
    "warped_slab",
    "warped_stairs",
    "warped_stem",
    "warped_trapdoor",
    "warped_wart_block",
    "water_bucket",
    "waterlily",
    "waxed_copper",
    "waxed_cut_copper",
    "waxed_cut_copper_slab",
    "waxed_cut_copper_stairs",
    "waxed_exposed_copper",
    "waxed_exposed_cut_copper",
    "waxed_exposed_cut_copper_slab",
    "waxed_exposed_cut_copper_stairs",
    "waxed_oxidized_copper",
    "waxed_oxidized_cut_copper",
    "waxed_oxidized_cut_copper_slab",
    "waxed_oxidized_cut_copper_stairs",
    "waxed_weathered_copper",
    "waxed_weathered_cut_copper",
    "waxed_weathered_cut_copper_slab",
    "waxed_weathered_cut_copper_stairs",
    "wayfinder_armor_trim_smithing_template",
    "weathered_copper",
    "weathered_cut_copper",
    "weathered_cut_copper_slab",
    "weathered_cut_copper_stairs",
    "web",
    "weeping_vines",
    "wheat",
    "wheat_seeds",
    "white_candle",
    "white_carpet",
    "white_concrete",
    "white_concrete_powder",
    "white_dye",
    "white_glazed_terracotta",
    "white_shulker_box",
    "white_stained_glass",
    "white_stained_glass_pane",
    "white_terracotta",
    "white_tulip",
    "white_wool",
    "wild_armor_trim_smithing_template",
    "witch_spawn_egg",
    "wither_rose",
    "wither_skeleton_spawn_egg",
    "wither_spawn_egg",
    "wolf_armor",
    "wolf_spawn_egg",
    "wooden_axe",
    "wooden_button",
    "wooden_door",
    "wooden_hoe",
    "wooden_pickaxe",
    "wooden_pressure_plate",
    "wooden_shovel",
    "wooden_sword",
    "writable_book",
    "yellow_candle",
    "yellow_carpet",
    "yellow_concrete",
    "yellow_concrete_powder",
    "yellow_dye",
    "yellow_flower",
    "yellow_glazed_terracotta",
    "yellow_shulker_box",
    "yellow_stained_glass",
    "yellow_stained_glass_pane",
    "yellow_terracotta",
    "yellow_wool",
    "zoglin_spawn_egg",
    "zombie_horse_spawn_egg",
    "zombie_pigman_spawn_egg",
    "zombie_spawn_egg",
    "zombie_villager_spawn_egg"
];
