// Football 101 — Content Data
const SECTIONS = [
// ===== SECTION 1: INTRODUCTION =====
{
  id:'intro', icon:'⚽', title:'What is Football?', subtitle:'The world\'s most popular sport — a brief introduction',
  cards:[
    {type:'learn',title:'The Beautiful Game',html:`<p>Football (called "soccer" in the US/Australia) is the <b>most popular sport on Earth</b> with over 3.5 billion fans across every continent.</p><p>The concept is simple: two teams of <b>11 players</b> try to kick a ball into the opponent's goal. The team that scores more goals in 90 minutes wins.</p><p>What makes it beautiful is the simplicity — you only need a ball and open space. From the streets of Brazil to the stadiums of Europe, the same game is played everywhere.</p>`},
    {type:'learn',title:'Key Facts at a Glance',html:`<div class="stats-grid"><div class="stat-card"><div class="num">3.5B+</div><div class="lbl">Fans worldwide</div></div><div class="stat-card"><div class="num">211</div><div class="lbl">FIFA member nations</div></div><div class="stat-card"><div class="num">1863</div><div class="lbl">Year rules were codified</div></div><div class="stat-card"><div class="num">90 min</div><div class="lbl">Match duration</div></div><div class="stat-card"><div class="num">11 v 11</div><div class="lbl">Players per side</div></div><div class="stat-card"><div class="num">1</div><div class="lbl">Ball. That's all you need.</div></div></div>`},
    {type:'learn',title:'Brief History',html:`<h3>Origins</h3><p>Kicking games existed in ancient China (cuju, 200 BC), medieval England, and Florence (calcio). Modern football was born in <b>1863</b> when the Football Association (FA) in London wrote unified rules.</p><h3>Key Milestones</h3><ul><li><b>1863</b> — FA founded, first unified rules</li><li><b>1872</b> — First international match (England vs Scotland)</li><li><b>1904</b> — FIFA founded in Paris</li><li><b>1930</b> — First World Cup (Uruguay)</li><li><b>1991</b> — First Women's World Cup (China)</li><li><b>1992</b> — UEFA Champions League rebranded</li><li><b>2023</b> — Women's World Cup attendance record (1.9M)</li></ul>`},
    {type:'learn',title:'Match Structure',html:`<ul><li><b>Duration</b>: 90 minutes — two halves of 45 minutes</li><li><b>Half-time</b>: 15-minute break between halves</li><li><b>Stoppage time</b>: Extra minutes added for delays (injuries, substitutions, time-wasting)</li><li><b>Extra time</b>: In knockout matches only — 2×15 minutes if tied after 90</li><li><b>Penalty shootout</b>: If still tied after extra time — 5 kicks each, then sudden death</li></ul><p style="margin-top:10px"><b>Result options</b>: Win (3 points in league), Draw (1 point each), Loss (0 points)</p>`},
    {type:'quiz',q:'How many players are on the field per team?',opts:['9','10','11','12'],ans:2,exp:'11 players per team — 1 goalkeeper and 10 outfield players.'},
    {type:'quiz',q:'When was the first FIFA World Cup held?',opts:['1928','1930','1934','1950'],ans:1,exp:'The first World Cup was held in Uruguay in 1930. Uruguay won it.'},
    {type:'quiz',q:'What happens if a knockout match is tied after 90 minutes?',opts:['Replay the match','30 minutes of extra time, then penalties if needed','Immediate penalty shootout','The away team wins'],ans:1,exp:'Extra time (2×15 min) is played first. If still tied, it goes to a penalty shootout.'}
  ]
},
// ===== SECTION 2: THE PITCH =====
{
  id:'pitch', icon:'🏟️', title:'The Pitch', subtitle:'Every marking on the field explained with labels',
  cards:[
    {type:'learn',title:'Pitch Dimensions & Markings',html:`<p>A football pitch is rectangular, measuring <b>100-110m long × 64-75m wide</b> (FIFA standard). Every line has a purpose:</p><ul><li><b>Touchlines</b> — Long sides of the pitch. Ball crossing here = throw-in</li><li><b>Goal lines</b> — Short ends. Ball crossing here = goal kick or corner kick</li><li><b>Halfway line</b> — Divides the pitch into two equal halves</li><li><b>Center circle (9.15m radius)</b> — Opposing players must stay outside during kickoff</li><li><b>Center spot</b> — Ball placed here for kickoff</li><li><b>Penalty area (18-yard box)</b> — Large box at each end. GK can use hands here. Fouls here = penalty</li><li><b>Goal area (6-yard box)</b> — Small box inside penalty area. Goal kicks taken from here</li><li><b>Penalty spot</b> — 12 yards (11m) from goal center. Penalties taken here</li><li><b>Penalty arc</b> — Semi-circle outside the box. Ensures everyone is 9.15m from penalty spot during a penalty kick</li><li><b>Corner arcs</b> — Quarter-circles at each corner. Ball placed inside for corner kicks</li></ul>`+pitchDiagram()},
    {type:'learn',title:'The Goals',html:`<p>Goals are positioned at the center of each goal line:</p><ul><li><b>Width</b>: 7.32m (8 yards) between posts</li><li><b>Height</b>: 2.44m (8 feet) to the crossbar</li><li><b>Net</b>: Attached behind to catch the ball (not required by the rules but universal in professional football)</li><li><b>Scoring</b>: The <em>entire ball</em> must cross the <em>entire line</em> between the posts and under the crossbar</li></ul><p style="margin-top:8px">Goal-line technology (GLT) and VAR now confirm close calls with millimeter accuracy.</p>`},
    {type:'quiz',q:'What is the purpose of the penalty arc?',opts:['Marks where corner kicks are taken','Ensures all players are 9.15m from the penalty spot during a penalty','Marks the goalkeeper\'s area','Indicates where throw-ins happen'],ans:1,exp:'The penalty arc ensures no player (other than the kicker and goalkeeper) is within 9.15m of the penalty spot when a penalty is taken.'},
    {type:'quiz',q:'Where are goal kicks taken from?',opts:['The penalty spot','Anywhere in the penalty area','The 6-yard box (goal area)','The center spot'],ans:2,exp:'Goal kicks are taken from anywhere within the 6-yard box (goal area).'},
    {type:'quiz',q:'For a goal to count, what must happen?',opts:['Ball touches the net','Ball crosses the line partially','Entire ball crosses the entire goal line','Referee blows the whistle'],ans:2,exp:'The whole ball must completely cross the whole goal line between the posts and under the crossbar.'}
  ]
},
// ===== SECTION 3: BASIC RULES =====
{
  id:'rules', icon:'📋', title:'Basic Rules', subtitle:'The fundamental laws of the game every viewer should know',
  cards:[
    {type:'learn',title:'Starting Play',html:`<h3>Kickoff</h3><ul><li>Taken at the center spot to start each half and after a goal</li><li>The ball must move forward (as of 2019, it can go in any direction)</li><li>Opponents must be outside the center circle</li><li>The kicker cannot touch the ball again until another player touches it</li></ul><h3>Drop Ball</h3><p>If play is stopped for any reason not in the rules (e.g., injury with no foul), the referee drops the ball to the team that last possessed it.</p>`},
    {type:'learn',title:'Ball In & Out of Play',html:`<h3>Out of Play</h3><p>The ball is out when it <b>completely crosses</b> the touchline or goal line (on the ground or in the air), or when the referee stops play.</p><h3>Restarts</h3><ul><li><b>Throw-in</b> — Ball over touchline. Opponent throws in with both hands, both feet on ground</li><li><b>Goal kick</b> — Ball over goal line (last touched by attacker). Kicked from 6-yard box</li><li><b>Corner kick</b> — Ball over goal line (last touched by defender). Kicked from corner arc</li></ul><p><b>Key rule</b>: You cannot score directly from a throw-in. You CAN score directly from a corner kick or free kick.</p>`},
    {type:'learn',title:'Substitutions',html:`<ul><li>Each team gets <b>5 substitutions</b> per match (since 2020, previously 3)</li><li>Subs can only be made in <b>3 windows</b> (plus half-time) to prevent time-wasting</li><li>A substituted player <b>cannot return</b> to the match</li><li>If a goalkeeper is sent off, a substitute GK can come on (another player goes off)</li></ul>`},
    {type:'learn',title:'Advantage Rule',html:`<p>If a foul is committed but the fouled team still has a good attack going, the referee can <b>play advantage</b> — letting play continue rather than stopping it.</p><ul><li>Referee signals by stretching both arms forward</li><li>If the advantage doesn't materialize within a few seconds, the referee can bring play back for the original foul</li><li>Cards can still be given at the next stoppage even if advantage was played</li></ul>`},
    {type:'quiz',q:'Can you score directly from a throw-in?',opts:['Yes','No'],ans:1,exp:'No — a throw-in that goes directly into the goal without touching another player doesn\'t count. It results in a goal kick or corner.'},
    {type:'quiz',q:'How many substitutions are allowed per team?',opts:['3','4','5','Unlimited'],ans:2,exp:'5 substitutions per match (changed in 2020). They must be made in a maximum of 3 windows plus half-time.'},
    {type:'quiz',q:'What is the "advantage rule"?',opts:['Home team always kicks off','Referee lets play continue after a foul if the fouled team benefits','Teams with more goals get extra time','Extra substitution for the losing team'],ans:1,exp:'If a foul occurs but the fouled team is in a good position, the referee signals advantage and lets play continue rather than stopping for a free kick.'}
  ]
},
// ===== SECTION 4: POSITIONS & FORMATIONS =====
{
  id:'positions', icon:'👥', title:'Positions & Formations', subtitle:'How teams organize their 11 players on the pitch',
  cards:[
    {type:'learn',title:'The Four Lines',html:`<p>Every team organizes into 4 groups from back to front:</p><h3>🟡 Goalkeeper (GK)</h3><p>The last line of defense. Only player who can use hands (inside their penalty area). Organizes the defense, takes goal kicks, and makes saves.</p><h3>🔵 Defenders (DEF)</h3><ul><li><b>Center-Back (CB)</b> — Central defender, wins aerial duels, blocks shots</li><li><b>Full-Back (LB/RB)</b> — Wide defenders who also overlap into attack</li><li><b>Wing-Back (LWB/RWB)</b> — Like full-backs but with more attacking duties (in 3-at-the-back systems)</li></ul><h3>🟢 Midfielders (MID)</h3><ul><li><b>CDM</b> (Defensive Mid) — Shields the back line, intercepts, recycles possession</li><li><b>CM</b> (Central Mid) — Box-to-box, does everything</li><li><b>CAM</b> (Attacking Mid) — The "number 10," creates chances</li></ul><h3>🔴 Forwards (FWD)</h3><ul><li><b>Striker (ST/CF)</b> — Central goal scorer</li><li><b>Winger (LW/RW)</b> — Wide attackers, pace and dribbling</li></ul>`+formationDiagram()},
    {type:'learn',title:'Common Formations',html:`<p>Formations describe how many defenders, midfielders, and forwards (GK is implied):</p><h3>4-3-3 (Attacking)</h3><p>4 defenders, 3 midfielders, 3 forwards. Wide wingers stretch defenses. Used by Barcelona, Liverpool.</p><h3>4-4-2 (Classic)</h3><p>Balanced shape with 2 strikers. Solid midfield, clear partnerships. Traditional English style.</p><h3>4-2-3-1 (Modern Standard)</h3><p>2 holding midfielders protect defense, 1 playmaker (CAM) behind the striker. Most common formation in modern football.</p><h3>3-5-2 (Wing-Back System)</h3><p>3 center-backs, 2 wing-backs provide width, packed midfield dominates possession. Used by Conte's teams.</p><h3>5-3-2 / 5-4-1 (Defensive)</h3><p>5 defenders (3 CB + 2 WB) creating a solid block. Used to protect leads or against stronger teams.</p>`},
    {type:'quiz',q:'What does "CDM" stand for?',opts:['Center Defensive Manager','Central Defensive Midfielder','Central Direct Midfielder','Creative Deep Midfielder'],ans:1,exp:'CDM = Central Defensive Midfielder. They sit in front of the back line and break up opponent attacks.'},
    {type:'quiz',q:'In a 4-2-3-1 formation, how many holding midfielders?',opts:['1','2','3','4'],ans:1,exp:'The "2" in 4-2-3-1 represents 2 holding/defensive midfielders who shield the back four.'},
    {type:'quiz',q:'What does a "number 10" (CAM) primarily do?',opts:['Defend','Score penalties','Create chances and final passes','Guard the goalkeeper'],ans:2,exp:'The #10 (CAM - Creative Attacking Midfielder) is the playmaker who creates goal-scoring chances with passing, vision, and dribbling.'}
  ]
},
// ===== SECTION 5: OFFSIDE =====
{
  id:'offside', icon:'🚩', title:'The Offside Rule', subtitle:'Football\'s most debated rule — explained with diagrams',
  cards:[
    {type:'learn',title:'When Is a Player Offside?',html:`<p>A player is in an <b>offside position</b> when ALL THREE conditions are true at the moment the ball is played to them:</p><ol><li>They are in the <b>opponent's half</b> of the pitch</li><li>They are <b>closer to the opponent's goal line</b> than both the ball AND the second-last defender</li><li>A teammate <b>plays the ball to them</b> (pass, not a deflection)</li></ol><p style="margin-top:10px"><b>Important clarifications:</b></p><ul><li>The goalkeeper counts as one of the "two last defenders"</li><li>Being level with the second-last defender is <b>NOT offside</b></li><li>Any part of the body you can legally score with counts (head, body, feet — not arms/hands)</li><li>You must be <b>involved in active play</b> to be penalized</li></ul>`},
    {type:'learn',title:'Offside Scenarios',html:offsideScenarios()},
    {type:'learn',title:'When You CANNOT Be Offside',html:`<p>You are <b>never offside</b> when receiving the ball directly from:</p><ul><li>A <b>throw-in</b></li><li>A <b>goal kick</b></li><li>A <b>corner kick</b></li></ul><p>You also cannot be offside if:</p><ul><li>You are in <b>your own half</b> when the ball is played</li><li>You are <b>level with</b> the second-last defender (level = onside)</li><li>You are <b>behind the ball</b> when it is played forward</li><li>You receive the ball from an <b>opponent's deliberate play</b> (not a deflection)</li></ul>`},
    {type:'quiz',q:'A player receives a pass while standing behind all defenders but in their OWN half. Is this offside?',opts:['Yes — they\'re behind all defenders','No — you cannot be offside in your own half'],ans:1,exp:'You can NEVER be offside while in your own half, regardless of where the defenders are.'},
    {type:'quiz',q:'A forward is level with the last defender when the ball is passed. What\'s the call?',opts:['Offside — they\'re at the same position','Onside — level is NOT offside'],ans:1,exp:'Level with the last defender (second-last including GK) is ONSIDE. The attacker gets the benefit of the doubt.'},
    {type:'quiz',q:'Can you be offside from a corner kick?',opts:['Yes','No — corners are exempt from offside'],ans:1,exp:'You CANNOT be offside directly from a corner kick. Same applies to throw-ins and goal kicks.'}
  ]
},
// ===== SECTION 6: FOULS & CARDS =====
{
  id:'fouls', icon:'🟨', title:'Fouls & Discipline', subtitle:'What gets you carded and why',
  cards:[
    {type:'learn',title:'What Is a Foul?',html:`<p>A foul is any of these committed against an opponent:</p><ul><li><b>Kicking or tripping</b> (or attempting to)</li><li><b>Jumping at</b> an opponent</li><li><b>Charging</b> recklessly or with excessive force</li><li><b>Striking or pushing</b></li><li><b>Tackling</b> and making contact with the player before the ball</li><li><b>Holding or pulling</b> (shirt, arm, body)</li><li><b>Handball</b> — deliberately touching the ball with hand/arm</li></ul><h3>Consequences</h3><ul><li>Foul <b>outside</b> the penalty area → <b>Free kick</b></li><li>Foul <b>inside</b> the penalty area → <b>Penalty kick</b></li></ul>`},
    {type:'learn',title:'Yellow Card (Caution) 🟨',html:`<p>A yellow card is a <b>formal warning</b>. You get one for:</p><ul><li><b>Reckless</b> tackles (not violent, but careless)</li><li><b>Persistent fouling</b> — committing multiple fouls throughout the match</li><li><b>Dissent</b> — arguing with the referee</li><li><b>Time-wasting</b> — delaying restarts, kicking ball away</li><li><b>Simulation</b> (diving) — pretending to be fouled</li><li><b>Entering/leaving</b> the field without permission</li><li><b>Failing to respect</b> the required distance at a restart</li></ul><p style="margin-top:8px"><b>Accumulation:</b> 2 yellows in one match = automatic red card.</p><p>In tournaments: collecting yellows across multiple matches (e.g., 2 in a group stage) leads to a 1-match suspension.</p>`},
    {type:'learn',title:'Red Card (Sending Off) 🟥',html:`<p>A red card = <b>immediate ejection</b>. The player leaves the pitch and cannot be replaced — their team plays with 10 (or fewer) for the rest of the match.</p><h3>Red card offenses:</h3><ul><li><b>Violent conduct</b> — punching, headbutting, kicking</li><li><b>Serious foul play</b> — endangering opponent's safety (studs-up, two-footed)</li><li><b>Spitting</b> at anyone</li><li><b>DOGSO</b> — Denying an Obvious Goal-Scoring Opportunity (handling the ball to stop a goal, or fouling a player through-on-goal)</li><li><b>Offensive language</b> or gestures</li><li><b>Second yellow card</b> — automatic red</li></ul><p style="margin-top:8px"><b>DOGSO inside the box:</b> If the foul is a genuine attempt to play the ball, it may be downgraded to a yellow (but still a penalty kick).</p>`},
    {type:'learn',title:'VAR (Video Assistant Referee)',html:`<p>Introduced in 2018 World Cup, VAR reviews <b>4 categories only</b>:</p><ol><li><b>Goals</b> — Was there offside, a foul, or handball in the buildup?</li><li><b>Penalty decisions</b> — Should one be given or overturned?</li><li><b>Direct red cards</b> — Was it violent/dangerous?</li><li><b>Mistaken identity</b> — Was the wrong player carded?</li></ol><p style="margin-top:8px"><b>Key principles:</b></p><ul><li>VAR only overrules "clear and obvious errors"</li><li>Subjective calls (e.g., whether a foul deserves yellow or no card) are NOT reviewed</li><li>The referee can go to the monitor (On-Field Review) for subjective red card situations</li><li>Offside calls use automated line technology for precision</li></ul>`},
    {type:'quiz',q:'What happens when a player receives 2 yellow cards?',opts:['Warning only','Automatic red card — sent off','Free kick only','Penalty kick'],ans:1,exp:'Two yellows in one match = automatic red card. The player is sent off and cannot return.'},
    {type:'quiz',q:'What does DOGSO stand for?',opts:['Dangerous Offense Getting Severely Overruled','Denying an Obvious Goal-Scoring Opportunity','Direct Offense on Goal-Side Opposition','Deliberate Obstruction of Goal-Side Opponent'],ans:1,exp:'DOGSO = Denying an Obvious Goal-Scoring Opportunity. This is a red card offense (e.g., fouling a player who is one-on-one with the goalkeeper).'},
    {type:'quiz',q:'Which situations does VAR NOT review?',opts:['Goals','Whether a foul deserves a yellow or no card','Penalty decisions','Direct red cards'],ans:1,exp:'VAR does not intervene in subjective yellow-card/no-card decisions. It only handles goals, penalties, direct reds, and mistaken identity.'}
  ]
},
// ===== SECTION 7: SET PIECES =====
{
  id:'setpieces', icon:'⚡', title:'Set Pieces', subtitle:'Dead-ball situations where teams execute rehearsed plays',
  cards:[
    {type:'learn',title:'Free Kicks',html:`<h3>Direct Free Kick</h3><p>Awarded for contact fouls and handballs. Can score <b>directly</b> without touching another player.</p><ul><li>Opponents must be <b>9.15m (10 yards)</b> away</li><li>Ball must be stationary</li><li>Kicker cannot touch ball again until someone else does</li></ul><h3>Indirect Free Kick</h3><p>Awarded for non-contact offenses (offside, obstruction, dangerous play). Must <b>touch another player</b> before entering the goal.</p><ul><li>Referee signals by raising arm straight up</li><li>Same distance rules apply</li></ul><h3>Defensive Wall</h3><p>Defenders line up shoulder-to-shoulder to block part of the goal. Attackers try to curl the ball over or around the wall. Since 2019, attacking players cannot stand in the wall.</p>`},
    {type:'learn',title:'Penalty Kick',html:`<ul><li>Taken from the <b>penalty spot</b> (12 yards / 11m from goal)</li><li>Only the <b>kicker</b> and <b>goalkeeper</b> are in the area</li><li>All other players must be outside the penalty area AND penalty arc</li><li>GK must stay on the goal line until the ball is kicked (can move sideways)</li><li>Ball must move forward</li><li>If the kicker misses or the GK saves, play continues (anyone can score the rebound)</li></ul><p style="margin-top:8px"><b>Penalty shootout</b> (knockout matches): 5 kicks each, alternating. If tied after 5, sudden death — one miss eliminates you.</p>`},
    {type:'learn',title:'Corner Kicks & Throw-ins',html:`<h3>Corner Kick</h3><ul><li>Awarded when a defender last touches the ball before it crosses their own goal line</li><li>Taken from the corner arc on the side where the ball went out</li><li>Can score directly (an "Olimpico" goal)</li><li>Opponents must be 9.15m from the corner arc</li><li>Common strategies: in-swinging (curls toward goal), out-swinging (curls away), short corner (pass to nearby teammate)</li></ul><h3>Throw-in</h3><ul><li>Awarded when the ball crosses the touchline</li><li>Thrown with <b>both hands</b>, from <b>behind and over the head</b></li><li>Both feet must be <b>on or behind the touchline</b>, touching the ground</li><li>Cannot score directly from a throw-in</li><li>No offside from a throw-in</li></ul>`},
    {type:'quiz',q:'What is the key difference between a direct and indirect free kick?',opts:['Distance from goal','Direct can score without touching another player; indirect cannot','Only captains can take direct free kicks','There is no difference'],ans:1,exp:'A direct free kick can go straight into the goal. An indirect free kick must touch at least one other player before entering the goal.'},
    {type:'quiz',q:'During a penalty kick, where must all players (except kicker and GK) be?',opts:['Behind the halfway line','Outside the penalty area AND penalty arc','Anywhere on the pitch','Behind the ball'],ans:1,exp:'All players except the kicker and goalkeeper must be outside both the penalty area and the penalty arc (so they\'re at least 9.15m from the spot).'},
    {type:'quiz',q:'Can you score directly from a throw-in?',opts:['Yes','No'],ans:1,exp:'No — you cannot score directly from a throw-in. If it goes in without touching another player, it\'s a goal kick or corner (not a goal).'}
  ]
},
// ===== SECTION 8: TACTICS =====
{
  id:'tactics', icon:'🧠', title:'Tactics & Strategy', subtitle:'How teams think about the game — beyond just kicking the ball',
  cards:[
    {type:'learn',title:'Attacking Strategies',html:`<h3>Possession-Based (Tiki-taka)</h3><p>Keep the ball with short passes (70%+ possession), waiting patiently for gaps. The opponent can't score without the ball.</p><p><em>Example: Guardiola's Barcelona (2009-2012), Man City</em></p><h3>Counter-Attack</h3><p>Sit deep, absorb pressure, win the ball, then attack at speed into the space left behind. Requires fast forwards.</p><p><em>Example: Mourinho's Inter Milan (2010), Leicester City (2016)</em></p><h3>Direct Play / Long Ball</h3><p>Skip midfield with long passes to target forwards. Physical, aerial, quick.</p><p><em>Example: Stoke City, Burnley, Wimbledon's "Crazy Gang"</em></p><h3>Wing Play</h3><p>Stretch the pitch wide using fast wingers, then cross into the box for headed goals.</p><p><em>Example: David Beckham's Manchester United</em></p>`},
    {type:'learn',title:'Defensive Strategies',html:`<h3>High Press (Gegenpressing)</h3><p>The moment you lose the ball, the nearest 3-4 players <b>immediately swarm</b> to win it back before the opponent can organize. Exhausting but devastating.</p><p><em>Example: Klopp's Liverpool, Rangnick's RB Leipzig</em></p><h3>Low Block (Park the Bus)</h3><p>All 10 outfield players retreat behind the ball into their own third. Two compact lines of 4-5 players. Nearly impossible to break down but creates no chances.</p><p><em>Example: Mourinho's Chelsea, Greece at Euro 2004</em></p><h3>Zonal vs Man-Marking</h3><ul><li><b>Zonal</b>: Each defender covers an area of the pitch, not a specific player</li><li><b>Man-marking</b>: Each defender shadows a specific opponent wherever they go</li><li>Most modern teams use <b>hybrid</b>: zonal shape with man-marking triggers on key players</li></ul>`},
    {type:'learn',title:'Game Management',html:`<ul><li><b>Controlling tempo</b> — Slowing or speeding up play with pass rhythm</li><li><b>Rotating the ball</b> — Passing side to side to tire the opponent and find gaps</li><li><b>Pressing triggers</b> — Specific situations that signal "press now!" (e.g., bad first touch, backward pass to GK)</li><li><b>Overloading</b> — Putting more players on one side than the opponent can cover</li><li><b>Transition</b> — The moments between attacking and defending are the most dangerous in football. Great teams have organized "transition plans"</li><li><b>Game state awareness</b> — Playing differently when winning vs. losing vs. drawing. A winning team may slow down; a losing team pushes everyone forward</li></ul>`},
    {type:'quiz',q:'What is "gegenpressing"?',opts:['A defensive block near your own goal','Immediately pressing to win the ball back after losing it','A type of free kick strategy','Playing with 3 center-backs'],ans:1,exp:'Gegenpressing (counter-pressing) means the moment you lose possession, the nearest players aggressively press to win it back within 5-8 seconds, before the opponent can organize a counter-attack.'},
    {type:'quiz',q:'What is "parking the bus"?',opts:['Attacking with all players','Placing all 10 outfield players in a deep defensive block','A formation with 5 forwards','Wasting time near the corner flag'],ans:1,exp:'Parking the bus = a deep defensive block where all 10 outfield players sit behind the ball in their own defensive third, making it extremely hard for the opponent to create chances.'},
    {type:'quiz',q:'In a possession-based system, why do teams pass sideways and backward?',opts:['They don\'t know what to do','To tire the opponent and create gaps','It\'s required by the rules','To waste time'],ans:1,exp:'Lateral and backward passes move the opponent\'s defensive shape, creating small gaps that can be exploited with a sudden forward pass or run.'}
  ]
},
// ===== SECTION 9: COMPETITIONS =====
{
  id:'competitions', icon:'🏆', title:'Competitions', subtitle:'Major tournaments, leagues, and how they work',
  cards:[
    {type:'learn',title:'The World Cup',html:`<p>The <b>FIFA World Cup</b> is football's biggest event, held every 4 years.</p><ul><li><b>Format</b>: 32 teams (expanding to 48 in 2026) qualify over 2 years from 6 continental zones</li><li><b>Group stage</b>: 4 teams per group, top 2 advance</li><li><b>Knockout stage</b>: Round of 16 → Quarter-finals → Semi-finals → Final</li><li><b>Duration</b>: ~1 month of matches</li></ul><h3>Most Successful Nations</h3><div class="stats-grid"><div class="stat-card"><div class="num">5</div><div class="lbl">Brazil 🇧🇷</div></div><div class="stat-card"><div class="num">4</div><div class="lbl">Germany 🇩🇪</div></div><div class="stat-card"><div class="num">4</div><div class="lbl">Italy 🇮🇹</div></div><div class="stat-card"><div class="num">3</div><div class="lbl">Argentina 🇦🇷</div></div><div class="stat-card"><div class="num">2</div><div class="lbl">France 🇫🇷 / Uruguay 🇺🇾</div></div><div class="stat-card"><div class="num">1</div><div class="lbl">England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 / Spain 🇪🇸</div></div></div>`},
    {type:'learn',title:'Club Competitions',html:`<h3>UEFA Champions League (Europe)</h3><p>The most prestigious club competition. 32 top clubs from European leagues compete September–June. Features the iconic anthem and midweek matches.</p><h3>Top Domestic Leagues</h3><ul><li>🏴󠁧󠁢󠁥󠁮󠁧󠁿 <b>Premier League</b> — Most watched globally (20 teams)</li><li>🇪🇸 <b>La Liga</b> — Spain, home of Barcelona & Real Madrid</li><li>🇩🇪 <b>Bundesliga</b> — Germany, known for atmosphere</li><li>🇮🇹 <b>Serie A</b> — Italy, tactically rich</li><li>🇫🇷 <b>Ligue 1</b> — France, where Mbappé emerged</li></ul><h3>How Leagues Work</h3><p>20 teams play each other twice (home & away) = 38 matches over a season (Aug-May). Win = 3 pts, Draw = 1 pt. Most points = champion. Bottom 3 teams are <b>relegated</b> (dropped to lower division); top teams from below are <b>promoted</b>.</p>`},
    {type:'learn',title:'Other Major Tournaments',html:`<ul><li><b>UEFA European Championship (Euros)</b> — Best European national teams, every 4 years</li><li><b>Copa América</b> — South American championship, oldest continental tournament</li><li><b>Africa Cup of Nations (AFCON)</b> — Major African championship</li><li><b>FIFA Women's World Cup</b> — Growing rapidly; 2023 set attendance records</li><li><b>Olympics</b> — U-23 tournament (with 3 overage players)</li><li><b>Copa Libertadores</b> — South America's Champions League equivalent</li><li><b>FIFA Club World Cup</b> — Champions from each continent compete</li></ul>`},
    {type:'quiz',q:'How many World Cups has Brazil won?',opts:['3','4','5','6'],ans:2,exp:'Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002) — the most of any nation.'},
    {type:'quiz',q:'What happens to the bottom 3 teams in the Premier League?',opts:['They are eliminated permanently','They are relegated to the Championship (lower division)','They play a playoff','Nothing'],ans:1,exp:'The bottom 3 teams are relegated to the Championship (second tier). The top teams from the Championship are promoted to replace them. This promotion/relegation system exists in most leagues worldwide.'},
    {type:'quiz',q:'How often is the FIFA World Cup held?',opts:['Every year','Every 2 years','Every 4 years','Every 5 years'],ans:2,exp:'The World Cup is held every 4 years. The next one (2026) will be hosted by USA, Canada, and Mexico with 48 teams.'}
  ]
},
// ===== SECTION 10: FAMOUS PLAYERS =====
{
  id:'players', icon:'⭐', title:'Famous Players & Records', subtitle:'Legends of the game and incredible achievements',
  cards:[
    {type:'learn',title:'All-Time Greats',html:`<h3>Pelé 🇧🇷 (1940–2022)</h3><p>The original "greatest ever." Won 3 World Cups (only player to do so). Over 1,000 career goals. Defined Brazilian flair.</p><h3>Diego Maradona 🇦🇷 (1960–2020)</h3><p>Single-handedly won the 1986 World Cup for Argentina. The "Hand of God" and "Goal of the Century" both in the same match.</p><h3>Lionel Messi 🇦🇷</h3><p>8 Ballon d'Or awards (all-time record). Finally won the World Cup in 2022. Widely regarded as the most complete player ever. Impossible dribbling, vision, and passing.</p><h3>Cristiano Ronaldo 🇵🇹</h3><p>109+ international goals (all-time record). Supreme athlete — speed, power, heading, free kicks. Won Champions League with 3 different mindsets at clubs.</p><h3>Zinedine Zidane 🇫🇷</h3><p>Elegant midfielder who won everything: World Cup, Euros, Champions League. Famous for his grace and his 2006 World Cup final headbutt.</p>`},
    {type:'learn',title:'Modern Stars',html:`<ul><li><b>Kylian Mbappé 🇫🇷</b> — Electric pace, scored World Cup final hat-trick aged 23</li><li><b>Erling Haaland 🇳🇴</b> — Goal machine, scored 36 Premier League goals in debut season</li><li><b>Vinicius Jr 🇧🇷</b> — Dazzling winger at Real Madrid, explosive dribbler</li><li><b>Jude Bellingham 🏴󠁧󠁢󠁥󠁮󠁧󠁿</b> — Complete midfielder at 20, already world-class</li><li><b>Aitana Bonmatí 🇪🇸</b> — 2023 Ballon d'Or Féminin winner, Barcelona midfield genius</li><li><b>Sam Kerr 🇦🇺</b> — All-time leading scorer in NWSL and W-League</li></ul>`},
    {type:'learn',title:'Incredible Records',html:`<div class="stats-grid"><div class="stat-card"><div class="num">8</div><div class="lbl">Ballon d'Or awards — Messi</div></div><div class="stat-card"><div class="num">109+</div><div class="lbl">International goals — Ronaldo</div></div><div class="stat-card"><div class="num">91</div><div class="lbl">Goals in a calendar year (2012) — Messi</div></div><div class="stat-card"><div class="num">14</div><div class="lbl">Champions League titles — Real Madrid</div></div><div class="stat-card"><div class="num">2.1s</div><div class="lbl">Fastest goal ever scored</div></div><div class="stat-card"><div class="num">149-0</div><div class="lbl">Biggest recorded scoreline (Madagascar, 2002)</div></div></div>`},
    {type:'quiz',q:'Who holds the record for most Ballon d\'Or awards?',opts:['Cristiano Ronaldo (5)','Lionel Messi (8)','Pelé (7)','Zinedine Zidane (3)'],ans:1,exp:'Lionel Messi has won 8 Ballon d\'Or awards — the most in history.'},
    {type:'quiz',q:'Which player scored a hat-trick in a World Cup Final at age 23?',opts:['Pelé','Messi','Mbappé','Ronaldo'],ans:2,exp:'Kylian Mbappé scored a hat-trick in the 2022 World Cup Final against Argentina (France lost on penalties).'},
  ]
},
// ===== SECTION 11: TERMINOLOGY =====
{
  id:'terms', icon:'📖', title:'Football Terminology', subtitle:'Speak like a football fan — the complete glossary',
  cards:[
    {type:'fun',title:'Essential Terms (A-F)',html:`<div class="terms-grid"><div class="term-item"><dt>Assist</dt><dd>The final pass before a goal is scored</dd></div><div class="term-item"><dt>Brace</dt><dd>2 goals by one player in a match</dd></div><div class="term-item"><dt>Cap</dt><dd>One international appearance for your country</dd></div><div class="term-item"><dt>Clean sheet</dt><dd>Conceding zero goals in a match (GK achievement)</dd></div><div class="term-item"><dt>Clinical</dt><dd>Finishing chances efficiently with precision</dd></div><div class="term-item"><dt>Cross</dt><dd>A pass from a wide position into the penalty area</dd></div><div class="term-item"><dt>Derby</dt><dd>A match between local/city rivals</dd></div><div class="term-item"><dt>Dribble</dt><dd>Running with the ball while keeping close control</dd></div><div class="term-item"><dt>Extra time</dt><dd>30 additional minutes (2×15) in knockout matches</dd></div><div class="term-item"><dt>False 9</dt><dd>A striker who drops deep into midfield to create confusion</dd></div><div class="term-item"><dt>First touch</dt><dd>The initial control of the ball — elite players have a perfect first touch</dd></div><div class="term-item"><dt>Fixture</dt><dd>A scheduled match</dd></div></div>`},
    {type:'fun',title:'Essential Terms (G-O)',html:`<div class="terms-grid"><div class="term-item"><dt>Goal difference</dt><dd>Goals scored minus goals conceded (tiebreaker in leagues)</dd></div><div class="term-item"><dt>Golden boot</dt><dd>Award for top scorer in a tournament</dd></div><div class="term-item"><dt>Hat-trick</dt><dd>3 goals by one player in a single match</dd></div><div class="term-item"><dt>Header</dt><dd>Playing the ball with your head</dd></div><div class="term-item"><dt>Injury time</dt><dd>Same as stoppage time — added at the end of each half</dd></div><div class="term-item"><dt>Keeper (GK)</dt><dd>Goalkeeper — the one in different-colored jersey</dd></div><div class="term-item"><dt>Marking</dt><dd>Staying close to an opponent to prevent them receiving the ball</dd></div><div class="term-item"><dt>Nutmeg</dt><dd>Playing the ball between an opponent's legs — humiliating!</dd></div><div class="term-item"><dt>Offside trap</dt><dd>Defenders stepping up in unison to catch attackers offside</dd></div><div class="term-item"><dt>One-two (wall pass)</dt><dd>Quick pass-and-move: pass to teammate, run, receive return pass</dd></div><div class="term-item"><dt>Overlap</dt><dd>A fullback running past their own winger on the outside</dd></div><div class="term-item"><dt>Own goal</dt><dd>Accidentally scoring in your own team's goal</dd></div></div>`},
    {type:'fun',title:'Essential Terms (P-Z)',html:`<div class="terms-grid"><div class="term-item"><dt>Park the bus</dt><dd>Extreme defensive strategy — everyone behind the ball</dd></div><div class="term-item"><dt>Rabona</dt><dd>A trick kick where the kicking leg wraps behind the standing leg</dd></div><div class="term-item"><dt>Relegation</dt><dd>Being demoted to a lower division (bottom 3 in most leagues)</dd></div><div class="term-item"><dt>Set piece</dt><dd>Any restart from a dead ball (free kick, corner, throw-in)</dd></div><div class="term-item"><dt>Stoppage time</dt><dd>Minutes added for delays (injuries, subs, VAR, time-wasting)</dd></div><div class="term-item"><dt>Tackle</dt><dd>Attempting to take the ball from an opponent with your foot</dd></div><div class="term-item"><dt>Through ball</dt><dd>A pass played into space behind the defense for a runner</dd></div><div class="term-item"><dt>Volley</dt><dd>Kicking the ball while it's in the air (before it bounces)</dd></div><div class="term-item"><dt>Bicycle kick</dt><dd>Acrobatic overhead kick — one of football's most spectacular skills</dd></div><div class="term-item"><dt>Box-to-box</dt><dd>A midfielder who covers the entire pitch, defending and attacking</dd></div><div class="term-item"><dt>Woodwork</dt><dd>Hitting the post or crossbar (close miss!)</dd></div><div class="term-item"><dt>Injury time winner</dt><dd>A goal scored in stoppage time that wins the match — maximum drama</dd></div></div>`},
    {type:'quiz',q:'What is a "nutmeg"?',opts:['A free kick near the corner','Playing the ball between an opponent\'s legs','A defensive header','A yellow card offense'],ans:1,exp:'A nutmeg is playing the ball between a defender\'s open legs and collecting it on the other side. It\'s considered skillful and slightly humiliating for the defender.'},
    {type:'quiz',q:'What does "relegation" mean?',opts:['Being promoted to a higher league','Being dropped to a lower division','Being transferred to another club','Being banned from competition'],ans:1,exp:'Relegation means being demoted to a lower division. In most European leagues, the bottom 3 teams each season are relegated.'}
  ]
},
// ===== SECTION 12: MATCH DAY GUIDE =====
{
  id:'matchday', icon:'📺', title:'Match Day Guide', subtitle:'What to watch for when you watch a game — become a smarter viewer',
  cards:[
    {type:'learn',title:'Before Kickoff',html:`<ul><li><b>Formations</b> — Check the lineup graphic. Look for the numbers (4-3-3, 4-2-3-1 etc.)</li><li><b>Key matchups</b> — Which fast winger vs which slow fullback? That's where the action will be</li><li><b>Form</b> — Has either team won/lost their last 5? Confidence matters</li><li><b>Context</b> — Is it a title decider? A relegation battle? A derby? Stakes change everything</li></ul>`},
    {type:'learn',title:'What to Watch During Play',html:`<h3>Off the Ball (90% of the action)</h3><p>Most fans watch the ball. Smart viewers watch <b>movement off the ball</b>:</p><ul><li><b>Runs</b> — Attackers sprinting into space to receive a pass</li><li><b>Defensive shape</b> — How compact are the lines? Are there gaps?</li><li><b>Pressing triggers</b> — When one player presses, do teammates follow?</li><li><b>Full-backs</b> — Watch them overlap — they create most width</li></ul><h3>On the Ball</h3><ul><li><b>First touch</b> — Elite players control instantly; poor touches lose the ball</li><li><b>Body shape</b> — Which way is the player facing when they receive?</li><li><b>Decision speed</b> — Great players choose the right option instantly</li><li><b>Weight of pass</b> — Not just direction but speed and spin</li></ul>`},
    {type:'learn',title:'Reading the Game',html:`<ul><li><b>Momentum shifts</b> — One team starts dominating. Why? Sub? Tactical change? Fatigue?</li><li><b>Space between the lines</b> — Big gap between defense and midfield = vulnerable to through balls</li><li><b>Substitution timing</b> — Fresh legs at 60-70 min can change everything</li><li><b>Time-wasting signs</b> — GK holding ball, slow throw-ins, players going down injured (team in the lead)</li><li><b>Late drama</b> — 80+ minutes with a close scoreline? Watch for: all-out attack from the losing team, defensive mistakes from fatigue, goalkeeper coming up for corners</li></ul>`},
    {type:'learn',title:'Commentary Phrases Decoded',html:`<ul><li>"He's pulled up" — Player has an injury (usually hamstring)</li><li>"Cynical foul" — Intentional tactical foul to stop a counter-attack (yellow card)</li><li>"He's through on goal" — Attacker is 1v1 with the goalkeeper</li><li>"Playing out from the back" — Building attacks from the goalkeeper/defenders</li><li>"Route one" — Long ball forward, bypassing midfield</li><li>"The channels" — Space between center-back and full-back</li><li>"Inverted full-back" — Full-back who moves inside instead of overlapping wide</li><li>"False 9" — Striker dropping deep to create space for runners behind</li><li>"Half-spaces" — Areas between the center and the wing (creative zones)</li></ul>`},
    {type:'quiz',q:'Where should you watch to see the most intelligent football?',opts:['Only the ball','Players off the ball (movement, runs, shape)','The scoreboard','The referee'],ans:1,exp:'Most of the tactical action happens off the ball — runs, movement, positioning, pressing patterns. Watching only the ball means you miss 90% of why goals happen.'},
    {type:'quiz',q:'What does it usually mean when a goalkeeper comes up for a corner kick?',opts:['The team is winning comfortably','The team is losing and it\'s the last few minutes (desperation)','It\'s the goalkeeper\'s turn to score','The referee asked them to'],ans:1,exp:'A goalkeeper going up for a corner in the final minutes means their team is losing and needs a goal desperately — it\'s an all-or-nothing gamble, leaving the goal empty.'}
  ]
}
]; // END SECTIONS

// ===== SVG DIAGRAM HELPERS =====
function pitchDiagram(){
return `<div class="diagram"><svg viewBox="0 0 340 500" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="500" fill="#388e3c"/>
<rect x="20" y="20" width="300" height="460" fill="none" stroke="#fff" stroke-width="2"/>
<line x1="20" y1="250" x2="320" y2="250" stroke="#fff" stroke-width="1.5"/>
<circle cx="170" cy="250" r="46" fill="none" stroke="#fff" stroke-width="1.5"/>
<circle cx="170" cy="250" r="3" fill="#fff"/>
<rect x="120" y="20" width="100" height="4" fill="#fff" opacity="0.8"/>
<rect x="131" y="20" width="78" height="28" fill="none" stroke="#fff" stroke-width="1.5"/>
<rect x="78" y="20" width="184" height="80" fill="none" stroke="#fff" stroke-width="1.5"/>
<path d="M 125 100 A 46 46 0 0 0 215 100" fill="none" stroke="#fff" stroke-width="1.5"/>
<circle cx="170" cy="60" r="3" fill="#fff"/>
<rect x="120" y="476" width="100" height="4" fill="#fff" opacity="0.8"/>
<rect x="131" y="452" width="78" height="28" fill="none" stroke="#fff" stroke-width="1.5"/>
<rect x="78" y="400" width="184" height="80" fill="none" stroke="#fff" stroke-width="1.5"/>
<path d="M 125 400 A 46 46 0 0 1 215 400" fill="none" stroke="#fff" stroke-width="1.5"/>
<circle cx="170" cy="440" r="3" fill="#fff"/>
<path d="M 20 26 A 6 6 0 0 0 26 20" fill="none" stroke="#fff" stroke-width="1.5"/>
<path d="M 314 20 A 6 6 0 0 0 320 26" fill="none" stroke="#fff" stroke-width="1.5"/>
<path d="M 20 474 A 6 6 0 0 1 26 480" fill="none" stroke="#fff" stroke-width="1.5"/>
<path d="M 314 480 A 6 6 0 0 1 320 474" fill="none" stroke="#fff" stroke-width="1.5"/>
<text x="170" y="14" text-anchor="middle" fill="#fffc" font-size="10" font-family="Roboto">OPPONENT'S GOAL</text>
<text x="170" y="496" text-anchor="middle" fill="#fffc" font-size="10" font-family="Roboto">YOUR GOAL</text>
<text x="170" y="246" text-anchor="middle" fill="#fff9" font-size="8" font-family="Roboto">— HALFWAY LINE —</text>
<text x="170" y="260" text-anchor="middle" fill="#fff7" font-size="7" font-family="Roboto">center circle (9.15m)</text>
<text x="170" y="115" text-anchor="middle" fill="#fff8" font-size="7" font-family="Roboto">PENALTY AREA (18-yard box)</text>
<text x="170" y="45" text-anchor="middle" fill="#fff8" font-size="7" font-family="Roboto">6-YARD BOX</text>
<text x="170" y="72" text-anchor="middle" fill="#fff7" font-size="6" font-family="Roboto">● penalty spot (12 yds)</text>
<text x="40" y="32" fill="#fff8" font-size="7" font-family="Roboto">corner↗</text>
<text x="280" y="32" fill="#fff8" font-size="7" font-family="Roboto">↖corner</text>
<text x="170" y="92" text-anchor="middle" fill="#fff6" font-size="6" font-family="Roboto">penalty arc</text>
<text x="326" y="130" text-anchor="end" fill="#fff8" font-size="8" font-family="Roboto">↑ attack</text>
</svg></div>`;
}

function formationDiagram(){
return `<div class="diagram"><svg viewBox="0 0 340 400" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="400" fill="#388e3c"/>
<rect x="20" y="20" width="300" height="360" fill="none" stroke="#fff" stroke-width="1" opacity="0.2"/>
<text x="170" y="14" text-anchor="middle" fill="#fffc" font-size="9" font-family="Roboto">↑ ATTACKING DIRECTION ↑</text>
<circle cx="170" cy="360" r="14" fill="#F9A825"/><text x="170" y="364" text-anchor="middle" fill="#000" font-size="9" font-weight="700" font-family="Roboto">GK</text>
<circle cx="60" cy="300" r="14" fill="#1565c0"/><text x="60" y="304" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">LB</text>
<circle cx="130" cy="310" r="14" fill="#1565c0"/><text x="130" y="314" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">CB</text>
<circle cx="210" cy="310" r="14" fill="#1565c0"/><text x="210" y="314" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">CB</text>
<circle cx="280" cy="300" r="14" fill="#1565c0"/><text x="280" y="304" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">RB</text>
<circle cx="100" cy="210" r="14" fill="#2e7d32"/><text x="100" y="214" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">CM</text>
<circle cx="170" cy="200" r="14" fill="#2e7d32"/><text x="170" y="204" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">CM</text>
<circle cx="240" cy="210" r="14" fill="#2e7d32"/><text x="240" y="214" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">CM</text>
<circle cx="70" cy="100" r="14" fill="#c62828"/><text x="70" y="104" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">LW</text>
<circle cx="170" cy="80" r="14" fill="#c62828"/><text x="170" y="84" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">ST</text>
<circle cx="270" cy="100" r="14" fill="#c62828"/><text x="270" y="104" text-anchor="middle" fill="#fff" font-size="8" font-weight="700" font-family="Roboto">RW</text>
<rect x="20" y="378" width="10" height="10" rx="5" fill="#F9A825"/><text x="34" y="387" fill="#fff" font-size="8" font-family="Roboto">Goalkeeper</text>
<rect x="105" y="378" width="10" height="10" rx="5" fill="#1565c0"/><text x="119" y="387" fill="#fff" font-size="8" font-family="Roboto">Defenders</text>
<rect x="195" y="378" width="10" height="10" rx="5" fill="#2e7d32"/><text x="209" y="387" fill="#fff" font-size="8" font-family="Roboto">Midfield</text>
<rect x="275" y="378" width="10" height="10" rx="5" fill="#c62828"/><text x="289" y="387" fill="#fff" font-size="8" font-family="Roboto">Forwards</text>
</svg></div><p style="text-align:center;font-size:.75em;color:var(--on-surface-sec)">4-3-3 Formation — GK at back, forwards attacking upward</p>`;
}

function offsideScenarios(){
return `
<div class="scenario"><h4>❌ Scenario 1: OFFSIDE</h4>
<div class="diagram"><svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="200" fill="#388e3c"/>
<rect x="120" y="0" width="100" height="4" fill="#fff" opacity="0.7"/>
<line x1="0" y1="80" x2="340" y2="80" stroke="#1565c0" stroke-width="1" stroke-dasharray="4,4" opacity="0.7"/>
<text x="335" y="75" text-anchor="end" fill="#bbdefb" font-size="8" font-family="Roboto">last defender line</text>
<circle cx="130" cy="80" r="12" fill="#1565c0"/><text x="130" y="84" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="210" cy="80" r="12" fill="#1565c0"/><text x="210" y="84" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="170" cy="50" r="12" fill="#c62828"/><text x="170" y="54" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">ATK</text>
<text x="170" y="36" text-anchor="middle" fill="#ffcdd2" font-size="9" font-weight="700" font-family="Roboto">OFFSIDE ❌</text>
<circle cx="100" cy="150" r="12" fill="#c62828" opacity="0.7"/><text x="100" y="154" text-anchor="middle" fill="#fff" font-size="7" font-family="Roboto">PASS</text>
<line x1="100" y1="138" x2="160" y2="62" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3"/>
<circle cx="170" cy="12" r="8" fill="#F9A825" opacity="0.4"/><text x="170" y="15" text-anchor="middle" fill="#fff" font-size="6" font-family="Roboto">GK</text>
</svg></div>
<p>Attacker is <b>ahead of the last defender</b> when the pass is played → offside.</p></div>

<div class="scenario"><h4>✅ Scenario 2: ONSIDE (Level with defender)</h4>
<div class="diagram"><svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="200" fill="#388e3c"/>
<rect x="120" y="0" width="100" height="4" fill="#fff" opacity="0.7"/>
<line x1="0" y1="80" x2="340" y2="80" stroke="#1565c0" stroke-width="1" stroke-dasharray="4,4" opacity="0.7"/>
<circle cx="130" cy="80" r="12" fill="#1565c0"/><text x="130" y="84" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="210" cy="80" r="12" fill="#1565c0"/><text x="210" y="84" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="170" cy="80" r="12" fill="#2e7d32"/><text x="170" y="84" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">ATK</text>
<text x="170" y="100" text-anchor="middle" fill="#c8e6c9" font-size="9" font-weight="700" font-family="Roboto">ONSIDE ✅</text>
<circle cx="80" cy="150" r="12" fill="#2e7d32" opacity="0.7"/><text x="80" y="154" text-anchor="middle" fill="#fff" font-size="7" font-family="Roboto">PASS</text>
<line x1="80" y1="138" x2="160" y2="88" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg></div>
<p>Attacker is <b>level with</b> the last defender → <b>onside</b>. Level = not offside.</p></div>

<div class="scenario"><h4>✅ Scenario 3: NOT OFFSIDE (Corner kick)</h4>
<div class="diagram"><svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="180" fill="#388e3c"/>
<rect x="120" y="0" width="100" height="4" fill="#fff" opacity="0.7"/>
<circle cx="150" cy="50" r="12" fill="#1565c0"/><text x="150" y="54" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="200" cy="55" r="12" fill="#1565c0"/><text x="200" y="59" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="170" cy="30" r="12" fill="#2e7d32"/><text x="170" y="34" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">ATK</text>
<text x="170" y="18" text-anchor="middle" fill="#c8e6c9" font-size="8" font-weight="700" font-family="Roboto">NOT OFFSIDE ✅</text>
<circle cx="20" cy="4" r="4" fill="#fff" opacity="0.6"/>
<text x="8" y="20" fill="#fff9" font-size="8" font-family="Roboto">CORNER ⚑</text>
<path d="M 24 8 Q 80 40 162 30" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg></div>
<p>Cannot be offside directly from a <b>corner kick</b>, throw-in, or goal kick.</p></div>

<div class="scenario"><h4>✅ Scenario 4: NOT OFFSIDE (Own half)</h4>
<div class="diagram"><svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="180" fill="#388e3c"/>
<line x1="0" y1="90" x2="340" y2="90" stroke="#fff" stroke-width="2"/>
<text x="170" y="45" text-anchor="middle" fill="#fff7" font-size="9" font-family="Roboto">OPPONENT'S HALF</text>
<text x="170" y="135" text-anchor="middle" fill="#fff7" font-size="9" font-family="Roboto">YOUR HALF</text>
<circle cx="200" cy="60" r="12" fill="#1565c0"/><text x="200" y="64" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">DEF</text>
<circle cx="170" cy="120" r="12" fill="#2e7d32"/><text x="170" y="124" text-anchor="middle" fill="#fff" font-size="7" font-weight="700" font-family="Roboto">ATK</text>
<text x="170" y="145" text-anchor="middle" fill="#c8e6c9" font-size="8" font-weight="700" font-family="Roboto">NOT OFFSIDE ✅</text>
<circle cx="80" cy="150" r="12" fill="#2e7d32" opacity="0.7"/><text x="80" y="154" text-anchor="middle" fill="#fff" font-size="7" font-family="Roboto">PASS</text>
<line x1="80" y1="138" x2="160" y2="124" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg></div>
<p>A player in their <b>own half</b> can never be offside — regardless of defender positions.</p></div>`;
}
