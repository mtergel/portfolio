export interface Project {
  title: string;
  techStack: string[];

  links: {
    key: string;
    url: string;
  }[];

  images: string[];

  markdownPath: string;
}
