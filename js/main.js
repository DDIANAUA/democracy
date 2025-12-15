const e = document.querySelector('[data-js-mobile-nav-burger]'),
	t = document.querySelector('[data-js-mobile-nav-menu]'),
	s = document.body;
e.classList.remove('_active'),
	t.classList.remove('_active'),
	s.classList.remove('_lock'),
	e &&
		t &&
		(e.addEventListener('click', () => {
			e.classList.toggle('_active'), t.classList.toggle('_active'), s.classList.toggle('_lock');
			const a = e.classList.contains('_active');
			e.setAttribute('aria-expanded', a);
		}),
		t.addEventListener('click', a => {
			a.target.matches('a') &&
				(e.classList.remove('_active'),
				t.classList.remove('_active'),
				s.classList.remove('_lock'),
				e.setAttribute('aria-expanded', 'false'));
		}));
const a = document.querySelector('[data-js-breathing-label]');
function c() {
	setTimeout(() => {
		a.innerText = 'Вдих...';
	}, 0),
		setTimeout(() => {
			a.innerText = 'Тримай...';
		}, 4800),
		setTimeout(() => {
			a.innerText = 'Видих...';
		}, 7200);
}
c(), setInterval(c, 12e3);
