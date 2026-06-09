// ========================================
// DATAFORGE - MAIN APPLICATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeChapters();
    initializeEvents();
    initializeFilters();
    initializeScrollEffects();
});

// Render chapter cards
function initializeChapters() {
    const chaptersGrid = document.getElementById('chapters-grid');
    if (!chaptersGrid) return;

    chaptersGrid.innerHTML = DATAFORGE_CMS.chapters.map(chapter => `
        <div class="chapter-card" data-chapter="${chapter.id}">
            <div class="chapter-number">${chapter.number}</div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="chapter-desc">${chapter.description}</p>
            <div class="chapter-events">
                ${chapter.events.map(event => `<span class="event-tag">${event}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render event cards
function initializeEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    renderEvents(DATAFORGE_CMS.events);
}

function renderEvents(events) {
    const eventsGrid = document.getElementById('events-grid');
    
    eventsGrid.innerHTML = events.map(event => `
        <div class="event-card" data-mode="${event.mode}" data-chapter="${event.chapter}">
            <div class="event-header">
                <div class="event-meta">
                    <span class="event-chapter">${event.chapterLabel}</span>
                    <span class="event-mode ${event.mode}">${event.mode}</span>
                </div>
                <h3 class="event-name">${event.name}</h3>
                <p class="event-tagline">${event.tagline}</p>
            </div>
            <div class="event-body">
                <p class="event-description">${event.description}</p>
                <a href="${event.link}" class="event-cta">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
}

// Filter functionality
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            const filter = this.dataset.filter;
            let filteredEvents;
            
            if (filter === 'all') {
                filteredEvents = DATAFORGE_CMS.events;
            } else {
                filteredEvents = DATAFORGE_CMS.events.filter(event => event.mode === filter);
            }
            
            renderEvents(filteredEvents);
        });
    });
}

// Smooth scroll and animations
function initializeScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards after they're rendered
    setTimeout(() => {
        document.querySelectorAll('.chapter-card, .event-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}
