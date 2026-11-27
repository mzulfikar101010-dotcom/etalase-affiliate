// Fungsi yang dipakai kedua halaman
function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function isValidLink(url) {
  try { return ['http:', 'https:'].includes(new URL(url).protocol); }
  catch { return false; }
}

function toast(message) {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.style.display = 'block';
  clearTimeout(t.timer);
  t.timer = setTimeout(() => (t.style.display = 'none'), 2500);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Cadangan untuk browser lama / browser di dalam aplikasi chat
    const area = el('textarea', { value: text });
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

async function copyWithFeedback(button, text) {
  if (!(await copyText(text))) {
    prompt('Salin manual link berikut:', text);
    return;
  }
  const label = button.dataset.label || (button.dataset.label = button.textContent);
  button.textContent = '✓ Tersalin';
  button.classList.add('done');
  clearTimeout(button.timer);
  button.timer = setTimeout(() => {
    button.textContent = label;
    button.classList.remove('done');
  }, 1800);
}

async function loadPublished() {
  const res = await fetch('data.json?t=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('data.json tidak ditemukan');
  return res.json();
}
