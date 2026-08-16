/**
 * Tabs block — Migrated from AEM: wknd/components/tabs
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length < 2) return;

  const labelsRow = rows[0];
  const panelRows = rows.slice(1);
  const labels    = [...labelsRow.children].map(c => c.textContent.trim());

  const tabList = document.createElement('div');
  tabList.setAttribute('role', 'tablist');
  tabList.className = 'tabs-list';

  const panels = [];

  labels.forEach((label, i) => {
    const tab = document.createElement('button');
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', `tab-panel-${i}`);
    tab.id = `tab-${i}`;
    tab.className = 'tabs-tab';
    tab.textContent = label;
    tab.addEventListener('click', () => activateTab(i));
    tabList.appendChild(tab);

    const panel = document.createElement('div');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${i}`);
    panel.id = `tab-panel-${i}`;
    panel.className = 'tabs-panel';
    panel.hidden = i !== 0;
    if (panelRows[i]) panel.append(...panelRows[i].childNodes);
    panels.push(panel);
  });

  function activateTab(idx) {
    tabList.querySelectorAll('[role="tab"]').forEach((t, i) => {
      t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      panels[i].hidden = i !== idx;
    });
  }

  block.textContent = '';
  block.appendChild(tabList);
  panels.forEach(p => block.appendChild(p));
}
