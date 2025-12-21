import PostCard from '../components/PostCard';
import { POSTS } from '../data/posts';

function NewestPosts() {
  const newest = [...POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6)

  return(
    <section id="newest-posts" className="posts" aria-labelledby="latest-heading">
      <h2 id="latest-heading">What’s New in the Cryptid Quest Woods</h2>
      <p><small>Dev logs, lore drops, and new releases.</small></p>

      <div className="posts__grid">
        {newest.map(p => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}

export default NewestPosts;