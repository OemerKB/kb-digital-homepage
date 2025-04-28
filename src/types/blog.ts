export interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  excerpt: string;
  readingTime: number;
}