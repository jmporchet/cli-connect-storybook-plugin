export interface Story {
  storyId: string;
  kind: string;
  name: string;
  displayName: string;
  filePath: string;
  hasDocsPage: boolean;
  component: {
    name: string;
    filePath: string;
  };
}

export function loadStoriesFromURL(
  url: string, params: { ignoreSSLErrors?: boolean; failFastOnErrors?: boolean }
): Promise<Story[]>;