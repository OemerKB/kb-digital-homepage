import type { BlogPost } from '@/types/blog';

// Mock blog posts since we can't access filesystem directly in the browser
export function getBlogPosts(): BlogPost[] {
  return [
    {
      slug: 'ki-webdesign',
      frontmatter: {
        title: 'Die Zukunft des Webdesigns: KI-gestützte Layouts',
        date: '2024-03-15',
        tags: ['Design', 'KI', 'Innovation'],
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80'
      },
      content: `# Die Zukunft des Webdesigns: KI-gestützte Layouts 🤖

Künstliche Intelligenz revolutioniert die Art und Weise, wie wir Websites gestalten und personalisieren. In diesem Artikel erkunden wir die neuesten Entwicklungen und Möglichkeiten.`,
      excerpt: 'Künstliche Intelligenz revolutioniert die Art und Weise, wie wir Websites gestalten und personalisieren...',
      readingTime: 5
    },
    {
      slug: 'mobile-first',
      frontmatter: {
        title: 'Mobile First: Der ultimative Guide 2024',
        date: '2024-03-14',
        tags: ['Mobile', 'UX', 'Design'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
      },
      content: `# Mobile First: Der ultimative Guide 2024 📱

In einer zunehmend mobilen Welt ist der "Mobile First"-Ansatz wichtiger denn je. Dieser Guide zeigt dir, wie du mobile Optimierung richtig umsetzt.`,
      excerpt: 'In einer zunehmend mobilen Welt ist der "Mobile First"-Ansatz wichtiger denn je...',
      readingTime: 4
    },
    {
      slug: 'chatgpt-kundenservice',
      frontmatter: {
        title: 'ChatGPT im Kundenservice: Ein Praxisguide',
        date: '2024-03-12',
        tags: ['KI', 'Kundenservice', 'Automation'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80'
      },
      content: `# ChatGPT im Kundenservice: Ein Praxisguide 🎯

Die Integration von ChatGPT in den Kundenservice bietet enorme Möglichkeiten zur Effizienzsteigerung und Kundenzufriedenheit.`,
      excerpt: 'Die Integration von ChatGPT in den Kundenservice bietet enorme Möglichkeiten...',
      readingTime: 6
    }
  ];
}