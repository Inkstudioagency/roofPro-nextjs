// One Work (portfolio project) record. Keys are the camelCased CSV headers of
// cms/"Our Works.csv" (identical in data/works.json and the Strapi `work`
// collection). Every value is a string; `projectDetailsText` is rich-text HTML.
export type Work = {
  workCardTitle: string;
  slug: string;
  collectionId: string;
  localeId: string;
  itemId: string;
  archived: string;
  draft: string;
  createdOn: string;
  updatedOn: string;
  publishedOn: string;
  workCardDescription: string;
  workCardThumbnail: string;
  projectLocation: string;
  projectDate: string;
  projectClient: string;
  workDetailsTitle: string;
  workDetailsDescription: string;
  projectMainImage: string;
  projectTag: string;
  projectDetailsText: string;
  projectDetailsTagOne: string;
  projectDetailsTagTwo: string;
  projectDetailsTagThree: string;
  projectDetailsTagFour: string;
  projectDetailsSummary: string;
  projectDuration: string;
  roofArea: string;
  energySavings: string;
  warranty: string;
  projectFeatureOne: string;
  projectFeatureTwo: string;
  projectFeatureThree: string;
  projectFeatureFour: string;
  projectFeatureFive: string;
  projectFeatureSix: string;
  projectFeatureSeven: string;
};
