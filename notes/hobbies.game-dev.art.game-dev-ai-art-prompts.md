---
id: 62t710kmfbld366sxauwywt
title: Game Dev Ai Art Prompts
desc: ""
updated: 1750870190173
created: 1741029008590
---

## ORC 3D Model

A high detailed 3D model of a green orc, rendered in a stylized cartoon/fantasy style featuring a muscular build, pointed ears, and a warrior like costume with brown leather and metal accents; the lighting and background are neutral, creating a studio-quality image.

A vibrant, cartoon comics-style illustration of a brutish orc warrior, featuring a towering, muscular frame, clad in exaggerated, chunky heavy armor with jagged metal plates and bold dark green colors; the lighting is bright and dynamic, with a simple, neutral background to emphasize the character’s larger-than-life design

A vibrant, cartoon comics-style illustration of a stalwart human warrior, featuring a strong, heroic build, clad in exaggerated, chunky heavy armor with polished metallic plates and bold silver and blue accents; the lighting is bright and dynamic, with a simple, neutral background to highlight the character’s larger-than-life design.

## Cozy farm

idea → reference image → tileset → production assets → custom prompt → playable game.

### 1. Ideation


I usually start by letting GPT Image 2.0 create a first image from a simple idea, just to get a visual base I can react to. At that stage, I’m mostly looking at the composition, the readability of the scene, and whether the image already feels like a game world.

Once I have that first version, I start refining it. I tell GPT which elements I want to keep, which ones I want to remove, and what needs to be added or adjusted until the scene becomes a strong reference image.

So the first image is not the destination. It’s the beginning of the thinking process.

A simple starting prompt can be:

```txt
“Create a cozy top-down pixel art island farming RPG scene with small islands, wooden bridges, cute houses, a farm plot, a barn, calm blue water, and a small player character.”
```

### 2. Reproducible image

Once the image feels right, I don’t move on immediately.

At that point, I ask GPT to give me the prompt that would recreate that image as faithfully as possible. Then I open a fresh chat, paste that prompt, and generate it again 2 or 3 times.

I do that because I’m not looking for one lucky output. I want to know if the prompt is stable enough to reproduce the same visual direction, the same composition, and the same overall feeling. If the result keeps drifting too much, I know the prompt still needs work.

This step is important because the whole workflow depends on it. If the reference prompt is not solid, the tileset prompt and the final prototype prompt will be built on something unstable.

So before going further, I make sure I have a prompt that can consistently recreate the image style and structure I actually want.

prompt: 

```txt
Create a cozy top-down pixel art island farming RPG scene.

The scene should show a small cute village built on a few tiny grassy islands connected by simple wooden bridges. Use soft pastel colors, clean pixel art, and a charming retro farming game aesthetic.

Keep the composition simple and readable, not overcrowded.

Include:
- 3 to 5 small islands surrounded by calm blue water
- wooden bridges and a small dock
- a few cute houses with colorful roofs
- one small shop
- a small fenced farm plot with simple crops
- one barn with a cow
- one beach island with a palm tree and umbrella
- soft water tiles with a few rocks or lily pads
- simple dirt paths
- a few trees, bushes, flowers, and fences
- one small player character in the center with a tiny pet

Style:
cozy top-down pixel art, pastel colors, cute village, simple island layout, soft water tiles, minimal details, clean readable shapes, charming retro RPG farming game aesthetic, warm and peaceful mood, handcrafted pixel art look.

Avoid:
too many props, crowded decorations, complex UI, realistic rendering, isometric 3D, excessive details, dark colors, noisy textures.
```

#### Cinematic

prompt to create the cinematic:

```txt
Create a cozy top-down pixel art island farming RPG scene.

The scene should show a small cute village built on a few tiny grassy islands connected by simple wooden bridges. Use soft pastel colors, clean pixel art, and a charming retro farming game aesthetic.

Keep the composition simple and readable, not overcrowded.

Include:
- 3 to 5 small islands surrounded by calm blue water
- wooden bridges and a small dock
- a few cute houses with colorful roofs
- one small shop
- a small fenced farm plot with simple crops
- one barn with a cow
- one beach island with a palm tree and umbrella
- soft water tiles with a few rocks or lily pads
- simple dirt paths
- a few trees, bushes, flowers, and fences
- one small player character in the center with a tiny pet

Style:
cozy top-down pixel art, pastel colors, cute village, simple island layout, soft water tiles, minimal details, clean readable shapes, charming retro RPG farming game aesthetic, warm and peaceful mood, handcrafted pixel art look.

Avoid:
too many props, crowded decorations, complex UI, realistic rendering, isometric 3D, excessive details, dark colors, noisy textures.
```

### 3 Sprites and Tilesheets


Once the reference prompt is stable, I move to the hardest part: the asset sheet.

This is where most AI game workflows break. Generating a beautiful image is relatively easy. Generating a clean tileset that can actually be reused in a game is much harder.

So instead of asking for assets in a vague way, I take the reference image GPT just created, give it back to GPT, and ask for 3 separate technical tilesets on a white background. White works much better for the next step, because it makes the assets easier to isolate, cut, and rebuild cleanly.

For Cozy Island Farm, I split them into 3 groups:
1. terrain, water, paths, bridges
2. buildings, props, nature
3. characters, animals, crops

Once GPT has generated those tilesets, I ask it to give me the prompt that was used to create them. Then I open a new chat, run that prompt again, and test it a few times to check if the result stays coherent.

Same logic as with the reference image: I’m not looking for one lucky output. I want a prompt that can reliably recreate the same kind of technical sheets before I use them as the production base for the prototype.

prompt:

```txt
Use the provided reference image as Image A.

Create 3 separate technical pixel art tileset sheets based on this cozy top-down island farming RPG scene. Keep the exact same art direction, soft pastel palette, cute farming village mood, clean readable top-down pixel art style, and handcrafted retro RPG aesthetic.

This is not a scene illustration. This must be a production-ready technical asset sheet set for building the full game environment.

Global requirements for all 3 sheets:
- pure white background
- all assets fully separated
- enough spacing between every asset for easy cropping and reuse
- consistent scale
- high readability
- clean organization by category
- optimized quality for each asset
- no overlapping objects
- no mockup presentation
- no UI
- no extra scene composition
- no realistic rendering
- clean top-down 2D pixel art only

Sheet 1: Terrain / Water / Paths / Bridges
Include:
- grass tiles
- island edge tiles
- cliff / dirt edge variants
- sand tiles
- sand to grass transition tiles
- water tiles
- shoreline tiles
- water corner tiles
- animated-looking water variants
- dirt path tiles: horizontal, vertical, corners, T junctions, crossroads, end caps
- wooden bridge tiles: horizontal, vertical, entrances, ends
- dock tiles: straight segments, corners, ends, posts
- fence tiles: horizontal, vertical, corners, gates
- small terrain decorations: flowers, bushes, stones, grass tufts, lily pads

Sheet 2: Buildings / Props / Nature
Include:
- cute houses with colorful roofs
- one small shop
- one barn
- farm plot pieces
- crop field soil tiles
- watered soil
- dry soil
- several trees
- one palm tree
- bushes
- flowers
- logs
- stumps
- beach props: umbrella, towel or beach chair, shells, starfish
- village props: signpost, mailbox, crate, barrel, sack, flower pot, bench, lantern, well, basket, market props
- farm props: hay bale, trough, barn accessories

Sheet 3: Characters / Animals / Crops
Include:
- one small player character
- 4-direction idle sprites: front, back, left, right
- 4-direction walking sprites with multiple frames
- one tiny pet companion with idle and walking sprites
- one cow with idle and simple movement frames
- optional small extra farm animal
- crop growth stages:
  - empty soil
  - planted seed
  - small sprout
  - medium growth
  - mature crop
  - harvested version

Make the result look like a clean professional technical tileset pack for a cozy pixel art farming RPG, fully reusable for game production.
```

### 4. Game building prompt

Once the reference image and the tilesets are ready, I don’t send everything blindly to Codex.

Before that, I spend time building the final prompt properly.

And this is where the details matter a lot.

I explain exactly what I expect from the prompt: the /goal, the game direction, the gameplay systems, the asset constraints, the file structure, the rendering logic, the map layout, the collisions, the farming mechanics, the HUD, the interactions, and the problems I want to avoid.

The /goal is important because it gives the whole task a clear direction from the start.

I don’t want a random demo.

I want a clean, playable farming RPG prototype, faithful to the reference image, with no broken assets, no messy structure, and no visual issues.

Because I’ve already built games before, I know where things usually break.

Bad asset slicing. Cropped sprites. Weird white borders. Inconsistent sizes. Broken animations. Everything dumped into one file. A prototype that looks good for 5 seconds but becomes impossible to improve.

So I guide the prompt as much as possible.

I don’t just ask for “make a game from these images”.

I prepare a real production brief, with a clear /goal and strong constraints, so Codex has everything it needs to rebuild the assets cleanly with Imagen and create a playable prototype that stays faithful to the reference.

prompt:

```txt
You are building a complete playable browser game prototype from 4 provided reference images.

The 4 reference images are:
1. A cozy top-down pixel art island farming RPG scene.
2. A technical terrain / water / paths / bridges tileset.
3. A technical buildings / props / nature tileset.
4. A technical characters / animals / crops sprite sheet.

Goal:
Create a playable cozy top-down pixel art farming RPG prototype inspired by these 4 references.

Important asset requirement:
Do not directly crop, reuse, or depend on the provided reference images as in-game assets.

Use the reference images only as visual direction.

First, recreate the full required asset set with Imagen, matching the same style:
- cozy top-down pixel art
- soft pastel colors
- cute farming RPG mood
- clean readable shapes
- handcrafted retro RPG aesthetic
- white-background technical tilesets
- separated reusable assets
- consistent scale
- optimized clarity

The generated assets must then be saved into the project assets folder and used by the game.

The final game must not rely on the original reference images for rendering. It must use the newly recreated asset files.

Project objective:
Build a small playable cozy farming RPG prototype in the browser.

The player should be able to:
- move around a small island village
- walk between islands using bridges
- interact with simple objects
- visit a farm plot
- plant and harvest crops
- see a pet companion following them
- see animals and decorative village elements
- explore a peaceful island map surrounded by water

Technical stack:
- HTML
- CSS
- JavaScript
- Canvas 2D
- No backend
- No external game engine
- No npm requirement
- The project must run by opening index.html in a browser

Project structure:
Create a clean senior-level structure with separated responsibilities.

Use this structure:

/index.html
/styles/main.css
/src/main.js
/src/core/Game.js
/src/core/InputManager.js
/src/core/Camera.js
/src/core/Renderer.js
/src/core/AssetLoader.js
/src/core/CollisionMap.js
/src/world/WorldMap.js
/src/world/TileMap.js
/src/world/MapData.js
/src/entities/Entity.js
/src/entities/Player.js
/src/entities/Pet.js
/src/entities/Animal.js
/src/entities/NPC.js
/src/entities/Crop.js
/src/systems/InteractionSystem.js
/src/systems/FarmingSystem.js
/src/systems/AnimationSystem.js
/src/systems/DialogueSystem.js
/src/ui/HUD.js
/src/ui/Tooltip.js
/src/data/assets.js
/src/data/items.js
/src/data/crops.js
/assets/generated/
/assets/generated/terrain/
/assets/generated/buildings/
/assets/generated/characters/
/assets/generated/props/
/assets/generated/animals/
/assets/generated/crops/
/assets/generated/ui/

Asset generation instructions:
Use Imagen to recreate all assets needed for the game.

Generate the assets as clean technical pixel art sheets, then extract or save the individual assets into the correct folders.

Required generated assets:

1. Terrain assets:
- grass tile
- grass flower variants
- grass edge tiles
- island cliff edges
- island corners
- shoreline tiles
- sand tiles
- sand edge tiles
- sand-to-grass transitions
- water tile
- animated water variants
- lily pads
- water rocks
- small ground stones
- grass tufts

2. Path assets:
- dirt path center
- horizontal path
- vertical path
- corner paths
- T-junction paths
- crossroad path
- path end caps
- small decorative path stones

3. Bridge and dock assets:
- horizontal wooden bridge segment
- vertical wooden bridge segment
- bridge start and end pieces
- bridge support posts
- dock floor tile
- dock corner tile
- dock end tile
- dock posts
- small boat

4. Building assets:
- barn
- house with blue roof
- house with yellow roof
- house with red roof
- shop with purple roof
- optional house roof variants
- doors
- windows
- flower boxes
- chimney
- smoke puff animation frames

5. Props:
- fences horizontal
- fences vertical
- fence corners
- gate
- signpost
- mailbox
- barrel
- crate
- sack
- flower pot
- lantern
- well
- basket
- bench
- hay bale
- feeding trough
- market stand
- beach umbrella
- beach chair
- shells
- starfish

6. Nature:
- round green tree
- apple tree
- palm tree
- bush
- flowering bush
- stump
- log
- flowers in several colors
- small plants

7. Characters and animals:
- player character, 4-direction idle
- player character, 4-direction walking animation, at least 3 frames per direction
- small dog pet, idle and walking animation
- cow, idle and walking animation
- optional chicken, idle and walking animation

8. Crops:
- empty soil
- watered soil
- planted seed
- small sprout
- medium growth
- mature leafy crop
- mature carrot-like crop
- mature wheat crop
- harvested soil

9. UI assets:
- simple pixel HUD panel
- inventory slot
- seed icon
- crop icon
- interaction key prompt
- small dialogue box

Asset style requirements:
- top-down 2D pixel art
- clean readable silhouettes
- consistent scale between assets
- no realistic rendering
- no noisy texture
- no complex lighting
- no isometric 3D
- pastel colors
- cozy farming RPG look
- assets must be optimized for small-size display
- every asset must be separated cleanly
- avoid blurred edges
- avoid inconsistent perspective
- avoid mixing different art styles

Game view:
Use a top-down camera with a pixel art map.

The scene should look like a small cozy island farming village:
- calm blue water surrounding the map
- 4 to 5 small grassy islands
- wooden bridges connecting islands
- one central island with the player, dog, farm plot and paths
- one island with a barn and cow
- one island with a shop
- one island with a house
- one beach island with palm tree, umbrella and beach chair
- small dock with a boat
- trees, bushes, flowers, rocks and fences placed naturally

Map design:
Create a fixed tile-based world map.

Use a tile size that fits pixel art well, such as 32x32 or 48x48.

The map should include:
- water background
- island edges
- grass interiors
- dirt paths
- bridges
- dock
- farm plot
- buildings
- decorative props
- collision zones

Gameplay:
Implement a playable character.

Controls:
- Arrow keys or WASD to move
- E to interact
- Space for primary action
- R to reset player position if needed

Player movement:
- smooth tile-based or free movement
- collision with buildings, water, rocks, trees and fences
- ability to walk over paths, grass, bridges and dock
- player sprite changes direction based on movement
- walking animation when moving
- idle sprite when stopped

Camera:
- camera follows the player
- camera should stay inside map bounds
- smooth camera movement if possible

Pet system:
Add a small dog companion.
The dog should:
- follow the player with a short delay
- use walking animation when moving
- stop near the player when close
- not block the player
- stay visually cute and readable

Animal system:
Add at least:
- one cow near the barn
- optional chicken near the farm

Animals should have simple idle movement:
- small random walking area
- idle animation
- cannot leave their island or fenced area

Farming system:
Implement a simple farming mechanic.

The farm plot should contain several soil tiles.

Player can interact with soil:
- if empty, pressing E plants a seed
- crop changes growth stage over time
- mature crops can be harvested with E
- harvested crops increase a small counter in the HUD

Crop stages:
1. empty soil
2. seed
3. sprout
4. medium crop
5. mature crop
6. harvested / empty again

Use a simple timer system for growth, for example:
- seed to sprout: 10 seconds
- sprout to medium: 10 seconds
- medium to mature: 10 seconds

HUD:
Create a minimal cozy pixel UI in English.

HUD should show:
- crop count
- current action hint
- selected item: Seeds
- small instruction text:
  “WASD / Arrows: Move”
  “E: Interact”
  “Space: Action”

Interaction system:
When the player is near an object, show a small tooltip.

Examples:
- near shop: “Shop closed for now”
- near barn: “A cozy barn”
- near cow: “Moo!”
- near mailbox: “No mail today”
- near crop: “Plant seed”, “Growing…”, or “Harvest”
- near boat: “A small fishing boat”

Dialogue:
Add a simple dialogue box system for interactions.

No complex quest system is required, but the game should feel alive.

Rendering:
Use Canvas 2D.

Render order:
1. water
2. terrain tiles
3. paths
4. bridges and docks
5. static props behind player
6. crops
7. animals
8. pet
9. player
10. foreground props if needed
11. HUD

Use pixel-perfect rendering:
- disable image smoothing
- preserve crisp pixel art
- scale assets consistently

Asset loading:
Use a dedicated AssetLoader.js file.

The asset list must be defined in /src/data/assets.js.

Do not hardcode all asset paths inside the main game file.

If an asset is missing, the game should not crash. Show a placeholder colored tile or log a clear warning.

Important:
Because the assets are generated, make sure filenames are clean, predictable and referenced correctly.

Example filenames:
terrain_grass_01.png
terrain_water_01.png
path_horizontal.png
bridge_horizontal.png
building_shop.png
building_barn.png
player_idle_down.png
player_walk_down_01.png
dog_idle_down.png
cow_idle_down.png
crop_seed.png
crop_sprout.png
crop_mature_carrot.png
prop_mailbox.png

If sprite sheets are used instead of individual PNG files, create a clear sprite mapping file:
src/data/sprites.js

But prefer individual PNG files for simplicity and to avoid display issues.

Quality requirements:
- The game must be immediately playable
- The code must be clean and modular
- Do not put all the logic in one file
- Keep rendering, input, entities, map, farming and UI separated
- Avoid unnecessary complexity
- Prioritize a polished prototype over a huge unfinished system
- The first screen should already look like a cozy farming RPG
- The player must be visible and controllable immediately
- Assets must load correctly
- No broken image icons
- No invisible player
- No unreadable tiny sprites

Map layout details:
Create a map inspired by the reference image.

Suggested layout:
- central island: player spawn, farm plot, well, flower bushes, dirt paths
- top-left island: barn, cow, hay, fences
- top-center island: blue roof house
- top-right island: shop
- right island: yellow roof house
- bottom island: beach with palm tree, umbrella and chair
- bottom-left island: dock and boat

Connect islands with wooden bridges.

Use water around all islands.

Add enough empty space so the map remains readable and not overcrowded.

Development steps:
1. Generate/recreate all assets with Imagen from the 4 references.
2. Save all generated assets into /assets/generated/ with clean filenames.
3. Build the HTML/CSS/JS project structure.
4. Implement asset loading.
5. Implement canvas rendering.
6. Implement world map.
7. Implement player movement and collision.
8. Implement pet following.
9. Implement farming interactions.
10. Implement simple animal idle behavior.
11. Implement HUD and tooltips.
12. Polish rendering order and pixel-perfect display.
13. Test the game by opening index.html.
14. Fix all broken asset paths or rendering issues.
15. Ensure the final prototype is playable.

Final deliverable:
A complete browser-playable cozy farming RPG prototype.

The final answer should include:
- the full project files
- all generated assets saved in the assets folder
- clear instructions to run the game
- a short explanation of controls
- no dependency on the original reference images for in-game rendering
```

### 5. Codex

Now I move into Codex.

I create a clean project folder, import the reference image and the technical tilesets, then send the final prompt with all the images attached.

At this point, Codex has everything it needs:

the visual reference, the tilesets, the /goal, the asset constraints, the expected file structure, the gameplay systems, and the full production direction.

This is also why I spend so much time preparing the prompt before opening Codex.

The better the context, the fewer random decisions it has to make.

I don’t want it to guess the style, the map, the assets, the structure, or the gameplay logic. I want it to follow a clear direction and use the images as references to rebuild clean assets with Imagen, then create the playable prototype from those assets.

So the setup is simple:

create the folder  
add the images  
send the full prompt  
let Codex start from a real production brief

### 6. Review

Of course, the first result is not always perfect.

And that’s normal.

Sometimes the map needs adjustment, some assets don’t feel aligned, the player movement is too loose, the interactions are not clear enough, or a sprite behaves in a weird way.

That’s where you need to review the prototype and guide the corrections properly.

Saying “my character should not go through objects” is less precise than saying “add collision boxes to buildings, trees, fences and water tiles, and make the player movement check those boxes before updating position.”

Same idea for animations, asset alignment, camera, farming logic, render order or UI.

The better you understand what you’re building, the better you can explain what needs to be fixed.

That’s why AI does not remove the need to know the subject.

It makes the process faster, but your knowledge is still what helps you spot problems, describe them correctly, and push the prototype from “it kind of works” to something clean and playable.

### 7. Conclusion

The most important part is not just copying a prompt, dropping assets into Codex or GPT, and waiting for a perfect result.

That’s not how this works.

The real value comes from the process: iterating, testing, checking the outputs, rewriting the prompts, spotting what breaks, improving the constraints, and sometimes failing before getting something clean.

## Vertical Space Shooter

### 1. Reference Image

prompt to create reference image:

```txt
Create a premium vertical mobile game screenshot for a retro pixel-art space shooter.

The image must look like an actual in-game scene, not a concept art poster and not an asset sheet. Use a portrait 9:16 composition.

Scene:
A fast-paced vertical shoot’em up battle in deep space. The player ship is at the bottom center, firing multiple streams of glowing bullets upward. Enemy ships fill the upper and middle parts of the screen. A large boss ship dominates the top area. The scene must feel intense, readable, colorful and polished, like a modern premium arcade mobile game made with high-quality pixel art.

Art style:
High-detail retro pixel art, crisp sprites, neon sci-fi colors, strong silhouettes, glowing projectiles, detailed mechanical ships, colorful lighting, dark starfield background, arcade bullet-hell atmosphere, polished 16-bit / 32-bit pixel game aesthetic.

Important:
Do not copy any existing space shooter. All ships must have original shapes and original color palettes.

Player ship:
Design a sleek angular interceptor with a unique silhouette. Use teal, gold, white and cyan accents. It should have sharp wings, a pointed nose, visible engines, and bright cyan exhaust flames. The ship fires several vertical streams of cyan-blue bullets.

Boss:
Create a huge original boss ship at the top center. It must be much larger than the other ships. Use an angular mechanical design with asymmetrical fins, side cannons, segmented armor, and a glowing energy core. Use a vivid palette such as purple, teal, lime green, black metal and gold highlights. The boss must feel powerful and threatening.

Enemies:
Add several enemy types with clearly different silhouettes:
- crescent-shaped scout ships
- hexagonal drones with glowing cores
- wide winged gunships
- small turret-like enemy pods
Use varied palettes with cyan, purple, lime, gold, black and magenta. Avoid simple gray/red ships.

Gameplay elements:
Add dense but readable bullet patterns:
- player bullets in bright cyan
- enemy bullets in purple and lime green
- a few glowing orb projectiles
- one orange pixel explosion in the middle of the screen
- one green bonus pickup icon with a plus symbol
- several asteroids of different sizes around the edges
- optional mine or hazard object in the lower-middle area

Background:
Use a layered parallax-style space background:
- deep starfield
- purple and blue nebula clouds
- distant planets or moons
- floating particles
- foreground asteroids
The background should be rich but not distract from gameplay.

HUD:
Create an original retro-futuristic pixel HUD, not a classic copied arcade HUD.
Use angular neon panels, segmented meters, compact data modules and cyberpunk-style pixel typography.

HUD must include:
- SHIELDS instead of classic hearts, using blue hexagonal shield cells
- SCORE with a digital number display
- TIMER with a clock icon and time value
- KILLS with a custom enemy marker icon, not skulls
- BONUS TIMER with a segmented magenta progress bar

HUD layout:
Top-left: shield module and score module.
Top-center: timer module.
Top-right: bonus timer and kills module.
Keep all text in English and readable.

Visual quality:
The final image should look like a screenshot from a finished mobile arcade game. High contrast, strong readability, vivid neon colors, crisp pixel art, no blurry rendering, no messy text, no watermark, no realistic 3D, no anime characters.
```

### 2. Tiles and sprites


```txt
prompt to create tilesets + backgrounds:
Create 6 separate images based only on the provided reference image of a vertical retro pixel-art space shooter.

The goal is to create production-ready assets to reproduce the game screenshot and build a playable mobile shoot’em up.

Generate exactly 6 individual images:
1. TILESET 01 — SHIPS ONLY
2. TILESET 02 — PROJECTILES, EXPLOSIONS, PICKUPS AND HAZARDS ONLY
3. TILESET 03 — HUD AND UI ELEMENTS ONLY
4. BACKGROUND 01 — PURPLE / BLUE DEEP SPACE
5. BACKGROUND 02 — BLUE PLANET ASTEROID FIELD
6. BACKGROUND 03 — GREEN NEBULA SPACE FIELD

Very important global rules:
- Use the same retro high-detail pixel-art style as the reference image.
- Do not copy any existing game.
- Keep the same visual direction: neon sci-fi colors, crisp pixels, arcade mobile game quality, 16-bit / 32-bit pixel-art aesthetic.
- All assets must be clean, readable and game-ready.
- Do not create a gameplay screenshot.
- Do not place assets on top of a scene.
- Do not merge all images into one collage.
- Each image must be generated separately.
- No watermark.
- No realistic 3D.
- No anime characters.
- No text labels inside the tilesets, except HUD text in the UI tileset.
- The three tilesets must use a pure white background.
- The three backgrounds must be full vertical 9:16 pixel-art backgrounds with no ships, no bullets, no UI and no gameplay elements.

TILESET 01 — SHIPS ONLY:
Create a white-background pixel-art tileset containing only ships and enemy units.

This tileset must include:
- 1 player ship
- 2 boss ships
- at least 3 enemy ship types
- optional size variations of enemies
- optional damage variations if space allows

Player ship:
- sleek angular interceptor
- teal, gold, white and cyan accents
- sharp wings
- pointed nose
- visible engines
- bright cyan exhaust flames
- viewed from top-down / vertical shooter perspective

Boss ship 01:
- huge angular mechanical boss
- purple, teal, lime green, black metal and gold highlights
- asymmetrical fins
- side cannons
- segmented armor
- glowing energy core
- threatening silhouette

Boss ship 02:
- different original boss design
- larger than normal enemies but different from boss 01
- vertical elongated mechanical silhouette or wide heavy gunship silhouette
- glowing core
- purple, teal, black metal, lime and gold palette
Create 6 separate images based only on the provided reference image of a vertical retro pixel-art space shooter.

The goal is to create production-ready assets to reproduce the game screenshot and build a playable mobile shoot’em up.

Generate exactly 6 individual images:
1. TILESET 01 — SHIPS ONLY
2. TILESET 02 — PROJECTILES, EXPLOSIONS, PICKUPS AND HAZARDS ONLY
3. TILESET 03 — HUD AND UI ELEMENTS ONLY
4. BACKGROUND 01 — PURPLE / BLUE DEEP SPACE
5. BACKGROUND 02 — BLUE PLANET ASTEROID FIELD
6. BACKGROUND 03 — GREEN NEBULA SPACE FIELD

Very important global rules:
- Use the same retro high-detail pixel-art style as the reference image.
- Do not copy any existing game.
- Keep the same visual direction: neon sci-fi colors, crisp pixels, arcade mobile game quality, 16-bit / 32-bit pixel-art aesthetic.
- All assets must be clean, readable and game-ready.
- Do not create a gameplay screenshot.
- Do not place assets on top of a scene.
- Do not merge all images into one collage.
- Each image must be generated separately.
- No watermark.
- No realistic 3D.
- No anime characters.
- No text labels inside the tilesets, except HUD text in the UI tileset.
- The three tilesets must use a pure white background.
- The three backgrounds must be full vertical 9:16 pixel-art backgrounds with no ships, no bullets, no UI and no gameplay elements.

TILESET 01 — SHIPS ONLY:
Create a white-background pixel-art tileset containing only ships and enemy units.

This tileset must include:
- 1 player ship
- 2 boss ships
- at least 3 enemy ship types
- optional size variations of enemies
- optional damage variations if space allows

Player ship:
- sleek angular interceptor
- teal, gold, white and cyan accents
- sharp wings
- pointed nose
- visible engines
- bright cyan exhaust flames
- viewed from top-down / vertical shooter perspective

Boss ship 01:
- huge angular mechanical boss
- purple, teal, lime green, black metal and gold highlights
- asymmetrical fins
- side cannons
- segmented armor
- glowing energy core
- threatening silhouette

Boss ship 02:
- different original boss design
- larger than normal enemies but different from boss 01
- vertical elongated mechanical silhouette or wide heavy gunship silhouette
- glowing core
- purple, teal, black metal, lime and gold palette

Enemy types:
- crescent-shaped scout ships
- hexagonal drones with glowing cores
- wide winged gunships
- small turret-like enemy pods

Important layout rules for TILESET 01:
- White background only.
- Ships only.
- No bullets.
- No explosions.
- No asteroids.
- No pickups.
- No HUD.
- Leave large empty space around every sprite.
- Each sprite must be clearly separated and easy to cut out.
- Do not overlap sprites.
- Organize assets in a clean grid-like layout.
- Keep crisp pixel edges.

TILESET 02 — PROJECTILES, EXPLOSIONS, PICKUPS AND HAZARDS ONLY:
Create a white-background pixel-art tileset containing only gameplay effects and non-ship objects.

This tileset must include:
- cyan player bullet sprites
- cyan bullet stream variations
- purple enemy bullet sprites
- lime green enemy bullet sprites
- glowing orb projectiles
- laser projectile variations
- orange explosion sprites in several sizes
- purple energy impact sprites
- green bonus pickup icon with a plus symbol
- mine / hazard object
- asteroids in multiple sizes
- small particle effects
- optional muzzle flashes

Important layout rules for TILESET 02:
- White background only.
- No ships.
- No bosses.
- No enemy ships.
- No HUD.
- Every sprite must be well separated.
- Leave enough empty white space around each asset for easy cropping.
- Do not overlap elements.
- Organize projectiles by color and type.
- Organize explosions by size.
- Organize asteroids from large to small.
- Keep the same pixel-art style as the reference image.

TILESET 03 — HUD AND UI ELEMENTS ONLY:
Create a white-background pixel-art tileset containing only HUD and interface elements.

This tileset must include:
- SHIELDS module
- blue hexagonal shield cells, full and empty versions
- SCORE module with digital number display
- TIMER module with clock icon and time value
- KILLS module with custom enemy marker icon, not skulls
- BONUS TIMER module with segmented magenta progress bar
- weapon module
- smart bomb module
- overdrive segmented meter
- small angular neon UI panels
- corner frames
- compact data modules
- cyan and magenta cyberpunk pixel borders
- digital number glyphs from 0 to 9
- small icons useful for a mobile arcade game interface

HUD style:
- original retro-futuristic pixel HUD
- angular neon panels
- segmented meters
- compact data modules
- cyberpunk-style pixel typography
- cyan, blue, magenta, black and orange accents

Important layout rules for TILESET 03:
- White background only.
- HUD and UI elements only.
- No ships.
- No projectiles.
- No asteroids.
- No explosions.
- Leave large spacing around every UI element.
- Do not overlap panels.
- Keep all text in English and readable.
- Use clean, sharp pixel typography.

BACKGROUND 01 — PURPLE / BLUE DEEP SPACE:
Create a vertical 9:16 retro pixel-art background for a mobile shoot’em up.

Background style:
- deep starfield
- purple and blue nebula clouds
- distant planets or moons
- floating particles
- foreground asteroids near the edges
- rich but not too busy
- center area should remain readable for gameplay

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must be usable as a scrolling/parallax game background.
- Keep strong pixel-art texture, crisp but atmospheric.
- Portrait 9:16 composition.

BACKGROUND 02 — BLUE PLANET ASTEROID FIELD:
Create a second vertical 9:16 pixel-art space background.

Background style:
- cold blue sci-fi palette
- large distant planet or moon near one side
- asteroid field around the edges
- blue nebula trail across the background
- dense stars and floating particles
- center gameplay lane remains readable

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must look like a finished mobile arcade game background.
- Portrait 9:16 composition.

BACKGROUND 03 — GREEN NEBULA SPACE FIELD:
Create a third vertical 9:16 pixel-art space background.

Background style:
- green and lime nebula clouds
- dark deep space
- distant planets or moons
- scattered asteroids around edges
- glowing green star particles
- dramatic sci-fi atmosphere
- readable center lane for gameplay

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must be usable as a scrolling/parallax mobile game background.
- Portrait 9:16 composition.
Enemy types:
- crescent-shaped scout ships
- hexagonal drones with glowing cores
- wide winged gunships
- small turret-like enemy pods

Important layout rules for TILESET 01:
- White background only.
- Ships only.
- No bullets.
- No explosions.
- No asteroids.
- No pickups.
- No HUD.
- Leave large empty space around every sprite.
- Each sprite must be clearly separated and easy to cut out.
- Do not overlap sprites.
- Organize assets in a clean grid-like layout.
- Keep crisp pixel edges.

TILESET 02 — PROJECTILES, EXPLOSIONS, PICKUPS AND HAZARDS ONLY:
Create a white-background pixel-art tileset containing only gameplay effects and non-ship objects.

This tileset must include:
- cyan player bullet sprites
- cyan bullet stream variations
- purple enemy bullet sprites
- lime green enemy bullet sprites
- glowing orb projectiles
- laser projectile variations
- orange explosion sprites in several sizes
- purple energy impact sprites
- green bonus pickup icon with a plus symbol
- mine / hazard object
- asteroids in multiple sizes
- small particle effects
- optional muzzle flashes

Important layout rules for TILESET 02:
- White background only.
- No ships.
- No bosses.
- No enemy ships.
- No HUD.
- Every sprite must be well separated.
- Leave enough empty white space around each asset for easy cropping.
- Do not overlap elements.
- Organize projectiles by color and type.
- Organize explosions by size.
- Organize asteroids from large to small.
- Keep the same pixel-art style as the reference image.

TILESET 03 — HUD AND UI ELEMENTS ONLY:
Create a white-background pixel-art tileset containing only HUD and interface elements.

This tileset must include:
- SHIELDS module
- blue hexagonal shield cells, full and empty versions
- SCORE module with digital number display
- TIMER module with clock icon and time value
- KILLS module with custom enemy marker icon, not skulls
- BONUS TIMER module with segmented magenta progress bar
- weapon module
- smart bomb module
- overdrive segmented meter
- small angular neon UI panels
- corner frames
- compact data modules
- cyan and magenta cyberpunk pixel borders
- digital number glyphs from 0 to 9
- small icons useful for a mobile arcade game interface

HUD style:
- original retro-futuristic pixel HUD
- angular neon panels
- segmented meters
- compact data modules
- cyberpunk-style pixel typography
- cyan, blue, magenta, black and orange accents

Important layout rules for TILESET 03:
- White background only.
- HUD and UI elements only.
- No ships.
- No projectiles.
- No asteroids.
- No explosions.
- Leave large spacing around every UI element.
- Do not overlap panels.
- Keep all text in English and readable.
- Use clean, sharp pixel typography.

BACKGROUND 01 — PURPLE / BLUE DEEP SPACE:
Create a vertical 9:16 retro pixel-art background for a mobile shoot’em up.

Background style:
- deep starfield
- purple and blue nebula clouds
- distant planets or moons
- floating particles
- foreground asteroids near the edges
- rich but not too busy
- center area should remain readable for gameplay

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must be usable as a scrolling/parallax game background.
- Keep strong pixel-art texture, crisp but atmospheric.
- Portrait 9:16 composition.

BACKGROUND 02 — BLUE PLANET ASTEROID FIELD:
Create a second vertical 9:16 pixel-art space background.

Background style:
- cold blue sci-fi palette
- large distant planet or moon near one side
- asteroid field around the edges
- blue nebula trail across the background
- dense stars and floating particles
- center gameplay lane remains readable

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must look like a finished mobile arcade game background.
- Portrait 9:16 composition.

BACKGROUND 03 — GREEN NEBULA SPACE FIELD:
Create a third vertical 9:16 pixel-art space background.

Background style:
- green and lime nebula clouds
- dark deep space
- distant planets or moons
- scattered asteroids around edges
- glowing green star particles
- dramatic sci-fi atmosphere
- readable center lane for gameplay

Important:
- No ships.
- No bullets.
- No explosions.
- No pickups.
- No HUD.
- No text.
- Must be usable as a scrolling/parallax mobile game background.
- Portrait 9:16 composition.
```

## Japanese city builder

You have two reference images:

1. A Japanese voxel builder game screenshot showing the target visual direction, UI mood, camera angle, world composition, and overall gameplay/editor feeling.
2. A Japanese voxel asset sheet showing the type of objects, structures, props, vegetation, terrain pieces, and decorative elements that should exist in the game.

Your goal is to create a playable browser game prototype inspired by these two images.

Important rule:
You must first create the full game asset pack yourself, based on the visual style and content of the two reference images.
Do not import external visual assets.
Do not use stock images.
Do not use asset packs from elsewhere.
Do not use placeholder icons or random UI packs.
Everything visible in the game must come from assets you generate specifically for this project.

Asset creation phase:
Before building the game, generate a complete coherent 2D isometric asset pack inspired by the provided references.

Create an `/assets` folder and generate all required visual assets as separate transparent PNG files.

The created assets must match the style of the references:
- Japanese voxel / cubic / blocky style
- isometric view
- clean readable silhouettes
- soft pastel colors
- polished premium prototype feel
- cute but structured temple-builder aesthetic

Required assets to create:
Terrain:
- grass tile
- path tile
- dirt tile
- water tile
- stone tile
- stairs tile
- canal edge tile

Borders / structure helpers:
- straight fence
- corner fence
- gate fence
- stone post

Nature:
- bamboo cluster
- sakura tree
- small tree / shrub
- grass tuft
- flower bush

Lighting / shrine props:
- stone lantern
- hanging lantern
- torii gate
- shrine box / small altar
- signpost
- banner flag

Water features / farming / utilities:
- small bridge
- well
- rice paddy
- crop patch
- vegetable garden
- water bucket

Decorative props:
- wooden crate
- wooden bench
- hay bale
- rock cluster
- large rock
- mossy rock
- flat stone
- pebbles
- stone pile
- boulder
- wood pile
- storage box
- stone basin

Buildings:
- small hut
- main house
- pagoda
- watchtower
- main temple

UI assets:
- button backgrounds
- panel backgrounds
- category tabs
- toolbar buttons
- hover highlight tile
- placement preview highlight
- simple custom icons if needed, created in the same style

All generated assets must be visually consistent with each other and suitable for an isometric builder game.

Game concept:
Create a small Japanese voxel temple builder game called:

Japanese Temple Voxels

The player can build a tiny voxel temple village on an isometric grid.

Core gameplay:
- The game starts with an empty isometric terrain grid.
- The player can select assets from a bottom asset palette.
- The player can place selected assets on the grid.
- The player can erase placed assets.
- The player can switch between terrain, nature, props, water, and buildings.
- The player can pan and zoom the view.
- The player can save the current layout in localStorage.
- The player can reset the world.
- The player can toggle the grid visibility.
- The goal is creative building, not combat.

Visual direction:
The final game must feel like the provided Japanese voxel builder screenshot:
- soft isometric camera
- clean pastel UI
- Japanese temple village mood
- cream / light background
- floating square terrain platform
- subtle shadows
- polished browser-game prototype feeling
- calm Japanese garden atmosphere

Do not recreate the screenshot as a static image.
Build an actual interactive prototype.

Technical constraints:
- Use HTML, CSS, and JavaScript.
- The game must run directly in the browser by opening `index.html`.
- Organize the code like a senior developer.
- Do not put everything into one giant file.
- Separate asset generation, asset loading, game logic, rendering, input, UI, and storage into clear modules.

Suggested structure:

/index.html
/src/main.js
/src/config.js
/src/assets/generateAssets.js
/src/assets/assetManifest.js
/src/assets/assetLoader.js
/src/core/Game.js
/src/core/Camera.js
/src/core/InputManager.js
/src/core/Renderer.js
/src/grid/IsoGrid.js
/src/grid/TileMap.js
/src/building/PlacementSystem.js
/src/building/PlacedObject.js
/src/ui/UIManager.js
/src/ui/Toolbar.js
/src/ui/AssetPalette.js
/src/ui/HUD.js
/src/storage/SaveSystem.js
/assets/

Important implementation detail:
The project must include a step or script that creates the visual assets first, saves them into `/assets/`, then uses those generated assets in the game.
All final in-game visuals must come from that generated asset pack.

Gameplay details:
- Use an isometric 2D rendering approach.
- Render the world using the created PNG assets.
- Use proper isometric depth sorting.
- The grid should be at least 10x10.
- Terrain tiles cover the base grid.
- Buildings and props sit on top of tiles.
- Larger structures like pagoda, temple, and watchtower occupy multiple cells.
- Small props like lanterns, rocks, bamboo, crops, and signs occupy one cell.
- Water and canal pieces should visually connect nicely.
- Show a preview before placement.
- Highlight the hovered grid cell.
- Prevent large buildings from overlapping placed objects.
- Allow replacing terrain without deleting props above it.
- Allow erasing props/buildings separately from terrain.

UI requirements:
- Title: Japanese Temple Voxels
- Left toolbar:
  - Place
  - Erase
  - Pan
  - Grid toggle
  - Save
  - Reset
- Bottom asset palette:
  - Terrain
  - Nature
  - Props
  - Water
  - Buildings
- The palette must use the created asset images as icons.
- Show the selected asset clearly.
- Add a small instruction panel:
  - Click to place
  - Right click or Erase mode to remove
  - Drag to pan
  - Mouse wheel to zoom
- Keep all visible UI text in English.

Interactions:
- Left click places the selected asset.
- Right click erases the object on the selected cell.
- Mouse drag pans the camera.
- Mouse wheel zooms in/out.
- Keyboard shortcuts:
  - 1 Terrain
  - 2 Nature
  - 3 Props
  - 4 Water
  - 5 Buildings
  - E Erase mode
  - G Toggle grid
  - S Save
  - R Reset

Rendering:
- Use canvas-based rendering or a clean DOM/canvas hybrid.
- Keep performance smooth.
- Add subtle drop shadows under objects.
- Add a soft background grid or foggy editor-style backdrop.
- The final result should feel like a polished playable prototype.

Important:
Do not use external assets.
Do not use emoji icons.
Do not use external icon libraries.
Do not use placeholder art.
Create the assets first, then build the game with them.
Every visible object in the final game must come from the generated project asset pack.

Deliverable:
Create the complete working project.
Generate the full asset pack into `/assets/`.
Then build the playable browser prototype using only those generated assets.
The final prototype must open with `index.html` and let the player build a small Japanese temple voxel village.

## Runner

### 1. Image

prompt: 

```txt
Create a browser game screenshot in a simple low-poly voxel style, closely matching the look of a lightweight WebGL / Three.js prototype.

The camera is in third-person view, placed behind and slightly above a small voxel cyclist riding on a straight 3-lane dirt road. The scene must look like a real playable browser endless runner game, not a cinematic illustration.

Use simple blocky geometry, flat colors, clean shading, and a bright open sky. Keep a large portion of the image dedicated to the sky, with a long straight road centered in the composition and stretching far into the distance.

Environment:
- simple voxel palm trees on both sides of the road
- flat green terrain
- small voxel rocks, flowers, bushes, and scattered decorative blocks
- light blocky cliffs or large geometric jungle masses in the distance
- a few cubic clouds in the sky
- a simple river or water channels on the sides
- a few basic road obstacles like crates, fences, hay bales, or wooden barriers
- simple collectibles placed along the road

Cyclist:
- small blocky voxel character
- simple voxel bike
- viewed from the back
- lightweight browser game look
- clear silhouette, readable, simple proportions

HUD:
Add a very simple browser game UI with soft cream-colored rounded panels.
Top left panel:
- title: "VOXEL JUNGLE RIDE"
- score
- distance
- fish
- speed
- lives shown with red hearts
- a green "JUNGLE" badge
- combo text such as "COMBO X1"

Top right panel:
- title: "CONTROLS"
- A / Q / ← : steer left
- D / → : steer right
- W : pedal faster
- S : brake
- Space : jump
- R : restart
- a small star note: "Stars build combo"

Bottom center:
- a simple horizontal speed or progress bar

Style:
simple voxel browser game, low-poly, flat-shaded, colorful, playful, clean, readable, prototype-like, lightweight, WebGL / Three.js look.

Important:
Do not make it cinematic, realistic, hyper-detailed, or premium AAA.
Do not make the jungle too dense.
Do not use flashy mobile-game UI.
Keep the overall look simple, airy, open, and very close to a minimal browser voxel game prototype.
```

### 2. Game
prompt for create game: 

```txt
Create a voxel web game playable directly in the browser with only 2 files: index.html and game.js.

The game must be a 3D voxel endless runner. The player controls a voxel cyclist riding on a dirt road through a colorful tropical jungle. The camera is placed behind the player, slightly above, with a dynamic perspective. The result must feel like a real premium arcade prototype: smooth, readable, colorful, with a rich and lively world.

Technical constraints:
Use only HTML, CSS inside index.html, JavaScript, and Three.js via CDN. No npm, no backend, no external files. Everything must be generated in code using voxel/cube shapes. index.html must only load game.js. The game must work by simply opening index.html.

Structure:
index.html contains the page, the canvas, the HUD, the CSS styles, and the Three.js import. game.js contains all the logic: scene, camera, lights, world, player, obstacles, collectibles, collisions, score, animation, and restart.

Gameplay:
The character moves forward automatically. A / Q or left arrow moves left. D or right arrow moves right. W accelerates. S slows down. Space jumps. R restarts. There are 3 playable lanes: left, center, right. The player must avoid voxel obstacles such as logs, crates, rocks, holes, and barriers. The player can collect golden stars and blue fish bonus items. Display score, distance, speed, combo, and lives. Add collision detection. The player loses one life when hitting an obstacle. Game over when lives reach zero. Gradually increase the difficulty with distance.

Voxel world creation:
The world must be generated as a long 3D corridor divided into segments. Each segment represents a portion of the road with scenery on the left and right sides. Segments appear far in front of the player and are removed behind the player to simulate an infinite world.

Main road:
Create a dirt road made of flat cubes with 3 visible and readable lanes, voxel stone borders on the sides, small color variations on the ground, broken tiles, small rocks, leaves, wheel tracks, and small ground details. Add a few bridges or special passages on some sections.

Left and right scenery:
Add dense jungle scenery with cubic trees of different sizes, voxel palm trees with segmented trunks and blocky leaves, bushes, flowers, mushrooms, tall grass, stacked rocks, small terrain reliefs, blue rivers alongside the path, small voxel wooden bridges, waterfalls on side cliffs, and ancient ruins such as arches, broken columns, statues, and damaged walls. Add torches, glowing crystals, or small lanterns to create visual depth.

Biomes:
Alternate between several environments to avoid repetition: dense jungle, tropical river, ancient ruins, bright clearing, and cliff with waterfall. Each biome must have its own colors, decorative objects, and visual density. Add background elements such as cubic mountains, large trees, distant temples, and voxel clouds.

Procedural generation:
Create a main function createWorldSegment(z, biome). Each segment must contain a road section, borders, decorations, sometimes an obstacle, and sometimes a collectible. Create dedicated functions: createVoxelTree(x, z), createPalmTree(x, z), createBush(x, z), createFlowerPatch(x, z), createRockCluster(x, z), createRiverSide(x, z), createAncientRuins(x, z), createVoxelCloud(x, y, z), createBridge(z), createWaterfall(x, z), createObstacle(lane, z), and createCollectible(type, lane, z).

Important rules:
Do not place objects completely randomly. Compose readable and balanced scenes. Never block all 3 lanes at the same time. Always leave at least one playable lane. Vary obstacles depending on the distance. The further the player goes, the closer the obstacles become. Keep the game readable despite the rich environment.

Art direction:
Use a colorful 3D voxel style, premium arcade rendering, bright but clean colors, tropical jungle atmosphere, soft lighting with shadows, light fog for depth, blue sky with cubic clouds, stylized shiny water, and a clean HUD interface with semi-transparent panels. Add simple animations: moving bike, jumping character, rotating collectibles, and scrolling environment.

HUD:
Display the game title, score, distance, fish, speed, combo, lives, boost or speed bar, controls panel, and a Game Over screen with final score and restart button.

The final result must be a real playable prototype, not just a 3D scene. It must include gameplay, a game loop, progression, score, collisions, increasing difficulty, and a rich voxel world that makes the player want to keep playing.
```