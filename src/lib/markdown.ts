import fs from 'fs';
import path from 'path';
import { BlogPost, BlogFrontMatter } from './types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

function parseFrontMatter(content: string): { data: BlogFrontMatter; content: string } {
  // Use a more flexible regex that handles different line endings
  const lines = content.split('\n');
  
  if (lines[0]?.trim() !== '---') {
    throw new Error('Invalid front matter format: must start with ---');
  }

  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]?.trim() === '---') {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    throw new Error('Invalid front matter format: missing closing ---');
  }

  const frontMatterStr = lines.slice(1, endIndex).join('\n');
  const markdownContent = lines.slice(endIndex + 1).join('\n');

  try {
    const data = parseFrontMatterString(frontMatterStr);
    return { data, content: markdownContent.trim() };
  } catch (error) {
    console.error('Error parsing front matter:', error);
    throw error;
  }
}

function parseFrontMatterString(str: string): BlogFrontMatter {
  const data: Partial<BlogFrontMatter> = {};

  const lines = str.split('\n').filter(line => line.trim());
  
  for (const line of lines) {
    if (!line.includes(':')) continue;
    
    const colonIndex = line.indexOf(':');
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Remove brackets if present (for arrays)
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1);
    }

    switch (key) {
      case 'title':
        data.title = value;
        break;
      case 'date':
        data.date = value;
        break;
      case 'excerpt':
        data.excerpt = value;
        break;
      case 'tags':
        data.tags = value
          .split(',')
          .map(tag => tag.trim().replace(/^["']|["']$/g, ''))
          .filter(tag => tag.length > 0);
        break;
    }
  }

  return {
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString().split('T')[0],
    excerpt: data.excerpt || '',
    tags: data.tags || [],
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_DIRECTORY).filter(file => file.endsWith('.md'));

  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(POSTS_DIRECTORY, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    const { data, content: markdownContent } = parseFrontMatter(content);

    return {
      slug,
      ...data,
      content: markdownContent,
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  const { data, content: markdownContent } = parseFrontMatter(content);

  return {
    slug,
    ...data,
    content: markdownContent,
  };
}

// Simple markdown to HTML converter
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headings
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>');

  // Inline code
  html = html.replace(/`([^`]*)`/g, '<code class="bg-gray-200 px-2 py-1 rounded text-sm font-mono">$1</code>');

  // Lists
  html = html.replace(/^\* (.*?)$/gm, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="list-disc">$1</ul>');

  // Paragraphs
  const lines = html.split('\n');
  let inTag = false;
  const processed = lines
    .map(line => {
      if (line.startsWith('<') || line.startsWith('</')) {
        inTag = true;
        return line;
      }
      if (line.trim() === '') {
        return line;
      }
      if (!inTag && !line.startsWith('<')) {
        return `<p class="mb-3">${line}</p>`;
      }
      return line;
    })
    .join('\n');

  return processed;
}
