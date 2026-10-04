
'use strict';

/* ================================================================
   1. IMAGE DATA — 18 curated Unsplash photos across 6 categories
   ================================================================ */
const GALLERY_DATA = [
  // NATURE
  {
    id: 1,
    title: 'Misty Forest Dawn',
    category: 'nature',
    description: 'Morning mist threading through ancient pine trees in a serene forest.',
    photographer: 'Johannes Plenio',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 2,
    title: 'Golden Meadow',
    category: 'nature',
    description: 'Sunlight kissing a field of tall golden grass at sunset.',
    photographer: 'Ales Krivec',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 3,
    title: 'Cascading Waterfall',
    category: 'nature',
    description: 'A hidden waterfall tumbling over mossy rocks in a lush rainforest.',
    photographer: 'John Towner',
    src: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=95',
  },

  // TECHNOLOGY
  {
    id: 4,
    title: 'Circuit Cosmos',
    category: 'technology',
    description: 'A macro view of a printed circuit board glowing with electric energy.',
    photographer: 'Laura Ockel',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 5,
    title: 'Code in the Dark',
    category: 'technology',
    description: 'Lines of code glowing on a dark screen — the essence of digital creation.',
    photographer: 'Markus Spiske',
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 6,
    title: 'Neural Network Vision',
    category: 'technology',
    description: 'Abstract visualization of a deep learning neural network in action.',
    photographer: 'Uriel SC',
    src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1920&q=95',
  },

  // TRAVEL
  {
    id: 7,
    title: 'Santorini Blue Domes',
    category: 'travel',
    description: 'The iconic white-and-blue architecture of Oia overlooking the Aegean Sea.',
    photographer: 'Arthur Yeti',
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 8,
    title: 'Desert Dunes at Dusk',
    category: 'travel',
    description: 'Endless rippling sand dunes bathed in the warm tones of a Saharan sunset.',
    photographer: 'Wolfgang Hasselmann',
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 9,
    title: 'Tokyo Night Lights',
    category: 'travel',
    description: 'Neon-lit crossings and electric energy pulse through the heart of Tokyo.',
    photographer: 'Jezael Melgoza',
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=95',
  },

  // ANIMALS
  {
    id: 10,
    title: 'Majestic Eagle',
    category: 'animals',
    description: 'A bald eagle soaring gracefully against an open blue sky.',
    photographer: 'Mathew Schwartz',
    src: 'https://images.unsplash.com/photo-1611689342806-0863700620df?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1611689342806-0863700620df?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 11,
    title: 'Arctic Fox in Snow',
    category: 'animals',
    description: 'A pristine white arctic fox camouflaged perfectly in a winter landscape.',
    photographer: 'Jonatan Pie',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 12,
    title: 'Ocean Turtle',
    category: 'animals',
    description: 'A sea turtle gliding effortlessly through crystal clear tropical waters.',
    photographer: 'Jeremy Bishop',
    src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1920&q=95',
  },

  // ARCHITECTURE
  {
    id: 13,
    title: 'Glass Tower Reflections',
    category: 'architecture',
    description: 'Sky-high glass skyscrapers reflecting clouds in a downtown financial district.',
    photographer: 'Rodrigo Kugnharski',
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 14,
    title: 'Ancient Roman Arches',
    category: 'architecture',
    description: 'Timeless stone arches of the Roman Colosseum standing tall against the sky.',
    photographer: 'David Köhler',
    src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 15,
    title: 'Brutalist Beauty',
    category: 'architecture',
    description: 'Bold geometric forms and raw concrete define this striking brutalist structure.',
    photographer: 'Ricardo Gomez Angel',
    src: 'https://images.unsplash.com/photo-1565117157272-3e3e0b3f6f7b?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1565117157272-3e3e0b3f6f7b?auto=format&fit=crop&w=1920&q=95',
  },

  // ABSTRACT
  {
    id: 16,
    title: 'Liquid Color Symphony',
    category: 'abstract',
    description: 'Swirling ink flows create an otherworldly palette of vivid color.',
    photographer: 'Pawel Czerwinski',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 17,
    title: 'Neon Geometry',
    category: 'abstract',
    description: 'Glowing neon lines form an intricate geometric pattern against a dark void.',
    photographer: 'Lucas Benjamin',
    src: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1920&q=95',
  },
  {
    id: 18,
    title: 'Fractal Bloom',
    category: 'abstract',
    description: 'Mathematical beauty made visible — a recursive fractal flower in full bloom.',
    photographer: 'Hal Gatewood',
    src: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1920&q=95',
  },
];

/* ================================================================
   2. APPLICATION STATE
   ================================================================ */
const state = {
  activeCategory: 'all',      // Current filter category
  searchQuery: '',             // Current search string
  showFavoritesOnly: false,   // Favorites-only filter toggle
  favorites: new Set(),        // Set of liked image IDs
  lightboxIndex: 0,            // Current image index in lightbox (within filteredImages)
  slideshowTimer: null,        // Reference to the auto-slideshow setInterval
  filteredImages: [],          // Currently shown images (after filter+search)
  isLightboxOpen: false,       // Lightbox open state
};

/* ================================================================
   3. DOM ELEMENT REFERENCES
   ================================================================ */
const DOM = {
  body: document.getElementById('app-body'),
  cursorDot: document.getElementById('cursor-dot'),
  cursorGlow: document.getElementById('cursor-glow'),
  navbar: document.getElementById('navbar'),
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),
  favToggle: document.getElementById('fav-toggle'),
  favCount: document.getElementById('fav-count'),
  searchInput: document.getElementById('search-input'),
  searchClear: document.getElementById('search-clear'),
  filterTabs: document.getElementById('filter-tabs'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  resultsCount: document.getElementById('results-count'),
  galleryGrid: document.getElementById('gallery-grid'),
  skeletonGrid: document.getElementById('skeleton-grid'),
  emptyState: document.getElementById('empty-state'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  footerYear: document.getElementById('footer-year'),

  // Lightbox
  lightbox: document.getElementById('lightbox'),
  lightboxBackdrop: document.getElementById('lightbox-backdrop'),
  lbImg: document.getElementById('lb-img'),
  lbTitle: document.getElementById('lb-title'),
  lbCategory: document.getElementById('lb-category'),
  lbDescription: document.getElementById('lb-description'),
  lbCounter: document.getElementById('lb-counter'),
  lbPrev: document.getElementById('lb-prev'),
  lbNext: document.getElementById('lb-next'),
  lbCloseBtn: document.getElementById('lb-close-btn'),
  lbFavBtn: document.getElementById('lb-fav-btn'),
  lbDownloadBtn: document.getElementById('lb-download-btn'),
  lbFullscreenBtn: document.getElementById('lb-fullscreen-btn'),
  lbSlideshowBtn: document.getElementById('lb-slideshow-btn'),
  slideshowLabel: document.getElementById('slideshow-label'),
  slideshowIcon: document.getElementById('slideshow-icon'),
  lbSpinner: document.getElementById('lb-spinner'),
  lbThumbnails: document.getElementById('lb-thumbnails'),
};

/* ================================================================
   4. INITIALIZATION
   ================================================================ */
function init() {
  // Set footer year
  DOM.footerYear.textContent = new Date().getFullYear();

  // Load favorites from localStorage
  const savedFavs = localStorage.getItem('pixelvault-favorites');
  if (savedFavs) {
    JSON.parse(savedFavs).forEach(id => state.favorites.add(id));
  }

  // Set up all event listeners
  setupNavbar();
  setupThemeToggle();
  setupFavoritesToggle();
  setupSearch();
  setupFilterTabs();
  setupCursorTracker();
  setupLightboxControls();
  setupKeyboardControls();
  setupScrollReveal();

  // Simulate a brief loading skeleton, then render
  setTimeout(() => {
    DOM.skeletonGrid.style.display = 'none';
    filterAndRender();
  }, 800);
}

/* ================================================================
   5. NAVBAR — Scroll shadow
   ================================================================ */
function setupNavbar() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      DOM.navbar.classList.add('scrolled');
    } else {
      DOM.navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ================================================================
   6. THEME TOGGLE — Dark / Light Mode
   ================================================================ */
function setupThemeToggle() {
  // Restore saved preference
  const saved = localStorage.getItem('pixelvault-theme');
  if (saved === 'light') {
    DOM.body.classList.remove('dark-mode');
    DOM.body.classList.add('light-mode');
    DOM.themeIcon.textContent = '☀️';
  }

  DOM.themeToggle.addEventListener('click', () => {
    const isLight = DOM.body.classList.contains('light-mode');
    DOM.body.classList.toggle('dark-mode', isLight);
    DOM.body.classList.toggle('light-mode', !isLight);
    DOM.themeIcon.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('pixelvault-theme', isLight ? 'dark' : 'light');

    // Ripple animation on toggle
    addRipple(DOM.themeToggle);
  });
}

/* ================================================================
   7. FAVORITES TOGGLE — Show favorites only
   ================================================================ */
function setupFavoritesToggle() {
  updateFavCount();

  DOM.favToggle.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    DOM.favToggle.classList.toggle('active', state.showFavoritesOnly);
    DOM.favToggle.querySelector('span').textContent = state.showFavoritesOnly ? '♥' : '♡';
    filterAndRender();
    addRipple(DOM.favToggle);
  });
}

function updateFavCount() {
  DOM.favCount.textContent = state.favorites.size;
}

/* ================================================================
   8. SEARCH
   ================================================================ */
function setupSearch() {
  let debounceTimer;

  DOM.searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = DOM.searchInput.value.trim();
    DOM.searchClear.style.display = query ? 'block' : 'none';

    // Debounce for 220ms
    debounceTimer = setTimeout(() => {
      state.searchQuery = query.toLowerCase();
      filterAndRender();
    }, 220);
  });

  DOM.searchClear.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.searchClear.style.display = 'none';
    state.searchQuery = '';
    filterAndRender();
    DOM.searchInput.focus();
  });
}

/* ================================================================
   9. CATEGORY FILTER TABS
   ================================================================ */
function setupFilterTabs() {
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      state.activeCategory = category;

      // Update active button
      DOM.filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      addRipple(btn);
      filterAndRender();
    });
  });
}

/* ================================================================
   10. CORE: FILTER + RENDER GALLERY
   ================================================================ */
function filterAndRender() {
  // Compute filtered list
  let filtered = GALLERY_DATA.filter(img => {
    const matchesCategory =
      state.activeCategory === 'all' || img.category === state.activeCategory;

    const matchesSearch =
      !state.searchQuery ||
      img.title.toLowerCase().includes(state.searchQuery) ||
      img.category.toLowerCase().includes(state.searchQuery) ||
      img.description.toLowerCase().includes(state.searchQuery);

    const matchesFavorites =
      !state.showFavoritesOnly || state.favorites.has(img.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  });

  state.filteredImages = filtered;

  // Update count
  DOM.resultsCount.textContent = filtered.length;

  // Show/hide empty state
  if (filtered.length === 0) {
    DOM.galleryGrid.innerHTML = '';
    DOM.emptyState.style.display = 'block';
    DOM.emptyResetBtn.onclick = resetAllFilters;
    return;
  }

  DOM.emptyState.style.display = 'none';

  // Render cards
  DOM.galleryGrid.innerHTML = filtered
    .map((img, index) => buildCardHTML(img, index))
    .join('');

  // Attach card event listeners
  attachCardEvents();
}

/* ================================================================
   11. BUILD GALLERY CARD HTML
   ================================================================ */
function buildCardHTML(img, index) {
  const isLiked = state.favorites.has(img.id);
  const likeClass = isLiked ? 'liked' : '';
  const likeIcon = isLiked ? '♥' : '♡';

  return `
    <article
      class="gallery-card reveal"
      role="listitem"
      data-id="${img.id}"
      data-index="${index}"
      tabindex="0"
      aria-label="${img.title} — ${img.category}"
    >
      <div class="card-img-wrapper">
        <img
          class="card-img"
          src="${img.src}"
          alt="${img.title} — ${img.description}"
          loading="lazy"
          decoding="async"
        />
        <div class="card-overlay" aria-hidden="true">
          <span class="overlay-category">${img.category}</span>
          <p class="overlay-title">${img.title}</p>
        </div>
        <div class="card-actions" aria-hidden="true">
          <button
            class="card-action-btn like-btn ${likeClass}"
            data-id="${img.id}"
            aria-label="${isLiked ? 'Remove from favorites' : 'Add to favorites'}"
            title="${isLiked ? 'Remove favorite' : 'Add to favorites'}"
          >${likeIcon}</button>
        </div>
      </div>
      <div class="card-info">
        <span class="card-category-tag">${img.category}</span>
        <span class="card-title-text">${img.title}</span>
      </div>
    </article>
  `;
}

/* ================================================================
   12. ATTACH CARD EVENT LISTENERS
   ================================================================ */
function attachCardEvents() {
  // Open lightbox on card click
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open lightbox if like button was clicked
      if (e.target.closest('.like-btn')) return;
      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    });

    // Keyboard: Enter/Space to open
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const index = parseInt(card.dataset.index, 10);
        openLightbox(index);
      }
    });
  });

  // Like/favorite button on cards
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      toggleFavorite(id, btn);
    });
  });

  // Trigger scroll reveal for new cards
  triggerScrollReveal();
}

/* ================================================================
   13. TOGGLE FAVORITE
   ================================================================ */
function toggleFavorite(id, btnElement) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }

  // Persist
  localStorage.setItem('pixelvault-favorites', JSON.stringify([...state.favorites]));
  updateFavCount();

  // Update button appearance (card button)
  if (btnElement) {
    const isNowLiked = state.favorites.has(id);
    btnElement.classList.toggle('liked', isNowLiked);
    btnElement.textContent = isNowLiked ? '♥' : '♡';
    btnElement.setAttribute('aria-label', isNowLiked ? 'Remove from favorites' : 'Add to favorites');

    // Pop animation
    btnElement.style.transform = 'scale(1.4)';
    setTimeout(() => { btnElement.style.transform = ''; }, 200);
  }

  // Re-render if favorites-only filter is active
  if (state.showFavoritesOnly) {
    filterAndRender();
    return;
  }

  // Update lightbox fav button if lightbox is open and showing this image
  if (state.isLightboxOpen) {
    const currentImg = state.filteredImages[state.lightboxIndex];
    if (currentImg && currentImg.id === id) {
      updateLightboxFavButton(id);
    }
  }
}

/* ================================================================
   14. RESET ALL FILTERS
   ================================================================ */
function resetAllFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.showFavoritesOnly = false;

  DOM.searchInput.value = '';
  DOM.searchClear.style.display = 'none';
  DOM.favToggle.classList.remove('active');
  DOM.favToggle.querySelector('span').textContent = '♡';

  DOM.filterBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
    b.setAttribute('aria-selected', b.dataset.category === 'all' ? 'true' : 'false');
  });

  filterAndRender();
}

/* ================================================================
   15. LIGHTBOX — Open
   ================================================================ */
function openLightbox(index) {
  state.lightboxIndex = index;
  state.isLightboxOpen = true;

  DOM.lightbox.style.display = 'flex';
  DOM.lightbox.classList.remove('closing');
  document.body.style.overflow = 'hidden';

  renderLightboxSlide(index);
  renderThumbnails();

  // Focus the close button for accessibility
  setTimeout(() => DOM.lbCloseBtn.focus(), 100);
}

/* ================================================================
   16. LIGHTBOX — Render Slide
   ================================================================ */
function renderLightboxSlide(index, direction = null) {
  const img = state.filteredImages[index];
  if (!img) return;

  // Show spinner
  DOM.lbSpinner.classList.add('visible');

  // Transition effect
  DOM.lbImg.classList.add('transitioning');

  setTimeout(() => {
    // Update content
    DOM.lbTitle.textContent = img.title;
    DOM.lbCategory.textContent = img.category;
    DOM.lbDescription.textContent = `${img.description} — Photo by ${img.photographer}`;
    DOM.lbCounter.textContent = `${index + 1} / ${state.filteredImages.length}`;

    // Set image
    const tempImg = new Image();
    tempImg.onload = () => {
      DOM.lbImg.src = tempImg.src;
      DOM.lbImg.alt = img.title + ' — ' + img.description;
      DOM.lbImg.classList.remove('transitioning');
      DOM.lbSpinner.classList.remove('visible');
    };
    tempImg.onerror = () => {
      DOM.lbImg.classList.remove('transitioning');
      DOM.lbSpinner.classList.remove('visible');
    };
    tempImg.src = img.src;

    // Update favorite button
    updateLightboxFavButton(img.id);

    // Highlight active thumbnail
    updateThumbnailActive(index);

  }, 150);
}

/* ================================================================
   17. LIGHTBOX — Thumbnails
   ================================================================ */
function renderThumbnails() {
  DOM.lbThumbnails.innerHTML = state.filteredImages
    .map((img, i) => `
      <div
        class="lb-thumb ${i === state.lightboxIndex ? 'active' : ''}"
        data-index="${i}"
        role="listitem"
        title="${img.title}"
        tabindex="0"
        aria-label="Go to image ${i + 1}: ${img.title}"
      >
        <img src="${img.src}" alt="${img.title}" loading="lazy" decoding="async" />
      </div>
    `)
    .join('');

  DOM.lbThumbnails.querySelectorAll('.lb-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const i = parseInt(thumb.dataset.index, 10);
      state.lightboxIndex = i;
      renderLightboxSlide(i);
      updateThumbnailActive(i);
    });
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        thumb.click();
      }
    });
  });

  // Scroll active thumb into view
  scrollThumbIntoView(state.lightboxIndex);
}

function updateThumbnailActive(index) {
  DOM.lbThumbnails.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
  scrollThumbIntoView(index);
}

function scrollThumbIntoView(index) {
  const thumbs = DOM.lbThumbnails.querySelectorAll('.lb-thumb');
  if (thumbs[index]) {
    thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/* ================================================================
   18. LIGHTBOX — Update Fav Button
   ================================================================ */
function updateLightboxFavButton(id) {
  const isLiked = state.favorites.has(id);
  DOM.lbFavBtn.classList.toggle('liked-active', isLiked);
  DOM.lbFavBtn.textContent = isLiked ? '♥' : '♡';
  DOM.lbFavBtn.setAttribute('aria-label', isLiked ? 'Remove from favorites' : 'Add to favorites');
}

/* ================================================================
   19. LIGHTBOX — Navigation
   ================================================================ */
function lightboxNavigate(direction) {
  const total = state.filteredImages.length;
  if (total === 0) return;

  // Circular navigation
  state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
  renderLightboxSlide(state.lightboxIndex, direction);
  updateThumbnailActive(state.lightboxIndex);
}

/* ================================================================
   20. LIGHTBOX — Close
   ================================================================ */
function closeLightbox() {
  DOM.lightbox.classList.add('closing');
  stopSlideshow();

  setTimeout(() => {
    DOM.lightbox.style.display = 'none';
    DOM.lightbox.classList.remove('closing');
    document.body.style.overflow = '';
    state.isLightboxOpen = false;
  }, 250);
}

/* ================================================================
   21. SLIDESHOW — Start / Stop
   ================================================================ */
function startSlideshow() {
  state.slideshowTimer = setInterval(() => {
    lightboxNavigate(1);
  }, 3000);
  DOM.lbSlideshowBtn.classList.add('playing');
  DOM.slideshowLabel.textContent = 'Pause';
  DOM.slideshowIcon.setAttribute('points', '6 19 9 19 9 5 6 5 M 15 19 18 19 18 5 15 5');
  DOM.slideshowIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
}

function stopSlideshow() {
  if (state.slideshowTimer) {
    clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
  }
  DOM.lbSlideshowBtn.classList.remove('playing');
  DOM.slideshowLabel.textContent = 'Slideshow';
  DOM.slideshowIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
}

/* ================================================================
   22. LIGHTBOX CONTROLS — Event Listeners
   ================================================================ */
function setupLightboxControls() {
  // Prev / Next
  DOM.lbPrev.addEventListener('click', () => lightboxNavigate(-1));
  DOM.lbNext.addEventListener('click', () => lightboxNavigate(1));

  // Close
  DOM.lbCloseBtn.addEventListener('click', closeLightbox);
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);

  // Favorite
  DOM.lbFavBtn.addEventListener('click', () => {
    const currentImg = state.filteredImages[state.lightboxIndex];
    if (currentImg) {
      const cardBtn = DOM.galleryGrid.querySelector(`.like-btn[data-id="${currentImg.id}"]`);
      toggleFavorite(currentImg.id, cardBtn);
      updateLightboxFavButton(currentImg.id);
    }
  });

  // Download — opens the full-res image in a new tab
  DOM.lbDownloadBtn.addEventListener('click', () => {
    const currentImg = state.filteredImages[state.lightboxIndex];
    if (currentImg) {
      const a = document.createElement('a');
      a.href = currentImg.srcFull;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.download = currentImg.title.replace(/\s+/g, '-').toLowerCase() + '.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  });

  // Fullscreen
  DOM.lbFullscreenBtn.addEventListener('click', toggleFullscreen);

  // Slideshow toggle
  DOM.lbSlideshowBtn.addEventListener('click', () => {
    if (state.slideshowTimer) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  DOM.lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  DOM.lightbox.addEventListener('touchend', (e) => {
    const deltaX = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      lightboxNavigate(deltaX < 0 ? 1 : -1);
    }
  }, { passive: true });
}

/* ================================================================
   23. FULLSCREEN API
   ================================================================ */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    DOM.lbImg.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* ================================================================
   24. KEYBOARD CONTROLS
   ================================================================ */
function setupKeyboardControls() {
  document.addEventListener('keydown', (e) => {
    if (!state.isLightboxOpen) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        lightboxNavigate(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        lightboxNavigate(1);
        break;
      case ' ':
        e.preventDefault();
        // Space bar toggles slideshow
        state.slideshowTimer ? stopSlideshow() : startSlideshow();
        break;
    }
  });
}

/* ================================================================
   25. CUSTOM CURSOR TRACKER
   ================================================================ */
function setupCursorTracker() {
  // Only enable on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      DOM.cursorDot.style.left = mouseX + 'px';
      DOM.cursorDot.style.top  = mouseY + 'px';
    }, { passive: true });

    // Glow follows with smooth lag (rAF)
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      DOM.cursorGlow.style.left = glowX + 'px';
      DOM.cursorGlow.style.top  = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // Hover state on interactive elements
    const interactiveSelectors = 'a, button, .gallery-card, .filter-btn, .social-link, .lb-thumb';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        DOM.body.classList.add('cursor-hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        DOM.body.classList.remove('cursor-hovering');
      }
    });
  }
}

/* ================================================================
   26. SCROLL REVEAL ANIMATION
   ================================================================ */
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe future cards via MutationObserver
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  });

  mutationObserver.observe(DOM.galleryGrid, { childList: true });
}

function triggerScrollReveal() {
  // Force observe all current reveal elements
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    // Give IntersectionObserver time to notice
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    }, 50);
  });
}

/* ================================================================
   27. RIPPLE EFFECT UTILITY
   ================================================================ */
function addRipple(element) {
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.5s ease forwards;
    pointer-events: none;
    z-index: 0;
  `;
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);
}

/* ================================================================
   28. PARALLAX EFFECT — Hero section
   ================================================================ */
(function setupParallax() {
  const hero = document.querySelector('.hero');
  const orbs = document.querySelectorAll('.hero-orb');

  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 0.3;
    if (hero.contains(document.elementFromPoint(window.innerWidth / 2, 0))) {
      orbs.forEach((orb, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translateY(${scrollY * speed * dir}px)`;
      });
    }
  }, { passive: true });
})();

/* ================================================================
   29. RUN ON DOM READY
   ================================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
