import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { BlogPost } from '@/components/blog/BlogPost';
import { getBlogPosts } from '@/utils/blog';

export function BlogPostPage() {
  const { slug } = useParams();
  const posts = getBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <BlogPost post={post} />
      </div>
    </Layout>
  );
}