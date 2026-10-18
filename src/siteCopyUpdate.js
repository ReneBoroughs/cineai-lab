import content from './content.js';

content.meta.title = 'CineAI Lab — Experiments at the beginning of AI-assisted cinema';
content.meta.description = 'CineAI Lab documents early experiments in cinema and artificial intelligence: what already works, what still fails, and which creative and technical problems remain unsolved.';

content.homeGateway.title = 'Cinema with AI is still at the beginning.';
content.homeGateway.lead = 'CineAI Lab documents practical experiments with images, movement, voice and human direction, including an image-first approach in which the filmmaker defines the frames and the movement instead of asking AI to invent the whole shot.';
content.homeGateway.primary = 'Explore the projects';
content.homeGateway.secondary = 'See what is still missing';
content.homeGateway.manuscriptIntro = 'A working manuscript gathers the experiments, failures and open questions.';
if (content.homeGateway.cards?.[0]) {
  content.homeGateway.cards[0].title = 'Projects';
  content.homeGateway.cards[0].text = 'Narrative projects used as practical test cases for emerging AI filmmaking tools.';
}
if (content.homeGateway.cards?.[1]) {
  content.homeGateway.cards[1].text = 'The unresolved problems revealed by the experiments.';
}
if (content.homeGateway.cards?.[2]) {
  content.homeGateway.cards[2].text = 'A selective watch on tools, funding, festivals, rights and regulation.';
}

content.hero.missionValue = 'What does filmmaking still need beyond generated images?';

content.projects.eyebrow = 'Projects · test cases';
content.projects.title = 'Stories used to test an unfinished technology.';
content.projects.intro = 'These are not finished AI films. Each project is used to test a practical problem: continuity, performance, movement, voice or workflow.';
if (content.projects.prototype) {
  content.projects.prototype.note = 'AI-assisted prototype · Experimental multi-tool workflow · Tools documented when technically verified · August 2026';
  content.projects.prototype.video = '/media/the-father-speaking-prototype.mp4?v=20260812';
  content.projects.prototype.poster = '/media/the-father-speaking-poster.jpg?v=20260812';
}
if (content.projects.cards?.[0]) {
  content.projects.cards[0].meta = 'Experiment 01';
  content.projects.cards[0].text = 'A contemporary dramatic adaptation used to test character continuity, spoken performance and the ability to revise one scene without breaking the rest.';
}
if (content.projects.cards?.[1]) {
  content.projects.cards[1].meta = 'Experiment 02';
  content.projects.cards[1].text = 'A visual project used to test animal movement, atmosphere and continuity between still images and moving sequences.';
}
if (content.projects.cards?.[2]) {
  content.projects.cards[2].meta = 'Experiment 03';
  content.projects.cards[2].text = 'An intimate ensemble project used to test subtle performance, social realism and emotional continuity.';
}

content.research.eyebrow = 'Open questions';
content.research.title = 'What is still missing?';
content.research.intro = 'AI can already generate striking images, voices and short clips. Coherent filmmaking is harder. CineAI Lab records the unresolved problems found in practical tests, including recent ComfyUI and Wan 2.2 image-to-video experiments.';
content.research.items.push([
  'Image-first filmmaking',
  'Treat the film as a directed flipbook: define a start image, an end image and optional intermediate keyframes, then create the missing movement without redesigning the shot.',
]);
content.research.items.push([
  'DIRECTOR · selected movement',
  'Use named selections, locked regions and timeline behaviours inspired by Director/Lingo so only the intended hand, expression or object is animated while the rest of the frame and camera remain stable. Avoid regenerating unchanged areas when possible, because iteration time is part of the directing problem.',
]);
content.research.items.push([
  'Creator-first access',
  'Explore an open production model in which creators can experiment without paying for every attempt, retain ownership and direction of their work, and contribute a limited, capped share of revenue only after meaningful commercial success.',
]);
content.experiments.evidenceRows.push([
  'Wan 2.2 I2V',
  'Animate a fixed family shot',
  'Starting image accepted',
  'In the tested workflow there was no second image defining the end state; the whole scene could be regenerated, causing identity/object/camera drift and long iteration times',
]);

content.benchmark.items.push([
  '05',
  'Direct the transition',
  'Define start and end images, select what may move, lock what must remain unchanged, and evaluate whether the generated transition preserves the shot.',
]);

content.research.manuscript.description = 'The working manuscript brings together the experiments, failures, open-film questions and European context.';

content.benchmark.eyebrow = 'Working method';
content.benchmark.title = 'Test. Observe. Document. Improve.';

content.watch.title = 'Watching an emerging field.';
content.watch.intro = 'A selective watch on tools, public programmes, festivals, rights and regulation, with particular attention to France, Belgium and Europe.';
content.watch.note = 'Only developments that may change what creators can test, fund, use or publish are kept here.';
content.watch.perspectiveEyebrow = 'Why watch';
content.watch.perspectiveTitle = 'The field is moving faster than its working methods.';
content.watch.perspectiveText = 'CineAI Lab follows the signals that may help turn isolated generation tools into a controllable filmmaking workflow.';

content.creator.eyebrow = 'About';
content.creator.p1 = 'is a writer and founder of CineAI Lab, an independent experimental project exploring what AI can and cannot yet contribute to filmmaking.';
content.creator.p2 = 'The aim is not to present AI cinema as a mature genre. The projects are practical test cases used to identify missing tools, open questions and possible directions.';

content.collaborate.title = 'Looking for people working on the same unresolved problems.';
content.collaborate.intro = 'CineAI Lab welcomes dialogue with filmmakers, researchers and creative technologists working on continuity, performance, image-first workflows and responsible AI.';
if (content.collaborate.cards?.[2]) {
  content.collaborate.cards[2][1] = 'Build tools that can animate selected changes between defined images, with locked regions, camera lock and persistent character/object identity instead of regenerating the whole shot.';
}

content.footer = 'Independent experiments on cinema and AI.';
content.common.projects = 'Projects';

if (typeof document !== 'undefined') {
  document.addEventListener(
    'ended',
    (event) => {
      const video = event.target;
      if (video instanceof HTMLVideoElement) {
        video.pause();
        video.currentTime = 0;
      }
    },
    true,
  );
}
