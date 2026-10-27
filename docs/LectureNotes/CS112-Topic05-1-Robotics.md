---
title: Robotics
description: Robotics: history, technology, applications and dangers.
keywords: Robotics, automation, GOFAI, machine learning, neural networks, generative AI, dark factories, future of work
generator: Typora
author: Brian Bird
---

<h1>Robotics and Automation</h1>

**CS112, Intro to AI**

<h2>Table of Contents</h2>

[TOC]

## 1. The History of Robotics and Automation

### A. Origins of the Term & Cultural Concepts (Brief Side-Note)
* **Etymology of "Robot" (1920):**
  * Coined by Czech writer Karel Čapek (suggested by his brother Josef) in his science fiction play *R.U.R.* (*Rossum's Universal Robots*).
  * Derived from the Czech word *robota*, meaning "forced labor," "corvée," or "drudgery."
  * *Source:* [MIT Press Reader – The Origin of the Word "Robot"](https://thereader.mitpress.mit.edu/origin-word-robot-rur/)
* **Robotics in Literature and Film:**
  * **Isaac Asimov (1941–1942):** Coined the term *"robotics"* in his short story "Liar!" and introduced the famous **Three Laws of Robotics** in "Runaround" (later compiled in *I, Robot*), framing robots as rule-bound, helpful machines rather than inevitable monsters.
    * *Source:* [Britannica – Isaac Asimov and the Three Laws of Robotics](https://www.britannica.com/topic/Three-Laws-of-Robotics)
  * **Early Cinema:** *Metropolis* (1927) featured "Maria," one of the earliest visual depictions of a humanoid automaton on screen, establishing popular tropes around artificial beings.
    * *Source:* [Science Museum (UK) – Early Cinema and Robots](https://www.sciencemuseum.org.uk/objects-and-stories/robots-in-popular-culture)

### B. Industrial Robotics (Manufacturing & Heavy Industry)
* **Unimate (1954 / 1961):**
  * Invented by George Devol and commercialized by Joseph Engelberger ("the father of robotics").
  * The first digitally operated, programmable robotic arm was installed at a General Motors plant in Ewing Township, New Jersey, in 1961 to handle hot die-cast metal parts and weld auto bodies.
  * *Source:* [IEEE Spectrum / Robotics Hall of Fame – Unimate](https://robotsguide.com/robots/unimate)
* **Programmable Electric Arms (Late 1960s–1970s):**
  * **Stanford Arm (1969):** Designed by Victor Scheinman, the first successful electrically powered, computer-controlled 6-axis articulating arm.
  * **PUMA (1978):** Unimation developed the *Programmable Universal Machine for Assembly* with GM, setting the standard for modern industrial assembly line robotics.
  * *Source:* [Stanford Engineering – The Stanford Arm](https://engineering.stanford.edu/about/history/stanford-arm)
* **Modern Collaborative Robots ("Cobots"):**
  * Unlike traditional industrial robots kept in safety cages, modern cobots use force-limiting sensors and computer vision to work safely alongside human technicians.
  * *Source:* [International Federation of Robotics (IFR) – History of Industrial Robots](https://ifr.org/robot-history)

### C. Commercial & Transportation Automation (Autopilots & Self-Driving Cars)
* **Aircraft Autopilots:**
  * **Sperry Gyroscope Autopilot (1912–1914):** Lawrence Sperry demonstrated the first aircraft autopilot using gyroscopes connected to hydraulic flight controls to maintain straight and level flight without pilot input.
    * *Source:* [Smithsonian National Air and Space Museum – Sperry A-1 Autopilot](https://airandspace.si.edu/collection-objects/gyro-stabilizer-unit-sperry-airplane/nasm_A19260004000)
  * **Modern Avionics & Autoland:** Evolution from simple mechanical feedback loops to triple-redundant fly-by-wire computers capable of automated takeoff, waypoint navigation, and zero-visibility landings.
    * *Source:* [NASA – Fly-by-Wire Historic Milestones](https://www.nasa.gov/centers-and-facilities/armstrong/fly-by-wire/)
* **Early Mobile & Commercial Robots:**
  * **Shakey the Robot (1966–1972):** Built at SRI International; the first mobile robot able to perceive its surroundings and reason about its own actions (using the STRIPS planner and A* search algorithm).
    * *Source:* [SRI International – Shakey the Robot](https://www.sri.com/hoi/shakey-the-robot/)
* **Autonomous Vehicles (Self-Driving Cars):**
  * **ALVINN (1989):** Carnegie Mellon University's Navlab used an early neural network to steer a van across the country.
    * *Source:* [Carnegie Mellon University – Navlab and ALVINN](https://www.cs.cmu.edu/afs/cs/project/alv/member/www/navlab.html)
  * **DARPA Grand Challenges (2004, 2005, 2007):** Catalyzed modern self-driving technology. Stanford's "Stanley" won the 2005 desert race using LiDAR, GPS, and probabilistic machine learning; CMU's "Boss" won the 2007 Urban Challenge.
    * *Source:* [DARPA – The Grand Challenge Legacy](https://www.darpa.mil/about-us/timeline/darpa-grand-challenge)
  * **Commercial Robotaxis & Logistics:** Modern commercial deployments by Waymo (autonomous ride-hailing) and Amazon Robotics (formerly Kiva Systems, automating warehouse fulfillment centers).
    * *Source:* [Waymo – Autonomous Driving Technology](https://waymo.com/tech/) | [Amazon – 750,000+ Mobile Robots in Fulfillment](https://www.aboutamazon.com/news/operations/amazon-introduces-new-robotics-solutions)

### D. Military & Space Robotics
* **Unmanned Aerial Vehicles (UAVs / Drones):**
  * Evolved from early radio-controlled target drones (like the 1930s British "Queen Bee") into modern high-altitude reconnaissance and strike platforms (e.g., MQ-9 Reaper) and small autonomous tactical quadcopters.
  * *Source:* [Imperial War Museums – A Brief History of Drones](https://www.iwm.org.uk/history/a-brief-history-of-drones)
* **Ground Disposal & Legged Systems:**
  * **PackBot (iRobot, 2001+):** Deployed for Explosive Ordnance Disposal (EOD), bomb reconnaissance, and search-and-rescue (including at Ground Zero in 2001 and the Fukushima nuclear plant in 2011).
  * **Boston Dynamics (BigDog, Spot, Atlas):** Originally funded by DARPA to create dynamic, rough-terrain legged robots capable of maintaining balance under heavy loads.
  * *Source:* [IEEE Spectrum – iRobot PackBot](https://robotsguide.com/robots/packbot) | [Boston Dynamics – About & History](https://bostondynamics.com/about/)
* **Planetary Exploration (Space Rovers):**
  * Because radio signals take between 5 and 20 minutes to reach Mars, NASA rovers (*Sojourner*, *Spirit*, *Opportunity*, *Curiosity*, and *Perseverance*) rely on onboard autonomous navigation software (AutoNav) to identify hazards and plot safe paths without real-time human joysticks.
  * *Source:* [NASA JPL – Perseverance Rover Autonomous Navigation](https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/#autonav)

### E. Home & Consumer Robotics
* **Domestic Cleaning Robots:**
  * **iRobot Roomba (2002):** Brought autonomous robotics into millions of homes. Early generations relied on simple reactive bump-and-turn algorithms; modern versions build complete floor plans using LiDAR and camera-based SLAM (Simultaneous Localization and Mapping).
  * *Source:* [MIT Technology Review – How the Roomba Was Made](https://www.technologyreview.com/2022/09/19/1059268/roomba-irobot-20-years-history/)
* **Entertainment, Companion, and Lawn Care Robots:**
  * **Sony AIBO (1999):** Robotic pet dog designed to learn and mature through human interaction.
  * **Paro:** Therapeutic robotic baby harp seal used in hospitals and eldercare facilities to reduce patient anxiety.
  * **Robotic Lawn Mowers & Pool Cleaners:** Widespread consumer adoption of perimeter-guided and GPS-guided yard maintenance systems.
  * *Source:* [IEEE Spectrum – Sony AIBO & Consumer Robotics](https://robotsguide.com/robots/aibo) | [PARO Therapeutic Robot](http://www.parorobots.com/)

---

## 2. Types of AI Systems Used in Robotics (Connecting to CS112 Concepts)

Modern robots rarely rely on a single AI algorithm; instead, they combine multiple paradigms we have studied this term into a layered architecture (**Sense $\rightarrow$ Plan $\rightarrow$ Act**).

### A. Symbolic AI (GOFAI) in Robotics
* **State-Space Search (Pathfinding):**
  * Just as we used **Breadth-First Search (BFS)** to solve river-crossing puzzles, mobile robots represent physical maps as grids or graphs (states and transitions).
  * Robots use graph-search algorithms (like BFS, Dijkstra's algorithm, and **A* Search**) to calculate the shortest collision-free route from Point A to Point B.
  * *Source:* [Stanford CS – Introduction to A* Pathfinding in Robotics](https://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html)
* **Symbolic Automated Planning (STRIPS):**
  * As covered in our GOFAI notes, robots use planners like **STRIPS** (Preconditions, Add-List, Delete-List) to break complex high-level goals (e.g., *"Clear the table"*) into ordered sequences of sub-tasks (*Move to cup $\rightarrow$ Open gripper $\rightarrow$ Grasp cup $\rightarrow$ Lift*).
  * *Source:* [Artificial Intelligence: A Modern Approach – Classical Planning](https://aima.cs.berkeley.edu/)
* **Rule-Based Systems & Finite State Machines:**
  * Hardcoded `IF...THEN` production rules are critical for **safety interlocks** and deterministic control (e.g., `IF proximity_sensor < 0.5m THEN apply_emergency_brake = true`).
  * *Source:* [ROS (Robot Operating System) – Behavior Trees and State Machines](https://www.behaviortree.dev/)

### B. Traditional Machine Learning (Statistical & Classical ML)
* **Bayes' Rule (Probabilistic Localization & Sensor Fusion):**
  * Real-world robot sensors (wheel odometers, GPS, sonar, LiDAR) are noisy and imperfect.
  * Robots use **Bayes' Rule** ($Posterior = Prior \times Likelihood$) to continuously update their belief about where they are on a map:
    * **Prior Odds:** Where the robot *thinks* it is based on its last known position and wheel rotations.
    * **Likelihood Ratio:** New evidence coming in from laser rangefinders or cameras.
    * **Posterior Odds:** The updated, more accurate probability distribution of the robot's exact location (used in **Kalman Filters** and **Particle Filters / Monte Carlo Localization**).
  * *Source:* [Probabilistic Robotics by Sebastian Thrun – Bayes Filters](http://www.probabilistic-robotics.org/)
* **Regression (Linear & Logistic):**
  * **Linear Regression:** Used for sensor calibration, predicting battery depletion rates based on payload weight, and estimating braking distances based on velocity.
  * **Logistic Regression:** Used for binary classification tasks, such as predicting the probability of wheel slip on wet terrain or predicting whether a mechanical joint is about to fail (predictive maintenance).
  * *Source:* [Towards Data Science – Machine Learning in Robotics](https://towardsdatascience.com/)
* **K-Nearest Neighbors (K-NN) & Decision Trees / Random Forests:**
  * **K-NN:** Used in 3D LiDAR point-cloud processing to cluster nearby laser reflections together to identify distinct physical objects.
  * **Decision Trees & Random Forests:** Used to classify terrain types (e.g., grass vs. gravel vs. pavement) based on vibration and torque features so a legged or wheeled robot can adjust its gait or speed.
  * *Source:* [IEEE Xplore – Terrain Classification for Mobile Robots using Random Forests](https://ieeexplore.ieee.org/)

### C. Artificial Neural Networks (Connectionism) & Reinforcement Learning
* **Convolutional Neural Networks (CNNs) for Computer Vision:**
  * Building on Yann LeCun's CNNs and Fei-Fei Li's ImageNet, robots use deep neural networks to process camera feeds in real time—identifying pedestrians, reading street signs, and detecting grasp points on irregular objects on a conveyor belt.
  * *Source:* [NVIDIA – Deep Learning for Robot Perception](https://developer.nvidia.com/isaac)
* **Reinforcement Learning (RL) for Motor Control:**
  * Instead of programmers manually coding the physics for how a two-legged robot walks over slippery rocks, the robot learns via **trial-and-error** in a physics simulator, receiving positive rewards for moving forward without falling.
  * Once trained in simulation over millions of virtual hours, the neural network policy is transferred to the physical robot (**Sim-to-Real** transfer).
  * *Source:* [ETH Zurich Robotic Systems Lab – Learning Agile Walk via Reinforcement Learning](https://rsl.ethz.ch/)

### D. Generative AI & Foundation Models in Robotics
* **Natural Language Human-Robot Interaction:**
  * Instead of writing complex code or using a teach pendant, factory workers can give spoken or typed instructions to a robot (similar to Terry Winograd's 1971 SHRDLU, but in the messy real world!) using Large Language Models (LLMs).
* **Vision-Language-Action (VLA) Models:**
  * Models like **Google DeepMind's RT-2 (Robotic Transformer 2)** and Gemini Robotics combine visual perception, natural language reasoning, and robotic motor control into a single generative model.
  * *Example:* If you tell a robot *"Pick up the extinct animal"* from a table holding a plastic dinosaur, a toy car, and an apple, the VLA model uses its web-pretrained knowledge to identify the dinosaur and generates the motor commands to pick it up.
  * *Source:* [Google DeepMind – RT-2: Vision-Language-Action Models](https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/) | [Physical Intelligence ($\pi_0$) – Generalist Robot Policies](https://www.physicalintelligence.company/)

---

## 3. Advantages and Disadvantages of Robotics and Automation

### A. Advantages
1. **Labor Saving & Productivity (Primary Advantage):**
   * Robots operate 24/7/365 without fatigue, breaks, vacations, or shift changes, dramatically increasing manufacturing throughput and lowering the per-unit cost of goods.
   * *Source:* [Brookings Institution – How Robots Change the Workplace](https://www.brookings.edu/articles/how-robots-change-the-workplace/)
2. **Safety in "4D" Environments (Dull, Dirty, Dangerous, and Dear):**
   * Removes humans from hazardous environments: toxic paint booths, semiconductor cleanrooms, deep-sea oil rigs, bomb disposal, nuclear cleanup (Fukushima), and space exploration.
   * Reduces repetitive strain injuries (RSIs) and workplace accidents in heavy lifting.
   * *Source:* [OSHA – Robotics and Workplace Safety](https://www.osha.gov/robotics)
3. **Precision, Consistency, and Quality Control:**
   * Industrial and surgical robots (such as the **da Vinci Surgical System**) operate with sub-millimeter repeatability, eliminating human hand tremor and reducing manufacturing defect rates.
   * *Source:* [National Institutes of Health (NIH) – Robotic Surgery Precision and Outcomes](https://pmc.ncbi.nlm.nih.gov/)
4. **Addressing Demographic Labor Shortages:**
   * Helps countries with aging populations and shrinking workforces (e.g., Japan, South Korea, parts of Europe) maintain economic output and provide eldercare assistance.
   * *Source:* [World Economic Forum – How Automation Can Solve Labor Shortages](https://www.weforum.org/)

### B. Disadvantages
1. **Job Displacement & Technological Unemployment (Primary Disadvantage):**
   * Direct replacement of routine, manual, and assembly-line workers, often devastating localized manufacturing communities ("Rust Belt" effects) and hollowing out middle-skill blue-collar wages.
   * Economists Daron Acemoglu and Pascual Restrepo found that adding one industrial robot per 1,000 workers in the U.S. reduced the local employment-to-population ratio by 0.2% and depressed wages by 0.42%.
   * *Source:* [MIT / NBER (Acemoglu & Restrepo) – Robots and Jobs: Evidence from US Labor Markets](https://www.nber.org/papers/w23285)
2. **High Capital Costs & Economic Inequality:**
   * Purchasing, integrating, and maintaining robotic systems requires massive upfront capital investment, giving huge corporations an advantage over small- and medium-sized businesses and concentrating wealth among capital owners rather than labor.
   * *Source:* [International Monetary Fund (IMF) – Robots, Wealth, and Inequality](https://www.imf.org/en/Publications/fandd/issues/2018/06/impact-of-artificial-intelligence-on-inequality)
3. **Brittleness & Lack of Adaptability ("Moravec's Paradox"):**
   * **Moravec's Paradox:** High-level reasoning (playing chess, solving calculus) requires very little computation for a computer, but low-level sensorimotor skills (folding a crumpled towel, picking a ripe strawberry without bruising it) are extraordinarily difficult for robots.
   * Traditional industrial robots often break down or halt production if a part is slightly misaligned.
   * *Source:* [Stanford AI100 – Moravec's Paradox and Robotics Challenges](https://ai100.stanford.edu/)
4. **Cybersecurity, Safety, and Ethical Liabilities:**
   * Connected robots and autonomous vehicles are vulnerable to hacking or sensor spoofing.
   * Legal and ethical ambiguity: When a self-driving car or autonomous weapon causes harm, who is legally liable—the owner, the software engineer, or the manufacturer?
   * *Source:* [Pew Research Center – Autonomous Vehicles and Ethical Dilemmas](https://www.pewresearch.org/internet/2022/03/17/ai-and-human-enhancement-americans-openness-is-tempered-by-fears/)

---

## 4. Industrial Automation vs. Generative AI: From Blue-Collar to White-Collar Disruption

### A. The Industrial Wave: Physical Automation & "Dark Factories"
* **How Robotics Replaced Factory Workers:**
  * Beginning in the 1970s and accelerating in the 1990s–2020s, industrial automation targeted **routine physical labor** (welding, painting, stamping, palletizing, and warehousing).
  * A modern car plant that once required thousands of assembly-line workers now operates with a fraction of the human workforce, mostly overseeing robotic cells.
* **The Rise of "Dark Factories" (Lights-Out Manufacturing):**
  * **"Lights-Out" or "Dark" Factories** are manufacturing facilities so completely automated that they require zero human presence on the factory floor—meaning they can literally operate in the dark with the lights turned off and without heating or air conditioning.
  * **Real-World Examples:**
    * **FANUC (Japan):** Runs a famous "lights-out" factory where industrial robots build other industrial robots 24 hours a day, unsupervised for up to 30 days at a time.
    * **Xiaomi (China, 2023–2024):** Opened a dark factory in Changping capable of producing over 10 million flagship smartphones per year (one phone every second) with autonomous micron-level assembly and self-diagnosing AI software—no human assembly workers on the floor.
    * **Philips (Netherlands):** Produces electric shavers in a nearly dark factory using 128 robots, requiring only a handful of human quality-control engineers.
  * *Source:* [IEEE Spectrum – Inside FANUC's Lights-Out Factory](https://spectrum.ieee.org/) | [World Economic Forum – Lights-Out Manufacturing and Smart Factories](https://www.weforum.org/)

### B. The Generative AI Wave: Cognitive Automation ("Digital Dark Factories")
* **The Paradigm Shift:**
  * For decades, conventional wisdom held that automation would replace physical, blue-collar jobs first, followed by routine clerical work, while high-paying, creative, and analytical **white-collar knowledge jobs** (coding, writing, design, marketing) were safe.
  * Generative AI (LLMs, diffusion models, and autonomous coding agents) has flipped this assumption on its head, automating **non-routine cognitive and creative tasks**.
  * *Source:* [OpenAI & University of Pennsylvania – GPTs are GPTs: Labor Market Impact Potential of LLMs](https://arxiv.org/abs/2303.10130)
* **Key Sectors Experiencing Replacement and Transformation Today:**
  1. **Software Development:**
     * AI coding assistants and autonomous software agents (GitHub Copilot, Claude Code, Cursor) can write boilerplate code, generate unit tests, debug errors, and refactor entire repositories.
     * While senior software architects become more productive, companies are reducing hiring for entry-level / junior programmers—mirroring how factories kept senior maintenance engineers while eliminating apprentice assembly jobs.
     * *Source:* [McKinsey – Unleashing Developer Productivity with Generative AI](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai)
  2. **Sales, Marketing, and Content Creation:**
     * Generative AI drafts ad copy, generates product photography and promotional video, runs personalized outbound sales emails, and conducts market sentiment analysis—tasks that previously required teams of copywriters, graphic designers, and junior marketers.
     * *Source:* [Harvard Business Review – How Generative AI Is Changing Creative Work](https://hbr.org/2023/07/how-generative-ai-is-changing-creative-work)
  3. **Customer Service, Legal, and Finance:**
     * Companies like Klarna publicly reported in 2024 that its generative AI customer service assistant was doing the equivalent work of 700 full-time human agents. Paralegals and junior financial analysts face similar disruption in contract review and financial summarization.
     * *Source:* [Goldman Sachs Global Investment Research – The Potentially Large Effects of AI on Economic Growth](https://www.goldmansachs.com/insights/pages/generative-ai-could-raise-global-gdp-by-7-percent.html)

### C. Side-by-Side Comparison: Factory Robotics vs. Generative AI

| Dimension | Industrial Robotics (1960s–Present) | Generative AI & Agents (2022–Present) |
| :--- | :--- | :--- |
| **Target of Automation** | Physical, manual, and routine motor tasks (muscles & dexterity). | Cognitive, analytical, linguistic, and creative tasks (brains & communication). |
| **Primary Workers Affected** | Blue-collar workers (machinists, welders, warehouse pickers, assembly workers). | White-collar knowledge workers (software developers, marketers, paralegals, customer support). |
| **Speed of Deployment** | **Slow:** Requires building expensive physical hardware, retooling factories, and years of capital depreciation. | **Extremely Fast:** Deployed instantly via cloud APIs and software updates using existing computers. |
| **Ultimate Extreme** | **"Dark Factories":** Physical plants producing goods 24/7 with no humans on the floor. | **"Autonomous Digital Enterprises":** Multi-agent software pipelines writing code, running marketing campaigns, and handling support with minimal human oversight. |
| **Human Role Shift** | From *assembling parts* to *monitoring, maintaining, and programming* robotic cells. | From *writing every line of code/copy* to *prompting, orchestrating, and verifying* AI outputs. |

### D. Discussion Questions for Students
1. When industrial robots automated factories, displaced workers were often told to *"learn to code."* Now that Generative AI can write code, what skills should human workers focus on developing?
2. Is a "lights-out" software company (where AI agents manage product development, marketing, and support) realistic, or will symbolic AI's limitations (like the lack of true common sense and LLM hallucinations) always require a "human in the loop"?

---

## Reference

- [International Federation of Robotics (IFR) – History of Industrial Robots](https://ifr.org/robot-history)
- [SRI International – 75 Years of Innovation: Shakey the Robot](https://www.sri.com/hoi/shakey-the-robot/)
- Thrun, Sebastian, Wolfram Burgard, and Dieter Fox. *[Probabilistic Robotics](http://www.probabilistic-robotics.org/)*. MIT Press, 2005.
- Acemoglu, Daron, and Pascual Restrepo. "[Robots and Jobs: Evidence from US Labor Markets](https://www.nber.org/papers/w23285)." *Journal of Political Economy*, vol. 128, no. 6, 2020.
- Eloundou, Tyna, et al. "[GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models](https://arxiv.org/abs/2303.10130)." *arXiv preprint*, 2023.
- [World Economic Forum – The Future of Jobs Report](https://www.weforum.org/publications/the-future-of-jobs-report-2023/)
- [Elements of AI](https://www.elementsofai.com/)&mdash;University of Helsinki and MinnaLearn, 2024.

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Intro to AI lecture notes by [Brian Bird](https://profbird.dev), written in <time>2026</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

