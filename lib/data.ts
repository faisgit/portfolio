import fs from "fs/promises";
import path from "path";

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface PortfolioData {
  projects: Project[];
  experiences: Experience[];
}

const DATA_FILE_PATH = path.join(process.cwd(), "data", "portfolio.json");

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading portfolio data:", error);
    return { projects: [], experiences: [] };
  }
}

export async function savePortfolioData(data: PortfolioData): Promise<void> {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving portfolio data:", error);
    throw new Error("Failed to save data");
  }
}
