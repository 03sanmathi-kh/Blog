function filterCards(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.blog-card');

  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function searchCards(query) {
  const cards = document.querySelectorAll('.blog-card');
  let found = 0;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();

    if (text.includes(query.toLowerCase())) {
      card.style.display = 'block';
      found++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('noResults').style.display =
    found === 0 ? 'block' : 'none';
}

function toggleContent(btn) {
  const extra = btn.parentElement.parentElement.querySelector('.extra-content');

  if (extra.style.display === 'none' || extra.style.display === '') {
    extra.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    extra.style.display = 'none';
    btn.textContent = 'Read More';
  }
}
