/**
 * Main JavaScript — Portfolio Site
 * Lightweight, no dependencies, progressive enhancement
 */

(() => {
  'use strict';

  // ==========================================================================
  // DOM Ready
  // ==========================================================================
  const ready = (fn) => {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  const initMobileNav = () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });

    // Close on link click
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('is-open') &&
          !menu.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  };

  // ==========================================================================
  // Theme Toggle (Dark/Light/System)
  // ==========================================================================
  const initThemeToggle = () => {
    const html = document.documentElement;
    const STORAGE_KEY = 'theme-preference';

    // Get initial theme
    const getInitialTheme = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (theme) => {
      html.setAttribute('data-theme', theme);
      localStorage.setItem(STORAGE_KEY, theme);
    };

    // Apply immediately to prevent flash
    applyTheme(getInitialTheme());

    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });

    // Expose for manual toggle if needed
    window.setTheme = (theme) => applyTheme(theme);
  };

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          target.focus({ preventScroll: true });
        }
      });
    });
  };

  // ==========================================================================
  // Intersection Observer for Scroll Animations
  // ==========================================================================
  const initScrollAnimations = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  };

  // ==========================================================================
  // Active Nav Link Highlighting
  // ==========================================================================
  const initActiveNav = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
        link.setAttribute('aria-current', 'page');
        link.style.color = 'var(--color-accent)';
      }
    });
  };

  // ==========================================================================
  // Copy Code Button
  // ==========================================================================
  const initCodeCopy = () => {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.copy-btn')) return;

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;
      btn.style.cssText = `
        position: absolute;
        top: var(--space-3);
        right: var(--space-3);
        padding: var(--space-2);
        background: var(--color-bg-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        color: var(--color-text-muted);
        cursor: pointer;
        opacity: 0;
        transition: all var(--transition-fast);
        z-index: 1;
      `;

      pre.style.position = 'relative';
      pre.appendChild(btn);

      pre.addEventListener('mouseenter', () => btn.style.opacity = '1');
      pre.addEventListener('mouseleave', () => btn.style.opacity = '0');

      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        if (!code) return;

        try {
          await navigator.clipboard.writeText(code.textContent);
          btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `;
          btn.style.color = 'var(--color-success)';
          setTimeout(() => {
            btn.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `;
            btn.style.color = '';
          }, 2000);
        } catch (err) {
          console.error('Copy failed:', err);
        }
      });
    });
  };

  // ==========================================================================
  // Form Enhancement (Contact Form)
  // ==========================================================================
  const initForms = () => {
    const forms = document.querySelectorAll('form[data-ajax]');

    // Check for success query param on page load
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
      const successEl = document.getElementById('form-success');
      if (successEl) {
        successEl.style.display = 'block';
      }
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    forms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn?.textContent;
        const formData = new FormData(form);

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }

        try {
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            form.reset();
            const successEl = document.getElementById('form-success');
            if (successEl) {
              successEl.style.display = 'block';
            } else {
              showToast('Message sent successfully!', 'success');
            }
          } else {
            throw new Error('Form submission failed');
          }
        } catch (err) {
          showToast('Failed to send message. Please try again.', 'error');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }
      });
    });
  };

  // ==========================================================================
  // Toast Notifications
  // ==========================================================================
  const showToast = (message, type = 'info') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      padding: var(--space-4) var(--space-6);
      background: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-xl);
      z-index: var(--z-toast);
      animation: slide-in 0.3s ease-out;
      max-width: 400px;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in {
        from { opacity: 0; transform: translateX(100%); }
        to { opacity: 1; transform: translateX(0); }
      }
      .toast-success { border-left: 4px solid var(--color-success); }
      .toast-error { border-left: 4px solid var(--color-error); }
      .toast-info { border-left: 4px solid var(--color-accent); }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slide-in 0.3s ease-out reverse';
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  };

  // ==========================================================================
  // Lazy Load Images
  // ==========================================================================
  const initLazyImages = () => {
    if ('loading' in HTMLImageElement.prototype) return; // Native lazy loading

    const images = document.querySelectorAll('img[loading="lazy"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => observer.observe(img));
  };

  // ==========================================================================
  // Initialize All
  // ==========================================================================
  ready(() => {
    initMobileNav();
    initThemeToggle();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNav();
    initCodeCopy();
    initForms();
    initLazyImages();

    // Announce page load for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.cssText = 'position: absolute; left: -9999px;';
    announcement.textContent = 'Page loaded';
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  });
})();