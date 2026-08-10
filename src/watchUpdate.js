import content from './content.js';

const previousItems = content.watch.items.filter((item) =>
  item.title !== 'European Commission publishes AI Act transparency guidance'
);

content.watch.updated = 'Updated 10 August 2026';
content.watch.note = 'A concise weekly selection of opportunities, public initiatives and legal developments relevant to CineAI Lab, prioritising France, Belgium and Europe and linking to official sources.';
content.watch.items = [
  {
    date: '10 AUG 2026',
    region: 'BELGIUM · ACCESSIBLE',
    title: 'VAF Innovatieatelier opens a practical route into interactive audiovisual work',
    text: 'Professional audiovisual storytellers living and working in Belgium can apply individually or as a team for an interactive XR project. No producer or studio is required at this stage. Selected projects receive coaching and a €7,500 workshop grant. Deadline: 22 October 2026 at 12:00. For CineAI Lab, this is directly relevant if an experimental film workflow is developed as an interactive or immersive prototype.',
    source: 'Vlaams Audiovisueel Fonds',
    url: 'https://www.vaf.be/subsidies/innovatieatelier',
  },
  {
    date: '10 AUG 2026',
    region: 'FRANCE · PARTNERS REQUIRED',
    title: 'France 2030 remains a strategic funding route for culture and AI',
    text: 'The call “Transition numérique de la Culture et appropriation de l’intelligence artificielle” supports ambitious projects combining cultural actors and technology, including new artistic experiences, data, rights and responsible AI. The next submission date is 25 November 2026. For CineAI Lab, the fit is strong for a future open audiovisual production environment, but the scale of the programme makes institutional and technological partners advisable.',
    source: 'French Ministry of Culture',
    url: 'https://www.culture.gouv.fr/presse/communiques-de-presse/france-2030-lancement-d-un-appel-a-projets-pour-accompagner-l-appropriation-de-l-intelligence-artificielle-et-du-numerique-par-les-industries-cul',
  },
  {
    date: '02 AUG 2026',
    region: 'EUROPE · LEGAL',
    title: 'AI Act Article 50 transparency obligations now apply',
    text: 'From 2 August 2026, EU transparency obligations apply to certain interactive and generative AI systems and synthetic content. For CineAI Lab, provenance, identification of AI interventions and documented human creative direction should therefore become part of the experimental workflow from the outset.',
    source: 'European Commission',
    url: 'https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems',
  },
  ...previousItems,
];
content.watch.perspectiveEyebrow = 'CineAI Lab priority';
content.watch.perspectiveTitle = 'Keep AI generation traceable and human direction visible.';
content.watch.perspectiveText = 'The immediate priority is to develop an open audiovisual workflow in which sources, models and AI interventions can be traced while selection, revision, performance choices and final validation remain clearly attributable to human creative direction.';
