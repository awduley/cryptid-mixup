import PostCard from '../components/PostCard';
import { POSTS } from '../data/posts';

function NewestPosts() {
  const newest = [...POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return(
    <section id="newest-posts" className="section section--bg-dark posts" aria-labelledby="latest-heading">
      <div className="container">
        <h2 id="latest-heading" className="section__title">What's New in the Cryptid Quest Woods</h2>
        <p className="section__subtitle">New footprints on the trail—some definitely not human</p>
        <p className="section__dev-note">
          <small><strong>Build note:</strong> Dev logs, lore drops, and new releases.</small>
        </p>

        {
          newest.length > 0 ? 
          <div className="posts__grid">
            <div className="featured-post">
              <PostCard post={newest[0]} />
            </div>
            <div className="secondary-posts">
              {newest.slice(1, 3).map(p => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div> 
        :
          <div className="posts__none">
            <p>No posts yet—check back soon</p>
          </div>  
        }
      </div>
    </section>
  );
}

export default NewestPosts;