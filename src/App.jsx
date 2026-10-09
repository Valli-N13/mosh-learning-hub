import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import NewsletterForm from './components/NewsletterForm'
import { learningPaths } from './data/learningPaths'
import { videos } from './data/videos'
import './App.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Video Library', to: '/library' },
  { label: 'Community & Learning', to: '/learning' },
]

function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-mark">MH</span>
          <span className="brand-copy">
            <strong>Creator Community</strong>
            <small>Learn with Mosh</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href="/#newsletter" className="button nav-button">
          Join newsletter
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <strong>Creator Community</strong>
          <p>
            Unofficial concept project inspired by creator education content. It is not affiliated with,
            endorsed by, or commissioned by Mosh Hamedani or Programming with Mosh.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/library">Video Library</Link>
          <Link to="/learning">Community &amp; Learning</Link>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Creator learning • practical skills</span>
            <h1>Stop watching tutorials. Start building skills.</h1>
            <p>
              Join a focused community of aspiring developers who want clear, practical learning paths,
              hands-on projects, and smart guidance for the next step in their coding journey.
            </p>
            <div className="cta-row">
              <Link to="/library" className="button primary">
                Explore videos
              </Link>
              <a href="/#newsletter" className="button secondary">
                Join the newsletter
              </a>
            </div>
          </div>

          <div className="portrait-panel" aria-label="Styled placeholder portrait">
            <div className="portrait-card">
              <div className="portrait-placeholder">
                <span>MH</span>
              </div>
            </div>
            <div className="pulse-note">
              <strong>Learning Path</strong>
              <span>Python • JavaScript • Web • Java</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Featured tutorials</p>
          <h2>Start with the essentials</h2>
        </div>

        <div className="featured-grid">
          {videos.slice(0, 3).map((video) => (
            <article className="feature-card" key={video.id}>
              <img
                src={video.thumbnail}
                alt={video.title}
                onError={(event) => {
                  event.currentTarget.src =
                    'https://placehold.co/640x360/171A20/2878D0?text=Video+Preview'
                }}
              />
              <div className="card-body">
                <span className="tag">{video.topic}</span>
                <h3>{video.title}</h3>
                <p>{video.level} • Featured learning pick</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Learning previews</p>
          <h2>Pick a path and go deeper</h2>
        </div>

        <div className="path-preview-grid">
          {Object.keys(learningPaths).map((pathKey) => (
            <div className="path-preview" key={pathKey}>
              <span className="tag accent">{pathKey}</span>
              <h3>{pathKey}</h3>
              <ul>
                {learningPaths[pathKey].Beginner.topics.slice(0, 3).map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <Link to="/learning">View roadmap</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block newsletter-section" id="newsletter">
        <div className="section-heading narrow">
          <p className="eyebrow">Stay in the loop</p>
          <h2>Get practical learning updates</h2>
        </div>
        <NewsletterForm />
      </section>
    </>
  )
}

function VideoLibraryPage() {
  const [query, setQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const topicOptions = ['All', ...new Set(videos.map((video) => video.topic))]

  const visibleVideos = useMemo(() => {
    const cleanedQuery = query.trim().toLowerCase()

    let filtered = videos.filter((video) => {
      const matchesTopic = selectedTopic === 'All' || video.topic === selectedTopic
      const matchesSearch =
        cleanedQuery.length === 0 ||
        video.title.toLowerCase().includes(cleanedQuery) ||
        video.topic.toLowerCase().includes(cleanedQuery)

      return matchesTopic && matchesSearch
    })

    if (sortBy === 'latest') {
      filtered = [...filtered].sort((a, b) => b.featuredOrder - a.featuredOrder)
    }

    if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => a.featuredOrder - b.featuredOrder)
    }

    if (sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => a.featuredOrder - b.featuredOrder)
    }

    return filtered
  }, [query, selectedTopic, sortBy])

  return (
    <section className="container page-shell">
      <div className="section-heading page-heading">
        <div>
          <p className="eyebrow">Video Library</p>
          <h2>Find your next lesson</h2>
        </div>
        <div className="filter-count">{visibleVideos.length} videos</div>
      </div>

      <div className="controls-panel">
        <label className="search-box">
          <span className="sr-only">Search tutorials</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or topic"
          />
        </label>

        <label className="control-block">
          <span>Topic</span>
          <select value={selectedTopic} onChange={(event) => setSelectedTopic(event.target.value)}>
            {topicOptions.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>

        <label className="control-block">
          <span>Sort by</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="featured">Featured</option>
          </select>
        </label>
      </div>

      <div className="video-grid">
        {visibleVideos.length > 0 ? (
          visibleVideos.map((video) => (
            <article className="video-card" key={video.id}>
              <a href={video.url} target="_blank" rel="noreferrer" aria-label={`Open ${video.title}`}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  onError={(event) => {
                    event.currentTarget.src =
                      'https://placehold.co/640x360/171A20/2878D0?text=Video+Preview'
                  }}
                />
              </a>
              <div className="card-body">
                <span className="tag">{video.topic}</span>
                <h3>{video.title}</h3>
                <div className="meta-row">
                  <span>{video.level}</span>
                  <span>Featured</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <h3>No tutorials match your filters.</h3>
            <p>Try another keyword or switch to a broader topic filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function LearningPage() {
  const [activePath, setActivePath] = useState('Python')
  const [activeLevel, setActiveLevel] = useState('Beginner')

  const pathOptions = Object.keys(learningPaths)
  const levelOptions = ['Beginner', 'Intermediate', 'Advanced']

  const selectedPlan = learningPaths[activePath][activeLevel]

  return (
    <section className="container page-shell learning-shell">
      <div className="section-heading page-heading">
        <div>
          <p className="eyebrow">Community &amp; Learning</p>
          <h2>Choose the right roadmap</h2>
        </div>
        <Link to="/library" className="button secondary button-inline">
          Browse videos
        </Link>
      </div>

      <div className="learning-controls">
        <div className="path-tabs" role="tablist" aria-label="Learning paths">
          {pathOptions.map((path) => (
            <button
              key={path}
              type="button"
              className={path === activePath ? 'tab active' : 'tab'}
              onClick={() => setActivePath(path)}
            >
              {path}
            </button>
          ))}
        </div>

        <div className="level-toggle" aria-label="Skill level selection">
          {levelOptions.map((level) => (
            <button
              key={level}
              type="button"
              className={level === activeLevel ? 'toggle active' : 'toggle'}
              onClick={() => setActiveLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="path-detail">
        <div className="path-summary">
          <span className="tag accent">{activePath}</span>
          <h3>{selectedPlan.headline}</h3>
          <p>{selectedPlan.summary}</p>
        </div>

        <div className="resource-grid">
          <div className="resource-panel">
            <h4>Topics to learn</h4>
            <ul>
              {selectedPlan.topics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="resource-panel">
            <h4>Project ideas</h4>
            <ul>
              {selectedPlan.projects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="resource-panel full-width">
          <h4>Helpful resources</h4>
          <div className="resource-links">
            {selectedPlan.resources.map((resource) => (
              <a href={resource.href} target="_blank" rel="noreferrer" key={resource.label}>
                {resource.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="newsletter-callout">
        <h3>Keep learning with new tutorials and project ideas.</h3>
        <a href="/#newsletter" className="button primary">
          Join the newsletter
        </a>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<VideoLibraryPage />} />
            <Route path="/learning" element={<LearningPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
