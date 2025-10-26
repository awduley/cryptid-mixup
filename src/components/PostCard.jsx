import React from 'react';

function PostCard({ post }) {
  return(
    <article className="post-card">
      <a href={`/blog${post.slug}`} className="post-card__media">
        <img 
          src={post.cover} 
          alt="" 
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
        />
      </a>

      <section id="post-card" className="post-card__meta">
        <span className="post-card__cat">{post.category}</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
        </time>
        <span aria-hidden="true">•</span>
        <span>{post.minutes} min read</span>
      </section>

      <h3 className="post-card__title">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h3>

      <p className="post-card__excerpt">{post.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="post-card__more">Read more</a>
    </article>
  );
}

export default PostCard;