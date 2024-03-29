import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirection = path.join(process.cwd(), "projects");

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirection);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirection, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // return allProjectsData.sort((a: any, b: any) => b.order - a.order);
  // Sort posts by date
  return allProjectsData.sort((a: any, b: any) => {
    return a.order - b.order;
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirection);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirection, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const mdContent = matterResult.content;

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    mdContent,
    ...matterResult.data,
  };
}
