// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch: "main",
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "string",
            name: "liveUrl",
            label: "Live Link"
          },
          {
            type: "string",
            name: "githubUrl",
            label: "Github Link"
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Project",
            description: "Check this if you want this project to appear first."
          },
          {
            type: "number",
            name: "priority",
            label: "Priority",
            description: "Lower numbers appear first. Use this to manually order projects."
          }
        ]
      },
      {
        name: "experience",
        label: "Experiences",
        path: "content/experiences",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Position Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "company",
            label: "Company/Organization",
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          },
          {
            type: "datetime",
            name: "startDate",
            label: "Start Date",
            required: true
          },
          {
            type: "datetime",
            name: "endDate",
            label: "End Date",
            description: "Leave blank if this is your current position"
          },
          {
            type: "boolean",
            name: "current",
            label: "Current Position",
            description: "Check this if this is your current position"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            description: "Describe your responsibilities and achievements"
          },
          {
            type: "string",
            name: "tags",
            label: "Skills/Technologies",
            description: "Comma-separated list of skills or technologies used",
            list: true
          },
          {
            type: "string",
            name: "type",
            label: "Experience Type",
            description: "Categorize this experience (e.g., Work, Education, Volunteer)",
            options: ["Work", "Education", "Volunteer", "Award", "Other"]
          },
          {
            type: "number",
            name: "priority",
            label: "Priority",
            description: "Lower numbers appear first. Use this to manually order experiences."
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
